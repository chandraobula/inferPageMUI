import React, { useState, useEffect, useRef } from "react";
import axios from "../api/axios";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import Logo from "../component/Images/logo.svg";
import "../component/styles/Register.css";
import GoogleIcon from "@mui/icons-material/Google";
// import { useDispatch } from "react-redux";
// import { fetchUser } from "../component/redux/Actions/actions";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_REGEX = /^[0-9]{10}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = "/register";
const LOGIN_URL = "/login";

const Register1 = () => {
  const userRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  //const dispatch = useDispatch();

  const [showLogin, setShowLogin] = useState(false);

  const [username, setUserName] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [phonenum, setPhoneNum] = useState("");
  const [validMobile, setValidMobile] = useState(false);
  const [mobileFocus, setMobileFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  //const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   //useRef.current.focus();
  //   dispatch(fetchUser());
  // }, [dispatch]);
  // console.log("control here");
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    mobileRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidMobile(MOBILE_REGEX.test(phonenum));
  }, [phonenum]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [username, email, phonenum, pwd, matchPwd]);

  const handleRegister = async (e) => {
    e.preventDefault();

    //if js button enabled with js hack any one can use the data so to avoid we use prevent, after meeting the valid criteria only it submitts

    const v1 = USER_REGEX.test(username);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EMAIL_REGEX.test(email);
    const v4 = MOBILE_REGEX.test(phonenum);
    if (!v3 || !v4 || !v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    const userData = { username, email, phonenum, password: pwd };
    console.log(userData);
    try {
      const response = await axios.post(REGISTER_URL, userData);
      console.log(response);
      sessionStorage.setItem("userId", response.data.userId);
      sessionStorage.setItem("access_token", response.data.access_token);
      sessionStorage.setItem("refresh_token", response.data.refresh_token);
      //console.log(response.data);
      //console.log(response.accessToken);
      console.log(userData);
      setShowLogin(true);
      navigate("/home");

      // clear input fields set the state back to empty state
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        //console.error(err);
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  const handleLogin = async (e, retry = false) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL, { email, password: pwd });
      const userData = response.data;
      console.log(response);
      sessionStorage.setItem("userId", response.data.userId);
      sessionStorage.setItem("access_token", response.data.access_token);
      sessionStorage.setItem("refresh_token", response.data.refresh_token);
      if (userData) {
        navigate("/home");
      } else {
        setErrMsg("Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.log("Login failed:", err);
      setErrMsg("Login Failed");
      errRef.current.focus();

      if (retry) {
        setTimeout(() => handleLogin(e), 2000);
      }
    }
    // setTimeout(() => {
    //   (async () => await handleLogin())();
    // }, 2000);
  };

  return (
    <>
      <Box sx={{ float: "right" }} padding={1}>
        <img src={Logo} alt="logo"></img>
      </Box>
      <div className="top" style={{ marginTop: 60 }}>
        <div className="container">
          <div className="heading">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>

            {showLogin ? (
              <>
                <Typography
                  component="h6"
                  variant="h6"
                  fontSize={"40px"}
                  fontWeight={700}
                  textAlign={"center"}
                >
                  Sign in
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(167, 167, 167, 1)" }}
                  textAlign={"center"}
                >
                  Please enter your credentials
                </Typography>
                <form onSubmit={handleLogin}>
                  <div className="email-div">
                    <label htmlFor="email" className="label">
                      Email:
                    </label>
                    <div className="input-container">
                      <TextField
                        type="text"
                        id="email"
                        ref={emailRef}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                      />
                    </div>
                  </div>
                  <div className="password-div">
                    <label htmlFor="password" className="label">
                      Password:
                    </label>
                    <div className="input-container">
                      <TextField
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                      />
                    </div>
                  </div>

                  <button className="button" fullWidth>
                    Login
                  </button>
                </form>

                <Button
                  sx={{
                    mt: 2,
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid #CBCBCB",
                  }}
                  fullWidth
                  startIcon={<GoogleIcon style={{ color: "black" }} />}
                >
                  Sign in with Google
                </Button>
                <p></p>
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  New user? please
                  <u
                    style={{ cursor: "pointer", color: "blue" }}
                    onClick={(e) => setShowLogin(false)}
                  >
                    SignUp
                  </u>
                </Typography>
              </>
            ) : (
              <>
                <Typography
                  component="h6"
                  variant="h6"
                  fontSize={"40px"}
                  fontWeight={700}
                  textAlign={"center"}
                >
                  Sign Up
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(167, 167, 167, 1)" }}
                  textAlign={"center"}
                >
                  Welcome to infer
                </Typography>
                <form onSubmit={handleRegister}>
                  <div className="username-div">
                    <label htmlFor="username" className="label">
                      Username:
                    </label>
                    <div className="input-container">
                      <TextField
                        className="textfield"
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUserName(e.target.value)}
                        value={username}
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                      />
                      <div className="icon-container">
                        <CheckCircleIcon
                          className={validName ? "valid" : "hide"}
                        />
                        <ErrorIcon
                          className={
                            validName || !username ? "hide" : "invalid"
                          }
                        />
                      </div>
                    </div>
                    <p
                      id="uidnote"
                      className={
                        userFocus && username && !validName
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Must begin with a letter.
                      <br />
                    </p>
                  </div>
                  <div className="email-div">
                    <label htmlFor="email" className="label">
                      Email:
                    </label>
                    <div className="input-container">
                      <TextField
                        type="text"
                        id="email"
                        ref={emailRef}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby="umailnote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      />
                      <div className="icon-container">
                        <CheckCircleIcon
                          className={validEmail ? "valid" : "hide"}
                        />
                        <ErrorIcon
                          className={validEmail || !email ? "hide" : "invalid"}
                        />
                      </div>
                    </div>
                    <p
                      id="umailnote"
                      className={
                        emailFocus && email && !validEmail
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Must include @ and .com and lowercase Letters
                      <br />
                    </p>
                  </div>
                  <div className="mobile-div">
                    <label htmlFor="mobile" className="label">
                      Mobile:
                    </label>
                    <div className="input-container">
                      <TextField
                        type="text"
                        id="mobile"
                        ref={mobileRef}
                        autoComplete="off"
                        onChange={(e) => setPhoneNum(e.target.value)}
                        value={phonenum}
                        required
                        aria-invalid={validMobile ? "false" : "true"}
                        aria-describedby="umobilenote"
                        onFocus={() => setMobileFocus(true)}
                        onBlur={() => setMobileFocus(false)}
                      />
                      <div className="icon-container">
                        <CheckCircleIcon
                          className={validMobile ? "valid" : "hide"}
                        />
                        <ErrorIcon
                          className={
                            validMobile || !phonenum ? "hide" : "invalid"
                          }
                        />
                      </div>
                    </div>
                    <p
                      id="umobilenote"
                      className={
                        mobileFocus && phonenum && !validMobile
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Must have 10 digits.
                      <br />
                    </p>
                  </div>

                  <div className="password-div">
                    <label htmlFor="password" className="label">
                      Password:
                    </label>
                    <div className="input-container">
                      <TextField
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                      />
                      <div className="icon-container">
                        <CheckCircleIcon
                          className={validPwd ? "valid" : "hide"}
                        />
                        <ErrorIcon
                          className={validPwd || !pwd ? "hide" : "invalid"}
                        />
                      </div>
                    </div>
                    <p
                      id="pwdnote"
                      className={
                        pwdFocus && !validPwd ? "instructions" : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      8 to 24 characters.
                      <br />
                      Must include uppercase and lowercase letters,
                      <br /> a number and a special character.
                      <br />
                      Allowed special characters:{" "}
                      <span aria-label="exclamation mark">!</span>{" "}
                      <span aria-label="at symbol">@</span>{" "}
                      <span aria-label="hashtag">#</span>{" "}
                      <span aria-label="dollar sign">$</span>{" "}
                      <span aria-label="percent">%</span>
                    </p>
                  </div>

                  <div className="confirm-div">
                    <label htmlFor="confirm_pwd" className="label">
                      Confirm Password:
                    </label>
                    <div className="input-container">
                      <TextField
                        type="password"
                        id="confirm_pwd"
                        autoComplete="new-password"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        value={matchPwd}
                        required
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                      />
                      <div className="icon-container">
                        <CheckCircleIcon
                          className={validMatch && matchPwd ? "valid" : "hide"}
                        />
                        <ErrorIcon
                          className={
                            validMatch || !matchPwd ? "hide" : "invalid"
                          }
                        />
                      </div>
                    </div>
                    <p
                      id="confirmnote"
                      className={
                        matchFocus && !validMatch ? "instructions" : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Must match the first password input field.
                    </p>
                  </div>
                  <div className="button-div">
                    <button
                      className="button"
                      disabled={
                        !validName || !validPwd || !validMatch ? true : false
                      }
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <Typography variant="subtitle1">
                  Already a member? Please
                  <u
                    style={{
                      cursor: "pointer",
                      color: "blue",
                      textDecoration: "underlined",
                    }}
                    onClick={(e) => setShowLogin(true)}
                  >
                    Login
                  </u>
                </Typography>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register1;

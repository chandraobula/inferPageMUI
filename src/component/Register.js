import React from "react";
import { Typography, TextField } from "@mui/material";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import InfoIcon from '@mui/icons-material/Info';

import { useRef,useState,useEffect} from "react";
import axios from "../api/axios";
//import { faCheck,faTimes,faInfoCircle } from "@fortawesome/free-solid-svg-icons";
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import { FontAwesomeIcon } from "@fortawesome/free-solid-svg-icons";
//import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_REGEX = /^[0-9]{10}$/;
const REGISTER_URL = '/register';

const Register = () => {
    const userRef = useRef();
    const emailRef = useRef();
    const mobileRef =  useRef();
    const errRef = useRef();

    const [user,setUser] = useState('');
    const [validName,setValidName] =useState(false);
    const [userFocus,setUserFocus] = useState(false);

    const [email,setEmail] = useState('');
    const [validEmail,setValidEmail] =useState(false);
    const [emailFocus,setEmailFocus] = useState(false);

    const [mobile,setMobile] = useState('');
    const [validMobile,setValidMobile] =useState(false);
    const [mobileFocus,setMobileFocus] = useState(false);

    const [password,setPassword] = useState('');
    const [validPassword,setValidPassword] =useState(false);
    const [passwordFocus,setPasswordFocus] = useState(false);

    const [matchPwd,setMatchPwd] = useState('');
    const [validMatch,setValidMatch] =useState(false);
    const [matchFocus,setMatchFocus] = useState(false);

    const [errMsg,setErrMsg] = useState('');
    const [success,setSuccess] = useState(false);
    
    useEffect(() => {
        useRef.current.focus();
    },[])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    },[user])
    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
    },[email])
    useEffect(() => {
        const result = MOBILE_REGEX.test(mobile);
        console.log(result);
        console.log(mobile);
        setValidMobile(result);
    },[mobile])
    useEffect(() => {
        const result = PWD_REGEX.test(password);
        console.log(result);
        console.log(password);
        setValidPassword(result);
        const match = password === matchPwd;
        setValidMatch(match);
    },[password,matchPwd])
    
    useEffect(()=>{
        setErrMsg('');
    },[user,email,mobile,password,matchPwd])

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(password);
        if(!v1 ||  !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try{
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({user,email,mobile,password}),{
                    headers: {'Content-Type':'application/json'},
                    withCredentials:true
                }
                );
                console.log(response.data);
                console.log(response.accessToken);
                console.log(JSON.stringify(response))
                setSuccess(true)

            //clear input fields

        }catch(err){
            if(!err?.response){
                setErrMsg('no server Response')
            }else if(err.response?.status === 409){
                setErrMsg('Username Taken');
            }else{
                errRef.current.focus();
            }
        }
    }
   return (
    <>
    {success ? (
        <section>
            <h1>Success</h1>
            <p>
                <a href="Login.js">Sign In</a>
            </p>
        </section>
    ) : (
    <section>
        <p ref={errRef} className={errRef ? "errmsg" :
            "offscreen"} aria-live="assertive">{errMsg}</p>
            <Typography>Sign Up</Typography>
            <Typography>Welcome to infer</Typography>
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="username">
                    Username:
                    <span className={validName ? "valid" : "hide"}>
                        <CheckOutlinedIcon/>
                    </span>
                    <span className={validName || !user ? "hide" :
                        "invalid"}>
                        <ClearOutlinedIcon/>
                    </span>
                </label>
                <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={()=> setUserFocus(true)}
                onBlur={()=> setUserFocus(false)}
                />
                <p id="uidnote" className={userFocus && user && 
                !validName ? "instructions" : "offscreen"}>
                    <CheckOutlinedIcon/>
                    4 to 24 characters.<br/>
                    Must begin with a letter.<br/>
                    Letters,numbers,underscores,hyphens allowed.
                </p>

               
               
                <label htmlFor="Email">
                    Email:
                    <span className={validEmail ? "valid" : "hide"}>
                        <CheckOutlinedIcon/>
                    </span>
                    <span className={validEmail || !email ? "hide" :
                        "invalid"}>
                        <ClearOutlinedIcon/>
                    </span>
                </label>
                <input
                type="email"
                id="email"
                ref={emailRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="umailnote"
                onFocus={()=> setEmailFocus(true)}
                onBlur={()=> setEmailFocus(false)}
                />
                <p id="umailnote" className={emailFocus && email && 
                !validEmail ? "instructions" : "offscreen"}>
                    <InfoIcon/>
                    Must include @ and .com<br/>
                    Do not include UpperCase Letters.<br/>
                </p>
               

                <label htmlFor="Mobile">
                    Email:
                    <span className={validMobile ? "valid" : "hide"}>
                        <CheckOutlinedIcon/>
                    </span>
                    <span className={validMobile || !email ? "hide" :
                        "invalid"}>
                        <ClearOutlinedIcon/>
                    </span>
                </label>
                <input
                type="text"
                id="mobile"
                ref={mobileRef}
                autoComplete="off"
                onChange={(e) => setMobile(e.target.value)}
                required
                aria-invalid={validMobile ? "false" : "true"}
                aria-describedby="umobilenote"
                onFocus={()=> setMobileFocus(true)}
                onBlur={()=> setMobileFocus(false)}
                />
                <p id="umobilenote" className={mobileFocus && mobile && 
                !validMobile ? "instructions" : "offscreen"}>
                    <InfoIcon/>
                  Must have 10 digits.<br/>
                </p>

                <label htmlFor="password">
                    Password:
                    <span className={validPassword ? "valid" : "hide"}>
                        <CheckOutlinedIcon/>
                    </span>
                    <span className={validPassword || !password ? "hide" :
                        "invalid"}>
                        <ClearOutlinedIcon/>
                    </span>
                </label>
                <input
                type="password"
                id="passord"
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-invalid={validPassword? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={()=> setPasswordFocus(true)}
                onBlur={()=> setPasswordFocus(false)}
                />
                <p id="passwordnote" className={passwordFocus &&  
                !validPassword ? "instructions" : "offscreen"}>
                    <InfoIcon/>
                    8 to 24 characters .<br/>
                    Must include uppercase and lowercase letters, a number and special characters.<br/>
                    Allowed special characters:<span aria-label="exclamation mark">!</span>
                    <span aria-label="at symbol">@</span><span aria-label="hashtag">#</span>
                    <span aria-label="dollar sign">$</span><span aria-label="Percentage">%</span>
                </p>
                
                <label htmlFor="confirm_password">
                    confirm password:
                    <span className={validMatch && matchPwd ? "valid" : "hide"}>
                        <CheckOutlinedIcon/>
                    </span>
                    <span className={validMatch || !matchPwd ? "hide" :
                        "invalid"}>
                        <ClearOutlinedIcon/>
                    </span>
                </label>
                    <TextField
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                required
                aria-invalid={validMatch? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={()=> setMatchFocus(true)}
                onBlur={()=> setMatchFocus(false)}
                />
                 <p id="confirmnote" className={matchFocus && validMatch ? "instructions" : "offscreen"}>
                    <InfoIcon/>
                   Must match the first password input field.
                </p>
                <button disabled={!validName || !validPassword || !validMatch ? true : false}> Sign up</button>
                
            </form>
            <p>
                Already registered?<br/>
                <span className="line">
                    <a href="Login.js">Sign In

                    </a>
                </span>
            </p>
    </section>
    )}
    </>
  )
};

export default Register;

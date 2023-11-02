import { useRef,useState,useEffect} from "react";
import { faCheck,faTimes,faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_REGEX = /^[0-9]{10}$/;
import React from "react";

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user,setUser] = useState('');
    const [validName,setValidName] =useState(false);
    const [userFocus,setUserFocus] = useState(false);

    const [email,setEmail] = useState('');
    const [validEmail,setValidEmail] =useState(false);
    const [emilFocus,setEmailFocus] = useState(false);

    const [mobile,setMobile] = useState('');
    const [validMobile,setValidMobile] =useState(false);
    const [mobileFocus,setMobileFocus] = useState(false);

    const [password,setPassword] = useState('');
    const [validPassword,setValidPassword] =useState(false);
    const [passowrdFocus,setPasswordFocus] = useState(false);

    const [matchPwd,setMatchPwd] = useState('');
    const [validMatch,setValidMatch] =useState(false);
    const [userFocus,setUserFocus] = useState(false);

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
    })
   return (
    <div>

    </div>
  )
};

export default Register;

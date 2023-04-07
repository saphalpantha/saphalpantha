
import { use, useState } from 'react';
import classes from './Form.module.css'
import {emailjs} from  '@emailjs/browser'

const Form = () => {
    
  const errorData = {nameError:"Name field must contain atleast 6 characters", emailError:"please enter valid email address", messageError:"Your Message must be greater than 5 characters"}
  
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredMessage, setEnteredMessage] = useState('') 
  const [isNameValid, setNameValid] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  const [isMessageValid, setMessageValid] = useState(false);
  const [nameerror, setNameError] = useState(errorData.nameError);
  const [emailerror, setEmailError] = useState(errorData.emailError);
  const [messageerror, setMessageError] = useState(errorData.messageError);
  


  useState(() => {
    setMessageError('')
    setEmailError('')
    setNameError('')
  },[isEmailValid, isNameValid, isMessageValid])
  const emailHandler = (event) => {
    setEnteredEmail(event.target.value)
    if( enteredEmail.includes('@')){
      setEmailValid(true)
    }
    else{
      setEmailValid(false)
    }
  }
  
  console.log(emailjs);
  const nameHandler = (event) =>  {

    setEnteredName(event.target.value)
    if(enteredName.length > 5){
      setNameValid(true)
    }
    else{
      setNameValid(false)
    }
  }

  const messageHandler = (event) => {
    setEnteredMessage(event.target.value)
    if(enteredMessage.length > 5){
      setMessageValid(true)
    }
    else{
      setMessageValid(false)
    }
  }

  
  const submitHandler = (event) => {
    event.preventDefault()
    const userEntered = {
      username:enteredName,
      email:enteredEmail,
      message:enteredMessage,
    }
    
    
    setEnteredEmail('');
    setEnteredMessage('');
    setEnteredName('');
  }
  

  // function Hello(){
  //   return a+b;
  // }




  const sendToEmailHandler = () => {
    const data = {
      name:enteredName,
      eamil:enteredEmail,
      msg:enteredMessage,
    }
  }


  const namefocusChangeHandler = (event) => {
    if(event.target.value.length <= 5){
      setNameError(errorData.nameError)
      setNameValid(false)
      
    }
    setNameValid(true)
  }
  const emailfocusChangeHandler = (event) => {
    if(event.target.value.length <= 5){
      setEmailError(errorData.emailError)
      setEmailValid(false)
      
    }
    
    setEmailValid(true)

  }
  const messagefocusChangeHandler = (event) => {
    if(event.target.value.length <= 5){
      // console.log('focused');
      setMessageError(errorData.messageError)
      setMessageValid(false);
    }
    setMessageValid(true)
  }



  


  const isValid = isNameValid && isEmailValid && isMessageValid
  return(
    <div className={classes.formcontain}>
      <h3>Contact form</h3>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.nameput}>
            <div className={classes.errordiv}>
            <input type="text" placeholder={"Full Name" } onChange={nameHandler} value={enteredName} className={`${isNameValid ?  classes.colorgreen : classes.colorred}` } onFocus={namefocusChangeHandler}/>
            {!isNameValid && <span>{nameerror}</span>}
            </div>
            <div className={classes.errordiv}>
            <input type="email" placeholder="Email address" onChange={emailHandler} value={enteredEmail} className={`${isEmailValid ?  classes.colorgreen : classes.colorred}`} onFocus={emailfocusChangeHandler}/>
            {!isEmailValid && <span>{emailerror}</span>}
            </div>
          </div>
          <div className={classes.textcontent} >
            <textarea placeholder='Your Message' onChange={messageHandler} value={enteredMessage} className={`${isMessageValid ?  classes.colorgreen : classes.colorred}`} onFocus={messagefocusChangeHandler} ></textarea> 
            {!isMessageValid && <span>{messageerror}</span>}
          </div>
{         <div className={classes.button}>
            <button  className={`${classes.button}`} disabled={!isValid} onClick={sendToEmailHandler}>
              send Message
            </button>
          </div>}
        </form>
  </div>   
    )
}


export default Form;
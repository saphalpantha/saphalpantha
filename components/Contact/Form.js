import { use, useState } from 'react';
import classes from './Form.module.css'
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
  const emailHandler = (event) => {
    setEnteredEmail(event.target.value)
    if((event.target.value.length > 5 ) && (event.target.value.includes('@'))){
      setEmailValid(true)
    }
    else{
      setEmailError(errorData.emailError)
      setEmailValid(false)
    }
  }

  const nameHandler = (event) =>  {
    setEnteredName(event.target.value)
    if(event.target.value.length > 5){
      setNameValid(true)
    }
    else{
      setNameError(errorData.nameError)
      setNameValid(false)
    }
  }

  const messageHandler = (event) => {
    setEnteredMessage(event.target.value)
    if(event.target.value.length > 5){
      setMessageValid(true)
    }
    else{
      setMessageValid(false)
      setMessageError(errorData.messageError)
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


  const namefocusChangeHandler = () => {
    setNameValid(true);
  }
  const emailfocusChangeHandler = () => {
    setEmailValid(true);
  }
  const messagefocusChangeHandler = () => {
    setMessageValid(true);
  }



  


  const isValid = isNameValid && isEmailValid && isMessageValid
  return(
    <div className={classes.formcontain}>
      <h3>Contact form</h3>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.nameput}>
            <div className={classes.errordiv}>
            <input type="text" placeholder={"Full Name" } onChange={nameHandler} value={enteredName} className={`${isNameValid ?  classes.colorgreen : classes.colorred}` } onfocus={namefocusChangeHandler}/>
            {!isNameValid && <span>{nameerror}</span>}
            </div>
            <div className={classes.errordiv}>
            <input type="email" placeholder="Email address" onChange={emailHandler} value={enteredEmail} className={`${isEmailValid ?  classes.colorgreen : classes.colorred}`} onfocus={emailfocusChangeHandler}/>
            {!isEmailValid && <span>{emailerror}</span>}
            </div>
          </div>
          <div className={classes.textcontent} >
            <textarea placeholder='Your Message' onChange={messageHandler} value={enteredMessage} className={`${isMessageValid ?  classes.colorgreen : classes.colorred}`} onfocus={messagefocusChangeHandler} ></textarea> 
            {!isMessageValid && <span>{messageerror}</span>}
          </div>
{         <div className={classes.button}>
            <button  className={`${classes.button}`} disabled={!isValid}>
              send Message
            </button>
          </div>}
        </form>
  </div>   
    )
}


export default Form;
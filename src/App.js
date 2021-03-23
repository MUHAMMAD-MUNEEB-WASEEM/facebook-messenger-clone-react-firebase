import './App.css';
import React, { useState, useEffect } from 'react'; 
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './components/Message';
import shortid from 'shortid';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

import SendIcon from '@material-ui/icons/Send';

//ICON BUTTON
// It is used to use Icon as a button
import { IconButton } from '@material-ui/core';
function App() {
  const [input, setInput] = useState('');

  //POPUP for USER
  const [username, setUserName] = useState('');

  //USEEFFECT
  //run code on condition in react(when page loads)

  //LISTENING FOR EVERY CHANGES IN FIREBASE DB
  useEffect(()=>{
    db.collection('messages1').orderBy('timestamp', 'desc').onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc => ({id:doc.id, message: doc.data()})))
    })
  }, [])

  useEffect(()=>{
    setUserName(prompt('Please Enter your Name'))
  }, [])

  //LIST OF MSGS BY STORING THEM IN STATE
  
  const [messages, setMessages] = useState([]); //MSGS WILL OBVIOUSLY IN ARRAY


  //FUNCTION FOR SENDING MSG BY CLICKING ON BUTTON
 
  const sendMessage = (e) => {
  

    //Storing msg into list
    e.preventDefault();//Stop form from refreshing

    db.collection('messages1').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput('');//After that make input field empty again
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt=""/>
      <h1>Facebook Messenger</h1>
      <h2>Welcome {username}</h2>

      <form className='app__form'>

        <FormControl className='app__formControl'>
          <Input className='app__input' placeholder='Enter a message...' value={input} onChange={(e)=>setInput(e.target.value)}/>
          
          <IconButton className='app__iconButton' disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>
            <SendIcon/>
          </IconButton>

        </FormControl>

      </form>
      {/*onclicking the above button, form tries to refresh, event.preventDefault() will stop it from doing this in sendMessage function}

      {/*messages themselves*/}
      {/*Displaying msgs}*/}

      <FlipMove>
      {
        messages.map(({id, message}) => (
          // <p key={message}>{message}</p>
          <Message username={username} message={message} key={id}/>
        ))
      }
      </FlipMove>
    </div>
  );
}

export default App;

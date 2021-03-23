import './App.css';
import React, { useState, useEffect } from 'react'; 
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './components/Message';
import shortid from 'shortid';

function App() {
  const [input, setInput] = useState('');

  //POPUP for USER
  const [username, setUserName] = useState('');

  //USEEFFECT

  useEffect(()=>{
    setUserName(prompt('Please Enter your Name'))
  }, [])

  //LIST OF MSGS BY STORING THEM IN STATE
  
  const [messages, setMessages] = useState([
    {id: '1', username: "muneeb", text:"Hi"},
    {id: '2', username: "hammad", text:"Hello"}
  ]); //MSGS WILL OBVIOUSLY IN ARRAY


  //FUNCTION FOR SENDING MSG BY CLICKING ON BUTTON
 
  const sendMessage = (e) => {
  
    //Storing msg into list
    e.preventDefault();//Stop form from refreshing
    
    setMessages([...messages, {id: shortid.generate(), username: username, text: input}]) //placed that input msg in a list beside all (...) msgs   
    setInput('');//After that make input field empty again
  }

  return (
    <div className="App">
      <h1>Hey yo! What's going on?</h1>

      <form>

      <FormControl>
        <InputLabel >Enter a message...</InputLabel>
        <Input value={input} onChange={(e)=>setInput(e.target.value)}/>
        <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>Send Message</Button>

      </FormControl>

      </form>
      {/*onclicking the above button, form tries to refresh, event.preventDefault() will stop it from doing this in sendMessage function}

      {/*messages themselves*/}
      {/*Displaying msgs}*/}

      {
        messages.map((message) => 
          // <p key={message}>{message}</p>
          <Message username={username} message={message} key={message.id}/>
        )
      }

    </div>
  );
}

export default App;

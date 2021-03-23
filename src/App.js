import './App.css';
import React, { useState } from 'react'; 
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
function App() {
  const [input, setInput] = useState('');

  
  //LIST OF MSGS BY STORING THEM IN STATE
  
  const [messages, setMessages] = useState(['hi', 'good']); //MSGS WILL OBVIOUSLY IN ARRAY
  console.log(messages)
  //FUNCTION FOR SENDING MSG BY CLICKING ON BUTTON
 
  const sendMessage = (e) => {
    //Storing msg into list
    e.preventDefault();//Stop form from refreshing
    
    setMessages([...messages, input]) //placed that input msg in a list beside all (...) msgs   
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
          <p key={message}>{message}</p>
        )
      }

    </div>
  );
}

export default App;

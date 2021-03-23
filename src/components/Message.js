import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react';
import './Message.css';

function Message({username, message}) {
    
    //Checking if prompt username and message username same or not
    //This is done to do diff styling for you and other user
    
    const isUser = username === message.username;

    return (
        /*message class for all, and if userloged in, then use message__user class*/
        <div className={`message ${isUser && 'message__user'}`}>
        
           <Card className={isUser ? 'message_userCard' : 'message__guestCard'}>
               {/*if userlogged in(isUser) then use message__userCard otherwise message__guestCard*/}
               
               <CardContent>
                   <Typography color="textSecondary" variant="h5" component="h2">
                       {message.username}: {message.text}
                   </Typography>
               
               </CardContent>
           
           </Card>
        </div>
    )
}

export default Message

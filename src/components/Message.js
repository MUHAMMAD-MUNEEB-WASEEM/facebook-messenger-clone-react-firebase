import { Card, CardContent, Typography } from '@material-ui/core'
import React, {forwardRef} from 'react';
import './Message.css';

const Message = forwardRef(({username, message}, ref) => {
    
    //Checking if prompt username and message username same or not
    //This is done to do diff styling for you and other user

    const isUser = username === message.username;

    return (
        /*message class for all, and if userloged in, then use message__user class*/
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
        
           <Card className={isUser ? 'message_userCard' : 'message__guestCard'}>
               {/*if userlogged in(isUser) then use message__userCard otherwise message__guestCard*/}
               
               <CardContent>
                   <Typography color="textPrimary" variant="h5" component="h2">
                       {!isUser && `${message.username || 'Unknown User'} :`} {message.message}
                   </Typography>
               
               </CardContent>
           
           </Card>
        </div>
    )
})

export default Message

import React from 'react'
import classes from './ChatComponent.module.css'
import AvatarImage from './AvatarImage'
import Button from './Button'
import emojiIcon from '../assets/emojiIcon.png'
import attachmentIcon from '../assets/attachmentIcon.png'

function ChatComponent() {
  return (
    <div className={classes.chat}>
        <h5>Esther Howard</h5>
        <div className={classes.sender}> <p>Are you ready?</p><AvatarImage customStyles='size30 alignSelf'/></div>
        <div className={classes.receiver}><AvatarImage customStyles='size30 alignSelf'/><p>I have prepared everything</p></div>
        <div className={classes.textBox}>
            <div><textarea placeholder='Type your message' className={classes.textarea}/></div>
            <div className={classes.textareaIconsContainer}>
                <div>
                    <button className={classes.emojiBtn} onClick={() => ""}><img src={emojiIcon} alt="emoji-select-button" /></button>
                    <button className={classes.attachmentBtn} onClick={() => ""}><img src={attachmentIcon} alt="select-attachment-button" /></button>
                </div>
                <Button inheritStyles={true} customStyles='radius5 paddingVertical5 paddingX5'>Send now</Button>
            </div>
        </div>
    </div>
  )
}

export default ChatComponent
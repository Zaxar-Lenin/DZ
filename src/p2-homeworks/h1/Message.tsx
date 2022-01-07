import React from 'react'
import m from "./Message.module.css"

type MessageProps = {
    avatar: string,
    name: string,
    message: string,
    time: string
}
function Message(props: MessageProps) {
    return (
        <div className = {m.message}>
            <div className = {m.image}>
                <div className = {m.drive}></div>
                <img src={props.avatar} alt="" />
            </div>
            <div className = {m.ms}>  
                <div className = {m.name}>{props.name}</div>
                <div className = {m.msag}>{props.message}</div>
                <div className = {m.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message

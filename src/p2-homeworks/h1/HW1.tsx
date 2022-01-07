import React from 'react'
import Message from './Message'



// type HW1Props = {
//     avatar: string,
//     name: string,
//     message: string,
//     time: string
// }
function HW1() {
    const messageData = {
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Some Name',
        message: 'some text yarn start , yarn iinstall, git clone : some text yarn start , yarn iinstall, git clone some text yarn start , yarn iinstall, git clone : some text yarn start , yarn iinstall, git clone some text yarn start , yarn iinstall, git clone : some text yarn start , yarn iinstall, git clone',
        time: '22:00',
    }
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar = {messageData.avatar}
                name = {messageData.name}
                message = {messageData.message}
                time = {messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1

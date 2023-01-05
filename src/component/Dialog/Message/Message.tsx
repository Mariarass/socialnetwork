import React from 'react';
import s from '../Dialog.module.css'


export type MessageType = {
    id: number
    user: string
    message: string
    photo: any
    time: string


}
type MessageTypeProps = {

    text: MessageType[]


}
const Message = (props: MessageTypeProps) => {

    return (
        <div>
            {props.text.map((m: MessageType) => {
                return (
                    <div  key={m.id} className={s.messageContainer}>
                        <div>
                            < img className={s.photo} src={m.photo}/>
                        </div>

                        <div className={s.message}>
                            <h5 className={s.name}>{m.user}</h5>

                            <div className={s.textContainer}>
                                <p className={s.text}>{m.message}</p>
                                <p className={s.time}>{m.time}</p>

                            </div>



                        </div>

                    </div>
                )
            })}


        </div>
    );
};

export default Message;
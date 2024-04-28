import React from 'react'
import './ChatListItem.css'

export default () => {
    return (
        <div className="chatListItem">
            <img className='chatListItem--avatar' src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Bonieky Lacerda</div>
                    <div className="chatListItem--date">19:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex itaque facere ea at iste voluptatibus quidem nesciunt minima numquam. Quod.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import './ChatListItem.css'

export default ({onClick, active, data}) => {
    return (
        <div 
            className={`chatListItem ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            <img className='chatListItem--avatar' src={data.image} alt="avatar" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">{data.title}</div>
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
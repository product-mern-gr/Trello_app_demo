import React from 'react';
import './BoardThumbnail.scss'

function BoardThumbnail(props) {
    return (
        <div className='BoardThumbnail'>
            <h3 className='BoardThumbnail__title'>
                    GPT3 Project
            </h3>

            <div className='BoardThumbnail__img'>
            <img src="https://i.ytimg.com/vi/5L8dImESnl0/maxresdefault.jpg" alt="trello avatar" />
            </div>
        </div>
    );
}

export default BoardThumbnail;
import React from 'react';
import image from '../../assets/image';
import Button from '../../components/Button/Button';
import './Menu.scss'
import { FaTrello } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { GiArmorUpgrade } from "react-icons/gi";
import { BsViewStacked,BsFillPersonFill } from "react-icons/bs";
import BoardThumbnail from '../../components/BoardThumbnail/BoardThumbnail';


function MenuPage(props) {
    return (
        <div className='menu'>
            <h1>YOUR WORKSPACES</h1>
            <div className='menu__content'>
                <div className='menu__content-header'>
                    <div className='user'>
                        <div className='user__img'>
                            <img src="https://www.onlinemarketingtools.pro/wp-content/uploads/2018/11/Trello-logo.png" alt="trello avatar" />
                        </div>

                        <h2 className='user__text'>
                            Ninh Đăng Phạm's workspace
                        </h2>
                    </div>

                    <div className='list__button'>
                        <div className='item__button'>
                            <Button text="boards" icon=<FaTrello /> />
                        </div>

                        <div className='item__button'>
                            <Button text="view" icon=<BsViewStacked /> />
                        </div>

                        <div className='item__button'>
                            <Button text="members" icon=<BsFillPersonFill /> />
                        </div>

                        <div className='item__button'>
                            <Button text="setting" icon=<AiOutlineSetting /> />
                        </div>

                        <div className='item__button'>
                            <Button text="upgrade" icon=<GiArmorUpgrade /> type = "pink" />
                        </div>

                       
                    </div>

                </div>

                <div className='menu__content-main'>
                    <BoardThumbnail />
                    <BoardThumbnail />  
                    <BoardThumbnail />
                    <BoardThumbnail />
                    <BoardThumbnail />
                    <BoardThumbnail />
                    <BoardThumbnail />
                    <BoardThumbnail />


                </div>

            </div>
        </div>
    );
}

export default MenuPage;
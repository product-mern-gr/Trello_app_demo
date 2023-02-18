import React from 'react';
import Button from '../../components/Button/Button';
import './LoginPage.scss'
import { BsFillPersonFill } from "react-icons/bs";

function LoginPage(props) {
    return (
        <div className='login'>
            LoginPage
            <Button text='setting' />
            <Button text='members' type="transparent" icon={<BsFillPersonFill />} />
            <Button text='members' type="pink" icon={<BsFillPersonFill />} />
            <Button text='members' type="white" icon={<BsFillPersonFill />} />

        </div>
    );
}

export default LoginPage;
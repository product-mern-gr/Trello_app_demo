import React from 'react';
import Button from '../../components/Button/Button';
import './LoginPage.scss'
import { FaGoogle, FaMicrosoft, FaApple, FaSlack } from 'react-icons/fa'; 
import LoginInputForm from '../../components/LoginInputForm/LoginInputForm';
import './LoginPage.scss'
import logoHeader from '../../assets/trelloLogo-Login.png'
import logoFooter from '../../assets/footerLogin.png'
import backgrLeft from '../../assets/trello-backgr-left.svg'
import backgrRight from '../../assets/trello-backgr-right.svg'

function LoginPage(props) {
    return (
        <div className='login'>
            <div className='backgrImg leftImg'><img src={backgrLeft} alt="backgrLeft" /></div>
            <div className='login__wrapper'>
                <img className='login__logoHeader logo' src={logoHeader} alt="logoHeader"/>
                <p className='login__title'>Log in to continue</p>
                <LoginInputForm />
                <p className='login__subText'>Or</p>
                <Button className="login__signInWithSocialBtn" text='Google'  icon={<FaGoogle />}/>
                <Button className="login__signInWithSocialBtn" text='Microsoft' icon={<FaMicrosoft />} />
                <Button className="login__signInWithSocialBtn" text='Apple' icon={<FaApple />} />
                <Button className="login__signInWithSocialBtn" text='Slack' icon={<FaSlack />} />
                <div className='login__link'>
                    <a href='google.com'>Can't log in?</a>
                    <a href='google.com' >Create an account</a>
                </div>
                <hr />
                <footer>
                    <img className='login__logoFooter logo' src={logoFooter} alt="logoFooter"/>
                    <p>One account for Trello, Jira, Confluence and <a href='google.com'>more.</a></p>
                    <p>Privacy Policy  •  User Notice</p>
                </footer>
            </div>

            <div className='backgrImg rightImg'><img src={backgrRight} alt="backgrRightt" /></div>
        </div>
    );
}

export default LoginPage;
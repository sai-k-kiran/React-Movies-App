import React from 'react';
import './footer.css'
import {row1, row2, row3, social } from './components/footerItems'

class Footer extends React.Component {
    render() { 
        return (
            <footer className='footer'>
                <div className='columns'>
                    <div className='column'>
                        <img src='https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png'
                        alt='logo' />
                    </div>
                    <div className='column'>
                        <ul>
                            {row1.map(item => {
                                return <li>{item.title}</li>
                            })}
                        </ul>
                    </div>
                    <div className='column'>
                        <ul>
                            {row2.map(item => {
                                return <li>{item.title}</li>
                            })}
                        </ul>
                    </div>
                    <div className='column'>
                        <ul>
                            {row3.map(item => {
                                return <li>{item.title}</li>
                            })}
                        </ul>
                    </div>
                    <div className='column'>
                        <ul>
                            {social.map(item => {
                                return <li className='fa-icon'>{item.icon}</li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className='footer-info'>
                    <p>MovieDB @ 2021</p>
                </div>
            </footer>
        )
    }
}
 
export default Footer;
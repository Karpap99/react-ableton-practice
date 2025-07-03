import { AbletonLogo } from '../abletonLogo/abletonLogo'
import './header.css'


export const Header = () => {
    return(
    <header>
        <div>
            <AbletonLogo/>
            <ul>
                <li>
                    Live
                </li>
                <li>
                    Push
                </li>
                <li>
                    Link
                </li>
                <li>
                    Shop
                </li>
                <li>
                    Packs
                </li>
                <li>
                    Help
                </li>
                <li>
                    More +
                </li>
            </ul>
        </div>
        <ul>
            <li className='try-live'>
                Try Live for free
            </li>
            <li>
                Account
            </li>
            <li>
                Log out
            </li>
        </ul>
    </header>
    )
}
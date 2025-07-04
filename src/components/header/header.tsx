import AbletonLogo from '../../assets/images/ableton-hallmark.ef5355379032.svg'
import './header.css'


export const Header = () => {
    return(
    <header>
        <div>
            <img src={AbletonLogo} alt='Ableton logo'/>
            <nav>
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
                    <li style={{color: "var(--orange)"}}>
                        More +
                    </li>
                </ul>
            </nav>
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
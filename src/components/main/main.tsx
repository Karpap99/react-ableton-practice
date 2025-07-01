import { BlockOne } from '../blockOne/blockOne'
import { BlockTwo } from '../blockTwo/blockTwo'
import './main.css'

export const Main = () => {
    return(
    <main>
        <ul className='main-controls'>
            <li className='main-controls-active'>About</li>
            <li>Jobs</li>
        </ul>
        <BlockOne/>
        <BlockTwo/>


    </main>
    )
}
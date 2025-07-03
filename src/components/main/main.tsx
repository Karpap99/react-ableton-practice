import { BlockFive } from '../blockFive/blockFive'
import { BlockFour } from '../blockFour/blockFour'
import { BlockOne } from '../blockOne/blockOne'
import { BlockThree } from '../blockThree/blockThree'
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
        <BlockThree/>
        <BlockFour/>
        <BlockFive/>


    </main>
    )
}
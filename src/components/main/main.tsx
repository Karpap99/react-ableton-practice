import { BlockEight } from '../blockEight/blockEight'
import { BlockFive } from '../blockFive/blockFive'
import { BlockFour } from '../blockFour/blockFour'
import { BlockOne } from '../blockOne/blockOne'
import { BlockSeven } from '../blockSeven/blockSeven'
import { BlockSix } from '../blockSix/blockSix'
import { BlockTen } from '../blockTen/blockTen'
import { BlockThree } from '../blockThree/blockThree'
import { BlockTwelve } from '../blockTwelve/blockTwelve'
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
        <BlockSix/>
        <BlockSeven/>
        <BlockEight/>
        <BlockTen/>
        <BlockTwelve/>
    </main>
    )
}
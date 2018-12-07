import React from 'react';    
import Tile from "./tile/tile"

const wrapper = (props) => {
    
    return(
        <div>
            <br/>
            <Tile value={props.equasion} width="full"></Tile>
            <br/>
            <Tile click={props.clear} value="clear" width="half"></Tile>
            <Tile click={() => props.clicked(0)} value="0"></Tile>
            <Tile click={props.eval} value="="></Tile>
            <Tile click={props.mult} value="*"></Tile>
            <br/>
            <Tile click={() => props.clicked(7)} value="7"></Tile>
            <Tile click={() => props.clicked(8)} value="8"></Tile>
            <Tile click={() => props.clicked(9)} value="9"></Tile>
            <Tile click={props.div} value="/"></Tile>
            <br/>

            <Tile click={() => props.clicked(4)} value="4"></Tile>
            <Tile click={() => props.clicked(5)} value="5"></Tile>
            <Tile click={() => props.clicked(6)} value="6"></Tile>
            <Tile click={props.sub} value="-"></Tile>
            <br/>

            <Tile click={() => props.clicked(1)} value="1"></Tile>
            <Tile click={() => props.clicked(2)} value="2"></Tile>
            <Tile click={() => props.clicked(3)} value="3"></Tile>
            <Tile click={props.add} value="+">
            </Tile>
        </div>
    )
}
export default wrapper;
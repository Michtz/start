
import React from "react";
import GridCell from "./GridCell";
import style from "../styles/grid.module.scss"


const GridContainer = (props:any) => {
    const title = props.content;
    console.log(title,'w')
    return (
        <div className={style['grid-container']}>
            <GridCell title={title} />

        </div>
    )
   }    
   export default GridContainer;
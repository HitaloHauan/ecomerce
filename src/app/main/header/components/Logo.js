import React from "react";
import Tower from '../../../../assets/icons/white-tower.png'

function Logo() {
    return (
        <React.Fragment>
            <img className="w-8 h-8" src={Tower} alt="logo tower" />
        </React.Fragment>
    )
}

export default Logo
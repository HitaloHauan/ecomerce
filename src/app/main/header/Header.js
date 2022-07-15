import React from "react";
import Categories from "./components/Categories";
import HeaderMain from "./components/HeaderMain";
import Infos from "./components/Infos";

function Header() {

    return (
        <React.Fragment>
            <Infos/>
            <HeaderMain/>
            <Categories/>
        </React.Fragment>
    )
}

export default Header
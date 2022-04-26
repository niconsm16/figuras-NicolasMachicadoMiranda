import React from "react";
import * as Styled from "./NavBarElements";
import { FaStore, FaHome, FaGavel, FaGlobeAmericas, FaAngleDoubleDown, FaUserAlt, FaPlus } from "react-icons/fa";
import * as Menu from "./NavBarStrings";
import { CartWidget } from "../Cart/CartWidget";
import { Link } from "react-router-dom";
import { Dropdown } from "./Dropdown";

const NavBar = () => {

    // Tailwind CSS

    const cContainer = "w-full md:w-auto text-xl fixed md:relative top-0 z-50"
    const cWrapper = "flex md:block w-full pl-10 md:pl-0 h-16 md:h-auto bg-black top-0 text-white"
    const cLogo = "flex w-2/6 md:w-full justify-start md:justify-center items-center font-guy text-amarillo"
    const cIconLogo = "mx-3 h-8 w-8 text-white"
    const cMenu = "flex w-full items-center justify-end antialised font-ptsans font-medium"
    const cMenuItems = "flex md:flex-col md:w-full h-full items-center"
    const cProfile = "flex h-full items-center md:hidden"
    const cResponsive = "w-auto md:w-full"


    return (
        <Styled.MenuContainer className={cContainer}>
            <Styled.MenuWrapper className={cWrapper}>
                <Styled.MenuLogo className={cLogo}>
                    <FaStore className={cIconLogo} />
                    <Link to="/">{Menu.Market}</Link>
                </Styled.MenuLogo>
                <Styled.Menu className={cMenu}>
                    <Styled.MenuLI className={cMenuItems}>
                        <CartWidget />
                        <Styled.MenuA className={cResponsive}>
                            <FaHome style={{ paddingRight: 3, marginRight: 2 }} />
                            <Link to="/">
                                {Menu.Home}
                            </Link>
                        </Styled.MenuA>
                        <Styled.MenuA className={cResponsive}>
                            <FaGlobeAmericas style={{ paddingRight: 3, marginRight: 2 }} />
                            <Link to="/buscados">
                                {Menu.Buscados}
                            </Link>
                        </Styled.MenuA>
                        <Styled.MenuA className={cResponsive}>
                            <FaPlus style={{ paddingRight: 3, marginRight: 2 }} />
                            <Link to='/solicitados'>
                                {Menu.Solicitados}
                            </Link>
                        </Styled.MenuA>
                        <Styled.MenuA className={cResponsive}>
                            <FaGavel style={{ paddingRight: 3, marginRight: 2 }} />
                            <Link to='/soon'>
                                {Menu.Pujas}
                            </Link>
                        </Styled.MenuA>
                        <Styled.MenuA className={cResponsive}>
                            <FaAngleDoubleDown style={{ paddingRight: 3, marginRight: 2 }} />
                            <Dropdown />
                        </Styled.MenuA>
                    </Styled.MenuLI>
                    <Styled.MenuProfile className={cProfile}>
                        <Styled.MenuProfileA>
                            <FaUserAlt style={{ paddingRight: 3, marginRight: 2 }} />
                            <Link to='/soon'>
                                {Menu.Profile}
                            </Link>
                        </Styled.MenuProfileA>
                    </Styled.MenuProfile>
                </Styled.Menu>
            </Styled.MenuWrapper>
        </Styled.MenuContainer >
    )
};
export default NavBar;
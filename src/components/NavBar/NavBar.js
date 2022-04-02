import React from "react";
import * as Styled from "./NavBarElements";
import { FaStore, FaHome, FaGavel, FaGlobeAmericas, FaAngleDoubleDown, FaUserAlt, FaPlus } from "react-icons/fa";
import * as Menu from "./NavBarStrings";
import { CartWidget } from "../Cart/CartWidget";
import { Link } from "react-router-dom";
import { Dropdown } from "./Dropdown";

const NavBar = () => {

    return (
        <Styled.MenuContainer className="w-full text-xl fixed top-0 z-10">
            <Styled.MenuWrapper className="flex w-full pl-10 h-16 bg-black top-0 text-white">
                <Styled.MenuLogo className="flex justify-start items-center w-2/6 font-guy text-amarillo">
                    <FaStore className="mx-3 h-8 w-8 text-white" />
                    <Link to="/">{Menu.Market}</Link>
                </Styled.MenuLogo>
                <Styled.Menu className="flex w-full items-center justify-end antialised font-ptsans font-medium">
                    <Styled.MenuLI className="flex h-full items-center">
                        <CartWidget />
                        <Styled.MenuA>
                            <FaHome style={{ paddingRight: 3, marginRight: 2 }} />
                            <Link to="/">{Menu.Home}</Link>
                        </Styled.MenuA>
                        <Styled.MenuA>
                            <FaAngleDoubleDown style={{ paddingRight: 3, marginRight: 2 }} />
                            <Dropdown />
                            {/* {Menu.Ingresos} */}
                        </Styled.MenuA>
                        <Styled.MenuA>
                            <FaGlobeAmericas style={{ paddingRight: 3, marginRight: 2 }} />
                            {Menu.Buscados}
                        </Styled.MenuA>
                        <Styled.MenuA>
                            <FaPlus style={{ paddingRight: 3, marginRight: 2 }} />
                            {Menu.Solicitados}
                        </Styled.MenuA>
                        <Styled.MenuA>
                            <FaGavel style={{ paddingRight: 3, marginRight: 2 }} />
                            {Menu.Pujas}
                        </Styled.MenuA>
                    </Styled.MenuLI>
                    <Styled.MenuProfile className="flex h-full items-center">
                        <Styled.MenuProfileA>
                            <FaUserAlt style={{ paddingRight: 3, marginRight: 2 }} />
                            {Menu.Profile}
                        </Styled.MenuProfileA>
                    </Styled.MenuProfile>
                </Styled.Menu>
            </Styled.MenuWrapper>
        </Styled.MenuContainer>
    )
};
export default NavBar;
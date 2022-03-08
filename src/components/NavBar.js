import React from "react";
import * as Styled from "./NavBarElements";
import { FaStore, FaHome, FaGavel, FaGlobeAmericas, FaAngleDoubleDown, FaUserAlt, FaPlus } from "react-icons/fa";
import * as Menu from "./NavStr";

const NavBar = () => {
    return (
        <Styled.MenuContainer className="absolute w-full text-xl">
            <Styled.MenuWrapper className="flex w-full pl-10 h-16 bg-black absolute top-0 text-white">
                <Styled.MenuLogo className="flex justify-start items-center w-2/6 font-bakbak text-amarillo">
                    <FaStore className="mx-3 h-8 w-8 text-white" />
                    {Menu.Market}
                </Styled.MenuLogo>
                <Styled.Menu className="flex w-full items-center justify-end antialised font-ptsans font-medium">
                    <Styled.MenuLI className="flex h-full items-center">
                        <Styled.MenuA>
                            <FaHome style={{ paddingRight: 3, marginRight: 2 }} />
                            {Menu.Home}
                        </Styled.MenuA>
                        <Styled.MenuA>
                            <FaAngleDoubleDown style={{ paddingRight: 3, marginRight: 2 }} />
                            {Menu.Ingresos}
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
                        <Styled.MenuProfile className="flex h-full items-center">
                            <Styled.MenuProfileA>
                                <FaUserAlt style={{ paddingRight: 3, marginRight: 2 }} />
                                {Menu.Profile}
                            </Styled.MenuProfileA>
                        </Styled.MenuProfile>
                    </Styled.MenuLI>
                </Styled.Menu>

            </Styled.MenuWrapper>
        </Styled.MenuContainer>
    )
};
export default NavBar;
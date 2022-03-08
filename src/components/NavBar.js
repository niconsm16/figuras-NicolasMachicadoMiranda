import React from "react";
import * as Styled from "./NavBarElements";
import { FaStore, FaHome, FaGavel, FaGlobeAmericas, FaAngleDoubleDown, FaUserAlt, FaPlus } from "react-icons/fa";

const NavBar = () => {
    return (
        <Styled.MenuContainer className="absolute w-full text-xl">
            <Styled.MenuWrapper className="flex w-full pl-10 h-16 bg-black absolute top-0 text-white">
                <Styled.MenuLogo className="flex justify-start items-center w-2/6 font-bakbak text-amarillo">
                    <FaStore className="mx-3 h-8 w-8 text-white" /> Mi Marketplace
                </Styled.MenuLogo>
                <Styled.Menu className="flex w-full items-center justify-end antialised font-ptsans font-medium">
                    <Styled.MenuLI className="flex h-full items-center">
                        <Styled.MenuA>
                            <FaHome style={{ paddingRight: 3, marginRight: 2 }} />
                            Inicio
                        </Styled.MenuA>
                        <Styled.MenuA>
                            <FaAngleDoubleDown style={{ paddingRight: 3, marginRight: 2 }} />
                            Ingresos
                        </Styled.MenuA>
                        <Styled.MenuA>
                            <FaGlobeAmericas style={{ paddingRight: 3, marginRight: 2 }} />
                            Los + Buscados
                        </Styled.MenuA>
                        <Styled.MenuA>
                            <FaPlus style={{ paddingRight: 3, marginRight: 2 }} />
                            Solicitados
                        </Styled.MenuA>
                        <Styled.MenuA>
                            <FaGavel style={{ paddingRight: 3, marginRight: 2 }} />
                            Pujas
                        </Styled.MenuA>
                        <Styled.MenuProfile className="flex h-full items-center">
                            <Styled.MenuProfileA>
                                <FaUserAlt style={{ paddingRight: 3, marginRight: 2 }} />
                                Mi Perfil
                            </Styled.MenuProfileA>
                        </Styled.MenuProfile>
                    </Styled.MenuLI>
                </Styled.Menu>

            </Styled.MenuWrapper>
        </Styled.MenuContainer>
    )
};
export default NavBar;
import React from "react";
import * as Styled from "./NavBarElements";
import { FaStore, FaHome, FaGavel, FaGlobeAmericas, FaAngleDoubleDown, FaUserAlt, FaPlus } from "react-icons/fa";

const NavBar = () => {
    return (
        <Styled.Container className="absolute w-full text-xl">
            <Styled.Wrapper className="flex w-full pl-10 h-16 bg-black absolute top-0 text-white">
                <Styled.LogoM className="flex justify-start items-center w-2/6 font-bakbak text-amarillo">
                    <FaStore className="mx-3 h-8 w-8 text-white" /> Mi Marketplace
                </Styled.LogoM>
                <Styled.Menu className="flex w-full items-center justify-end antialised font-ptsans font-medium">
                    <Styled.MenuI className="flex h-full items-center">
                        <Styled.MenuIL>
                            <FaHome style={{ paddingRight: 3, marginRight: 2 }} />
                            Inicio
                        </Styled.MenuIL>
                        <Styled.MenuIL>
                            <FaAngleDoubleDown style={{ paddingRight: 3, marginRight: 2 }} />
                            Ingresos
                        </Styled.MenuIL>
                        <Styled.MenuIL>
                            <FaGlobeAmericas style={{ paddingRight: 3, marginRight: 2 }} />
                            Los + Buscados
                        </Styled.MenuIL>
                        <Styled.MenuIL>
                            <FaPlus style={{ paddingRight: 3, marginRight: 2 }} />
                            Solicitados
                        </Styled.MenuIL>
                        <Styled.MenuIL>
                            <FaGavel style={{ paddingRight: 3, marginRight: 2 }} />
                            Pujas
                        </Styled.MenuIL>
                        <Styled.Profile className="flex h-full items-center">
                            <Styled.ProfileA>
                                <FaUserAlt style={{ paddingRight: 3, marginRight: 2 }} />
                                Mi Perfil
                            </Styled.ProfileA>
                        </Styled.Profile>
                    </Styled.MenuI>
                </Styled.Menu>

            </Styled.Wrapper>
        </Styled.Container>
    )
};
export default NavBar;
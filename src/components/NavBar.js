import React from "react";
import { Container, LogoM, Menu, MenuI, MenuIL, Profile, ProfileA, Wrapper } from "./NavBarElements";
import { FaStore, FaHome, FaGavel, FaGlobeAmericas, FaAngleDoubleDown, FaUserAlt, FaPlus } from "react-icons/fa";

const NavBar = () => {
    return (
        <Container className="absolute w-full text-xl">
            <Wrapper className="flex w-full pl-10 h-16 bg-black absolute top-0 text-white">
                <LogoM className="flex justify-start items-center w-2/6 font-bakbak text-amarillo">
                    <FaStore className="mx-3 h-8 w-8 text-white" /> Mi Marketplace
                </LogoM>
                <Menu className="flex w-full items-center justify-end antialised font-ptsans font-medium">
                    <MenuI className="flex h-full items-center">
                        <MenuIL>
                            <FaHome style={{ paddingRight: 3, marginRight: 2 }} />
                            Inicio
                        </MenuIL>
                        <MenuIL>
                            <FaAngleDoubleDown style={{ paddingRight: 3, marginRight: 2 }} />
                            Ingresos
                        </MenuIL>
                        <MenuIL>
                            <FaGlobeAmericas style={{ paddingRight: 3, marginRight: 2 }} />
                            Los + Buscados
                        </MenuIL>
                        <MenuIL>
                            <FaPlus style={{ paddingRight: 3, marginRight: 2 }} />
                            Solicitados
                        </MenuIL>
                        <MenuIL>
                            <FaGavel style={{ paddingRight: 3, marginRight: 2 }} />
                            Pujas
                        </MenuIL>
                        <Profile className="flex h-full items-center">
                            <ProfileA>
                                <FaUserAlt style={{ paddingRight: 3, marginRight: 2 }} />
                                Mi Perfil
                            </ProfileA>
                        </Profile>
                    </MenuI>
                </Menu>

            </Wrapper>
        </Container>
    )
};
export default NavBar;
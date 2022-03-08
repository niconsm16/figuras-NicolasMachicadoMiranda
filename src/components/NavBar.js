import React from "react";
import { Container, LogoM, Menu, MenuI, MenuIL, Wrapper } from "./NavBarElements";
import { FaStore } from "react-icons/fa";

const NavBar = () => {
    return (
        <Container className="absolute w-full text-xl">
            <Wrapper className="flex w-full px-10 h-16 bg-black absolute top-0 text-white">
                <LogoM className="flex justify-start items-center w-1/2 font-bakbak">
                    <FaStore className="mx-3 h-8 w-8 hover:animate-pulse hover:fill-amarillo ease-linear" /> Mi Marketplace
                </LogoM>
                <Menu className="flex w-full items-center justify-end antialised font-ptsans font-medium">
                    <MenuI className="flex h-full items-center">
                        <MenuIL>
                            Inicio
                        </MenuIL>
                        <MenuIL>
                            Nuevos Ingresos
                        </MenuIL>
                        <MenuIL>
                            Los + Buscados
                        </MenuIL>
                        <MenuIL>
                            + Solicitados
                        </MenuIL>
                        <MenuIL>
                            Pujas
                        </MenuIL>
                    </MenuI>
                </Menu>

            </Wrapper>
        </Container>
    )
};
export default NavBar;
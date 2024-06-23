import React from 'react';
import styled from 'styled-components';
import {HomeRounded, CloseRounded} from "@mui/icons-material";
import LogoImage from "../Images/Logo.png";
import {Link} from "react-router-dom";

const MenuContainer = styled.div`
    flex: 0.5;
    flex-direction: column; 
    height: 100vh;
    display: flex;
    background-color: ${({theme}) => theme.bg};
    color: ${({theme}) => theme.text_primary};
`;

const Flex = styled.div`
    display: flex; 
    flex-direction: row;
    alight-items: center;
    justify-content: center;
`;
const Logo = styled.div`
    width: 100%;
    color: ${({theme}) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: center; 
    gap: 6px;
    font-weight: bold; 
    font-size: 20px;
    margin: 16px 0px;
`;

const Image = styled.img`
    height: 40px;
`;

const Close = styled.div`
    display: none; 
    @media (max-width: 1100px){
        display: block
    }
`;
const Elements = styled.div`
    padding: 4px 16px;
    display: flex; 
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    color: ${({theme}) => theme.text_secondary};
    width: 100%;
    &:hover {
        background-color: ${({theme}) => theme.text_secondary +50};    
    }
`;
const NavText = styled.div`
    padding: 12px 0px;
`;

const Sidebar = () => {
    return <MenuContainer>
        <Flex>
        <Logo>
            <Image src={LogoImage} />
            PodWave</Logo>
        <close>
            <CloseRounded/>
        </close>
        </Flex>
        <link to="/">
        <Elements>
            <HomeRounded/>
            <NavText>Dashboard</NavText>
        </Elements>
        </link>
    </MenuContainer>

};

export default Sidebar;
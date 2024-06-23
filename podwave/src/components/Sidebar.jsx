import React from 'react';
import styled from 'styled-components';
import {HomeRounded, CloseRounded, SearchRounded, FavoriteRounded, UploadRounded, LightModeRounded, LogoutRounded} from "@mui/icons-material";
import LogoImage from "../Images/Logo.png";
import { Link } from 'react-router-dom';

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
    text-decoration: none; 
`;

const menuItems = [
    {
        link: "/",
        name: "Dashboard",
        icon: <HomeRounded/>,
    },

    {
        link: "/search",
        name: "Search",
        icon: <SearchRounded/>,
    },

    {
        link: "/favourites",
        name: "Favourites",
        icon: <FavoriteRounded/>,
    },
]

const button = [
    
    {
        fun: () => console.log("Upload")
        name: "Upload",
        icon: <UploadRounded/>,
    },

    {
        fun: () => console.log("Upload")
        name: "Light Mode",
        icon: <LightModeRounded/>,
    },

    {
        fun: () => console.log("Upload")
        name: "Log Out",
        icon: <LogoutRounded/>,
    },    
]

const Sidebar = () => {
    return (
    <MenuContainer>
        <Flex>
        <Logo>
            <Image src={LogoImage} />
            PodWave
        </Logo>
        <Close>
            <CloseRounded/>
        </Close>
        </Flex>
        {menuItems.map((item)=>(
            <Link to="/">
            <Elements>
                <HomeRounded/>
                <NavText>Dashboard</NavText>
            </Elements>
            </Link>
        ))}
        
    </MenuContainer>

};

export default Sidebar;
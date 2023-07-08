import React from "react";
import {
  ProfileMenuContainer,
  ProfileMenuLink,
  ProfileMenuButton
} from "./navbarStyles";

const NavbarProfileMenu = ({ open }) => {
  return open ? (
    <ProfileMenuContainer>
      <ProfileMenuLink href="https://open.spotify.com" target="_blank">
        Log Out
      </ProfileMenuLink>
      
    </ProfileMenuContainer>
  ) : null;
};

export default NavbarProfileMenu;

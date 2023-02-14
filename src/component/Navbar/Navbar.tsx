import { Button } from "@mantine/core";
import { useState } from "react";
import { GoDeviceDesktop, GoThreeBars, GoX } from "react-icons/go";
import {
  List,
  NavbarContainer,
  NavbarContent
} from "../styledComponent/NavbarStyle";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const clickHandeler = () => {
    setClick(!click);
  };
  return (
    <>
      <NavbarContainer>
        <NavbarContent>
          <div className="logo-container">
            <div className="logo-content">
              <GoDeviceDesktop style={{ color: "#be4bdb" }} size={30} />
            </div>

            <div className="menu-icon" onClick={() => clickHandeler()}>
              {click ? <GoX size={30} /> : <GoThreeBars size={30} />}{" "}
            </div>
          </div>

          <List className={click ? "show" : ""}>
            <li>Features</li>
            <li>Team</li>
            <Button variant="outline" color="grape">
              SignIn
            </Button>
          </List>
        </NavbarContent>
      </NavbarContainer>
    </>
  );
}

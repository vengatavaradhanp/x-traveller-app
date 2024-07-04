// components/AppNavbar.tsx
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Sidenav, CustomProvider } from "rsuite";
import CogIcon from "@rsuite/icons/legacy/Cog";
import MenuIcon from "@rsuite/icons/Menu";
import CloseIcon from "@rsuite/icons/Close";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import Link from "next/link";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./Languageswitcher";
import logo from "../../public/vercel.svg";
import "rsuite/dist/rsuite.min.css";
import DoingRoundIcon from "@rsuite/icons/DoingRound";

type CustomNavbarProps = {
  onSelect: (eventKey: any) => void;
  activeKey: any;
  toggleMode: boolean;
  onToggleMode: () => void;
  [key: string]: any;
};

const styles: { [key: string]: React.CSSProperties } = {
  sidenav: {
    position: "absolute",
    top: 60,
    right: 0,
    zIndex: 1000,
    width: 240,
    backgroundColor: "#a6d7ff",
    transition: "transform 0.3s ease-in-out",
    transform: "translateX(100%)",
  },
  sidenavOpen: {
    transform: "translateX(0)",
  },
  darkNavbar: {
    backgroundColor: "green",

  }

};

const CustomNavbar: React.FC<CustomNavbarProps> = ({
  onSelect,
  activeKey,
  toggleMode,
  onToggleMode,
  ...props
}) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 2560
  );
  const [openKeys, setOpenKeys] = useState(["3", "4"]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      if (windowWidth >= 767 && expanded) {
        setExpanded(false);
      }

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [windowWidth, expanded]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Navbar
      {...props}
      style={toggleMode ? undefined : styles.darkNavbar}
    >
      <Navbar.Brand href="#">
        <Image src={logo} alt={"no_image"} style={{ width: "100%", height: "100%" }} />
      </Navbar.Brand>
      <>
        {!expanded && windowWidth >= 767 ? (
          <>
            <Nav onSelect={onSelect} activeKey={activeKey}>
              <Nav.Item as={Link} href="/" eventKey="1">
                {t("home")}
              </Nav.Item>
              <Nav.Item as={Link} href="/news" eventKey="2">
                {t("news")}
              </Nav.Item>
              <Nav.Item as={Link} href="/products" eventKey="3">
                {t("products")}
              </Nav.Item>
              <Nav.Item as={Link} href="/about-us" eventKey="3">
                {t("About")}
              </Nav.Item>
            </Nav>

            <Nav pullRight>
              <Nav.Item icon={<DoingRoundIcon />} onClick={onToggleMode}>
                {toggleMode ? t("Light") : t("Dark")}
              </Nav.Item>
              <LanguageSwitcher />
              <Nav.Item
                icon={<CogIcon />}
                style={{
                  display: !expanded && windowWidth >= 767 ? "block" : "none",
                }}
              >
                {t("Settings")}
              </Nav.Item>
            </Nav>
          </>
        ) : (
          <Nav pullRight>
            <Nav.Item icon={<DoingRoundIcon />} onClick={onToggleMode}>
              {toggleMode ? t("Light") : t("Dark")}
            </Nav.Item>
            <LanguageSwitcher />
            <Nav.Item onClick={() => setExpanded(!expanded)}>
              <span>
                {expanded && windowWidth <= 767 ? <CloseIcon /> : <MenuIcon />}
              </span>
            </Nav.Item>
          </Nav>
        )}
      </>
      {expanded && (
        <div style={{ ...styles.sidenav, ...(expanded ? styles.sidenavOpen : {}) }}>
          <Sidenav
            appearance="subtle"
            openKeys={openKeys}
            onOpenChange={setOpenKeys}
          >
            <Sidenav.Body>
              <Nav activeKey={activeKey} onSelect={onSelect}>
                <Nav.Item as={Link} href="/" eventKey="1" icon={<DashboardIcon />}>
                  Home
                </Nav.Item>
                <Nav.Item as={Link} href="/news" eventKey="2" icon={<GroupIcon />}>
                  News
                </Nav.Item>
                <Nav.Item as={Link} href="/Products" eventKey="3">
                  Products
                </Nav.Item>
                <Nav.Item as={Link} href="/about-us" eventKey="3">
                  {t("About")}
                </Nav.Item>
                <Nav.Menu eventKey="4" title={t("About")} icon={<GearCircleIcon />}>
                  <Nav.Item eventKey="4-1">Company</Nav.Item>
                  <Nav.Item eventKey="4-2">Team</Nav.Item>
                  <Nav.Item eventKey="4-3">Contact</Nav.Item>
                </Nav.Menu>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
        </div>
      )}
    </Navbar>
  );
};

type AppNavbarProps = {
  toggleMode: boolean;
  onToggleMode: () => void;
};

const AppNavbar: React.FC<AppNavbarProps> = ({ toggleMode, onToggleMode }) => {
  const [activeKey, setActiveKey] = useState<any>(null);

  return (
    <CustomNavbar
      appearance="inverse"
      activeKey={activeKey}
      onSelect={setActiveKey}
      toggleMode={toggleMode}
      onToggleMode={onToggleMode}
    />
  );
};

export default AppNavbar;

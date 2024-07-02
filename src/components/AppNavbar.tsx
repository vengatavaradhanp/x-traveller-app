'use client';

import React from 'react';
import { Navbar, Nav } from 'rsuite';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/vercel.svg'

const AppNavbar = () => {
    return (
        <Navbar appearance='inverse'>
            <Navbar.Brand href="#">
                <Image src={logo} alt={'no_image'} style={{ width: '100%', height: '100%' }} />
            </Navbar.Brand>
            <Nav>
                <Nav.Item as={Link} href="/" >
                    Home
                </Nav.Item>
                <Nav.Item as={Link} href="/about-us" >
                    About
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};

export default AppNavbar;
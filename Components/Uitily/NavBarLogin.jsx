"use client"

import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import Link from 'next/link'

import { BellIcon, LogoIcon, MailIcon, PlusIcon } from '../icons/Icons'

const NavBarLogin = () => {
    return (
        <Navbar className="sticky-top bg_primary py-3" variant="dark" expand="sm">
            <Container className='py-1'>
                <Navbar.Brand>
                    <Link href='/' className='mx-2'>
                        <LogoIcon width={85} height={35} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto justify-content-between flex-fill ps-5">
                        <div className='flex-center'>
                            <Link href='/dashboard/ads/add' className="flex-center mx-3 gap-3 scale-hover-img">
                                <PlusIcon width={20} height={20}/>
                                <p style={{ color: "white" }}>إضافة اعلان</p>
                            </Link>
                        </div>
                        <div className='flex-center gap-4'>
                            <div className='d-flex align-items-center'>
                                <Link href='/' className="px-3 border-end scale-hover-img" style={{ color: "white" }}>
                                    <BellIcon width={30} height={30}/>
                                </Link>
                                <Link href='/login' className="px-3 scale-hover-img" style={{ color: "white" }}>
                                    <MailIcon width={30} height={30}/>
                                </Link>
                            </div>
                            <Link href='/login' className="flex-center py-2 px-5 rounded-5 btn_ btn-1">
                                دخول
                            </Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarLogin

import React from 'react'
import Image from 'next/image';

// svg
import Logo from '../../public/images/icons/logo.svg'
export const LogoIcon = ({width=null,height=null,className=''}) => 
        <div className={className} style={{display:'inline-block'}}><Logo width={width} height={height}/></div>;

import Plus from '../../public/images/icons/plus.svg'
export const PlusIcon = ({width=null,height=null,className=''}) => 
        <div className={className} style={{display:'inline-block'}}><Plus width={width} height={height}/></div>;

import Bell from '../../public/images/icons/bell.svg'
export const BellIcon = ({width=null,height=null,className=''}) => 
        <div className={className} style={{display:'inline-block'}}><Bell width={width} height={height}/></div>;

import Mail from '../../public/images/icons/mail.svg'
export const MailIcon = ({width=null,height=null,className=''}) => 
        <div className={className} style={{display:'inline-block'}}><Mail width={width} height={height}/></div>;

import All from '../../public/images/icons/all.svg'
export const AllIcon = ({width=null,height=null,className=''}) => 
        <div className={className} style={{display:'inline-block'}}><All width={width} height={height}/></div>;

import Estate from '../../public/images/icons/estate.svg'
export const EstateIcon = ({width=null,height=null,className=''}) => 
        <div className={className} style={{display:'inline-block'}}><Estate width={width} height={height}/></div>;

import Cars from '../../public/images/icons/cars.svg'
export const CarsIcon = ({width=null,height=null,className=''}) => 
        <div className={className} style={{display:'inline-block'}}><Cars width={width} height={height}/></div>;

import Devices from '../../public/images/icons/Devices.svg'
export const DevicesIcon = ({width=null,height=null,className=''}) => 
        <div className={className} style={{display:'inline-block'}}><Devices width={width} height={height}/></div>;

import Search from '../../public/images/icons/search.svg'
export const SearchIcon = ({width=null,height=null,className=''}) => 
        <div className={className} style={{display:'inline-block'}}><Search width={width} height={height}/></div>;

import arrowDown from '../../public/images/icons/arrow-down.svg'
export const ArrowDownIcon = ({width=null,height=null,className=''}) => 
        <div className={className} style={{display:'inline-block'}}><arrowDown width={width} height={height}/></div>;


// img
import GooglePlay from '../../public/images/icons/google-play.png'
export const GooglePlayIcon = ({width=null,height=null,className='',alt=''}) => 
        <Image src={GooglePlay} className={className} width={width} height={height} alt={alt}/>;

import AppleStore from '../../public/images/icons/apple-store.png'
export const AppleStoreIcon = ({width=null,height=null,className='',alt=''}) => 
        <Image src={AppleStore} className={className} width={width} height={height} alt={alt}/>;


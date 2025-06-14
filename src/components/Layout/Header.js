import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
export default function Header() {
    const [activeMenu , setActiveMenu] = useState('home')
  return (
    <Root>
    <div className='container'>
        <div className='content_sec'>
        <div className='logo_sec'><h1>ARUN</h1><h3>Full-Stack Dev</h3></div>
        <div className='nav_bar'>
            <Link to='/' className={activeMenu == 'home' && 'active'}>{`<Hi />`}</Link>
            <a href="#about">About</a>
            {/* <Link to='#about'>About</Link> */}
            <Link to='#projects'>Projects</Link>
            <Link to='/'>Contacts</Link>
        </div>
        <div className='social_links'>
        {/* <button>Download Resume </button> */}
            <button><img src='/images/linkedin.png' /></button>
            <button><img src='/images/gmail.png' /></button>
            <button><img src='/images/github.png' /></button>
        </div>
        </div>
    </div>
       
    </Root>
  )
}
const Root = styled.div`
    background-color:#26272D;
    position: sticky;
    top: 0px;
    z-index: 999;
.content_sec{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.logo_sec{
    font-family: 'Varela Round', sans-serif;
    h1{
        font-size:48px;
        font-weight:400;
        color:#d6f1f6a6;
    }
    h3{
        font-size:21px;
        font-weight:100;
        margin-top:-9px;
        color:#8fa0a687;

    }
}
.nav_bar{
    a{
        color: #ffffffb0;
        text-decoration: none;
        padding: 0px 20px;
        &.active{
            color:#4FFFA0;
        }
    }
}
.social_links{
    button{
        background:none;
        border:none;
        cursor: pointer;
        img{
            padding: 4px;
            margin: 0px 6px;
            width: 36px;
            height: 36px;
            border-radius: 6px;
            object-fit: scale-down;
            box-shadow: rgb(255 255 255 / 30%) 0px 1px 2px 0px, rgb(255 255 255 / 15%) 0px 1px 3px 1px;
            transition:1s;
            &:hover{
                background:#1C1D22;
                transform: translateY(-5px);
            }
        }
    }
}
`

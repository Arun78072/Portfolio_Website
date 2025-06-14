import React, { useState } from 'react'
import styled from 'styled-components'
export default function About() {
    const [activeBtn , setActiveBtn] = useState('frontend')
  return (
    <Root id='about'>
    <div className='container'>
         <div className='side_section'>About Me</div>
         <div className='content_section'>
            <h1 className='background_title'>About</h1>
            <h2 className='title'>About me</h2>

            <div className='about_section'>
                <div>
                    <h4>WHAT I DO</h4>
                    <div onClick={()=>{setActiveBtn('frontend')}} className={activeBtn == 'frontend' ? 'action_button active' : 'action_button'} >
                        <div>
                            <h2>Front-end Development </h2>
                            <img src='/images/tag.png'/>
                        </div>
                        <p>Web Applications , E-commerce , Theme Websites ...</p>
                        <div className='languages'>
                            <h5>React js</h5>
                            <h5>HTML 5</h5>
                            <h5>CSS 3</h5>
                        </div>
                    </div>
                    <div onClick={()=>{setActiveBtn('backend')}} className={activeBtn == 'backend' ? 'action_button active' : 'action_button'} >
                        <div>
                            <h2>Back-end Development </h2>
                            <img src='/images/tag.png'/>
                        </div>
                        <p>Web Applications , E-commerce , Theme Websites ...</p>
                        <div className='languages'>
                            <h5>React js</h5>
                            <h5>HTML 5</h5>
                            <h5>CSS 3</h5>
                        </div>
                    </div>
                </div>
                {activeBtn == 'frontend' ? <div>
                    <h4>INTRODUCE</h4>
                    <div className='intro_content'>
                        <h2>I’am a Frontend Develope man with a diferents skills making the ideas truth</h2>
                        <h3><i>Every greate design begin with an even  better story</i></h3>
                        <p>Since beginning my journey as a freelance designer nearly 8 years ago, I •ve done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I •m quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>
                    </div>
                </div> :
                
                <div>
                    <h4>INTRODUCE</h4>
                    <div className='intro_content'>
                        <h2>I’am a Backend Developer man with a diferents skills making the ideas truth</h2>
                        <h3><i>Every greate design begin with an even  better story</i></h3>
                        <p>Since beginning my journey as a freelance designer nearly 8 years ago, I •ve done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I •m quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>
                    </div>
                </div>}
                
            </div>
         </div>
        
    </div>
        
    </Root>
  )
}
const Root = styled.div`
.container{
  position:relative;
}
.content_section{
  max-width: 90%;
  margin: auto;
}
.background_title {
    font-family: 'Roboto', sans-serif;
    font-size: 288px;
    font-weight:700;
    color:#ffffff0a;
    position:absolute;
    top:0px;
    z-index:-1;
}
h2.title {
    padding-top: 215px;
    font-family: 'Roboto', sans-serif;
    font-size:64px;
    font-weight: 400;
}
.about_section{
    display:flex;
    gap:20px;
    >div{
        flex:1;
        h4{
            font-weight:100;
            font-size:16px;
            &::before{
                content: '';
                background: #fff;
                display: inline-block;
                width: 30px;
                height: 1px;
                margin: 6px;
            }
        }
        .action_button{
            background-color:#26272D;
            border-radius:12px;
            padding:20px;
            cursor: pointer;
            margin-top:20px;
            >div{
                display:flex;
                justify-content:space-between;
                margin-bottom:12px;
            }
            img{
                mix-blend-mode: luminosity;
            }
            h2{
                font-weight:400;
            }
            p{
                font-family: 'Ubuntu', sans-serif;
                font-size:18px;
                font-weight:100;
            }
            &.active{
                h2{
                    color:#4FFFA0;
                }
                img{
                    mix-blend-mode:unset;
                }
            }
            .languages {
                justify-content: flex-end !important;
                gap: 10px;
                margin-top:10px;
                
                h5 {
                    background: #000;
                    padding: 4px;
                    border-radius: 4px;
                    font-weight: 400;
                }
            }
        }
        .intro_content{
            h2{
                font-size:42px;
                font-weight:400;
            }
            h3{
                font-weight:200;
                font-size:36px;
                margin:20px 0px;
            }
            p{
                font-weight: 100;
                font-size: 24px;
                color: #ffffff63;
            }
        }
    }

}
`
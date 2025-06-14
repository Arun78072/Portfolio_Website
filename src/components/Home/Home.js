import React from 'react'
import styled from 'styled-components'
import {BiCloudDownload} from 'react-icons/bi'
export default function Home() {
  return (
    <Root>
    <div className='container'>
      <div className='side_section'>Home Page</div>
      <div className='content_section'>
        <h3>Hi There</h3>
        <h1>I'm <span>Arun</span></h1>
        <h4>A Professional FullStack Web Developer</h4>
        <button>
          Download Resume <span><BiCloudDownload/></span>
        </button>

      </div>

      <div className='exp_section'>
       <div>
        <h1>4</h1>
        <h2>YEARS<br/> EXPERIENCE</h2>
       </div>
      </div>

      <div className='js_img'><img src ='/images/js.png'/></div>
      <div className='react_img'><img src ='/images/react.png'/></div>
      <span className='dot blue'></span>
      <span className='dot purple'></span>
      <span className='dot green'></span>
    </div>
    
   
    </Root>
  )
}

const Root = styled.div`
background-color:#26272D;
padding:60px 0px;
color:#fff;
position:relative;
.container{
  position:relative;
}
.content_section {
  max-width: 80%;
  margin: 80px auto;
  >*{
    margin: 20px 0px;
  }
  h3{
    color:#AADCE7;
    font-family: 'Roboto', sans-serif;
    font-size:36px;
    font-weight: 400;
  }
  h1{
    font-size:72px;
    font-family: 'Ubuntu', sans-serif;
    span{
      background: linear-gradient(to top,#E52E71, #FF8A00, #E52E71);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }
  h4{
    font-family: 'Ubuntu', sans-serif;
    font-size:32px;
    font-weight:300;
  }
  button{
    font-family: 'Ubuntu', sans-serif;
    color:#4FFFA0;
    background:transparent;
    padding:10px;
    border-radius:50px;
    border:none;
    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;
    cursor: pointer;
  }

}
.exp_section {
  width: fit-content;
  background-image: linear-gradient(to right,#E52E71, #FF8A00, #E52E71);
  position: absolute;
  left: 9%;
  /* bottom: -97px; */
 border-radius:2px;
  padding:5px;
  >div{
    border: 1px dashed;
    display: flex;
    padding:4px;
  }
  h1{
    font-family: 'Ubuntu', sans-serif;
    font-size: 72px;
  }
}
.js_img {
    position: absolute;
    right: 0px;
    bottom: 30px;
    animation: float 6s ease-in-out infinite;
    img{
      width:90px;
      
    }
}
.react_img {
    position: absolute;
    right: 100px;
    bottom: 40%;
    animation: float 6s ease-in-out infinite;
    animation-delay: 2s;
    img{
      width:90px;

    }
}
.dot{
  width:20px;
  height:20px;
  position:absolute;
  background-color:red;
  border-radius:50%;
  &.green {
    right: 10%;
    background-color:#4FFFA0;
    transition-delay:2s;
    animation: float 10s ease-in-out infinite;
  }
  &.purple {
    right: 30%;
    background-color:#E52E71;
    top: 40%;
    animation: float 8s ease-in-out infinite;
  }
  &.blue {
    background-color:#5A69F2;
    transition-delay:1s;
    animation: float 6s ease-in-out infinite;
    right: 44%;
    bottom: 0%;
  }

}
@keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
}

`
import React, {useState} from'react';

import "./Carousel.css"
import { images } from './Carouseldata';
import {FaAngleLeft} from 'react-icons/fa';
import {FaAngleRight} from 'react-icons/fa';



    function Carousel(){
    const [currImg, setCurrImg] = useState(0);
    const [showPopUp, setShowPopUp] = useState(false);

    const PopUpTable = ({text})=>{ 
        return(
          <div className = "popUpTable">{text}</div>
        )
        };

    const openPopUp = ()=>{
        setShowPopUp(!showPopUp)
    }
    return(
        <div className="carousel">
        <div className= "carouselInner"
      style={{backgroundImage:`url(${images[currImg].img})`}}
    >
        <div className="left" onClick = {()=>{
            currImg > 0 && setCurrImg(currImg - 1);
        }}>
            <FaAngleLeft/>
            </div> 
        <div className="center">
            <h1>{images[currImg].title}</h1>
            <div className="radiobutton">
             {images.map((img, index) =>(
             <input type = "radio"
             key = {img.id}
             value = {index}
             onClick={()=>{
            setCurrImg(index)
               
            }} checked = {currImg === index}/>
            ))}         
      </div>
     <button className="about" onClick = {openPopUp} >ABOUT</button>
  {showPopUp ? <PopUpTable  className = "popUpTable"    text = {images[currImg].text}/> : null}
        
            </div> 
        <div className="right" onClick = {()=>{
            currImg < images.length - 1 && setCurrImg(currImg + 1);
        }}>
            <FaAngleRight/>
            </div>    
        </div>
        </div>
    );
    }

export default Carousel
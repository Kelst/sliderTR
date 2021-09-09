import React,{useState} from 'react'
import GridImage from './GridImage';

export default function Slider({slider}) {
    const [current,setCurrent]=useState(0);
    const length=slider.length;
    const nextSlide=()=>{
        setCurrent(current===length-1?0:current+1);
    }
    const prevSlide=()=>{
        setCurrent(current===0?length-1:current-1);
    }
    const setNewCurrent=(event)=>{
       
        setCurrent(+event.target.id);
}
    return (
        <section className="banner">
            <div className="wrapper">
            <section className="slider">   
               
          <div class="slide">
          {
                slider.map((item,index)=>{
                  return  (<div className={index===current?"slide active":"slide"} key={index}> 
                             {index===current && <img src={item.url} alt="im" className="image"/>}
                   </div>)
                })
            }
             
          </div>
          
            </section>
        </div>
       
      
<GridImage slider={slider} currentImage={current} setNewCurrent={setNewCurrent} nextSlide={nextSlide} prevSlide={prevSlide}/>

        </section>
    )
}

import React from 'react'
import {BsFillArrowUpSquareFill} from 'react-icons/bs'
import './ScrollUp.css'

const ScrollUp=() => {
    window.addEventListener("scroll",function() {
        const scrollUp=document.querySelector(".scrollup");
        
        if(this.scrollY>=560) scrollUp.classList.add
            ("show-scroll")
        else scrollUp.classList.remove("show-scroll")
    })
  return (
    <a href='#' className='scrollup text-3xl'>
          {/*<i className='uil uil-arrow-up scrollup_icon'></i>*/}
          <BsFillArrowUpSquareFill/>
    </a>
  )
}

export default ScrollUp

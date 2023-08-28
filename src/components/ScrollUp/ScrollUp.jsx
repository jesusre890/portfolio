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
          <BsFillArrowUpSquareFill className='dark:text-slate-400 dark:hover:bg-black dark:hover:text-slate-600'/>
    </a>
  )
}

export default ScrollUp

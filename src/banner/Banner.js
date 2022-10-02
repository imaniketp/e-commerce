import React from 'react'
import banner from './banner.png'
import './Banner.css'

function Banner() {

  return (
    <>
    <div className='main-container'>

            <div className='container-fluid'>
                <div className='section'>
                    <h5 className='line-1'> SUMMER 2020 </h5>
                    <h1 className='line-2'> NEW COLLECTION </h1>
                    <h4 className='line-3'>We know hoe large object will act, <br/> but things on a small scale.</h4>
                    <button className='line-4'>SHOP NOW</button>
                </div>
            </div>
                    <img src={banner} alt="" />
    
    </div>
    </>
  )
}

export default Banner
import React, { useRef } from 'react'
import "./Testimonials.css"
import backicon from "../../assets/back-icon.png"
import nexticon from "../../assets/next-icon.png"
import user1 from "../../assets/user-1.png"
import user2 from "../../assets/user-2.png"
import user3 from "../../assets/user-3.png"
import user4 from "../../assets/user-4.png"

const Testimonials = () => {

  const slider= useRef()
  let tx=0;

  const slideForward = ()=>{
    if(tx>-50){
      tx-=25;
    }
    slider.current.style.transform= `translateX(${tx}%)`
  }
  const slideBackward = ()=>{
    if(tx<0){
      tx+=25;
    }
    slider.current.style.transform= `translateX(${tx}%)`
  }
  return (
    <>
    <div className="testimonials">
      <img src={nexticon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={backicon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider} id='ul'>
          <li>
              <div className="user_info">
                <img src={user1} alt="" />
                <div className="slide">
                <h3 className='heading-t'>Emily Williams</h3>
                <span>Edusity, USA</span>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
              </div>
            </div>
          </li>
          <li>
              <div className="user_info">
                <img src={user2} alt="" />
                <div className="slide">
                <h3 className='heading-t'>William Jackson</h3>
                <span>Edusity, USA</span>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
              </div>
            </div>
          </li>
          <li>
              <div className="user_info">
                <img src={user3} alt="" />
                <div className="slide">
                <h3 className='heading-t'>Emily Williams</h3>
                <span>Edusity, USA</span>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
              </div>
            </div>
          </li>
          <li>
              <div className="user_info">
                <img src={user4} alt="" />
                <div className="slide">
                <h3 className='heading-t'>William Jackson</h3>
                <span>Edusity, USA</span>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Testimonials

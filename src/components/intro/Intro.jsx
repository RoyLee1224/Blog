import './intro.scss'
import { useEffect, useRef } from 'react'
import Typewriter from 'typewriter-effect'
export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>
            <Typewriter
              options={{
                strings: ['你好！', 'Hello!', "안녕하세요!","console.log('Hello!')"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>  
          <h2>I'm Roy Lee</h2>
        </div>
        <a href="#portfolio" >
          <img src="assets/down.png"  alt="" />
        </a>
      </div>
    </div>
  )
}

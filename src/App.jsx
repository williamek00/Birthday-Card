import { useState, useEffect, useRef } from 'react'
import './App.css'
import song from '../song.mp3'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import the ScrollTrigger plugin
import Lottie from "react-lottie";
import floral from '../floral.json'
import flowers from '../flowers.json'
import balloon from '../balloon.json'

import sakitImg1 from './assets/sakit1.jpeg'
import sakitImg2 from './assets/sakit2.jpeg'
import sakitImg3 from './assets/sakit3.jpeg'
import sakitImg4 from './assets/sakit4.jpeg'
import sakitImg5 from './assets/sakit5.jpeg'
import sakitImg6 from './assets/sakit6.jpeg'
import sakitImg7 from './assets/sakit7.jpeg'
import sakitImg8 from './assets/sakit8.jpeg'
import sakitImg9 from './assets/sakit9.jpeg'
import sakitImg10 from './assets/sakit10.jpeg'
gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin
function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [number, setNumber] = useState(null);
  const numberRef = useRef(null);
  const containerRef = useRef(null);
  const targetNumber = 8035;

  const handleButtonClick = () => {
    setShowContent(true);
  };
  const startAudio = () => {
    setIsPlaying(true);
  };

  const scrollToDiv = (divId) => {
    const targetDiv = document.getElementById(divId);
    targetDiv.scrollIntoView({ behavior: 'smooth' });
  };


  useEffect(() => {
    const container = containerRef.current;

    const tl = gsap.timeline();

    const images = container.querySelectorAll('img');

    gsap.set(images, { opacity: 0 });

    images.forEach((image, index) => {
      tl.to(image, { opacity: 1, duration: 0.5, delay: index * 0.1 });
    });

    ScrollTrigger.create({
      trigger: '.containerWords',
      start: 'top center',
      animation: tl,
      markers: true,
      toggleActions: 'play none none none',
    });


    gsap.to(numberRef.current, {
      duration: 5,
      scrollTrigger: {
        trigger: '.containerWords',
        start: '35% center',
        toggleActions: "play none pause reverse",
      },
      innerHTML: targetNumber,
    });

    gsap.from('.textHallo', { opacity: 0 })
    gsap.to('.textHallo', {
      opacity: 1,
      duration: 5,
    });
    gsap.from('.keepScrollWords', { opacity: 0 })
    gsap.to('.keepScrollWords', {
      opacity: 1,
      duration: 3,
      delay: 5
    });
    gsap.from('.textQuestion', { opacity: 0 })
    gsap.to('.textQuestion', {
      opacity: 1,
      duration: 5,
      delay: 1

    });
    gsap.from('.buttons', { opacity: 0 })
    gsap.to('.buttons', {
      opacity: 1,
      duration: 5,
      delay: 1.5

    });

    if (showContent) {
      gsap.to('.screen2', {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".screen2",
          start: "40% 30%",
          end: "bottom center",
          pin: true,
          pinSpacing: false,
          onEnter: () => {
            gsap.to(".screen2", {
              backgroundColor: "#889fb5",
              duration: 1,
            });
          },
          onLeaveBack: () => {
            gsap.to(".screen2", {
              backgroundColor: "initial",
              duration: 1,
            });
          },
        },
      });

    }

  }, []);

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: floral,
  };
  return (
    <div className="container">
      <div className='screen1' >
        <h1 className='textHallo' >Hello!</h1>
        <h1 className='textQuestion'>Is it your birthday?</h1>
        <div className='buttons' >
          <button className='buttonIsItYourBirthday' onClick={() => scrollToDiv('div1')} >It is!</button>
          <button className='buttonIsItYourBirthday'>Not Sure. </button>
        </div>
        <div className='animationContainer' >
          <Lottie options={animationOptions} className="lottieAnimate" />
        </div>

      </div>
      <div className='container2' >
        <div className='containerWords' id="div1" >
          <h1 className='firstWords' >It's been <span ref={numberRef}>{number}</span> days since you were born. I want you to feel special on your special day,cheers!</h1>
          <h1 className='keepScrollWords' >Keep Scrolling!</h1>
          <div className='animationContainer' >
            <Lottie options={animationOptions} className="lottieAnimate" />

          </div>
        </div>
        <div className='screen3' >
          <h1 className='glimpseText' >This is a glimpse of what you've been through.</h1>
          <div className='imageContainer' ref={containerRef} >
            <img className='img1' src={sakitImg1} />
            <img className='img2' src={sakitImg2} />
            <img className='img3' src={sakitImg3} />
            <img className='img4' src={sakitImg4} />
            <img className='img5' src={sakitImg5} />
            <img className='img6' src={sakitImg6} />
            <img className='img6' src={sakitImg7} />
            <img className='img6' src={sakitImg8} />
            <img className='img6' src={sakitImg9} />
          </div>
        </div>
        <div className='screen2'>
          <h1>I</h1>
          <h1>&nbsp;</h1>
          <h1>L</h1>
          <h1>O</h1>
          <h1>V</h1>
          <h1>E</h1>
          <h1>&nbsp;</h1>
          <h1>Y</h1>
          <h1>O</h1>
          <h1>U</h1>
        </div>
      </div>



    </div>
  );
}


export default App

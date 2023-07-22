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
    setIsPlaying(true);

  };


  useEffect(() => {
    const container = containerRef.current;

    const tl = gsap.timeline();

    const images = container.querySelectorAll('img');

    gsap.set(images, { opacity: 0 });

    images.forEach((image, index) => {
      tl.to(image, { opacity: 1, duration: 0.5, delay: index * 0.1 });
    });

    gsap.to(numberRef.current, {
      duration: 3,
      scrollTrigger: {
        trigger: '.containerWords',
        start: '200px center',
        end: 'center center',
        markers: true
        // toggleActions: "play none pause pause",
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
    // gsap.to('.wrapper', {
    //   scrollTrigger: {
    //     trigger: '.wrapper',
    //     start: 'top center',
    //     // toggleActions: "play none pause pause",
    //     scrub: true,
    //     markers: true
    //   },
    // })


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
          <h1 className='glimpseText' >Happy birthday, love.</h1>
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
          <div className='wrapper'>
            <h1 className='iloveyou' > I LOVE YOU</h1>
          </div>
        </div>

        <div className='ucapan' >
          <h1>As I sent this form of love to you, half of my soul by the grace of Jesus Christ, having 22nd birthday.</h1>
          <h1>By this very moment, I want to say thank you for your self for surviving this far. </h1>
          <h1>These few years back has been the toughest and challenging years for both of us.</h1>
          <h1>And those few years has tought me a lot about you. </h1>
          <h1>I have seen you in your tears, anger, smile and my favourite was your laugh.</h1>
          <h1>I have seen you in your bad form(haven't showered yet) and your daily shimmering splendid form. </h1>
          <h1>And I came to concluse that I see good in you, beautiful heart. </h1>
          <h1>Babe, I wish you nothing but happiness, and healthy.</h1>
          <h1>I wish you nothing but successfull career and be a light where you must be.</h1>
          <h1>I hope your decision to follow Jesus would be a price of death, knowing Jesus would loves you unconditionally.</h1>
          <h1>-Most Handsome Boyfriend In Earth</h1>
        </div>
      </div>



    </div>
  );
}


export default App

import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import ImgBanner from '../../static/book/book.png'
import ImgBanner1 from '../../static/book/book1.png'
// import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import Particles from "react-tsparticles";


const Banner = () => {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };

    const elemBanner = useRef(null);

    useEffect(() => {

    });

    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };

    return (
        <>
            <section className="banner-section">        
     <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
       
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 4,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
         
                <div className="grid-two-layout-col">
                    <div className="wrapper-bg-left">
                        <div className="left-col">
                            <div className="banner-content-wrapper">
                                <h1>
                                    <span className="first-block">
                                        <span id="color-o">
                                        The Creation of the Physical Universe, to Heaven, to Hell, and Back Again: 
                                        </span>
                                    </span>

                                    <span className="second-block">
                                        <span>
                                        The Creation - The Scientific Theories And A Spiritual Theology
                                        </span>
                                    </span>
                                </h1>
                                <p className="p-banner">
                                When you are in your darkest hour,
                                <br/>
                                Always remember to give God the power,
                                <br/>
                                When the road is rough and dry,
                                <br/>
                                Look up to the savior on high
                                </p>

                                <div className="btn-container">
                                    <button className="btn-book">
                                        <Link to="/about-the-book">
                                            Read More
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                        <div className="wrapper-bg-right">
                             
                                <div className="right-col banner-img-col">
                                            <div >
                                                <img src={ImgBanner} alt="book" />
                                            </div>
                                    {/* <Slider {...settings}> 
                                            <div >
                                                <img src={ImgBanner} alt="book" />
                                            </div>
                                            <div className="img-banner-wrapper" ref={elemBanner}>
                                                <img src={ImgBanner1} alt="book1" />
                                            </div>
                                    </Slider> */}
                                </div>
                            
                        </div>
                </div>
            </section>
        </>
    )
}

export default Banner;
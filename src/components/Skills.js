import meter1 from "../assets/img/js.webp";
import meter2 from "../assets/img/html.png";
import meter3 from "../assets/img/css.png";
import meter4 from "../assets/img/Canva-Logo.svg";
import meter5 from "../assets/img/solidity.svg";
import meter6 from "../assets/img/Python-logo.png";
import meter7 from "../assets/img/blockchain.avif";
import meter8 from "../assets/img/c++.png";
import meter9 from "../assets/img/figma.png";
import meter10 from "../assets/img/git.png";
import meter11 from "../assets/img/reactjs.png";
import meter12 from "../assets/img/C_Logo.png";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/skill.jpg";
import arrow2  from "../assets/img/skill1.avif";
import colorSharp from "../assets/img/foooter.jpg"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>SPONSORS</h2>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>Comapany</h5>
                            </div>
                          
                            <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>Comapany</h5>
                            </div>
                            <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>Comapany</h5>
                                </div>
                               
                            <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>Comapany</h5>
                            </div>
                            <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>Comapany</h5>
                            </div>
                            <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>Comapany</h5>
                            </div>
                            <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>Comapany</h5>
                            </div>
                            <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>Comapany</h5>
                            </div>
                            {/* <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>Canva</h5>
                            </div> */}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

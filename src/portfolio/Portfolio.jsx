import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "./data";
import industries from "./libraries";
import DownloadButton from "./DownloadButton";

import "./style.css";

import Logo from "../images/main_logo.png";
import ME from "../images/Me.jpeg";

import Client1 from "../images/react.png";
import Client2 from "../images/node.png";
import Client3 from "../images/express.png";
import Client4 from "../images/mongo.png";
import Client5 from "../images/html.jpg";
import Client6 from "../images/css.jpg";
import Client7 from "../images/bootstrap.png";
import Client8 from "../images/javascript.jpg";
import Client9 from "../images/mern.jpg";

import image1 from "../images/ammag_certificate.jpeg";
import image2 from "../images/google_certificate.jpeg";
import image3 from "../images/digixvalley_certificate.jpeg";
import image4 from "../images/nexus_certificate.jpeg";
import image5 from "../images/mtech_certificate.jpeg";
import image6 from "../images/pftp_certificate.jpeg";

const Portfolio = () => {
  // Add CV Pdf Path
  const pdfFilePath =
    process.env.PUBLIC_URL + "https://muhammad-usman-resume24.netlify.app/Usman.pdf";
  // Skills Data States
  const skills = [
    { name: "Html5, CSS3, SCSS, Bootstrap-5, Tailwind CSS", level: 100 },
    { name: "Javascript / JQuery", level: 85 },
    { name: "React & Next (JS)", level: 85 },
    { name: "WEB3.0, AJAX", level: 65 },
    { name: "Node JS, PHP, Laravel", level: 70 },
    { name: "Mongo DB, MySQL", level: 85 },
    { name: "Figma & Adobe XD", level: 55 },
    { name: "Adobe Illustrator", level: 100 },
  ];

  // Next Previous Button States
  const [displayIndex, setDisplayIndex] = useState(0);

  const handlePrev = () => {
    setDisplayIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setDisplayIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 1));
  };

  // Certificates Slider With Laptop Img
  const [slides, setSlides] = useState([
    {
      image: image1,
      title: "Ammag Technologies",
      description:
        "I have done an internship at this company with the React.js framework, focusing on blockchain technology like web3.0 .",
      readmore: "Click on image to view full image.",
    },
    {
      image: image2,
      title: "Google Developer Student Clubs",
      description:
        "Participation into 'The New Era of Internet : BLOCKCHAIN' series organized by Google Developer Student Clubs.  ",
      readmore: "Click on image to view full image.",
    },
    {
      image: image3,
      title: "Digixvalley Software Company",
      description:
        "In this company, work has been done with the React.js framework along with Bootstrap 5, Tailwind CSS, Material UI, and Node.js.",
      readmore: "Click on image to view full image.",
    },
    {
      image: image4,
      title: "NexusBerry Institute",
      description:
        "I have completed a Mern Stack Developer course from Nexusberry Institute and have also worked on 2 live projects.",
      readmore: "Click on image to view full image.",
    },
    {
      image: image5,
      title: "M-Tech Soft",
      description:
        "In this company, work has been done with the React.js and Next.js framework along with Bootstrap 5, Aunt Design, Jquery and Node.js.",
      readmore: "Click on image to view full image.",
    },
    {
      image: image6,
      title: "Professional Freelancing Training Program (PFTP)",
      description:
        "I have completed a Mern Stack Developer course from the PFTP institute in Pakistan, and I have also received a laptop from the institute",
      readmore: "Click on image to view full image.",
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullWidthImage, setFullWidthImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [slides.length]);

  const handleClick = (imageUrl) => {
    setFullWidthImage(imageUrl);
  };

  const closeFullWidthImage = () => {
    setFullWidthImage(null);
  };

  return (
    <>
      {/* Navbar */}
      <div className="container">
        <div className="row mt-4">
          <div className="col-12">
            <div className="nav_patti rounded">
              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-center align-items-center ms-4">
                  <img src={Logo} alt="logo" className="p-2 port_logo_img" />
                  <h4 className="port_logo_h4 pt-2 text-uppercase">
                    Muhammad <br /> Usman
                  </h4>
                </div>
                <div className="d-flex justify-content-center align-items-center me-4">
                  <DownloadButton fileUrl={pdfFilePath} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Home Section */}
      <div className="container about-me mt-5">
        <div className="row g-0">
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3 className="pt-0 pt-lg-5">About Me</h3>
            <p className="home_p_width">
              I am a
              <span className="span_avai fw-bold"> Full Stack Developer</span>.
              Currently, I am working as a Senior Frontend Developer at
              <span className="span_avai fw-bold"> Swati Technologies</span> .
              My primary goal is to enhance my skills and expand my knowledge to
              gain valuable experience in complex project development. I am
              dedicated to continuously improving and staying updated with the
              latest advancements in the industry. <br />
              <br /> A dynamic & motivated person having interest in Computer
              Science. I am looking for an good company as Web Developer. Web3
              developer with a demonstrated history of working in the computer
              software industry. Looking for good opportunity to prove my
              abilities & add value to organization. I have done my graduation
              in
              <span className="span_avai fw-bold"> BS COMPUTER SCIENCE</span> .
              My total experience is
              <span className="span_avai fw-bold"> 3.5 years</span> . I have 6
              months experience in HTML & Tailwind CSS and 3 years experience in
              React JS, Next JS, Mern Stack and Bootstrap 4/5. I am expert in
              using tools like ChatGPT, Black Box AI to build complex functions
              in different product. <br />
              <br />
              My expertise includes JavaScript, React.js, Next.js, React-Query,
              Tailwind.css, HTML5, CSS3, SCSS, Bootstrap-5, Material-UI, Redux
              Toolkit, MongoDB, Restful API, Aunt Design, MySql, Node.js, and
              Express.js.
              <br />
              <br />
              I'm passionate about creating top-notch websites and mobile apps
              using the latest technologies and clean design patterns.
            </p>
          </div>
          <div className="col-lg-4" data-aos="fade-right">
            <img
              src={ME}
              className="img-fluid rounded about_port_img mt-4 pt-2"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container about-me mt-3">
        <div className="row content">
          <h3 className="pt-4 pb-2">Introduction</h3>
          <div className="col-lg-6">
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i>
                <strong>Name:</strong>
                <span className="text_1">Muhammad Usman</span>
                <span className="text_2">Muhammad Usman</span>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                <strong>Degree:</strong>
                <span>Bachelor of Computer Science</span>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                <strong>Website:</strong> <span>https://muhammad-usman-resume24.netlify.app/</span>
              </li>
           
            </ul>
          </div>
          <div className="col-lg-6">
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i>
                <strong>Position:</strong>
                <span className="text_1">Web Developer</span>
                <span className="text_2">Senior Front End Developer</span>
              </li>
           
              <li>
                <i className="bi bi-chevron-right"></i>
                <strong>Email:</strong>
                <span>muhammadusmanbinaziz@gmail.com</span>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                <strong>Freelance:</strong>
                <span>
                  Available
                  <span className="span_avai fw-bold"> ( All Time )</span>
                </span>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      {/* counts */}
      <div className="container counts mt-2">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <span className="purecounter">12</span>
              <p>Happy Clients</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span className="purecounter">21</span>
              <p>Projects</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-alarm"></i>
              <span className="purecounter">3</span>
              <p>Years Experience</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-award"></i>
              <span className="purecounter">2</span>
              <p>Awards</p>
            </div>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className="container skills">
        <div className="section-title d-flex align-items-center gap-3">
          <h2 className="fw-bold text-white">Skills</h2>
          <p className="fw-bold main_text_color">_________________</p>
        </div>

        <div className="row skills-content">
          {skills.map((skill, index) => (
            <div key={index} className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  {skill.name} <i className="val">{skill.level}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Languages */}
      <div className="container mt-5 mb-4">
        <div className="section-title d-flex align-items-center gap-3">
          <h2 className="fw-bold text-white">Languages</h2>
          <p className="fw-bold main_text_color">_________________</p>
        </div>

        <div className="slider_section mt-3">
          <div className="slide-track">
            <div className="slide">
              <img src={Client1} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={Client2} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={Client3} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={Client4} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={Client5} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={Client6} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={Client7} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={Client8} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={Client9} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={Client1} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={Client2} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={Client3} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={Client4} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={Client5} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={Client6} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={Client7} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={Client8} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={Client9} height="100" width="250" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Interests */}
      <div className="container interests mt-5 mb-4">
        <div className="section-title d-flex align-items-center gap-3 pb-2">
          <h2 className="fw-bold text-white">Interests</h2>
          <p className="fw-bold main_text_color">_________________</p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="icon-box">
              <div className="d-flex justify-content-center">
                <iframe
                  src="https://lottie.host/embed/040a0629-b805-45f3-a634-88866a18c5ce/cQsrI5sBJA.json"
                  title="AI"
                  width={50}
                  height={50}
                ></iframe>
              </div>
              <h3 className="pt-3">Learning AI</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="icon-box">
              <div className="d-flex justify-content-center">
                <iframe
                  src="https://lottie.host/embed/0718b66c-3144-4d86-a7b5-1396508d7a3a/wJLyMC7wNu.json"
                  title="AI"
                  width={50}
                  height={50}
                ></iframe>
              </div>
              <h3 className="pt-3">Playing Cricket</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="icon-box">
              <div className="d-flex justify-content-center">
                <iframe
                  src="https://lottie.host/embed/fa833eec-e397-4716-b1a6-b17e5f86d436/V2MPINAjCU.json"
                  title="AI"
                  width={50}
                  height={50}
                ></iframe>
              </div>
              <h3 className="pt-3">Reading Books</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="icon-box">
              <div className="d-flex justify-content-center">
                <iframe
                  src="https://lottie.host/embed/f7b29646-42c3-4ed2-80a8-84390da0c5cd/604uiWjo9M.json"
                  title="AI"
                  width={50}
                  height={50}
                ></iframe>
              </div>
              <h3 className="pt-3">Graphic Designing</h3>
            </div>
          </div>
          {/* Add more icon boxes */}
        </div>
      </div>
      {/* Resume */}
      <section id="resume" className="resume mt-5 text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title d-flex align-items-center gap-3 pb-2">
                <h3 className="fw-bold text-white">Education</h3>
                <p className="fw-bold main_text_color">_________________</p>
              </div>
              <div className="resume-item">
                <h4 className="span_avai">Bachelor of Computer Science</h4>
                <h5>2019 - 2023</h5>
                <p>
                  <em>Virtual University Lahore, Pakistan</em>
                </p>
              </div>
              <div className="resume-item">
                <h4 className="span_avai">FSc ( Pre-Engineering )</h4>
                <h5>2017 - 2019</h5>
                <p>
                  <em>Stars Group of Colleges, Pakistan</em>
                </p>
              </div>
              <div className="resume-item">
                <h4 className="span_avai">Matriculation</h4>
                <h5>2016 - 2017</h5>
                <p>
                  <em>Bise Lahore, Pakistan</em>
                </p>
              </div>
              <div className="section-title d-flex align-items-center gap-3 pb-2 mt-5">
                <h3 className="fw-bold text-white">Experience</h3>
                <p className="fw-bold main_text_color">_________________</p>
              </div>
              <div className="resume-item mt-3">
                <h4 className="span_avai">Ammag Technologies</h4>
                <h5>4 Months Internship</h5>
                <p>
                  <em>Blockchain Company Lahore, Pakistan</em>
                </p>
                <ul>
                  <li>
                    4 months internship in AMMAG TECHNOLOGIES as a frontend
                    developer (REACT JS + WEB.3). I already worked in an
                    organization named AMMAG software house and also I received
                    certificate from this organization.
                  </li>
                  <li>
                    I have worked on the UI to create their official website.
                  </li>
                </ul>
              </div>
              <div className="resume-item mt-5">
                <h4 className="span_avai">DigiXvalley LLC</h4>
                <h5>1 Years Experience</h5>
                <p>
                  <em>Software Company Lahore, Pakistan</em>
                </p>
                <ul>
                  <li>
                    I have been working for last 11 months in DigiXValley LLC
                    Software Company as a frontend developer (REACT JS + Next JS
                    + Booststrap-5). I am also working on API’s here. I have
                    good skills in converting Figma design to coding.
                  </li>
                  <li>
                    I have worked on an online document signature website at
                    their office, which utilized a major third-party service
                    like eSign Library , and I have also worked on a Zoom
                    streaming website, leveraging a similar third-party service
                    like Agora.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title d-flex align-items-center gap-3 pb-2">
                <h3 className="fw-bold text-white">Professional Experience</h3>
                <p className="fw-bold main_text_color">_________________</p>
              </div>
              <div className="resume-item">
                <h4 className="span_avai">Swati Technologies</h4>
                <h5 className="span_swati">Present</h5>
                <p>
                  <em>Blockchain & Software Company Lahore, Pakistan</em>
                </p>
                <ul>
                  <li>
                    <span className="span_avai fw-bold">
                      Secure Eye | Access IP Cameras
                    </span>
                    : I am currently working on a live streaming (RTSP) website,
                    which utilized a major third-party service like OpenVidu
                    Library.
                  </li>
                  <br />

                  <li>
                    <span className="span_avai fw-bold">
                      NIKKAH FIRST | Islamic Matrimony App
                    </span>
                    : Developed an Islamic Matrimony App using Next js and React
                    Query. The app facilitates marriage proposals for Muslims
                    boys & girls, with a unique guardian access feature for
                    enhanced security and oversight.
                  </li>
                  <br />

                  <li>
                    <span className="span_avai fw-bold">
                      VFS | Digital Recognition
                    </span>
                    : Developed a Digital Recognition system using Next.js and
                    Tailwind CSS to authenticate documents and ID cards.
                    Implemented image enhancement techniques and signature
                    verification to ensure accuracy and security.
                  </li>
                  <br />

                  <li>
                    <span className="span_avai fw-bold">
                      SYM | Video Conferencing App
                    </span>
                    : Key contributor to the SYM Video Conferencing App,
                    leveraging Next.js, Tailwind CSS, and Redux for optimal
                    performance.
                  </li>
                  <br />

                  <li>
                    <span className="span_avai fw-bold">
                      NITB | Driver Alertness Detection
                    </span>
                    : Led the front-end development of the NITB: Driver
                    Alertness Detection system, creating an intuitive interface
                    for real-time monitoring.
                  </li>
                  <br />
                  <li>
                    <span className="span_avai fw-bold">
                      ACE | E-Commerce Store
                    </span>
                    : I am currently working on a ACE website like that
                    E-Commerce which utilized a Redux Toolkit.
                  </li>
                </ul>
              </div>
              <div className="resume-item mt-5">
                <h4 className="span_avai">M-Tech Soft</h4>
                <h5>2 Years Experience</h5>
                <p>
                  <em>Software Company Lahore, Pakistan</em>
                </p>
                <ul>
                  <li>
                    2 year experience in MTECHSOFT as a Front-End Developer
                    (Booststrap-4/5 + React JS + Node JS + Mongo DB). I already
                    worked in an organization named MTECHSOFT software house and
                    also I received certificate from this organization.
                  </li>
                  <li>
                    I have worked on 2 big e-commerce projects at their office.
                    <ul>
                      <li>https://www.byggfix.se/</li>
                      <li>https://www.mialzo.com/</li>
                    </ul>
                  </li>
                  <li>
                    I have worked on the UI to create their official website
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Certificates */}
      <div className="container mt-5">
        <div className="section-title d-flex align-items-center gap-3">
          <h2 className="fw-bold text-white">Certificates & Achievements </h2>
          <p className="fw-bold main_text_color">_________________</p>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="p-2 p-lg-5 mt-4">
                    <h3 className="lead2 fw-bold">
                      {slides[currentIndex].title}
                    </h3>
                    <p className="lead">{slides[currentIndex].description}</p>
                    <p className="lead2 d-flex align-items-center certi_cursor">
                      {slides[currentIndex].readmore}
                      <i className="bi bi-arrow-right-short certificate_arrow_animation"></i>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="md-macbook-pro md-glare">
                    <div className="md-lid">
                      <div className="md-camera"></div>
                      <div className="md-screen">
                        <div className="carousel">
                          <img
                            className="d-block w-100"
                            src={slides[currentIndex].image}
                            alt={`Slide ${currentIndex + 1}`}
                            onClick={() =>
                              handleClick(slides[currentIndex].image)
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="md-base"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        {fullWidthImage && (
          <div
            className="full-width-image-overlay"
            onClick={closeFullWidthImage}
          >
            <div className="full-width-image">
              <div>
                <span
                  className="submit_btn text-white rounded"
                  onClick={closeFullWidthImage}
                >
                  Close Document <i className="bi bi-x-octagon"></i>
                </span>
              </div>
              <img
                src={fullWidthImage}
                alt="Full Width"
                className="mt-3"
                width="20%"
              />
            </div>
          </div>
        )}
      </div>
      {/* Portfolio */}
      <div className="container mt-4">
        <div className="section-title d-flex align-items-center gap-3 pb-2">
          <h3 className="fw-bold text-white">Projects Portfolio</h3>
          <p className="fw-bold main_text_color">_________________</p>
        </div>
        <div className="row mt-4">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="ps-4 pe-4">
              <img
                src={data[displayIndex].imageUrl}
                alt="Background"
                className="img-fluid rounded about_port_img"
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="mt-4">
              <h4 className="blog_h3">{data[displayIndex].heading}</h4>
              <p className="blog_p p-0 m-0">{data[displayIndex].description}</p>
              <p className="blog_p p-0 m-0 mt-5">Category: </p>
              <p className="blog_p m-0 p-0 text-end">
                {data[displayIndex].category}
              </p>
              <p className="blog_p p-0 m-0">Client: </p>
              <p className="blog_p text-end p-0 m-0">
                {data[displayIndex].client}
              </p>
              <p className="blog_p p-0 m-0">Project URL: </p>
              <Link to="/" className="text-decoration-none text-end m-0 p-0">
                <p className="text-decoration-underline lh-2 p-0 m-0">
                  {data[displayIndex].projectUrl}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <button
          className="submit_btn rounded fw-bold me-2 d-flex m-0 p-0 ps-2 pe-3 align-items-center"
          onClick={handlePrev}
          disabled={displayIndex === 0} // Disable when at the beginning
        >
          <i className="bi bi-arrow-left-short fs-3 p-0 m-0 me-1"></i> Prev
        </button>
        <button
          className="submit_btn rounded fw-bold me-2 d-flex m-0 p-0 ps-3 pe-2 align-items-center"
          onClick={handleNext}
          disabled={displayIndex === data.length - 1} // Disable when at the end
        >
          Next <i className="bi bi-arrow-right-short fs-3 p-0 m-0"></i>
        </button>
      </div>
      {/* Libraries */}
      <div className="container mb-5">
        <div className="row mt-4">
          <div className="col-lg-12 col-md-12 col-sm-12 ">
            <div className="about_industries rounded">
              <h3 className="text-center pt-3 pb-3 fw-bold text-white text-uppercase">
                Using Tools & Third Party Libraries
              </h3>
              <div className="row pt-4">
                {industries.map((data, index) => (
                  <div className="col-lg-2 col-md-3 col-sm-6">
                    <div key={index} className="text-center">
                      <div className="d-flex justify-content-center">
                        <div className="libra_icon rounded-circle">
                          <img src={data.imageUrl} alt="icon" width={60} />
                        </div>
                      </div>
                      <div>
                        <h5 className="pt-3 pb-3 text-white ">{data.name}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="container">
        <div className="row mt-5 pt-3 mb-3">
          <div className="col-12">
            <div className="foo_patti rounded">
              <div className="d-flex justify-content-center align-items-center pt-2 pb-2">
                <p className="p-0 m-0 text-white">
                  © All Rights Reserved @ 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

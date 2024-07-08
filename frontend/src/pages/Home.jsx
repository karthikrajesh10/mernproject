import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle'


import '../styles/home.css'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from "../components/Testimonial/Testimonials"
import NewsLetter from '../shared/NewsLetter'






const Home = () => {
  return <>
  {/* ======== hero section start ======== */}
  <section>
     <Container>
       <Row>
         <Col lg='6'>
           <div className="hero__content">
               <div  className="hero_subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'}/>
                 <img src={worldImg} alt=""  style={{width:'2.3rem',height:'2.3rem'}} />
               </div>
               <h1>Traveling opens the door to creating <span className="highlight">memories</span></h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, inventore iure? Id magnam iste voluptatibus iusto nulla commodi est mollitia nisi quasi quo? Et perspiciatis impedit similique, adipisci exercitationem numquam.</p>
           </div>
         </Col>
         <Col lg='2'>
           <div className="hero__img-box">
             <img src={heroImg} alt="" />
           </div>
         </Col>
         <Col lg='2'>
           <div className="hero__img-box mt-4" >
             <video src={heroVideo} alt="" controls/>
           </div>
         </Col>
         <Col lg='2'>
           <div className="hero__img-box mt-5">
             <img src={heroImg02} alt="" />
           </div>
         </Col>

         <SearchBar/>
       </Row>
     </Container>
       
  </section>
  {/* ======== hero section start ======== */}
  <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className="services__subtitle">What we provide</h5>
          <h2 className='services__title'>We offer our best services</h2>

        </Col>
        <ServiceList/>
      </Row>
    </Container>
  </section>
   {/*======== feature tour section start ========*/}
   <section>
     <Container>
       <Row>
        <Col lg='12' className="mb-5">
          <Subtitle subtitle={'Explore'}/>
          <h2 className="featured__tour-title">Our Featured Tours </h2>
        </Col>
        <FeaturedTourList/>
       </Row>
     </Container>
   </section>
   {/*======== feature tour section end ========*/}
   {/*======== Experience section start ======== */}
   <section>
     <Container>
       <Row>
        <Col lg='6'>
          <div className="experience__content">
            <Subtitle subtitle={'Experience'}/>

            <h2>With our all Experience <br />we will serve you</h2>
            <p>This is the space to share the experience. <br />Hope you liked the page.</p>
          </div>

          <div className="counter__wrapper d-flex aligh-items-center gap-5">
            <div className="counter__box">
              <span>12k+</span>
              <h6>Successful Trips</h6>
            </div>
            <div className="counter__box">
              <span>2k+</span>
              <h6>Regular Clients</h6>
            </div>
            <div className="counter__box">
              <span>15</span>
              <h6>Years Experience</h6>
            </div>
          </div>
        </Col>
        <Col lg='6'>
          <div className="experience__img">
            <img src={experienceImg} alt="" />
          </div>
        </Col>
       </Row>
     </Container>
   </section>
   {/*======== Experience section end ======== */}
   {/*======== Gallery section start ======== */}
   <section>
     <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={'Gallery'}/>
          <h2 className="gallery__title">Visit Our Customers Tour</h2>
         </Col>
         <Col lg='12'>
           <MasonryImagesGallery/>
         </Col>
      </Row>
     </Container>
   </section>
   {/*======== Gallery section end ======== */}

   {/*======== Testimonial  section end ======== */}

   <section>
     <Container>
       <Row>
         <Col lg='12'>
           <Subtitle subtitle={'Fans Love'}/>
           <h2 className='testimonal__title'>What our fans words about us</h2>
         </Col>
         <Col lg='12'>
           <Testimonials/>
         </Col>
       </Row>
     </Container>
   </section>

   {/*======== Testimonial  section end ======== */}
   <NewsLetter/>

  </>
}

export default Home
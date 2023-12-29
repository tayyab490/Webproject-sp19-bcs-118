import React from 'react';
import {Helmet} from "react-helmet"
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Gallery from '../components/HomeComps/Photo-gallery/Gallery';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Hero from '../components/HomeComps/Hero';
import QnAlist from '../components/HomeComps/QuestionsList/QnAlist';


const Home = () => {

  return (
    <>
    <Helmet>
      <title>Home</title>
      <meta
        name='description'
        content='Find best doctors online'
      />
    </Helmet>
    <Hero />
    
    <Container fluid="md" style={{marginTop:"3rem", color:"#343531", borderRadius:"15px", padding:"3rem", boxShadow: "0px 10px 30px rgba(0,0,0,0.2)"}}>
      <h1>Find doctors by health concern</h1>
      <p>DoctorOnline is now Pakistan #1 health care solution.</p>

      <Gallery />
    </Container>

    <Container fluid="md" style={{marginTop:"3rem",color:"#8bb4bd"}}>
      <h1>Find and book the best doctors near you</h1>
      <p>Book appointments with the best Doctors and Specialists such as<br/>Gynecologists, Skin Specialists, Child Specialists, Surgeons, etc. in Pakistan conveniently.</p>
      
      
      <Image mt="3" fluid="true" rounded="true" thumbnail="true"
      src="./images/img_2.jpg"
      alt=""
      style={{boxShadow: "3px 3px #8bb4bd"}}></Image>
    </Container>
    

    <Container style={{marginTop:"3rem", color:"#8bb4bd"}}>
    <h1>FAQ</h1>
      <QnAlist />
    </Container>    
    </>
  )
}

export default Home
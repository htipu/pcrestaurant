import React from 'react';
import { Typography, Box} from '@mui/material';
import './AboutUs.css';
import TimImage from './images/Tim.jpg';
import HamidImage from "./images/Hamid-modified.png";
import BasicTabs from './Tabs';
import MattPic from './images/Matt.jpeg';
import LancePic from './images/Lance.jpg'
import Footer from './Footer'

function AboutUs() {
  
  
  const ImageDisplay = ({ src, alt }) => 
    {return ( <img src={src} alt={alt} style={{ maxWidth: '50%', maxHeight: '50%', borderRadius: '50%' }} /> );
}

  return (
    <><Box>
      <BasicTabs></BasicTabs>
      <Typography id='Header' variant="h1" gutterBottom color='white'>
        About Us
      </Typography>
      <Box>
        <Typography id='Header' variant="h3" gutterBottom color='white'>
          Team HTML
        </Typography>
      </Box>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', textAlign: 'center', gridGap: '50px' }}>
        <div class='bio'>
          <Typography variant="h4" paragraph>
            Hamid
          </Typography>
          <ImageDisplay src={HamidImage} alt='Hamid'></ImageDisplay>
          <Typography variant="p" paragraph>
            I'm Hamid Tipu, a 2nd year Computer Science student from Wappingers Falls who's interested in being a productive member of society. Currently, I've been honing my skills by sleeping, watching shows, and generally wasting time or finding new ways to waste time. Thank you for visiting our website!
          </Typography>
        </div>
        <div class='bio'>
          <Typography variant="h4" paragraph>
            Tim
          </Typography>
          <ImageDisplay src={TimImage} alt='Tim'></ImageDisplay>
          <Typography variant="p" paragraph>
            I'm Tim Ford, a student at Marist College, majoring in Computer Science with a concentration in Software Development. I've been coding since the beginning of high school, and since then have only continued furthering my research into many areas of Computer Science. I have experience with languages like Python, Java, and JavaScript, as well as frameworks such as React. Beyond my studies, I'm involved in the Marist College Computer Society and enjoy rock climbing. Thanks for stopping by!
            </Typography>
          </div>
          <div class = 'bio'>
            <Typography variant="h4" paragraph>
              Matt
            </Typography>
            <ImageDisplay src = {MattPic} alt = 'Matt'></ImageDisplay>
            <Typography variant="p" paragraph>
            I am Matthew Brana. I am a Computer Science major at Marist College. I have a strong interest in the fields of back end development. I spend my time hanging out with friends and playing volleyball.
            </Typography>
          </div>
          <div class = 'bio'>
            <Typography variant="h4" paragraph>
              Lance
            </Typography>
            <ImageDisplay src = {LancePic} alt = 'Lance'></ImageDisplay>
            <Typography variant="p" paragraph>
              I'm a computer science major at Marist College with a focus on software developement. I have experience with java, python, html, css, javascript, and react. In my free time, I enjoy rock climbing and snowboarding.
            </Typography>
          </div>
        </div>
        <Footer></Footer>
      </Box></>
  );
}

export default AboutUs;
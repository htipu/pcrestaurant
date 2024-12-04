import React from 'react';
import { Typography, Box} from '@mui/material';
import './AboutUs.css';
import TimImage from './images/Tim.jpg';


function AboutUs() {
  
  
  const ImageDisplay = ({ src, alt }) => 
    {return ( <img src={src} alt={alt} style={{ maxWidth: '50%', maxHeight: '50%', borderRadius: '50%' }} /> );
}

  return (
    <><Box sx={{
      backgroundColor: '#f14545'
    }}>
      <Typography id = 'Header' variant="h1" gutterBottom color='white'>
        About Us
      </Typography>
    </Box>
    <Box>
    <Typography id = 'Header' variant="h3" gutterBottom color='black'>
        Team HTML
      </Typography>
      <div style = {{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', textAlign: 'center', gridGap: '50px'}}>
        <div class = 'bio'>
            <Typography variant="h4" paragraph>
              Hamid
            </Typography>
            
            <Typography variant="p" paragraph>
              Hamid - Write your bio here.
            </Typography>
          </div>
          <div class = 'bio'>
            <Typography variant="h4" paragraph>
              Tim
            </Typography>
            <ImageDisplay src = {TimImage} alt = 'Tim'></ImageDisplay>
            <Typography variant="p" paragraph>
            I'm Tim Ford, a student at Marist College, majoring in Computer Science with a concentration in Software Development. I've been coding since the beginning of high school, and since then have only continued furthering my research into many areas of Computer Science. I have experience with languages like Python, Java, and JavaScript, as well as frameworks such as React. Beyond my studies, I'm involved in the Marist College Computer Society and enjoy rock climbing. Thanks for stopping by!
            </Typography>
          </div>
          <div class = 'bio'>
            <Typography variant="h4" paragraph>
              Matt
            </Typography>
            <Typography variant="p" paragraph>
              Matt - Write your bio here.
            </Typography>
          </div>
          <div class = 'bio'>
            <Typography variant="h4" paragraph>
              Lance
            </Typography>
            <Typography variant="p" paragraph>
              Lance - Write your bio here.
            </Typography>
          </div>
        </div>
      </Box></>
  );
}

export default AboutUs;
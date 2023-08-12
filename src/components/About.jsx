import React, { forwardRef } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import resume from '../assets/Resume.pdf';

function About(props, refAbout){
      return(
        
        <Container ref={refAbout} sx={{bgcolor:'#eeeeee', mt:1, pt:25}} maxWidth="md">
          <Box className=''
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="20"
            data-aos-duration="750"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center">

            <Typography className='title' sx={{pt:2, pb:2}} bgcolor='dark' variant='h3' fontFamily={'Shadows Into Light Two'}>About Me</Typography>

            <Typography variant='h6' sx={{px:4, py:1, textAlign: 'left'}}>

              My journey has encompassed a diverse range of skills, from curriculum development and data analysis to project management. I excel in creating engaging, accessible learning experiences by blending technical expertise with educational insight. I'm look forward to learning new and emerging technologies.
            </Typography>

            <Typography variant='h6' sx={{px:4, py:1, textAlign: 'left'}}>
            Explore my projects and experience. Whether you're seeking a dedicated team member or looking to collaborate, I'm just a message away. Let's connect!
            </Typography>
          </Box>

          <Button sx={{my:4, px:5, fontSize:'1.25rem',}} 
              variant="outlined"  
              endIcon={<PictureAsPdfIcon />} 
              size="large" 
              color="secondary" 
              elevation='5' 
              href={resume}
              target = "_blank"
              >Resume
          </Button>

        </Container>
      );
    }
    export default forwardRef(About);
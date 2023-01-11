import Image from 'next/image';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Box } from '@chakra-ui/react';

const Slideshow = () => {
  const fadeImages = [
    {
    url: '/slide1.png',
    caption: 'slide'
    },
    {
    url: '/slide2.png',
    caption: 'slide'
    },
    {
    url: '/slide3.png',
    caption: 'slide'
    },
    {
      url: '/slide4.png',
      caption: 'slide'
    }
  ];

  return (
    <Box className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <Image src={fadeImage.url} alt='slide show' width={500} height={500}/>
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </Box>
  )
}
export default Slideshow;
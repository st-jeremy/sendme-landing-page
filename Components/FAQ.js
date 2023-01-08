import Image from "next/image";
import styles from '../styles/Home.module.css';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react';

const FAQ = () => {
  return ( 
    <div className={ styles.FAQ }>
      <div className={ styles.row }>
        <div className={styles.box1}>
          <Image src='/FAQ.png' width={100}  height={100} alt='FAQ'/>
        </div>
        <div className={ styles.box2 }>
          <h2>You Asked, We Answered.</h2>
          <p>Frequently asked questions from our customers</p>
        </div>
      </div>

      <Accordion>
        <AccordionItem style={{
          borderTop: 'none',
          // fontSize: '10pt'
        }}>
          <h2>
            <AccordionButton >
              <Box flex='1' textAlign='left' className={ styles.accBox }>
                Who Can Order meat on sendme ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel className={ styles.accPanel } pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left' className={ styles.accBox }>
                What’s the standard delivery time <br /> for a meat ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel className={ styles.accPanel } pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'  className={ styles.accBox }>
                How do I order meat ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel className={ styles.accPanel } pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
   );
}
 
export default FAQ;
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsArrowUpRight } from 'react-icons/bs';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react';
import Slideshow from '../Components/Slideshow';


export default function Home() {

  return (
    <>
      <Head>
        <title>Sendme</title>
        <meta name="description" content="Sendme Landing Page" />
        <link rel="icon" href="/sendme-logo.png" />
      </Head>

      <div className={ styles.content }>
        

        <div  className={styles.freshchat}>
          <Image src='/freshchat-icon.png'  width={60} height={41}  className={ styles.freshchatIcon }  alt='freshchat icon'/>
        </div>

        <div className={styles.comingSoon}>
          <Image src='/coming-soon-phone.png' width={700} height={51}  quality="100" className={styles.comingSoonPhone} alt='google play'/>
          <Image src='/coming-soon-phone.png' width={1400} height={51}  quality="100" className={styles.comingSoonTab} alt='google play'/>
          <Image src='/coming-soon-laptop.png' width={1940} height={51}  quality="100" className={styles.comingSoonLaptop} alt='google play'/>
        </div>

        <div className={styles.animalProtein}>
          <h2>Buy Animal Proteins</h2>
          <p>All your favorite meat in one stop </p>

          <div className={styles.products}>
            <div className={ styles.box }>
              <Image src='/goat.png' width={89}  height={89} alt='goat'/>
              <p>Goat</p>
            </div>
            <div className={ styles.box }>
              <Image src='/cow.png' width={89}  height={89} alt='cow'/>
              <p>Cow</p>
            </div>
            <div className={ styles.box }>
              <Image src='/fish.png' width={89}  height={89} alt='fish'/>
              <p>Fish</p>
            </div>
              <div className={ styles.box }>
              <Image src='/chicken.png' width={89}  height={89} alt='chicken'/>
              <p>Chicken</p>
            </div>
          </div>
        </div>

        <div className={styles.B2B}>
          <h2>
            We Also Sell <span className={ styles.red }>Meat</span> 
            <br />
            To Businesses.
          </h2>

          <p>We currently deliver a variety of the best animal protein to over 100 restaurants and hotels, helping them meet their business needs by creating the best meat experience for their customers and increasing their sales and profit margin.
          </p>

          <div className={styles.businesses}>
            <Image src='/spar-logo.png' width={88}  height={15} className={ styles.biz} alt='SPAR logo'/>
            <Image src='/kili-logo.png'  width={88}  height={15} className={ styles.biz} alt='Kilimanjaro logo'/>
            <Image src='/chicken-logo.png'  width={50}  height={40} className={ styles.biz} alt='Chicken and Co logo'/>
            <Image src='/B-logo.png'  width={20} height={15}  className={ styles.biz }  alt='B-logo'/>
          </div>
          <br />

          <a href="http://business.sendme.ng" className={ styles.B2BLink}>
            Order meat for your business &nbsp; &nbsp;
            <AiOutlineArrowRight  style={{
              display: 'inline-block',
              paddingTop: '.2rem'
            }}/>
          </a>
        </div>

        <div className={styles.earnWithSendme}>
          <div className={styles.col1}>
            <h2>Would you like to Earn With <span className={ styles.red}>Sendme</span>?</h2>
            <p>You can make money just by buying sendme products on behalf of your friends, colleagues, or neighbors.</p>

            <p>You can earn:</p>

            <div className={styles.box}>
              <Image src='/bullet.png'  width={20}  height={26} className={styles.boxImg}  alt='bullet'/>
              <li>
              <ol><b>N300</b> on every new customer order;</ol>
              </li>
            </div>

            <div className={styles.box}>
              <Image src='/bullet.png'  width={20}  height={26} className={styles.boxImg} alt='bullet'/>
              <li>
                <ol><b>N100</b> when they order product above N1,000; </ol>
              </li>
              
            </div>

            <div className={styles.box}>
              <Image src='/bullet.png'  width={20}  height={1} className={styles.boxImg} alt='bullet'/>
              <li>
                <ol><b>N50</b> when they order products below N1000.</ol>
              </li>
              
            </div>

            <button>
              Start Earning &nbsp;<BsArrowUpRight style={{
                display: 'inline-block',
                paddingTop: '.3rem'
              }} />
            </button>
          </div>

          <div  className={styles.col2}>
            <Image src='/ewsImg.png'  width={2000} height={41}  className={ styles.ewsImg }  alt='ews image'/>
          </div>

        </div>

        <div className={styles.mobileApp}>
          <div className={styles.box1}>
            <h2>Make The Best Meals With the Best Meat</h2>
            <p>Order meat on sendme mobile app</p>
          
            <div className={ styles.store }>
              <Image src='/app-store.png' width={142}  height={41} alt='app store'/>
              <Image src='/google-play.png' width={142}  height={41} alt='google play'/>
            </div>
          </div>

          <div className={styles.box2}>
            <Image src='/mobileScreen.png' width={ 500 } height={ 500 } className={ styles.mobileScreen }alt='mobile screen'/>
          </div>
        </div>

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
      </div>
      
    </>
  )
}

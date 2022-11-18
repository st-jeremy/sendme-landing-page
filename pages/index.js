import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react';


export default function Home() {
  return (
    <>
      <Head>
        <title>Sendme</title>
        <meta name="description" content="Sendme Landing Page" />
        <link rel="icon" href="/sendme-logo.png" />
      </Head>

      <div className={ styles.content }>
        <div className={ styles.header }>
          <h1 className={ styles.mainHeading }>
            Get The <span className={ styles.red }> <br />
            Best Meat</span> in <span  className={ styles.grey }>30</span>Mins.
          </h1>
          <br />

          <p className={ styles.grey }>Focus on the things that matter while we handle your animal protein needs by giving you premium quality meat at the best prices.
          </p>
          <br />

          <button className={ styles.btn}>
            Order meat on web now &nbsp; &nbsp;
            <AiOutlineArrowRight style={{
              display: 'inline-block',
              paddingTop: '.2rem'
              }} 
            />
          </button>
          <br />
          <br />

          <p className={ styles.black }>or Get the app</p>
          <div className={ styles.store }>
            <Image src='/app-store.png' width={142}  height={41} alt='app store'/>
            <Image src='/google-play.png' width={142}  height={41} alt='google play'/>
          </div>
        </div>

        <div className={styles.comingSoon}>
          <Image src='/coming-soon.png' width={700} height={51}  quality="100" alt='google play'/>
        </div>

        <div className={styles.animalProtein}>
          <h1>Buy Animal Proteins</h1>
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
          <h1>
            We Also Sell <span className={ styles.red }>Meat</span> 
            <br />
            To Businesses.
          </h1>

          <p>We currently deliver a variety of the best animal protein to over 100 restaurants and hotels, helping them meet their business needs by creating the best meat experience for their customers and increasing their sales and profit margin.
          </p>

          <div className={styles.businesses}>
            <Image src='/spar-logo.png' width={88}  height={15} className={ styles.biz} alt='SPAR logo'/>
            <Image src='/kili-logo.png'  width={88}  height={15} className={ styles.biz} alt='Kilimanjaro logo'/>
            <Image src='/chicken-logo.png'  width={88}  height={15} className={ styles.biz} alt='Chicken and Co logo'/>
            <Image src='/B-logo.png'  width={88} height={15} alt='B-logo'/>
          </div>
          <br />

          <a href="">
            Order meat for your business &nbsp; &nbsp;
            <AiOutlineArrowRight  style={{
              display: 'inline-block',
              paddingTop: '.2rem'
            }}/>
          </a>
        </div>

        <div className={styles.earnWithSendme}>
          <h1>Would you like to Earn With <span className={ styles.red}>Sendme</span>?</h1>
          <p>You can make money just by buying sendme products on behalf of your friends, colleagues, or neighbors.</p>

          <p>You can earn:</p>
          <div className="box">
            <Image src='/bullet.png'  width={20}  height={26} alt='bullet'/>
            <p><b>N300</b> on every new customer your order for,</p>
          </div>

          <div className="box">
            <Image src='/bullet.png'  width={20}  height={26} alt='bullet'/>
            <p><b>N100</b> when they order product above N1000</p>
          </div>

          <div className="box">
            <Image src='/bullet.png'  width={20}  height={26} alt='bullet'/>
            <p><b>N50</b>when they order products below #1000</p>
          </div>

          <button>Start Earning</button>
        </div>

        <div className={styles.mobileApp}>
          <h1>Make The Best Meals With the Best Meat</h1>
          <p>Order meat on sendme mobile app</p>

          <div className={ styles.store }>
            <Image src='/app-store.png' width={142}  height={41} alt='app store'/>
            <Image src='/google-play.png' width={142}  height={41} alt='google play'/>
          </div>

          <div>
            <Image src='/mobileApp.png' width={ 500 } height={ 500 } alt='mobile app'/>
          </div>
        </div>

        <div className={ styles.FAQ }>
          <div className={ styles.row }>
            <div className={styles.box1}>
              <Image src='/FAQ.png' width={100}  height={100} alt='FAQ'/>
            </div>
            <div className={ styles.box2 }>
              <h1>You Asked, We Answered.</h1>
              <p>Frequently asked questions from our customers</p>
            </div>
          </div>

          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    Who Can Order meat on sendme ?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    What’s the standard delivery time for a meat ?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    How do I order meat ?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
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

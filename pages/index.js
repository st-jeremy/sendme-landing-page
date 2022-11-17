import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.css';

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
        <link rel="icon" href="/public/sendme-logo.png" />
      </Head>

      <div className={ styles.content }>
        <div className={ styles.header }>
          <h1 className={ styles.mainHeading }>Get The <span className={ styles.red }>Best meat</span>  in <span  className={ styles.grey }>30</span>mins</h1>

          <p className={ styles.grey }>Focus on the things that matter while we handle your animal protein needs by giving you premium quality meat at the best prices.
          </p>
          <br />

          <input type="button" value="Order meat on web now" />
          <br />
          <br />

          <p className={ styles.black }>or get the app</p>
          <div className={ styles.store }>
            <Image src='/app-store.png' width={142}  height={41} alt='app store'/>
            <Image src='/google-play.png' width={142}  height={41} alt='google play'/>
          </div>
        </div>

        <div className={styles.comingSoon}>
          <Image src='/coming-soon.png' width={700}  height={51} alt='google play'/>
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
          <h1>We Also Sell Meat to Businesses </h1>
          <p>We currently deliver a variety of the best animal protein to over 100 restaurants and hotels, helping them meet their business needs by creating the best meat experience for their customers and increasing their sales and profit margin.
          </p>

          <div className={styles.businesses}>
            <Image src='/spar-logo.png' width={88}  height={26} alt='SPAR logo'/>
            <Image src='/kili-logo.png'  width={88}  height={26} alt='Kilimanjaro logo'/>
            <Image src='/chicken-logo.png'  width={88}  height={26} alt='Chicken and Co logo'/>
            <Image src='/B-logo.png'  width={88}  height={26} alt='B-logo'/>
          </div>

          <a href="">Order meat for your business</a>
        </div>

        <div className={styles.earnWithSendme}>
          <h1>Would you like to Earn With Sendme ?</h1>
          <p>You can make money just by buying sendme products on behalf of your friends, colleagues, or neighbors.</p>
          <p>You can earn:</p>
          <ol>N300 on every new customer your order for,</ol>
          <ol>N100 when they order product above N1000,</ol>
          <ol>N50 when they order products below #1000</ol>

          <input type="button" value="Start Earning" />
        </div>

        <div className="mobileApp">
          <h1>Everyday Protein, Delivered</h1>
          <p>Order meat on sendme mobile app</p>

          <Image src='/google-play.png' width={142}  height={200} alt='google play'/>
          <Image src='/google-play.png' width={142}  height={200} alt='google play'/>
          <Image src='/google-play.png' width={142}  height={200} alt='google play'/>
        </div>

        <div className="FAQ">
          <h1>You Asked, We Answered.</h1>
          <p>Frequntly asked questions from our customers</p>

          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    Section 1 title
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
                    Section 2 title
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
                    Section 2 title
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
                    Section 2 title
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

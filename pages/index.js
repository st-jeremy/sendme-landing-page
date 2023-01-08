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
import Header from '../Components/Header';
import FreshChat from '../Components/FreshChat';
import ComingSoon from '../Components/ComingSoon';
import AnimalProtein from '../Components/AnimalProtein';
import B2B from '../Components/B2B';
import EarnWithSendme from '../Components/EarnWithSendme';
import MobileApp from '../Components/MobileApp';
import FAQ from '../Components/FAQ';


export default function Home() {

  return (
    <>
      <Head>
        <title>Sendme</title>
        <meta name="description" content="Sendme Landing Page" />
        <link rel="icon" href="/sendme-logo.png" />
      </Head>

      <div className={ styles.content }>
        <Header />

        <FreshChat />

        <ComingSoon />

        <AnimalProtein />

        <B2B />

        <EarnWithSendme />

        <MobileApp />

        <FAQ />
      </div>
      
    </>
  )
}

import Image from 'next/image';
import { BiMenu } from 'react-icons/bi';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Box
} from '@chakra-ui/react';

export default function Hamburger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState('right');

  const menuStyle = {
    position: 'absolute',
    right: '4%',
    top: '35%',
    color: 'isWhiteSpaceLike',
    backgroundColor: 'white',
    height: '1.5rem',
    width: 'fit-content'
  };

  return (
    <Box  className={ styles.hamburger } >
      <Button onClick={onOpen} left style={ menuStyle } className={ styles.hamburger}>
        < BiMenu />
      </Button>

      <Drawer 
        placement='right'
        onClose={onClose} 
        isOpen={isOpen}
        className={ styles.drawer}
      >

        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            <Image src='/sendme-logo.png' width={70}  height={29} alt='sendme logo'/>
          </DrawerHeader>

          <DrawerBody width='100%' styles={ {
            marginBottom: '1rem',
            fontWeight: 500
          }}>

            <Link href="/WhoWeAre">
              Our Products 
              <IoMdArrowDropdownCircle style={{
                display: 'inline-block',
                paddingTop: '.2rem'
                }} />
            </Link> <br />
            <br />

            <Link href="/">
              For Businesses 
              <IoMdArrowDropdownCircle style={{
              display: 'inline-block',
              paddingTop: '.2rem'
              }} />
            </Link> <br />
            <br />

            <Link href="/Career">
              Our Culture
              <IoMdArrowDropdownCircle style={{
              display: 'inline-block',
              paddingTop: '.2rem'
              }} />
            </Link>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
};
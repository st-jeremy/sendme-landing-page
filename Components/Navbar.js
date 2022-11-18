import Image from "next/image";
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  RadioGroup,
  Radio,
  Stack,
  Button,
  useDisclosure,
  IconButton
} from '@chakra-ui/react';

import React from "react";
import { isWhiteSpaceLike } from "typescript";

const Navbar = () => {

  function PlacementExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')

    const menuStyle = {
      position: 'absolute',
      right: 0,
      top: 0,
      color: 'isWhiteSpaceLike',
      backgroundColor: 'white'
    }

  
    return (
      <>
        <RadioGroup defaultValue={placement} onChange={setPlacement}>
          
        </RadioGroup>
        <Button onClick={onOpen} left style={ menuStyle }>
          <Image src='/menu.png' width={30}  height={30} alt='sendme logo'/>
        </Button>
        

        <Drawer placement={placement} onClose={onClose} isOpen={isOpen} size={ 50 }>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              <Image src='/sendme-logo.png' width={70}  height={29} alt='sendme logo'/>
            </DrawerHeader>

            <DrawerBody width='50%' >
              <Link href="/">Our Products</Link> <br />
              <Link href="/">For Businesses</Link> <br />
              <Link href="/">Our Culture</Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  

  return (

    <div className={ styles.navbar }>
      <Image src='/sendme-logo.png' width={70}  height={29} className={ styles.menu } alt='sendme logo'/>
      <PlacementExample  />
    </div>

  );
}
 
export default Navbar;
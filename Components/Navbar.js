import Image from "next/image";
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { AiOutlineArrowRight } from 'react-icons/ai';


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

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider
} from '@chakra-ui/react';

import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

import React from "react";

const Navbar = () => {

  function PlacementExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')

    const menuStyle = {
      position: 'absolute',
      right: 0,
      top: 15,
      color: 'isWhiteSpaceLike',
      backgroundColor: 'white',
      height: '1.5rem',
      width: 'fit-content'
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

              <Link href="/">
                For Businesses 
                <IoMdArrowDropdownCircle style={{
                display: 'inline-block',
                paddingTop: '.2rem'
                }} />
              </Link> <br />

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
      </>
    )
  };


  return (
    <div className={ styles.navbar }>
      <Image src='/sendme-logo.png' width={70}  height={29} className={ styles.menu } alt='sendme logo'/>

      <PlacementExample  />

      <Menu>
        <MenuButton as={Button}>
          Our Products 
          <IoMdArrowDropdownCircle style={{
            display: 'inline-block',
            paddingTop: '.2rem'
            }} />
        </MenuButton>

        <MenuList>
          <MenuGroup title='Our Products'>
            <MenuDivider style={{
              width: '89%',
              margin: 'auto',
              borderTop: '2px solid #f7f7f7'
              }}
            />

            <MenuItem style={{
              marginTop: '1rem',
              paddingLeft: '2rem'
              }}
            >
              <Image
              boxSize='2rem'
              borderRadius='full'
              src='/cow.png'
              alt='Simon the pensive'
              mr='12px'
              width={ 30 }
              height={ 30 }
              /> &nbsp; 
              Cow Meat 
              <AiOutlineArrowRight style={{
                display: 'inline-block',
                paddingTop: '.2rem'
                }} 
              /> 
              <span>Fluffybuns the Destroyer</span>
            </MenuItem>

            <MenuItem style={{
              marginTop: '1rem',
              paddingLeft: '2.5rem'
              }}
            >
              <Image
                boxSize='2rem'
                borderRadius='full'
                src='/cow.png'
                alt='Simon the pensive'
                mr='12px'
                width={ 30 }
                height={ 30 }
              /> &nbsp;
              Goat Meat 
              <AiOutlineArrowRight style={{
                display: 'inline-block',
                paddingTop: '.2rem'
                }} 
              />
            </MenuItem>

            <MenuItem style={{
              marginTop: '1rem',
              paddingLeft: '2.5rem'
              }}
            >
              <Image
                boxSize='2rem'
                borderRadius='full'
                src='/cow.png'
                alt='Simon the pensive'
                mr='12px'
                width={ 30 }
                height={ 30 }
              /> &nbsp;
              Chicken 
              <AiOutlineArrowRight style={{
                display: 'inline-block',
                paddingTop: '.2rem'
                }} 
              />
            </MenuItem >

            <MenuItem style={{
              marginTop: '1rem',
              paddingLeft: '2rem'
              }}
            >
              <Image
                boxSize='2rem'
                borderRadius='full'
                src='/cow.png'
                alt='Simon the pensive'
                mr='12px'
                width={ 30 }
                height={ 30 }
              /> &nbsp;
              Fish 
              <AiOutlineArrowRight style={{
                display: 'inline-block',
                paddingTop: '.2rem'
                }} 
              />
            </MenuItem>

            <MenuDivider />
            <MenuItem>Download our Mobile App</MenuItem>
            <Image
              boxSize='2rem'
              src='/app-store.png'
              alt='app-store'
              mr='12px'
              width={ 150 }
              height={ 90 }
            />

            <Image
              boxSize='2rem'
              src='/google-play.png'
              alt='google-play'
              mr='12px'
              width={ 150 }
              height={ 90 }
            />
          </MenuGroup>

        </MenuList>
      </Menu>

      <Menu>
        <MenuButton as={Button}>
          Our Products 
          <IoMdArrowDropdownCircle style={{
            display: 'inline-block',
            paddingTop: '.2rem'
            }} />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton as={Button}>
          Our Products 
          <IoMdArrowDropdownCircle style={{
            display: 'inline-block',
            paddingTop: '.2rem'
            }} />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>

    </div>

  );
}
 
export default Navbar;
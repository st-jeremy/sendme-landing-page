import Image from "next/image";
import AiOutlineMenu from 'react-icons/ai';

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
  MenuDivider,
  ChevronDownIcon,
  HamburgerIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  AddIcon
} from '@chakra-ui/react'


import React from "react";

const Navbar = () => {

  function PlacementExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
  
    return (
      <>
        <RadioGroup defaultValue={placement} onChange={setPlacement}>
          
        </RadioGroup>
        <Button colorScheme='blue' onClick={onOpen} >
        Shade
        </Button>
        

        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  return (
    <>
      <h1>Sendme</h1>

      <PlacementExample />

    
    </>
  );
}
 
export default Navbar;
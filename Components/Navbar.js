import Image from "next/image";
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import Hamburger from "./Hamburger";
import MenuBar from "./MenuBar";

const Navbar = () => {
  return (
    <div className={ styles.navbar }>
      <Link href='/'>
        <Image src='/sendme-logo.png' width={70}  height={29} className={ styles.menu } alt='sendme logo'/>
      </Link>

      <Hamburger/>

      <MenuBar />
    </div>

  );
}
 
export default Navbar;
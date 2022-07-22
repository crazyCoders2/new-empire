import { Link } from 'react-router-dom'
import { IoIosSearch } from 'react-icons/io'
import { AiOutlineUser } from 'react-icons/ai'
import styles from './styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.headerNavbar}>
      {/* == Navbar Logo == */}
      <div className={styles.headerNavbar__logo}>
        <a href='/' className={styles.headerNavbar__logoImg}>
          <img src='/static/logo.svg' alt='lwtheatres logo' />
        </a>
      </div>
      {/* == Navbar links == */}
      <div className={styles.headerNavbar__links}>
        <ul className={styles.headerNavbar__linksPrimary}>
          <li>
            <Link to='#'>About</Link>
          </li>
          <li>
            <Link to='#'>Accessibility</Link>
          </li>
          <li>
            <Link to='#'>News</Link>
          </li>
          <li>
            <Link to='#'>Our Partners</Link>
          </li>
          <li>
            <Link to='#'>Hire Our Venues</Link>
          </li>
          <li>
            <Link to='#' className='flex'>
              <IoIosSearch size={18} /> Search
            </Link>
          </li>
          <li>
            <Link to='#' className='flex'>
              <AiOutlineUser size={18} /> Account
            </Link>
          </li>
        </ul>
        <ul className={styles.headerNavbar__linksSecondary}>
          <li>
            <Link to='#'>What's On</Link>
          </li>
          <li>
            <Link to='#'>Theatres</Link>
          </li>
          <li>
            <Link to='#'>Gold Experiences</Link>
          </li>
          <li>
            <Link to='#'>Gift Vouchers</Link>
          </li>
          <li>
            <Link to='#'>School Holidays</Link>
          </li>
        </ul>
      </div>
      {/* == Navbar clip-art == */}
      <div className={styles.headerNavbar__right}></div>
    </nav>
  )
}
export default Navbar

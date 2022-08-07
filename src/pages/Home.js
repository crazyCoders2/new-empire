import { useState, useEffect } from 'react'
import { IoIosSearch } from 'react-icons/io'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { getPopularEvents } from '../data'
import styles from './styles/Home.module.css'
import Zoom from 'react-reveal/Zoom';
import Footer from '../components/Footer/Footer'

const HomePage = () => {
  const [popularEvents, setPopularEvents] = useState([])

  useEffect(() => {
    setPopularEvents(getPopularEvents())
  }, [])
  return (
    <>
      <header className={styles.header}>
        {/* == Navigation bar == */}
        <Navbar />
        {/* == Header Showcase == */}
        <div className={styles.showcase}>
          <div>
            <h1>New Empire Cinema</h1>
            <h2>The cinema has no boundary; it is a ribbon of dream.</h2>
          </div>
        </div>
      </header>
      {/* == Popular Events Section == */}
      <section className={styles.sectionEvents}>
        <h2 className='heading-secondary'>Popular Movies</h2>
        <div className='flex flex-wrap justifyContent-center'>
          {popularEvents.map((event) => {
            return <Card key={event.id} data={event} />
          })}
        </div>
        <h3 className='heading-secondary mt-50'>Looking For Something Else?</h3>
        <form className={styles.searchForm}>
          <input
            type='text'
            className={styles.searchBar}
            placeholder='Search our shows and events'
          />
          <button className={styles.searchButton}>
            <IoIosSearch size={30} />
          </button>
        </form>
      </section>

       {/* == About Section == */}
       <section id="aboutUs" className={styles.aboutUs}>
      <h2 className='heading-secondary'>About Us</h2>
        <div className={styles.aboutUsBox}>
          <div className={styles.aboutImgBox}>
            <Zoom>
              <img className={styles.aboutImg} src="ticket.png" />
            </Zoom>
          </div>
          <div className={styles.aboutUsTextBox}>
            <h2 style={{ color: '#fff', marginTop:'3rem'}} className='heading-tertiary'>Description</h2>
            <h3 style={{ color: '#fff' }} className='text'>
              New Empire Cinema is a single screen cinema hall located in Humayun Place in New Market, (opposite Shreeram Arcade), Kolkata, West Bengal, India.
            </h3>
            <h3
              style={{ color: '#fff' }} className='text'
            >
              It was established in the late 1950s under the chairmenship of V. Shantaram, the First International New Youth Film was held in New Empire.
            </h3>
          </div>
        </div>
      </section>
      {/* == Features Section == */}
      <section className={styles.sectionFeatures}>
        <h2 className='heading-secondary'>Why Book With Us?</h2>
        <div className={styles.sectionFeatures__banner}>
          <div className={styles.sectionFeatures__bannerText}>
            <h3 className='heading-tertiary'>Book with Confidence</h3>
            <p className='text mt-10'>
              Customers can exchange their tickets up to 48 hours prior to the
              event. A £2 per ticket exchange fee may apply. Terms & conditions
              apply.
            </p>
          </div>
          <div className={styles.sectionFeatures__bannerImage}></div>
        </div>
      </section>

      {/* == Footer == */}
      <Footer />
      

     
    </>
  )
}
export default HomePage

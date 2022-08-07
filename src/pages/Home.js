import { useState, useEffect } from 'react'
import { IoIosSearch } from 'react-icons/io'
import About from '../components/About'
import Card from '../components/Card'
import HeaderShowcase from '../components/HeaderShowcase'
import { getPopularEvents } from '../data'
import styles from './styles/Home.module.css'

const HomePage = () => {
  const [popularEvents, setPopularEvents] = useState([])

  useEffect(() => {
    setPopularEvents(getPopularEvents())
  }, [])
  return (
    <>
      {/* == Header Showcase == */}
      <HeaderShowcase />
      {/* == Popular Events Section == */}
      <section className={styles.sectionEvents}>
        <h2 className='heading-secondary'>Popular Events</h2>
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
      {/* == About Section == */}
      <About
        image="ticket.png"
        title="About Us"
        text1="New Empire Cinema is a single screen cinema hall located in Humayun Place in New Market, (opposite Shreeram Arcade), Kolkata, West Bengal, India."
        text2="It was established in the late 1950s under the chairmenship of V. Shantaram, the First International New Youth Film was held in New Empire."
      />
    </>
  )
}
export default HomePage

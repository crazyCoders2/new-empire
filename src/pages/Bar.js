import HeaderShowcase from '../components/HeaderShowcase'
import styles from './styles/Bar.module.css'

const BarPage = () => {
  return (
    <>
      {/* == Header Showcase == */}
      <HeaderShowcase />
      {/* == About The Bar Section == */}
      <section className={styles.sectionAbout}>
        <h2 className='heading-secondary'>THE BAR</h2>
        <p className='text'>
          A little about us and a breif history of how we started.
        </p>
        <div className={styles.sectionAbout__content}>
          <div className={styles.sectionAbout__contentImages}>
            <img src='/static/bar_img1.jpg' alt='bar food1' />
            <img src='/static/bar_img2.jpg' alt='bar food2' />
          </div>
          <div className={styles.sectionAbout__contentText}>
            <p>
              Cras ut viverra eros. Phasellus sollicitudin sapien id luctus
              tempor. Sed hend rerit inter dum sagittis. Donec nunc lacus,
              dapibus nec interdum eget, ultrices eget justo. Nam purus lacus,
              efficitur eget laoreet sed, finibus nec neque. Cras eget enim in
              diam dapibus sagittis. In massa est, dignissim in libero ac,
              fringilla ornare mi. Etiam interdum ligula purus.
            </p>
            <p>
              Ultrices eget justo. Nam purus lacus, efficitur eget laoreet sed,
              finibus nec neque. Cras eget enim in diam dapibus sagittis. In
              massa est, dignissim in libero ac, fringilla ornare.
            </p>
          </div>
        </div>
      </section>
      {/* == Menu Section == */}
      <section className={styles.sectionMenu}></section>
      {/* == Reservations Section == */}
      <section className={styles.sectionReservations}></section>
      {/* == Testimonials Section == */}
      <section className={styles.sectionTestimonials}></section>
    </>
  )
}
export default BarPage

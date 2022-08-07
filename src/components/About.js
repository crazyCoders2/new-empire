import React from 'react'
import styles from './styles/About.module.css'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
const About = ({image, title, text1, text2}) => {
  return (
    <>
     <section id="aboutUs" className={styles.aboutUs}>
      <h2 className='heading-secondary'>{title}</h2>
        <div className={styles.aboutUsBox}>
          <div className={styles.aboutImgBox}>
            <Zoom>
              <img className={styles.aboutImg} src={image} />
            </Zoom>
          </div>
          <div className={styles.aboutUsTextBox}>
            <Fade right>
            <h2 style={{ color: '#fff', marginTop:'3rem'}} className='heading-tertiary'>Description</h2>
            <h3 style={{ color: '#fff' }} className='text'>
             {text1}
            </h3>
            <h3
              style={{ color: '#fff' ,marginTop:'2rem'}} className='text'
            >
             {text2}
            </h3>
            </Fade>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
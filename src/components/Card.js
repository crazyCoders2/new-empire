import styles from './styles/Card.module.css'

const Card = ({ data }) => {
  const { title, dateTime, venue, imgUrl } = data
  return (
    <div className={styles.card}>
      <img src={imgUrl} alt='title' className={styles.card__img} />
      <div className={styles.card__content}>
        <h4 className={styles.card__title}>{title}</h4>
        <p className={styles.card__textPrimary}>{dateTime}</p>
        <p className={styles.card__textSecondary}>{venue}</p>
      </div>
      <div className={styles.card__buttons}>
        <a href='!#' className='btn btn--light mr-10'>
          More Info
        </a>
        <a href='!#' className='btn btn--dark'>
          Book Tickets
        </a>
      </div>
    </div>
  )
}
export default Card

import React, { useState } from 'react';
import { Donation } from '../../../types/donation';
import Progress from '../../atoms/Progress';
import styles from './styles.module.scss'

const Logo: React.FC<Donation> = (props) => {
  const [isImgError, setIsImageError] = useState(false)
  return (
    <div className={styles['donation-card']}>
      <div className={`hover:drop-shadow-md ${styles['donation-card__image']}`}>
        {
          isImgError ? 
          <div className={styles.empty}></div> : 
          <img 
            src={props.image} 
            alt={props.title}
            onErrorCapture={() => setIsImageError(true)}
          />
        }
      </div>
      <div className={styles['donation-card__info']}>
        <p className={styles["title"]}>{props.title}</p>
        <Progress percentage={props.donation_percentage}/>
        <div className="details flex justify-between p-1">
        </div>
      </div>
    </div>
  )
}

export default Logo;

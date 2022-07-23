import { Donation } from '../../../types/donation'
import DonationCard from '../../molecules/DonationCard'
import styles from './styles.module.scss'

const DonationList:React.FC<{list: Donation[]}> = ({list}) => {
  // console.log(donationList)
  return (
    <div className={` p-2 ${styles['donation-list']}`}>
      <div className={styles['donation-list__items']}>
      {
        list.length && list.map(donation => 
          <div className={styles['donation-list__item']} data-testid={`donation-item-${donation.id}`} key={donation.id}>
            <DonationCard  { ...donation} key={donation.id}/>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default DonationList
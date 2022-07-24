import type { GetServerSideProps, NextPage, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/molecules/Header'
import DonationList from '../components/organisms/DonationList'
import { Donation } from '../types/donation'
import { ResponseType } from '../types/response-type'

const Home: NextPage<{data: Donation[]}> = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [donationList, setDonationList] = useState(data as Donation[])
  const [isSortByGoal, setSortBy] = useState(false)

  const handleSortByGoal = () => {
    const sortedData = donationList.sort((a,b) => a.donation_percentage - b.donation_percentage)
    setDonationList(sortedData)
    setSortBy(false)
  }

  const handleSortByDaysLeft = () => {
    const sortedData = donationList.sort((a,b) => a.days_remaining - b.days_remaining)
    setDonationList(sortedData)
    setSortBy(true)
  }

  return (
    <div >
      <Head>
        <title>Kitabisa - Donasi</title>
        <meta name="description" content="Donasi kitabisa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header 
        sortBy={isSortByGoal ? 'donation goal': 'days left'} 
        handleSort={isSortByGoal ? handleSortByGoal : handleSortByDaysLeft }
      />
      {
        donationList.length && (<DonationList list={donationList}/>)
      }
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () =>  {
  const res = await fetch('https://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json')
  const { data } = await res.json() as ResponseType<Donation[]>
  return { props: { data }}
}

export default Home

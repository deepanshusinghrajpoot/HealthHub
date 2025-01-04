import React from 'react'
import { Header } from '../components/header';
import { SpecialityMenu } from '../components/SpecialityMenu';
import { TopDoctor } from '../components/TopDoctor';
import { Banner } from '../components/Banner';
const Home = () => {
  return (
    <div>
        <Header/>
        <SpecialityMenu/>
        <TopDoctor/>
        <Banner/>
    </div>
  )
}


export default Home;
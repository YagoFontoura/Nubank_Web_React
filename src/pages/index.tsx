import type { NextPage } from 'next'

import { Header } from '../components/Header'
import { Sections } from "../components/Home-Sections";
import { Footer } from '../components/Footer'

const Home: NextPage = () => {
  return (
      <>
        <Header/>
        <Sections/>
        <Footer/>
      </>
    )   
}

export default Home

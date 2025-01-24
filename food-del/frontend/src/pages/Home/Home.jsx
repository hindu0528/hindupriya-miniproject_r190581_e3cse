import React ,{useState} from 'react'
import './Home.css'
import Header from '../../Components/Navbar/Header/Header'
import ExploreMenu from '../../Components/Navbar/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import Appdownload from '../../Components/Appdownload/Appdownload'

const Home = () => {

    const [category,setCategory]=useState('All');

  return (
    <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <Appdownload />
      
    </div>
  )
}

export default Home

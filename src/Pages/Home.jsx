import React from 'react'
import Header from '../Components/Header'
import IntroPost from '../Components/IntroPost'
import Footer from '../Components/Footer'
function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">      
  
{/*Header*/}   
      <Header/>
      <hr className="border-t border-gray-300 my-4 flex justify-between items-center px-4" />

    
      {/*InterPost*/}
      <IntroPost/>      
       {/*Footer*/}
      <Footer/>
      
     
    </div>
    
  )
}

export default Home

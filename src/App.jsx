import { useState } from 'react'
import phrases from './phrases.json'
import {bg1,bg2,bg3,bg4} from './assets/images/'
import randomIdex from './assets/helpers/RandomIndex.js'
import './App.css'

//here we have the images
 const image = [bg1,bg2,bg3,bg4]

//  the conponents of the card
 import Title from './title'
 import Card from './card'
 import Button from './button'



function App() {
    const [phrase, setPhrase]=useState(phrases[randomIdex(phrases.length)])
    const [Img, setImg]=useState(image[randomIdex(image.length)])
     
      function  changePhrese (){
          setPhrase(phrases[randomIdex(phrases.length)])
          setImg(image[randomIdex(image.length)])
       }

       
   return (

    <div style={{backgroundImage: `url(${Img})`}} className='wrapper'>

      <div className="container">

          {/* component for the */}
          <Title></Title>
          <Card phrase={phrase}></Card>
          <Button functionOne={changePhrese} />
      </div>
    </div>
  )
}

export default App

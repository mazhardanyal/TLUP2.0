import React from 'react'
import PrincipalsMessage from '../components/PrincipalsMessage'
import '../components/PrincipalsMessage.css'
import Ownermessage from '../components/Ownermessage'
import '../components/Ownermessage.css'
import '../components/AboutUS.css'
import AboutUS from '../components/AboutUS';
import Teachers from '../components/Teachers';
import '../components/Teachers.css'
const About = () => {
  return (
    <div>
<PrincipalsMessage />
<Ownermessage />
<AboutUS />
<Teachers />
    </div>
  )
}

export default About
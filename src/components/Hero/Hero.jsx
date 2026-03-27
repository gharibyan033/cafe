import React from 'react'
import s from "./Hero.module.sass"
import Container from '../Container/Container'
import heroVideo from "../../assets/videos/barmen.mp4"
import { Link } from 'react-router'

const Hero = () => {
  return (
    <section className={s.hero}>
      <video className={s.video} loop autoPlay muted src={heroVideo}></video>
      <Container>
      <div className={s.wrap}>
          <h1 className={s.title}>Sip. Chill. Repeat.</h1>
          <Link to="/cocktails" className={s.btn}>View Cocktail List</Link>
      </div>
      </Container>
    </section>
  )
}

export default Hero
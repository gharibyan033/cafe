import React, { useEffect, useState } from 'react'
import s from "./Cocktails.module.sass"
import Card from '../../components/Card/Card'
import Container from '../../components/Container/Container'



const Cocktail = () => {

  const [cocktails, setCocktails] = useState([])

  useEffect(() => {
    const getCocktails = async () => {
      await fetch("http://localhost:8800/cocktails")
      .then(res => res.json())
      .then(data => setCocktails(data))
    }
    getCocktails()
  }, [])
  
  return (
    <div className={s.cocktails}>
      <Container>
        <div className={s.wrap}>
          <div className={s.list}>
          {
            cocktails[0] && cocktails.map(c => <Card cocktails={c}/>)
          }
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Cocktail
import React, { useEffect, useState } from 'react'
import s from './Details.module.sass'
import Container from '../../components/Container/Container'
import { useParams } from 'react-router'

const Details = () => {

  const [cocktail, setCocktail] = useState({})
  const {id} = useParams()
  const {name, glass, img, ice, garnish, method, ingredients, price} = cocktail;

  useEffect(() => {
    const getCocktail = async () => {
      await fetch(`http://localhost:8800/cocktails/${id}`)
      .then(res => res.json())
      .then(data => setCocktail(data));
    };
    getCocktail();
  }, []);

  return (
    <div className={s.details}>
        <Container>
            <div className={s.wrap}>
              <div className={s.img}>
                <img src={img} alt="" />
              </div>
              <div className={s.info}>
                <h2 className={s.title}>{name}</h2>
                <ul className={s.desc}>
                    {ingredients && Object.entries(ingredients).map((ing) => {
                        const [k, v] = ing;
                        return (
                         <li className={s.item}>
                          <div className={s.key}>{k}</div>
                          <div className={s.value}>{v}</div>
                         </li>
                        );
                      })}
               
                  <li className={s.item}>
                            <div className={s.key}>Ice</div>
                            <div className={s.value}>{ice}</div>
                          </li>
                          <li className={s.item}>
                            <div className={s.key}>Glass</div>
                            <div className={s.value}>{glass}</div>
                          </li>
                          <li className={s.item}>
                            <div className={s.key}>Garnish</div>
                            <div className={s.value}>{garnish}</div>
                          </li>

                </ul>
              </div>
            </div>
        </Container>
    </div>
  )
}

export default Details
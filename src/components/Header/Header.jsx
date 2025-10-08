import React, { useState } from 'react'
import s from "./Header.module.sass"
import Container from '../Container/Container'
import { FaCocktail } from 'react-icons/fa'
import Select from '../Select/Select'
import { Link, useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'

const Header = () => {

  const {pathname} = useLocation()
  const {t} = useTranslation()

  return (
    <header className={`${s.header} ${pathname !== "/" ? s.bg_dark : ""}`}>
      <Container>
        <div className={s.wrap}>
          <div className={s.logo}><FaCocktail /></div>
           <nav className={s.nav}>
            <Link to="/" className={s.link}>
            {t("home")}
            </Link>
            <Link to="/cocktails" className={s.link}>{t("menu")}</Link>
            <Link to="/about" className={s.link}>{t("about")}</Link>
            <Link to="/contacts" className={s.link}>{t("contacts")}</Link>
           </nav>
           <Select/>
          
        </div>
      </Container>
    </header>
  )
}

export default Header
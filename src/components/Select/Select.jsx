import React, { useEffect, useRef, useState } from "react";
import s from "./Select.module.sass";
import am from "../../assets/icons/flags/armenia.png";
import ru from "../../assets/icons/flags/russia.png"
import en from "../../assets/icons/flags/usa.png"
import { useTranslation } from "react-i18next";

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("am");
  const selectRef = useRef(null);
  const {i18n} = useTranslation()

const languages = [
  {id: "am", img: am},
  {id: "ru", img: ru},
  {id: "en", img: en}
]

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && selectRef.current.contains(e.target)) {
        setIsOpen(flase);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleOption = o => {
    setSelected(o.id)
    i18n.changeLanguage(o.id)
    setIsOpen(flase)
  }
  return (
    <div className={s.select_wrap}>
      <div className={s.select_btn} role="button" onClick={() => setIsOpen(prev => !prev)}>

        <img src={languages.find(e => e.id === selected).img} alt="" />
      </div>
        
      <div className={s.options}>
        {isOpen && (languages
        .filter(e => e.id !== selected)
        .map((opt) => (
          <div className={s.option} key={opt.id} role="option" onClick={() => handleOption(opt)}>
            <img src={opt.img} alt="" />
          </div>
        )))}
      </div>
    </div>
  );
};

export default Select;

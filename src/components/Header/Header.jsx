import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import { useEffect } from "react";



const Header = () => {

  useEffect(() => {
    const mainBtn = document.querySelector('.mainBtn');
    const archBtn = document.querySelector('.archBtn');

    function addActiveClass() {
      mainBtn.addEventListener('click', () => {
        mainBtn.classList.add('lnk-active')
        archBtn.classList.remove('lnk-active')
      })
    }
    addActiveClass()
    mainBtn.removeEventListener('click', addActiveClass)

    function removeActiveClass() {
      archBtn.addEventListener('click', () => {
        archBtn.classList.add('lnk-active')
        mainBtn.classList.remove('lnk-active')
      })
    }
    removeActiveClass()
    archBtn.removeEventListener('click', addActiveClass)
  })

  return (
    <section className="main__header">
      <section className="main__header-wrap">
        <span className="main__header-logo">SomeList</span>
        <div className="main__header-group-lnk">
          <Link to={'/'} className='main__header-lnk mainBtn lnk-active'>События</Link >
          <Link to={'/archive'} className='main__header-lnk archBtn'>Архив</Link>
        </div>
      </section>
    </section >
  )
}

export default Header;

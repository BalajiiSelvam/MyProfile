import React from 'react'
import Profile from "../../assets/home.png"
import {Link} from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
import "./home.css"

export const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
        <div className="home__content">
          <div className="home__data">
            <h1 className="home__title">
              <span>I'm Balaji Selvam.</span> Developer 
            </h1>
            <p className="home__description">
            Description is an actual English word (From the Latin describo, 
            describere, descripsi, descriptus) and is a name for that member 
            of the tetrad of rhetorical modes of discourse that seeks to convey 
            the characteristics of a particular person, place or attribute.
            </p>
            <Link to='/about' className='button'>
            More About Me{' '}
            <span className='button__icon'>
              <FaArrowRight/>
              </span>
            </Link>
          </div>
        </div>

        <div className="color__block">
          
        </div>
    </section>
  )
}

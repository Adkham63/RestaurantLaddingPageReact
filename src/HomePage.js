import React from 'react'
import { Navbar } from './Navbar';
import BannerBackground from "./home-banner-background.png";
import BannerImage from "./home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";


export const HomePage = () => {
  return (
    <div className='home-container'>
        <Navbar></Navbar>
        <div className='home-banner-container'>
          <div className='home-bannerImage-container'>
            <img src={BannerBackground} alt="" />
          </div>
          <div className='home-text-section'>
            <h1 className='primary-heading'>
              Your Favorite Food Delivered Hot & Fresh
            </h1>
            <p className='primary-text'>
            Healthy switcher chefs do all the prep work, like peeling, chopping & marinating, so you can cook a fresh food.
            </p>
            <button className='secondary-button'>Order Now <FiArrowRight />{" "}</button>
          </div>
          <div className='home-image-section'>
            <img src={BannerImage} alt="" />
          </div>
        </div>
    </div>
  )
}


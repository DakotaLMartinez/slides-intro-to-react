import React, { useEffect } from 'react';
const CustomizePresenterView = () => {
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.altKey && e.code === 'KeyN') {
        let nextSlide = document.querySelector('#gatsby-focus-wrapper > div > div:last-child > div:first-child'); 
        nextSlide.parentElement.append(nextSlide);
        let notes = document.querySelector('#gatsby-focus-wrapper > div > div:last-child > div:first-child');
        notes.style.height = '200px';
        notes.style.overflow = 'scroll';
        notes.style.display = 'block';
        notes.style.flexGrow = 0;
        notes.style.overflowX = 'hidden';
      }
    })
  })
  return <></>
}

export default CustomizePresenterView;
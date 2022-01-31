import React, { useEffect } from 'react';
const CustomizePresenterView = () => {
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.altKey && e.code === 'KeyP') {
        let nextSlide = document.querySelector('#gatsby-focus-wrapper > div > div:last-child > div:first-child');
        if (nextSlide && nextSlide.className.split('-')[2] === 'Presenter') {
          nextSlide.parentElement.append(nextSlide);
          let notes = document.querySelector('#gatsby-focus-wrapper > div > div:last-child > div:first-child');
          if (notes.className.split('-')[2] === 'Presenter') {
            notes.style.height = '200px';
            notes.style.overflow = 'scroll';
            notes.style.display = 'block';
            notes.style.flexGrow = 0;
            notes.style.overflowX = 'hidden';
          }
        }
      }
    })
  })
  return <></>
}

export default CustomizePresenterView;
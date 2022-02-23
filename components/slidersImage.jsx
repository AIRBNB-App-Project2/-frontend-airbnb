import React, { useState, useEffect, useRef } from 'react'

const featureImg = [
    'https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
    'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
    'https://images.unsplash.com/photo-1621001587473-79ccde64bcf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',

]

function Sliders() {
    const [currentIndex, setCurrentIndex] = useState(0)
    let count = 0
    let slideInterval

    const slidersRef = useRef()

    // function remove className animation
    const removeAnimation = () => {
        slidersRef.current.classList.remove('fade-anim')

    }
    useEffect(() => {
        slidersRef.current.addEventListener('animationend', removeAnimation)
        slidersRef.current.addEventListener('mouseenter', pauseSlider)
        slidersRef.current.addEventListener('mouseleave', startSlider)

        startSlider()
        return () => {
            pauseSlider()
        }
    }, [])

    // Pause Looping Img
    const pauseSlider = () => {
        clearInterval(slideInterval)
    }

    // Auto Looping Img
    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleOnNext()
        }, 3000);
    }


    // Toggle Next Images
    const handleOnNext = () => {
        count = (count + 1) % featureImg.length;
        setCurrentIndex(count)
        slidersRef.current.classList.add('fade-anim')
    }
    // Toggle Prev Images
    const handleOnPrev = () => {
        const productsLength = featureImg.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
        slidersRef.current.classList.add('fade-anim')
    }

    return (<>
        <div ref={slidersRef} className='w-full select-none'>
            <div className="aspect-w-16 aspect-h-9">
                <img src={featureImg[currentIndex]} className='mx-auto h-[600px]' alt="Slider-img" width={1000} height={600} />
            </div>

            <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
                <button className='bg-elemen2 text-elemen1 p-2 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition' onClick={handleOnPrev}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg></button>
                <button className='bg-elemen2 text-elemen1 p-2 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition' onClick={handleOnNext}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg></button>
            </div>
        </div>
    </>)


}

export default Sliders
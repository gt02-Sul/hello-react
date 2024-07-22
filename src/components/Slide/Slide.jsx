import { useEffect, useState } from 'react'
import './Slide.css'

export const SlideItem = ({ title }) => {
    return (
        <div className="slide-item--root">
            {title}
        </div>

    ) 
}

export const Slide = () => {

    const slides = [
        {title: 'Slide 1'},
        {title: 'Slide 2'},
        {title: 'Slide 42'},
    ];

    const lastIndex = slides.length - 1;

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCurrent((state) => {
                if (state >= lastIndex) {
                    return 0
                }

                return state + 1
            })
        }, 5000)        
    }, [current])


    const marginLeft = `${-100 * current}%` 

    return (
        <>
            <div className="slide--root">
                <div className="slide-position-controller" style={{ marginLeft }}></div>
                {slides.map(({ title }) => (
                    <SlideItem title={title} />
                ))}
            </div>

            <ul>
                {slides.map((_, index) => (
                    <li>
                        <button
                            className={current === index ? 'active' : ''}
                            onClick={() => setCurrent(index)}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}
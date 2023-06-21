import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from 'gsap';



export const useCounter = ({maxCount = 10}) => {
    const [counter, setCounter] = useState(5);
    const counterElement = useRef<HTMLHeadingElement>(null);

    const timeline = useRef(gsap.timeline())

    const handleClick = () => {
        // if (counter >= MAXIMUN_COUNT) return;
    // setCounter( (prev) => prev + 1 );
    setCounter( (prev) => Math.min(prev + 1, maxCount) );
    }  

    useLayoutEffect(() => {
        if (!counterElement.current) return ;
        timeline.current.to(counterElement.current,{y: -10, duration: 0.2, ease: 'ease.out'})
                        .to(counterElement.current,{y: 0, duration: 1, ease: 'bounce.out'})
                        .pause();

    }, [])

    useEffect(() => {
        timeline.current.play(0);
    }, [counter]);

    return {
        counter,
        elementToAnimate: counterElement,
        handleClick
    }
}
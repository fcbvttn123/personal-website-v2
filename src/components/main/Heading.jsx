import { useRef, useEffect } from "react"
let greetingWords = [
    "Hello",
    "I'm a Developer", 
    "I'm a Footballer", 
    "I'm a Student", 
    "" 
]
let arrIndex = 1

export function Heading() {
    const h1 = useRef(greetingWords[0])
    useEffect(() => {
        const intervalId = setInterval(() => {
          if (h1.current) {
            if(arrIndex >= (greetingWords.length - 1)) arrIndex = 0
            h1.current.innerText = greetingWords[arrIndex]
            arrIndex = arrIndex + 1
          }
        }, 4000);
        return () => clearInterval(intervalId);
      }, []);
    return (
        <h1 ref={h1} className="move-up-animation text-5xl sm:text-6xl md:text-4xl md:font-extrabold lg:text-6xl lg:font-semibold font-semibold relative word-typing-animation">
            Hello
        </h1>
    )
}
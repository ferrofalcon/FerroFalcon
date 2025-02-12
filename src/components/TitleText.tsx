import { useTypewriter } from "react-simple-typewriter"
import React from "react"

const TitleText = () => {
  const [text] = useTypewriter({
    words: ["The Web Formula"],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100, // Typing speed (in ms)
    deleteSpeed: 70, // Deleting speed (in ms)
  })

  return (
    <>
      <h1 className="text-8xl w-full text-center mt-auto mb-[10vh]">{text}</h1>
    </>
  )
}

export default TitleText

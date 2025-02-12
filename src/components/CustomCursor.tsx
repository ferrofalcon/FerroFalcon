// components/CustomCursor.tsx

import { useEffect, useState } from "react"

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.pageX, y: event.pageY })
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      className="custom-cursor fixed pointer-events-none z-50 rounded-full bg-red-500 transform -translate-x-1/2 -translate-y-1/2"
      style={{
        width: "7vw", // Cursor width
        height: "7vw", // Cursor height
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      }}
    ></div>
  )
}

export default CustomCursor

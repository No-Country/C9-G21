import * as React from "react"

type RectangleT ={
  width ?: number,
  height?: number
}
const Rectangle = ({width = 96, height = 96}: RectangleT) => {
  return (<svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width={width} height={height} rx={6} fill="#D9D9D9" />
  </svg>
  )
}

export default Rectangle

import * as React from "react"

const Rectangle = (props: any) => (
  <svg
    width={96}
    height={96}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={96} height={96} rx={6} fill="#D9D9D9" />
  </svg>
)

export default Rectangle

import React from "react"

function Container({ fullWidth, className, children }) {
  return (
    <div
      className={`w-full px-4 lg:px-10 ${
        fullWidth ? "" : "max-w-[42rem] xl:max-w-[80rem]"
      } ${className} m-auto`}
    >
      {children}
    </div>
  )
}

export default Container

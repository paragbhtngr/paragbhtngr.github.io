import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

const Layout = ({ location, title, children }) => {
  const [useDarkMode, setUseDarkMode] = React.useState(false)
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const header = (
    <>
      <Link className="text-xl font-black" to="/">
        {title}
      </Link>
      <nav className="gap-x-2 uppercase hidden sm:flex">
        <Link to="/blog">
          <span className="inline-block">Blog</span>
        </Link>
        <Link to="/portfolio">
          <span className="inline-block">Portfolio</span>
        </Link>
        <Link to="/about">
          <span className="inline-block">About</span>
        </Link>
      </nav>
      <div
        className="relative w-7 h-7 sm:hidden z-20"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <FontAwesomeIcon
          className={`text-blue-800 absolute right-0 top-1 transition-all ${
            showMobileMenu
              ? "translate-x-0 opacity-100"
              : "translate-x-10 opacity-0"
          }`}
          icon={faXmark}
        />

        <FontAwesomeIcon
          className={`text-blue-800 absolute right-0 top-1 transition-all ${
            showMobileMenu
              ? "translate-x-10 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
          icon={faBars}
        />
      </div>
      <div
        className={`fixed flex flex-col text-center gap-y-4 uppercase justify-center pb-8 w-full h-full bg-white top-0 left-0 z-10 sm:hidden transition-all ${
          showMobileMenu ? "opacity-100" : "translate-y-[-100%] opacity-0"
        }`}
      >
        <Link to="/blog">
          <span className="inline-block">Blog</span>
        </Link>
        <Link to="/portfolio">
          <span className="inline-block">Portfolio</span>
        </Link>
        <Link to="/about">
          <span className="inline-block">About</span>
        </Link>
      </div>
    </>
  )

  return (
    <div
      className="max-w-[42rem] xl:max-w-[64rem] m-auto py-10 px-5"
      data-is-root-path={isRootPath}
    >
      <header className="global-header flex justify-between font-header font-sans text-lg">
        {header}
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout

import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

const Layout = ({ location, title, children }) => {
  const [useDarkMode, setUseDarkMode] = React.useState(false)
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const Routes = () => {
    return (
      <>
        <Link to="/blog" className="nav-link">
          <span className="inline-block text-sky-700">Blog</span>
        </Link>
        <Link to="/portfolio" className="nav-link">
          <span className="inline-block text-sky-700">Portfolio</span>
        </Link>
        {/* <Link to="/resume" className="nav-link">
          <span className="inline-block text-sky-700">Resume</span>
        </Link> */}
        <Link to="/about" className="nav-link">
          <span className="inline-block text-sky-700">About</span>
        </Link>
      </>
    )
  }

  const header = (
    <>
      <Link to="/">
        <h1 className="text-xl md:text-3xl font-black text-sky-700 m-0">
          {title}
        </h1>
      </Link>
      <nav className="gap-x-6 uppercase hidden sm:flex text-xl">
        <Routes />
      </nav>
      <div
        className="relative w-7 h-7 sm:hidden z-30 overflow-hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <FontAwesomeIcon
          className={`absolute right-0 top-1 transition-all ${
            showMobileMenu
              ? "translate-x-0 opacity-100"
              : "translate-x-10 opacity-0"
          }`}
          icon={faXmark}
        />

        <FontAwesomeIcon
          className={`absolute right-0 top-1 transition-all ${
            showMobileMenu
              ? "translate-x-10 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
          icon={faBars}
        />
      </div>
      <div
        className={`fixed text-center pb-8 w-full h-full bg-gradient-to-t from-[#eceff3] to-[#f8fbff] top-0 left-0 z-20 sm:hidden transition-all ${
          showMobileMenu ? "opacity-100" : "translate-y-[-100%] opacity-0"
        }`}
      >
        <nav
          className={`flex flex-col text-center gap-y-4 uppercase justify-center h-full`}
        >
          <Routes />
        </nav>
      </div>
    </>
  )

  return (
    <div
      className="w-full bg-gradient-to-t from-[#eceff3] to-[#f8fbff] min-h-[100vh] pb-20 relative"
      data-is-root-path={isRootPath}
    >
      <header className="flex justify-between items-center font-header font-sans text-lg py-4 md:py-10 px-5 md:px-10 text-sky-700">
        {header}
      </header>
      <main className="font-sans">{children}</main>
      <footer className="absolute bottom-0 h-20 w-full py-10 px-5 md:px-10">
        © {new Date().getFullYear()}, Parag Bhatnagar
      </footer>
    </div>
  )
}

export default Layout

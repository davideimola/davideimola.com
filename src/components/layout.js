import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <div align="center">
          © {new Date().getFullYear()}, Built with ♥ by Davide Imola using
          Gatsby <br />
          <Link to="https://www.iubenda.com/privacy-policy/20195792">
            Privacy Policy
          </Link>{" "}
          -{" "}
          <Link to="https://www.iubenda.com/privacy-policy/20195792/cookie-policy">
            Cookie Policy
          </Link>{" "}
          -{" "}
          <Link to="https://www.iubenda.com/terms-and-conditions/20195792">
            Terms and Conditions
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Layout

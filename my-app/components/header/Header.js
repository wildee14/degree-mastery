import React from "React";
import Link from "next/link";

function Header() {
  return (
    <div>
      <header>
        <nav className="header-nav">
          <div className="nav-wrapper">
            <div className="container">
              <Link href="/">
                <a className="brand-logo">Degree Mastery</a>
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li className="nav-cell">
                  <Link href="/blogs">
                    <a>Directory</a>
                  </Link>
                </li>
                <li className="nav-cell">
                  <Link href="/blog">
                    <a className="dropdown-button">Blog</a>
                  </Link>
                </li>
                <li className="nav-cell">
                  <Link href="/about-me">
                    <a>About Me</a>
                  </Link>
                </li>
                <li className="nav-cell">
                  <Link href="/topics">
                    <a>Topics</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="mobile-friendly row no-padding">
        <Link href="/blogs">
          <a className="center-align col l3 m3 s3">Directory</a>
        </Link>
        <Link href="/blog">
          <a className="center-align col l3 m3 s3">Blog</a>
        </Link>
        <Link href="/about-me">
          <a className="center-align col l3 m3 s3">About Me</a>
        </Link>
        <Link href="/topics">
          <a className="center-align col l3 m3 s3">Topics</a>
        </Link>
      </div>
    </div>
  );
}

export default Header;

import React from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <nav className="header">
      <a className="nav-item camera-link" href="/">
        <img className="camera-logo" src="./camera_logo.svg" alt="Logo of a Camera" />
      </a>
      <a className="nav-item name-link" href="/">
        <img className="name-logo" src="./name_logo.svg" alt="Logo of the name Paparanni" />
      </a>
      <div className="clearfix"></div>
      { props.props.loggedIn ? (
        <React.Fragment>
          <a className="nav-item nav-right admin" href="/logout">Log out</a>
          <a className="nav-item nav-right admin" href="upload">Upload Photos</a>
          <a className="nav-item nav-right admin" href="delete">Delete Photos</a>
        </React.Fragment>
      ) : ( <React.Fragment></React.Fragment> )
      }
      <a className="nav-item nav-right about-link" href="about">About</a>
    </nav>
  )
}

export default Header

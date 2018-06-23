import React from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <div className="header">
      <nav className="navbar">
        <a className="nav-item camera-link" href="/">
          <img className="camera-logo" src="./camera_logo.svg" alt="Logo of a Camera" />
        </a>
        <a className="nav-item name-link" href="/">
          <img className="name-logo" src="./name_logo.svg" alt="Logo of the name Paparanni" />
        </a>
        <a className="nav-item about-link" href="about">About</a>
        { props.props.loggedIn ? (
          <React.Fragment>
            <a className="nav-item admin" href="upload">Upload Photos</a>
            <a className="nav-item admin" href="delete">Delete Photos</a>
            <a className="nav-item admin" href="profile">
              <img className="avatar hidden-xs" src="./avatar.png" alt="avatar" />
            </a>
            <a className="nav-item admin" href="/logout">Log out</a>
          </React.Fragment>
        ) : ( <React.Fragment></React.Fragment> )
        }
      </nav>
    </div>
  )
}

export default Header

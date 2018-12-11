import React, { Component } from 'react'
import PhotoGrid from './components/PhotoGrid'
import { CameraLogo } from './components/Logos'

import { photos, tags } from './api'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      photos: [],
      tags: [],
      ...props
    }
  }

  componentDidMount() {
    this.setState({
      photos,
      tags
    })
  }

  render() {

    console.dir(CameraLogo)

    return (
      <div className="">
        <a href="/">
          <header className="grid grid-2 grid-header">
            <CameraLogo />
            <h1>Paparanni</h1>
          </header>
        </a>
        <main>
          <PhotoGrid photos={this.state.photos} />

          <div className="grid tags-div">
            <h4 className="border-bottom">Tags</h4>
            <ul className="grid grid-3 tags-grid">
              { this.state.tags.map((tag, index) => {
                return (
                  <li className="tag-li" key={index}>{tag}</li>
                )
              })}
            </ul>
          </div>
        </main>
        <footer>
          &copy; 2018
        </footer>
      </div>
    )
  }
}

export default App

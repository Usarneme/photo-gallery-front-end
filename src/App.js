import React, { Component } from 'react'
import PhotoGrid from './components/PhotoGrid'

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
    return (
      <div className="">
        <header className="">
          <h1>Photo Gallery</h1>
        </header>
        <main>
          <PhotoGrid photos={this.state.photos} />

          <div className="grid tags-div">
            <h3>Tags</h3>
            <div className="grid grid-3">
              { this.state.tags.map((tag, index) => {
                return (
                  <div key={index}>{tag}</div>
                )
              })}
            </div>
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

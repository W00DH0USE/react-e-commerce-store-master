import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    console.log()
    return (
      <div className="container">
        <div className="row">
          <div className="default-container">
            <div className="text-404">
              <h1 style={{color: "red"}}>404</h1>
              <h1>Page Not Found!</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

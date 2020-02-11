import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row max-height justify-content-center align-items-center">
          <div class="col-10 mx-auto banner text-center">
            <h1 class="text-capitalize">
              welcome to 
              <strong class="banner-title">D'Oh! Nut Sweet's</strong>
            </h1>
            <a href="#store" class="btn banner-link text-uppercase my-2">explore</a>
            <a href="#store" class="btn banner-link text-uppercase my-2">explore</a>
          </div>
        </div>
      </div>
    )
  }
}

import React from 'react'

export default function Title({name, title}) {
  return (
    <div className="row">
      <div className="title text-title">
        <h1 className="text-capitalize">
          {name} <strong className="text-blue">{title}</strong>
        </h1>
      </div>
    </div>
  )
}

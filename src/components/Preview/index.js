import React from 'react'
import './preview.css'

export default function Preview({ content }) {
  return (
    <div className='col-12 col-md-6 pt-5 preview' >
      <div className="content">
        {content}
      </div>
    </div>
  )
}

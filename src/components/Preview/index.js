import React from 'react'
import './preview.css'

export default function Preview({ content, title }) {
  return (
    <div className='col-12 col-md-6 pt-5 preview' >
      <div className="content">
        <div className='text-center pb-3'>{title}</div>
        {content}
      </div>
    </div>
  )
}

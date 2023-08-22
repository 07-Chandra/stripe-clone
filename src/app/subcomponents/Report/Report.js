import React from 'react'
import './Report.scss'

function Report({tag , title ,about , link}) {
  return (
    <div className='card-report'>

        <div className="tag-wrap">
            <p>{tag}</p>
        </div>

        <div className="subheading">{title}</div>

        <p className="para">{about}</p>

        <div className="link">{link}</div>
        
    </div>
  )
}

export default Report
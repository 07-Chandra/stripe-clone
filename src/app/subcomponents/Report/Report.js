import React from 'react'
import './Report.scss'

function Report({tag , title ,about , link , svg}) {
  return (
    <div className='card-report'>


        <div className="tag-wrap">
             <div className="svg-icon">
              {svg}
             </div>
            <p>{tag}</p>
        </div>

        <div className="subheading">{title}</div>

        <p className="para">{about}</p>

        <div className="link">{link}</div>
        
    </div>
  )
}

export default Report
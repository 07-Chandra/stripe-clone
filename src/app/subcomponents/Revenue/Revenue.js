import React from 'react'
import './Revenue.scss'

function Revenue({src , title , about , tags}) {
  return (
    <div className='revenue'>
        <div className="revenue-container">

            <div className="image-wrapper">
                <img src={src} alt="" />
            </div>
            <h2 className="subheading">{title}</h2>
            <p className="paragraph">
                {about}
            </p>

            <div className="tags">
                {
                    tags.map((item ,id)=>{
                        return(
                           <div>
                                <h1>Hello</h1>
                           </div>
                        );
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Revenue
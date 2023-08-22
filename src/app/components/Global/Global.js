import React from 'react'
import './Global.scss'
import Revenue from '@/app/subcomponents/Revenue/Revenue';


function Global() {
  return (
      <div className="global">
          <div className="global-container">
              <div className="header">
                  <div className="heading">Global payments</div>
                  <p className="paragraph">
                      Expand and win in every market with optimized checkout and
                      payments.
                  </p>
              </div>
              <div className="all-revenues">
                <div className="revenue-types">
                    {/* <Revenue src= /> */}
                </div>
              </div>
          </div>
      </div>
  );
}

export default Global
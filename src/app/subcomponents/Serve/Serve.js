import React from "react";
import "./Serve.scss";
function Serve({title , about}) {
    return (
        <div className="serve">
            <h3 className="head">{title}</h3>

            <p className="para">
               {about}
            </p>

            <p className="link">Learn More</p>
        </div>
    );
}

export default Serve;

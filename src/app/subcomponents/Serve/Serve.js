import React from "react";
import "./Serve.scss";
function Serve({ title, about ,color }) {
    return (
        <div className = {`serve ${color}`} >
            <div className="upper">
                <h3 className="head">{title}</h3>

                <p className="para">{about}</p>
            </div>

            <p className="link">Learn More</p>
        </div>
    );
}

export default Serve;

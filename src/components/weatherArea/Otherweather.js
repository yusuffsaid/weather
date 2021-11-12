import React from 'react'

const Otherweather = ({data}) => {
    return (
        <div className="other-item">
           <h1 className="item-date">{data.date}</h1>
           <h3 className="item-avarage">{data.degree} °C</h3>
           <h3 className="item-description">{data.description}</h3>
            <h6 className="item-max">Max: {data.max}</h6>
            <h6 className="item-min">Min: {data.min}</h6>
        </div>
    )
}

export default Otherweather

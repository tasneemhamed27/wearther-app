import React from "react"
const Weather = (props) => {
return (
    <div>
{props.tempreature}
{props.city && <p>temp:{props.tempreature}</p>}
{props.country && <p>city:{props.country}</p>}
{props.humidity && <p>hum:{props.humidity}</p>}
{props.description && <p>desc:{props.description}</p>}
{props.error && <p>err:{props.error}</p>} 
    </div>
)
}

export default Weather
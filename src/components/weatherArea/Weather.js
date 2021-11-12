import React ,{useEffect,useState}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeather, selectWeather,addFav } from '../../features/weather/weatherSlice'
import Loading from '../loading/Loading'
import Otherweather from './Otherweather'
import "./weather.css"

const Weather = () => {
    const {data,city,isLoading,fav} = useSelector(selectWeather);

    const [bgi, setbgi] = useState("");

    useEffect(() => {
    if(data.length>0 && data[0].description.indexOf("yağmur")!==-1)
        setbgi("./assets/img/rain.gif")
    else if(data.length>0 && data[0].description.indexOf("snow")!==-1)
        setbgi("./assets/img/snow.gif")
    else if(data.length>0 && data[0].description.indexOf("güneşli")!==-1 )
        setbgi("./assets/img/sun.gif")
    
    else if(data.length>0 && data[0].description.indexOf("açık")!==-1) 
        setbgi("./assets/img/sun.gif")
    else if(data.length>0 && data[0].description.indexOf("bulut")!==-1) 
        setbgi("./assets/img/clouds.gif")
    
    
}, [])
    

    const dispatch = useDispatch();
    let i;
    if(!isLoading)
        return(<Loading></Loading>)
    else    
    return (
        <div className="weather-container" >
            <i className={`${fav.includes(city) ? "fas fa-star fav-icon fav":"fas fa-star fav-icon"}`} onClick={()=>dispatch(addFav(city))}></i>
            <h1 className="city">{city}</h1>
            <h3 className="date">{data[0].date}</h3>
            <h1 className="current">{data[0].degree}°C</h1>
            <h3 className="description">{data[0].description}</h3>
            <h3 className="des max">En yüksek hava sıcaklığı: <span>{data[0].max}°C</span></h3>
            <h3 className="des min">En düşük hava sıcaklığı: <span>{data[0].min}°C</span></h3>
            <h3 className="des nem">En düşük hava sıcaklığı: <span>{data[0].humidity}</span></h3>
            
            <div className="other-weather">
                {
                    data.map((m,i)=>{
                        if(i!==0){
                            return(<Otherweather data={m}/>)
                        }
                    })
                }

            </div>
            
        </div>
    )
}

export default Weather

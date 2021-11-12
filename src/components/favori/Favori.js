import React from 'react'
import { useSelector } from 'react-redux'
import { selectWeather } from '../../features/weather/weatherSlice'
import "./favori.css"
import FavoriItem from './FavoriItem'
const Favori = () => {
    const {fav} = useSelector(selectWeather);
    return (
        <div className="favori-container">
           <table>
  <tr>
    <th>Şehir</th>
    <th>Anlık</th>
    <th>En Yüksek</th>
    <th>En Düşük</th>
  </tr>
  {
      fav.map((m,i)=>(
          <FavoriItem data={m} key ={i} />
      ))
  }
  
  
</table> 
        </div>
    )
}

export default Favori

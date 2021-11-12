import React, { useEffect,useState } from 'react'
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { getWeather } from '../../features/weather/weatherSlice';
import "./favori.css";
const FavoriItem = ({data}) => {
    const dispatch = useDispatch();

    const [info, setInfo] = useState({})
    useEffect(() => {
        dispatch(getWeather(data))
        .then(unwrapResult)
        .then(d=>{
            console.log(d)
            setInfo(d.result[0  ])});
    }, [])

    return (
     <tr>
    <td className="table-item table-city">{data} <span>{info.date}</span></td>
    <td className="table-item table-degree">{info.degree}</td>
    <td className="table-item table-max">{info.max}</td>
    <td className="table-item table-min">{info.min}</td>
  </tr>
    )
}

export default FavoriItem

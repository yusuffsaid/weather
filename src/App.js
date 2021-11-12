import React, { useEffect } from 'react'
import Header from './components/header/Header'
import Weather from './components/weatherArea/Weather'
import { useDispatch } from 'react-redux'
import { getFav, getWeather } from './features/weather/weatherSlice'
import Map from './components/map/Map'
import { Switch, Route } from 'react-router'
import { BrowserRouter } from "react-router-dom"
import Favori from './components/favori/Favori'

const App = () => {
     const dispatch = useDispatch();
    useEffect(() => {
          dispatch(getWeather("Karabük"))
        dispatch(getFav());
    }, [])


    return (
        <BrowserRouter >
            <Header />
             <Switch>
                <Route path="/" exact  render={(props)=><Weather {...props} />} />
                <Route path="/map"  exact render={(props)=><Map {...props} />} />
                <Route path="/favori"  exact render={(props)=><Favori {...props} />} />
            </Switch> 
        </BrowserRouter>
    )
}

export default App
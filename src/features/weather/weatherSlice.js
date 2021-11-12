import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = "apikey 4GWHkXvNWoZ93pLumE258v:56H64AkZE1oIhvGTHmbdaq"; 

export const getWeather = createAsyncThunk("weather/get",async(city)=>{
const weather = await axios.get("https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city="+city,{
    headers:{
        Authorization:apiKey
    }   
})
return weather.data;
}) 


export const getFav = createAsyncThunk("fav/gert",async()=>{
    let fav =  JSON.parse(window.localStorage.getItem("favWeather"));
    return fav.length > 0 ? fav : []
})


let initialState={
data:[],
city:"",
isLoading:false,
fav:[],
error:null,
}

const weatherSlice = createSlice({
    name:"weather",
    initialState,
    reducers:{
        addFav:(state,action)=>{
            if(state.fav.includes(action.payload)){
                    state.error = "Bu şehir zaten favorilerinizde var";
                    console.log("Hata")
            }
            else{
                state.error = null;
                state.fav.push(action.payload);
                console.log(action.payload);
                window.localStorage.setItem("favWeather",JSON.stringify(state.fav));
            }
        },
        changeLoading:state=>{
            state.isLoading=false;
        }
    },
    extraReducers:{
        [getWeather.fulfilled]:(state,action)=>{
            state.data = action.payload.result;
            state.city = action.payload.city;
            state.isLoading = true;
        },
        [getFav.fulfilled]:(state,action)=>{
            state.fav = action.payload; 
        }
    }
}) 

export const {addFav,changeLoading} = weatherSlice.actions; 

export const selectWeather = (state) => state.weather;

export default weatherSlice.reducer 
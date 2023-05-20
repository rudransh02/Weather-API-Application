import './App.css';
import Card from '@mui/material/Card';
import { useState } from 'react';
import Description from './Components/Description';
import Range from './Components/Range'
import Average from './Components/Average';
import Location from './Components/Location'
import Input from './Components/Input';

function App()
{
    const [location, setLocation] = useState("");
    const [averageTemprature, setAverageTemprature] = useState("Average Temprature");
    const [minimumTemprature, setMinimumTemprature] = useState("Minimum Temprature");
    const [maximumTemprature, setMaximumTemprature] = useState("Maximum Temprature");
    const [description, setDescription] = useState("Weather Description");
    const key = '8fae815011ca7ee36c013d6b1f42e945';

    const getWeather = async () => 
    {
        const base = `http://api.openweathermap.org/data/2.5/find?units=metric&q=${location}&APPID=${key}`;
        const response = await fetch(base);
        const data = await response.json();
        return data;
    };

    const handleLocation = (loc) =>
    {
        setLocation(loc);
    }

    function updateUI()
    {
        getWeather().then(data =>
            {
                let rootData = data.list;
                setAverageTemprature(rootData[0]["main"]["temp"]);
                setMinimumTemprature(rootData[0]["main"]["temp_min"]);
                setMaximumTemprature(rootData[0]["main"]["temp_max"]);
                setDescription(rootData[0]["weather"][0]["description"]);
            });
    }

    return (
        <div className="App">

             <Card>

                <Input updateUI = {updateUI} handleLocation = {handleLocation} />

                <Location location = {location} />

                <Average averageTemprature = {averageTemprature}/>

                <Range minimumTemprature = {minimumTemprature} maximumTemprature = {maximumTemprature} />
                
                <Description description = {description} />
             
             </Card>

        </div>
    );
}

export default App;
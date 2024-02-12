import axios from 'axios'
import { useState } from 'react'

function App()
{   
    const [deg,setdeg] =useState("238")
    const [city,setcity] =useState("France")
    const [desc,setdesc] =useState("Raining")
    const [enteredvalue,setenteredvalue] = useState("")

function handleInput(event)
{
    console.log(event.target.value)
    setenteredvalue(event.target.value)
}

    function getData()
    {
        var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}&appid=3182c6ac05f3adf55b491e56c501a1a0`)

        weather.then(function(dalta){
            setdeg(dalta.data.main.temp)
            setdesc(dalta.data.weather[0].description)
            setcity(dalta.data.name)
        })

    }
    return(
        <div className="flex flex-row justify-center h-[100vh] items-center">            
        
            <div className="p-5 rounded-md shadow" style={{backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"}}>        
                <h2 className="font-medium ">Hey! ⛅</h2>
                <p className="text-xs">Do you want to know the weather Report :)</p>
                <input onChange={handleInput} type="text" className="rounded-md h-6 text-sm mt-2 p-1 outline-none" placeholder="City Name? " />
                <br/>
                <button onClick={getData} className="bg-black text-white rounded-lg p-1 text-xs mt-2">Get Report ⚡</button>
                <p className="text-xs mt-2">Degree: {deg} | City: {city} | Weather: {desc} </p>
            </div>
        </div>
    )
}

export default App
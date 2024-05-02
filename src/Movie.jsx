
import React, { useState } from 'react';
function Movie(){

    const [movies,setMove] = useState([])

    const URL = "https://swapi.dev/api/films/?format=json"

    async function makeRequest(){
        const response = await fetch(URL)
        const data = await response.json()
        setMove(data.results)
        console.log(data)
    }

    return <div className="Movie">
        
        <button onClick={makeRequest
        }>Click</button>


        <div className="">
            {movies?.map((item) => (
                <div key={item.title} className="">
                    <h5>{item.title}</h5>
                    <p>{item.opening_crawl}</p>
                </div>
            ))}
        </div>

    </div>

}
 export default Movie
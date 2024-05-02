
import React, { useState } from 'react';
function Movie(){

    const [movies,setMove] = useState([])

    const URL = "https://swapi.dev/api/films/?format=json"

    async function makeRequest(){
        const response = await fetch(URL)
        const data = await response.json()
        setMove(data.results)
    }

    return <div className="Movie">
        
        <button onClick={makeRequest
        }>Movies</button>


        <div className="">
            {movies?.map((item) => (
                <div key={item.title} className="">
                    <h5 className="tMovie">{item.title}</h5>
                    <p className='Movie'>{item.opening_crawl}</p>
                </div>
            ))}
        </div>

    </div>

}
 export default Movie

import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    const [blog,setBlog]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/api/movies')
        .then(res=>setBlog(res.data))
        .catch(err=>console.log(err))
    },[])



  return (
    <div>
        <h1 className="text-center">Available Movies</h1>
        <div
            className="container"
        >
            <div
                className="row justify-content-center align-items-center g-2"
            >
                <div style={{gap:"20px"}} className="row ">
                    {
                        blog.map((item)=>(
                            <div className="card  " style={{width: "18rem"}}>
                                <img style={{height: "200px",width: "100%", objectFit: "cover"}} src={item.poster} className="card-img-top " alt="..."/>
                                <div className="card-body text-center border-2 ">
                                    <h5 className="card-title
                                    ">{item.title}</h5>
                                    <p className="card-text">Rating: {item.rating}</p>
                                    <p className="card-text">Genre: {item.genre}</p>
                                    <p className="card-text">Duration: {item.duration}</p>
                                    <p className="card-text">Language: {item.language}</p>
                                    <NavLink
                                        name=""
                                        id=""
                                        className="btn btn-primary "
                                        to={`/ShowMovie/${item._id}`}
                                        role="button"
                                        >View More</NavLink >
                                    
                                </div>
                            </div>
                        ))

                    }

                </div>
                
            </div>
            
        </div>
        

    </div>
  )
}

export default Home
import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

const ShowMovie = () => {
    const [blog,setBlog]=useState([])
    const {id}=useParams()
    const Navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/movies/${id}`)
        .then(res=>setBlog(res.data))
        .catch(err=>console.log(err))
    }
    ,[])

    const handleDelete=()=>{
        axios.delete(`http://localhost:5000/api/movies/${id}`)
        .then(()=>Navigate('/'))
        .catch(err=>console.log(err))
    }



  return (
    <div>
        <h1 className="text-center">Show Movie</h1>
        <div
            className="container h-100 d-flex justify-content-center align-items-center"
        >
            <div className="card">
                <img className="card-img-top" src={blog.poster} alt="Title" />
                <div className="card-body">

                    <h4 className="card-title">{blog.title}</h4>
                    
                    <p className="card-text">{blog.description}</p>
                    <p className="card-text">Rating: {blog.rating}</p>
                    <p className="card-text">Genre: {blog.genre}</p>
                    <p className="card-text">Duration: {blog.duration}</p>
                    <p className="card-text">Language: {blog.language}</p>

                    <NavLink
                        className="btn btn-primary"
                        id=""
                        class="btn btn-primary"
                        to={`/edit/${blog._id}`}
                        role="button"
                        >Edit</NavLink>
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                    <NavLink
                        className="btn btn-secondary"
                        id=""
                        class="btn btn-primary"
                        to="/"
                        role="button"
                        >Back</NavLink >
                    
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default ShowMovie
import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

const EditMovie = () => {
    
    const [blog,setBlog]=useState({})
    const { id } = useParams();
    const Navigate = useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/movies/${id}`)
        .then(res=>setBlog(res.data))
        .catch(err=>console.log(err))
    }
    ,[])

    const handleChange=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:5000/api/movies/${id}`,blog)
        .then(()=>Navigate('/'))
        .catch(err=>console.log(err))
    }


  return (
    <div>
        <h1 className="text-center">Edit Movie</h1>
        <div
            className="container col-6 "
        >
            <div
                className="row justify-content-center align-items-center g-2 p-5 border-2 bg-info"
            >
                <div className="col p-5 border-2 bg-info">
                    <form>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={blog.title}
                                onChange={(e)=>setBlog({...blog,title:e.target.value})}
                            />
                            <label for="formId1">Title</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={blog.rating}
                                onChange={(e)=>setBlog({...blog,rating:e.target.value})}
                            />
                            <label for="formId1">Rating</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="formId1"
                                id="formId1"
                                value={blog.genre}
                                placeholder=""
                                onChange={(e)=>setBlog({...blog,genre:e.target.value})}
                            />
                            <label for="formId1">Genre</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={blog.duration}
                                onChange={(e)=>setBlog({...blog,duration:e.target.value})}
                            />
                            <label for="formId1">Duration</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={blog.language}

                                onChange={(e)=>setBlog({...blog,language:e.target.value})}
                            />
                            <label for="formId1">Language</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={blog.poster}
                                onChange={(e)=>setBlog({...blog,poster:e.target.value})}
                            />
                            <label for="formId1">Poster</label>
                        </div>
                      
                       

                            <button
                                type="button"
                                className="btn btn-primary align-middle"
                                onClick={handleChange}
                            >
                                Edit
                            </button>
                            
                        
                        </form>
                </div>
                
            </div>
            
        </div>
        
    </div>
  )
}

export default EditMovie
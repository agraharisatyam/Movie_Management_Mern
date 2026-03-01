import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const AddMovie = () => {
    const Navigate = useNavigate()
    const[blog,setBlog]=useState({
        title:"",
        rating:"",
        genre:"",
        duration:"",
        language:"",
        poster:""
        
        })
       

        const handleChange=(e)=>{
            e.preventDefault();
            axios.post(`http://localhost:5000/api/movies`,blog)
            .then((res)=>Navigate('/'))
            .catch(err=>console.log(err))
            
        }

  return (
    <div>
        <h1 className="text-center">Add Movie</h1>
        <div
            className="container col-6 bg-info p-5 border-2"
        >
            <div className="card p-5">
                <form >
                   
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="formId1"
                            id="formId1"
                            placeholder=""
                            onChange={(e)=>setBlog({...blog,title:e.target.value})}
                        />
                        <label for="formId1">Title:</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="formId1"
                            id="formId1"
                            placeholder=""
                            onChange={(e)=>setBlog({...blog,rating:e.target.value})}
                        />
                        <label for="formId1">Rating: </label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="formId1"
                            id="formId1"
                            placeholder=""
                            onChange={(e)=>setBlog({...blog,genre:e.target.value})}
                        />
                        <label for="formId1">Genre:</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="formId1"
                            id="formId1"
                            placeholder=""
                            onChange={(e)=>setBlog({...blog,duration:e.target.value})}
                        />
                        <label for="formId1">Duration:</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="formId1"
                            id="formId1"
                            placeholder=""
                            onChange={(e)=>setBlog({...blog,language:e.target.value})}
                        />
                        <label for="formId1">Language: </label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="formId1"
                            id="formId1"
                            placeholder=""
                            onChange={(e)=>setBlog({...blog,poster:e.target.value})}
                        />
                        <label for="formId1">Poster: </label>
                    </div>
                    
                    <button
                        type="button"
                        class="btn btn-primary"
                        onClick={handleChange}
                    >
                        Add Movie
                    </button>
                    

                </form>
                </div>
            </div>
            
        </div>
        

  )
}

export default AddMovie
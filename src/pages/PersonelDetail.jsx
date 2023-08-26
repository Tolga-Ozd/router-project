import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom/dist'

const PersonelDetail = () => {
  // const {state:person} = useLocation()
  const navigate = useNavigate()
  const {id} = useParams()
  console.log(id) 
  const [person ,setPerson] = useState({})


  const getPerson = ()=>{
    axios(`https://reqres.in/api/users/${id}`)
    .then((res)=>setPerson(res.data.data))
    .catch((err)=>console.log(err))
  }

  useEffect(() => {
    getPerson()
  }, [])
  

  // console.log(person)
  return (
   <div>
     <div className="container text-center">
      <h3>
        {person?.first_name} {person?.last_name}
      </h3>
      <img className="rounded" src={person?.avatar} alt="" />
      <p>{person?.email}</p>
      <div>
        <button onClick={() => navigate("/")} className="btn btn-success me-2">
          Go Home
        </button>
        <button onClick={() => navigate(-1)} className="btn btn-warning">
          Go Back
        </button>
      </div>
    </div>
    const getPeople = () 
   </div>
  )
}

export default PersonelDetail
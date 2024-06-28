import React from 'react'
import './Homepage.css'
import Card from '../../Component/Card/Card'
import { CiSearch } from "react-icons/ci";
import axios from 'axios'
import {useEffect, useState} from 'react'



const Homepage = () => {
  const [data, setData] = useState('tesla')
  const [apiData, setApiData] = useState([])
  const handleChange = (e) => {
    setData(e.target.value)
  }
  const dataSlice = [...apiData].slice(0, 6)
  console.log(dataSlice);
  useEffect(() => {
    axios.get(`https://newsapi.org/v2/everything?q=${data}&from=2024-05-28&sortBy=publishedAt&apiKey=f845665cf55640dd84f1bf9c42caeba1`)
    .then(res => {
      console.log(res);
      setApiData(res.data.articles)
    })
    .catch(err => {
      console.log(err);
    })
  }, [data])

  return (
    <div>
       <h3 className="filter">Filter by keywords</h3>
      <div className='homepage-input'>
        <input value={data} onChange={handleChange} type="search" placeholder='The most successful IT companies in 2020'/>
        <CiSearch className='bar' />
      </div>
      <h4 className='result'>Results: 6 </h4>
      <div className='card-flex'>
        {dataSlice.map((element, i) => (
          <Card key={i} element={element} />
        ))}
      </div>
        
    </div>
  )
}

export default Homepage

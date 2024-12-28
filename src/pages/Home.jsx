import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

    const [data, setData] = useState([])
    const [status, setStatus] = useState(false)

    const fetchData = async () => {
        const response = await axios.get('https://script.google.com/macros/s/AKfycbz1MfB3vVV3hiXH7D-pwdA5AiHw8rFHBghmHW5LyG0_t6wpQXIawpE7-hCJfkmGug5c3A/exec');
        console.log(response);
        setData(response.data)
        console.log(data)
        setStatus(true)
    }

    useEffect(()=>{
        fetchData()
        console.log("running")
    },[])

  return status && (
    <div>
        {data.map((item, index)=>(
            <div>{item.user_name}</div>
        ))}
    </div>
  )
}

export default Home


import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://exercisedb.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': 'c1398f5470msh4c657b19f02d74cp1239e9jsn7bd2d0f617f5',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com' 
  }
})

export default axiosInstance
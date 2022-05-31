import axios from "axios"
import React, { useEffect, useState } from "react"
import { API_URL_NEWS } from "../util/constants"
import { Category } from "./Home.component"
const Home = () => {
    const [data, setData] = useState({
        newsList: [],
        isLoaded: false
    })
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(API_URL_NEWS)
            setData({
                newsList: res.data,
                isLoaded: true
            })
        }
        if (!data.isLoaded) getData()
    }, [data.isLoaded])
    return (
        data.isLoaded
        ? <Category list={data.newsList} />
        : <div>Please Wait...</div>
    )
}
export default Home
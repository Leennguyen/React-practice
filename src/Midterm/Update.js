import axios from "axios"
import React, { useEffect , useState} from "react"
import { useParams } from "react-router-dom"
import { API_URL_NEWS } from "../util/constants"
import Form from "./Form"

const UpdateNews = () => {
    const params = useParams()
    const [data, setData] = useState({
        news : {},
        isLoaded: false
    })
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(API_URL_NEWS + params.id)
            setData({
                news: res.data,
                isLoaded: true
            })
        }
        if (!data.isLoaded) getData()
    }, [data.isLoaded])
    return (
        data.isLoaded
        ? <Form action="update" data={data.news}/>
        : <div>Please wait...</div>
    )
}
export default UpdateNews
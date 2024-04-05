import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [fetch, setFetch] = useState()

    // console.log('fetch', fetch)


    useEffect(() => {
        const fetchData = async () => {
            setData(null)
            setLoading(true)
            setError(null)
            axios.request({
                method: fetch?.method,
                url: fetch?.url,
                data: fetch?.body,
                params: fetch?.query,
                headers: fetch?.headers
            })
                .then((response) => {
                    setData(response?.data)
                })
                .catch((error) => {
                    setError(error)
                    // console.error(error)
                })
                .finally(() => {
                    setLoading(false)
                })

        }
        fetchData()
    }, [fetch])


    return [data, loading, error, setFetch]
}

export default useFetch
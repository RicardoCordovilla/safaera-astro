import React, { useEffect, useState } from 'react'
import { API_METHODS } from '../../../utils/configs'
import './ImagesTransition.styles.css'
import useFetch from '../../../utils/useFetch'

const ImagesTransition = () => {

    const [data, loading, error, fetch] = useFetch()

    const [images, setImages] = useState([])


    const formatImageUrl = (url) => {
        const newUrl = url.replace(
            "https://drive.usercontent.google.com/download?id=",
            "https://lh3.googleusercontent.com/d/",
        );
        return newUrl
        // image = imageFetch.replace(
        //     "https://drive.usercontent.google.com/download?id=",
        //     "https://lh3.googleusercontent.com/d/",
        // );
    }

    const formatImages = (images) => {
        const newImages = images.map((image) => {
            return formatImageUrl(image)
        })
        return newImages
    }

    useEffect(() => {
        fetch(API_METHODS.configs.getConfigs)
    }, [])

    useEffect(() => {
        const response = data && data[0].data
        if (!data) return
        // setImages(response?.images.form)
        setImages(formatImages(response?.images?.form))
        // console.log(images)
    }, [data])

    const transitionImages = () => {
        let i = 0
        setInterval(() => {
            if (i < images.length) {
                i++
            } else {
                i = 0
            }
        }, 3000)
        return <span
            className='imagesTransition'
        ><img src={images[i]} alt="" className='image' /></span>
    }



    return (
        <div className="imagesContainer">
            {
                transitionImages()
            }
        </div>


    )
}

export default ImagesTransition
import axios from "axios";
import { setData, searchData,getById, setError, setLoading } from "../slice/gallerySlice";


const api = axios.create({
    baseURL: `${process.env.baseUrl}`,
    withCredentials: false,
})

export function fetchItems(){
    return async (dispatch) => {
        api
            .get(`/photos/?client_id=${process.env.uid}`)
            .then((res) => {
                dispatch(setData(res.data))
            })
            .catch((error) => {
                dispatch(setError(error))
            })
    }

}

export function getItems(value){
    return async (dispatch) => {
        api
            .get(`/search/photos/?client_id=${process.env.uid}&query=${value}`)
            .then((response) => {
                dispatch(searchData(response.data.results))
            })
            .catch((error) => {
                dispatch(setError(error))
            })
    }
}

export function getItemById(id){
    return async (dispatch) => {
        api
            .get(`/photos/${id}/?client_id=${process.env.uid}`)
            .then((response) => {
                dispatch(getById({
                    downloads: response.data.downloads,
                    views : response.data.views,
                    likes: response.data.likes,
                    color: response.data.color,
                    data : response.data,
                    images : response.data.urls.regular,
                    desc : response.data.alt_description, 
                    name : response.data.user.name,
                    avatar : response.data.user.profile_image.medium

                }))
            })
            .catch((error) => {
                dispatch(setError(error))
            })
    }

}

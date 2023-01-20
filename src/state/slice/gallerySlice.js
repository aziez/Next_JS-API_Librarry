import React from 'react'
import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState = {
    loading: false,
    error: false,
    data: [],
}


export const gallerySlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        setData: (state, {payload}) => {
            state.loading = false,
            state.error = false,
            state.data = payload
        },
        searchData: (state, {payload}) => {
            state.loading = false,
            state.error = false,
            state.data = payload
        },
        setError: (state) => {
            state.error = true;
        },
    },
})

export const {setLoading, setData, searchData, setError} = gallerySlice.actions
export const itemSelector = (state) => state.data;

export default gallerySlice.reducer

const api = axios.create({
    baseURL: "https://api.unsplash.com",
    withCredentials: false,
})

export function fetchItems(){
    const id = 'ghX9dF3ZzX6RU-GeqPLM21U5sQgVcrR13Rk-OAzq2G4'
    return async (dispatch) => {
        api
            .get(`/photos/?client_id=${id}`)
            .then((response) => {
                dispatch(setData(response.data))
            })
            .catch((error) => {
                dispatch(setError(error))
            })
    }
}

export function getItems(value){
    const id = 'ghX9dF3ZzX6RU-GeqPLM21U5sQgVcrR13Rk-OAzq2G4'
    return async (dispatch) => {
        api
            .get(`/search/photos/?client_id=${id}&query=${value}`)
            .then((response) => {
                dispatch(searchData(response.data.results))
            })
            .catch((error) => {
                dispatch(setError(error))
            })
    }
}

import React from 'react'
import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState = {
    loading: false,
    error: false,
    data: [],
    individu: []
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
        getById: (state, {payload}) => {
            state.loading = false,
            state.error = false,
            state.individu = payload
        },
        setError: (state) => {
            state.error = true;
        },
    },
})

export const {setLoading, setData, searchData, setError, getById} = gallerySlice.actions
export const itemSelector = (state) => state.data;

export default gallerySlice.reducer

import {
    POST_CREATE_SUCCESS, POST_DELETE_FAIL,
    POST_DELETE_SUCCESS, POST_CREATE_FAIL, POST_LOADED_SUCCESS, POST_LOADED_FAIL,
    POST_DELETED_SUCCESS, POST_DELETED_FAIL,
    POST_FILTER_SUCCESS, POST_FILTER_FAIL
} from './types'

import axios from "axios"



export const loadPost = () => async (dispatch) => {


    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/post/postlist/`);
        dispatch({
            type: POST_LOADED_SUCCESS,
            payload: res.data
        })

    }
    catch (err) {
        dispatch({
            type: POST_LOADED_FAIL,
        })
    }

}

export const addPost = (city, phone, size, price, description) => async (dispatch) => {

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };

    if (description === "")
        description = "لايوجد"

    const body = JSON.stringify({ city, phone, size, price, description });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/post/post-create/`, body, config);

        dispatch({
            type: POST_CREATE_SUCCESS,
        })
        loadPost()
    }
    catch (err) {

        dispatch({
            type: POST_CREATE_FAIL,
        })
    }

}

export const filterPost = (city, size) => async (dispatch) => {

    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };


    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/post/postlist/?size=${size}&city=${city}`);

        dispatch({
            type: POST_FILTER_SUCCESS,
            payload: res.data
        })
    }
    catch (err) {

        dispatch({
            type: POST_FILTER_FAIL,
        })
    }

}

export const deletePost = (id) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };


    try {
        const res = await axios.delete(`${process.env.REACT_APP_API_URL}/post/post-detail/${id}/`, config);
        loadPost()

    }
    catch (err) {
        dispatch({
            type: POST_DELETED_FAIL,
        })
    }

}
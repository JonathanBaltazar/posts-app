import axios from "axios";

export let getPostsRequest = () => {
    return axios.get("/api/posts");
};

export let getPostRequest = (id) => {
    return axios.get(`/api/posts/${id}`);
};

export let createPostRequest = (post) => {
    return axios.post("/api/posts", post)
}

export let editPostRequest = (id, post) => {
    return axios.post(`/api/posts/${id}`, post)
}

export let deletePostRequest = (id) => {
    return axios.delete(`/api/posts/${id}`)
}
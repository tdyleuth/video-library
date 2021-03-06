import axios from 'axios';

const api = axios.create({
    // Use for local server baseURL: 'http://localhost:3000/api',
    baseURL: '/api',
});

//Aunthentication

export const signup = (payload) => api.post('/user/signup', payload);
export const loginUser = (payload) => api.post('/user/login', payload);

//User
export const updateUser = (id, payload) => api.put(`user/${id}`, payload);
export const deleteUser = (id) => api.delete(`/video/${id}`);
export const getUsers = () => api.get('/users');
export const getUserById = (id) => api.get(`/user/${id}`);

//Video
export const createVideo = (payload) => api.post('/video', payload);
export const updateVideoById = (id, payload) =>
    api.put(`/video/${id}`, payload);

export const deleteVideoById = (id) => api.delete(`/video/${id}`);

export const getAllVideos = () => api.get('/videos');
export const getVideoById = (id) => api.get(`/video/${id}`);

const apis = {
    signup,
    loginUser,
    updateUser,
    deleteUser,
    getUsers,
    getUserById,
    createVideo,
    updateVideoById,
    deleteVideoById,
    getAllVideos,
    getVideoById,
};

export default apis;

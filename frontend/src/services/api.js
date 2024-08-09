import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || `http://localhost:${process.env.PORT || 8000}`;
export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/upload`, data);
        return response.data;
    } catch (error) {
        console.log("Error while uploading the file", error);
    }
};

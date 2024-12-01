
import { useLocation, useNavigate } from "react-router-dom";

const refreshAccessToken = async () => {
    try {
        const refreshToken = localStorage.getItem('refresh');
        if (!refreshToken) throw new Error('No refresh token found');

        const response = await axios.post('http://192.168.43.221:8000/api/v1/users/token/refresh/client/', {
            refreshToken,
        });

        const { access } = response.data;

        // Save the new access token
        localStorage.setItem('accessToken', access);

        console.log('Access token refreshed successfully');
    } catch (error) {
        console.error('Error refreshing access token:', error);
        window.location.href = '/signin';
    }
};

export default refreshAccessToken;

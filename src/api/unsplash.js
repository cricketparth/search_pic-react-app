import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization : 'Client-ID 83dg7jRttrC_kiBlvgB3g-xyDaafCJ-ZMrqCzClTzVk'
    }
 });
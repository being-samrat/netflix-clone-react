import axios from "axios";

const apiInstance=axios.create({
    baseURL:'https://api.themoviedb.org/3',
});

export default apiInstance;
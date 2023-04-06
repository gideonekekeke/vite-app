import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:1400",
});

export default instance;

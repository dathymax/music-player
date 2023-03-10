import axios from "axios";

const authEnpoint = "https://accounts.spotify.com/authorize?";
const clientId = "c0657c04fdf64cf984963f67e195d8c0";
const redirectURI = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEnpoint}client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
	baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
	apiClient.interceptors.request.use(async function (config) {
		config.headers.Authorization = "Bearer " + token;
		return config;
	});
};

export default apiClient;

import axios from 'axios';

const baseApiClient = axios.create({
	baseURL: '/api',
	headers: {
		'Content-Type': 'application/json',
	},
});

// Simple error handling for server-side
baseApiClient.interceptors.response.use(
	(response) => response,
	(error) => Promise.reject(error)
);

export { baseApiClient as apiClient };
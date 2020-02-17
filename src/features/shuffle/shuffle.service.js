import axios from 'axios'

export const apiShuffle = () => {
	const url = process.env.REACT_APP_HOST_URL + '/api/deck'
	return axios.get(url)
}

export const socketShuffle = () => {
	const url = process.env.REACT_APP_HOST_URL + '/api/deck/socket'
	return axios.get(url)
}

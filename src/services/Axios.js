import axios from 'axios'

const accessToken = localStorage.getItem('accessToken')
export const Axios = async ({
  method = 'get',
  url,
  data = {},
  headers = {},
}) => {
  axios.defaults.baseURL = process.env.REACT_APP_REST_API_URL
  headers.Authorization = `Bearer ${accessToken}`

  if (method !== 'get')
    return axios({
      method,
      url,
      data,
      headers,
    })

  return axios({
    method,
    url,
    headers,
  })
}

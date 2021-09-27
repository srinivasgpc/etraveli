import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAILURE, GET_FILM_DATA, GET_FILTERED_FILMS, GET_SORTED_FILMS } from "./types"

export const getAllData = () => async (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST, payload: null })
  await getData()
    .then((response) => {
      dispatch({ type: GET_DATA_SUCCESS, payload: response })
    })
    .catch((e) => {
      dispatch({ type: GET_DATA_FAILURE, payload: e })
    })
}
export const getFilmData = (payload) => async (dispatch) => {
  dispatch({ type: GET_FILM_DATA, payload: payload })
}

export const filterData = (payload) => (dispatch) => {
  dispatch({ type: GET_FILTERED_FILMS, payload: payload })
}
export const sortData = (payload) => (dispatch) => {
  dispatch({ type: GET_SORTED_FILMS, payload: payload })
}
async function getData() {
  return new Promise(async (resolve, reject) => {
    await fetch("https://star-wars-api.herokuapp.com/films")
      .then(handleResponse)
      .then((res) => {
        resolve(res)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}

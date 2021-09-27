import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAILURE, GET_FILM_DATA, GET_FILTERED_FILMS, GET_SORTED_FILMS } from "../actions/types"
const INIT_STATE = {
  data: [],
  loading: false,
  filmData: null,
  filteredData: [],
  inputText: null,
  sort: false,
  sorteData: [],
}

const dataReducer = (state = INIT_STATE, { payload, type }) => {
  switch (type) {
    case GET_DATA_REQUEST:
      return { ...state, loading: true }
    case GET_DATA_SUCCESS:
      return { ...state, loading: false, data: payload }
    case GET_DATA_FAILURE:
      return { ...state, loading: false, error: payload }
    case GET_FILM_DATA:
      return { ...state, filmData: payload }

    case GET_FILTERED_FILMS:
      const filteredData = payload.length > 0 ? state.data.filter((x) => x.fields.title.toLowerCase().indexOf(payload.toLowerCase()) > -1 || x.fields.director.toLowerCase().indexOf(payload.toLowerCase()) > -1) : []
      return { ...state, filteredData, inputText: payload }
    case GET_SORTED_FILMS:
      const sortedData = state.data.sort((a, b) => {
        const type = payload === "episode" ? "episode_id" : "release_date"
        if (a.fields[type] < b.fields[type]) {
          return -1
        }
        if (a.fields[type] > b.fields[type]) {
          return 1
        }
        return 0
      })

      return { ...state, data: payload === "default" ? state.data : sortedData, sort: payload }
    default:
      return state
  }
}
export default dataReducer

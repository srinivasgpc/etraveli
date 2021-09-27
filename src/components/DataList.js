import { CircularProgress, Box, List, ListItem } from "@material-ui/core"
import React, { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { getAllData, getFilmData } from "../redux/actions/dataActions"

const DataList = () => {
  const dispatch = useDispatch()
  const [filmsData, setFilmsData] = useState([])
  const [filteredFilms, setFilteredData] = useState([])
  const { dataReducer } = useSelector((state) => state)

  const { data, loading, filteredData, inputText, sort } = dataReducer
  useEffect(() => {
    dispatch(getAllData())
  }, [dispatch])

  useEffect(() => {
    const formatData = data.map((film) => {
      return { id: film.id, ...film.fields }
    })
    setFilmsData(formatData)
  }, [data, sort])

  useEffect(() => {
    if (filteredData) {
      const formatData = filteredData.map((film) => {
        return { id: film.id, ...film.fields }
      })
      setFilteredData(formatData)
    }
  }, [filteredData])
  const handleFilm = (film) => {
    const { title, opening_crawl, director } = film
    dispatch(getFilmData({ title, opening_crawl, director }))
  }
  if (loading) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CircularProgress size={20} />
      </Box>
    )
  } else {
    const films = inputText ? filteredFilms : filmsData
    return (
      <Box className="films_list">
        <List sx={{ width: "100%", maxWidth: 360 }} aria-labelledby="nested-list-subheader">
          {films &&
            films.map((film, i) => {
              return (
                <ListItem onClick={() => handleFilm(film)} key={i}>
                  <div className="films_sub_title">EPISODE {film.episode_id}</div>
                  <div className="films_title">
                    <span> {film.title}</span>
                  </div>

                  <div>{film.release_date}</div>
                </ListItem>
              )
            })}
        </List>
      </Box>
    )
  }
}

export default DataList

import React from "react"
import { useSelector } from "react-redux"
import { Box, Typography } from "@material-ui/core"
const DataView = () => {
  const { dataReducer } = useSelector((state) => state)
  const { filmData } = dataReducer

  if (!filmData) {
    return <Box className="films_data films_no_data">No Movie Selected</Box>
  } else {
    return (
      <Box className="films_data">
        <Typography variant="h5">{filmData.title}</Typography>
        <p>{filmData.opening_crawl}</p>
        <p>Directed By: {filmData.director}</p>
      </Box>
    )
  }
}

export default DataView

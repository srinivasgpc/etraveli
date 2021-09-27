import React from "react"
import { useDispatch } from "react-redux"
import { filterData, sortData } from "../redux/actions/dataActions"
import { MenuItem, TextField, InputAdornment, Box } from "@material-ui/core"
import { SearchRounded } from "@material-ui/icons"

const Filters = () => {
  const dispatch = useDispatch()
  const handleChange = (e) => {
    const { value } = e.target
    dispatch(filterData(value))
  }
  const handleSortChange = (e) => {
    const { value } = e.target

    dispatch(sortData(value))
  }
  return (
    <Box className="films_filters_main">
      <TextField className="films_filters_main_1" select id="outlined-basic" label="Sort By" size="small" variant="outlined" onChange={(e) => handleSortChange(e)}>
        <MenuItem value={"episode"}>Episode</MenuItem>
        <MenuItem value={"year"}>Year</MenuItem>
      </TextField>
      <TextField
        className="films_filters_main_2"
        onChange={(e) => handleChange(e)}
        id="outlined-basic"
        label="Search Films"
        size="small"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchRounded />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  )
}

export default Filters

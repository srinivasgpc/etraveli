import "./App.scss"
import DataList from "./components/DataList"
import DataView from "./components/DataView"
import Filters from "./components/Filters"
import { Box } from "@material-ui/core"
function App() {
  return (
    <Box className="films">
      <Box className="films_filters">
        <Filters />
      </Box>
      <Box className="films_main">
        <DataList />
        <DataView />
      </Box>
    </Box>
  )
}

export default App

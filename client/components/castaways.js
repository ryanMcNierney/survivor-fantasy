import React, {Component} from 'react'
import CastawaysGrid from './castaways-grid'
import axios from 'axios'

// Material UI
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

class Castaways extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSeason: 1,
      seasons: [],
      castaways: []
    }
    this.handleSeasonChange = this.handleSeasonChange.bind(this)
  }

  async componentDidMount() {
    const castawaysRes = await axios.get(
      `/api/castaways/season/${this.state.selectedSeason}`
    )
    const seasonsRes = await axios.get('/api/castaways/season')
    this.setState({
      castaways: castawaysRes.data,
      seasons: seasonsRes.data
    })
  }

  async handleSeasonChange(event) {
    const selectedSeason = event.target.value
    const castawaysRes = await axios.get(
      `/api/castaways/season/${selectedSeason}`
    )
    this.setState({
      selectedSeason,
      castaways: castawaysRes.data
    })
  }

  render() {
    const {seasons, castaways, selectedSeason} = this.state
    return (
      <div className="castaways">
        <h3>Castaways</h3>
        <FormControl className="season-picker">
          {seasons.length > 0 ? (
            <Select
              labelId="season-picker-label"
              id="season-picker-select"
              value={selectedSeason}
              onChange={this.handleSeasonChange}
            >
              {seasons.map(season => {
                return (
                  <MenuItem key={season} value={season}>
                    Season {season}
                  </MenuItem>
                )
              })}
            </Select>
          ) : null}
        </FormControl>
        <CastawaysGrid castaways={castaways} />
      </div>
    )
  }
}

export default Castaways

import React from 'react'
import CastawaysGridItem from './castaways-grid-item'
import '../styles/castaways-grid.css'

// Material UI
import Grid from '@material-ui/core/Grid'

const CastawaysGrid = props => {
  const {castaways} = props
  return (
    <div className="castaways-grid">
      <Grid container spacing={3}>
        {castaways.map(castaway => {
          return <CastawaysGridItem key={castaway.id} castaway={castaway} />
        })}
      </Grid>
    </div>
  )
}

export default CastawaysGrid

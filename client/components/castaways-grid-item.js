import React, {Component} from 'react'

// Material UI
import {makeStyles} from '@material-ui/core/styles'
import clsx from 'clsx'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'
import Typography from '@material-ui/core/Typography'

// Styles
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 300
  },
  media: {
    height: 250
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  bio: {
    whiteSpace: 'pre-line'
  }
}))

const CastawaysGridItem = props => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const {castaway} = props
  const {id, name, img, bio} = castaway

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Grid item id={id} xs={12} sm={6} md={3}>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={img} title={name} />
        <CardActions disableSpacing>
          <div className={classes.name}>
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
          </div>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography className={classes.bio} paragraph variant="body2">
              {bio}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  )
}

export default CastawaysGridItem

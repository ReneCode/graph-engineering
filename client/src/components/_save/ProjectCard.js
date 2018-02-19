
import React  from 'react'

import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Card , { CardContent, CardActions } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  card: {
    width: 240,
    height: 150,
    margin: 20
  },
  cardContent: {
    height: 70,
    textAlign: 'center'
  }
})

const ProjectCard = props => {
  const classes = props.classes

  let firstButton = null
  if (props.firstButton) {
    firstButton = (
      <Button dense color="primary" onClick={props.firstButtonClick}>
        { props.firstButton }
      </Button>
    )
  }

  let secondButton = null
  if (props.secondButton) {
    secondButton = (
      <Button dense color="primary" onClick={props.secondButtonClick}>
        { props.secondButton }
      </Button>
    )
  }

  return (
    <Card className={ classes.card }>
      <CardContent className={ classes.cardContent }>
        <Typography type="headline" component="h4">
          { props.children }
        </Typography>
      </CardContent>
      <CardActions>
        { firstButton }
        { secondButton }
      </CardActions>
    </Card>
  )
}


export default withStyles(styles)(ProjectCard)

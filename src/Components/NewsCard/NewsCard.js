import React,{useState,useEffect,createRef} from 'react'
import useStyles from './styles.js';
import {Card,CardActions,CardActionArea,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import classNames from 'classnames'
const NewsCard = ({article:{description, publishedAt,source,title,url,urlToImage},i,activeArticle}) => {
    const classes=useStyles();
    const [elRefs, setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);
  
    useEffect(() => {
      window.scroll(0, 0);
  
      setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    }, []);
  
    useEffect(() => {
      if (i === activeArticle && elRefs[activeArticle]) {
        scrollToRef(elRefs[activeArticle]);
      }
    }, [i, activeArticle, elRefs]);
  return (
    <Card ref={elRefs[i]} className={classNames(classes.card,activeArticle===i? classes.activeCard:null)}>
        <CardActionArea href={url} target="_blank">
            <CardMedia className={classes.media} image={urlToImage || "data:image/jpeg;base64,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"}/>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary' component='h2'>
{
    (new Date(publishedAt)).toDateString()
}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='h2'>
{
    source.name
}
                </Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant='h5'>{title}</Typography>
            <CardContent>
                    <Typography variant='body2' color='textSecondary' component='p'>
{description}
                    </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
            <Button size='small' color='primary'>Learn More</Button>
            <Typography variant='h5' color='textSecondary'>{i+1}</Typography>
        </CardActions>
    </Card>
  )
}

export default NewsCard;
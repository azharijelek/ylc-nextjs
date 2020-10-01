
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Container from '@material-ui/core/Container'
import Head from 'next/head'
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.7)'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}))

const Home = (data) => {
  const classes = useStyles()
  const posts = data.data;

  return (
    <>
      <Head>
          <title>Your Life Choices</title>
      </Head>

      <CssBaseline />

      <Container maxWidth="lg">
        <main>
          {/* Sub featured posts */}
          {/* <pre>{ JSON.stringify(posts,null,2) }</pre> */}
          <Box pt={3}>
            <Grid container spacing={4}>
              {posts[0].featured_img ? posts.map(post => (
                <Grid item key={post.id} xs={12} md={6}>
                  <Card className={classes.card}>
                    <CardActionArea component="a" href="#">
                      <img src={post.featured_img} alt="" loading="lazy" height="200"/>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {post.date_gmt}
                        </Typography>
                      </CardContent>
                      </CardActionArea>
                  </Card>
                </Grid>
              )) : ''}
            </Grid>
          </Box>
          {/* End sub featured posts */}
        </main>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.WP_API_URL}/posts/`)
  //const res = await fetch('https://azhdev.com/wp-json/wp/v2/posts?per_page=5')
  const data = await res.json()

  // Pass data to the page via props
  return { 
    props: { data },
    revalidate: 3600,
  }
}

export default Home
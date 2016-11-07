/* app.js */

// require and instantiate express
const app = require('express')()

// fake posts to simulate a database
const posts = [
  {
    id: 1,
    author: 'John',
    title: 'Templating with EJS',
    body: 'Cornhole narwhal synth, pok pok portland fam disrupt cardigan lo-fi viral four loko cold-pressed. Sartorial knausgaard photo booth bespoke biodiesel organic stumptown. Edison bulb kinfolk chia, gastropub air plant tofu letterpress pug hoodie irony ugh kickstarter asymmetrical migas photo booth. Flexitarian blog hell of, snackwave vice bushwick franzen cray listicle marfa. Disrupt locavore cliche, XOXO flexitarian pork belly deep v air plant kitsch tousled kogi microdosing 90s. Brunch master cleanse VHS, tbh sriracha photo booth PBR&B before they sold out succulents stumptown pug. Hashtag tousled plaid VHS portland beard.'
  },
  {
    id: 2,
    author: 'Drake',
    title: 'Express: Starting from the Bottom',
    body: 'Blog post number 2'
  },
  {
    id: 3,
    author: 'Emma',
    title: 'Streams',
    body: 'Blog post number 3'
  },
  {
    id: 4,
    author: 'Cody',
    title: 'Events',
    body: 'Blog post number 4'
  }
]

// set the view engine to ejs
app.set('view engine', 'ejs')

// blog home page
app.get('/', (req, res) => {
  // render `home.ejs` with the list of posts
  res.render('home', { posts: posts })
})

// blog post
app.get('/post/:id', (req, res) => {
  // find the post in the `posts` array
  const post = posts.filter((post) => {
    return post.id == req.params.id
  })[0]

  // render the `post.ejs` template with the post content
  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  })
})




app.listen(8080)

console.log('listening on port 8080')
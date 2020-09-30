// import React from 'react'

// class Page extends React.Component {
//   static async getInitialProps(ctx) {
//     const res = await fetch('http://azhdev.com/wp-json/wp/v2/posts?per_page=5')
//     //const res = await fetch('https://api.github.com/repos/vercel/next.js')
//     const json = await res.json()
//     return { posts: json }
//   }

//   render() {
//     return (
//       <div>
//         <pre>{this.props.posts}</pre>
//       </div>
//     )
//   }
// }

// export default Page

// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
  return (
    <div>
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      <ul>
        {posts.map((post) => (
          <li>{post.title.rendered}</li>
        ))}
      </ul>
    </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://azhdev.com/wp-json/wp/v2/posts?per_page=5')
  const posts = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Blog
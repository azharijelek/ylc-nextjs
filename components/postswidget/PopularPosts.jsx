import useSWR from 'swr'
import PostList from './PostList'

function removeDomain(str) {
    return str.replace(/^.*\/\/[^\/]+/, '');
}

export default function PopularPosts(props) {
    let per_page = props.per_page ? props.per_page : '4';
    let paged = props.paged ? props.paged : '1';
    
    const url = process.env.WP_API_URL+`/posts?per_page=${per_page}&page=${paged}`
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data, result, error } = useSWR(url, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>Loading...</div>
    // return <pre>{JSON.stringify(data, null, 2)}</pre>
    return (
        <>
            {data.length > 0 && data.map(post => (
                <PostList
                    id={post.id}
                    title={post.title}
                    thumbnail={post.featured_img}
                    permalink={post.permalink}
                    key={'post-'+post.id}
                />
            ))}
        </>
    )
}
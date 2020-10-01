import useSWR from 'swr'
import PostList from './PostList'

const url = 'https://azhdev.com/wp-json/ylc/v1/posts?per_page=10&page=2'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

function removeDomain(str) {
    return str.replace(/^.*\/\/[^\/]+/, '');
}

export default function PopularPosts() {
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
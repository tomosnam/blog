import useFetch from '../hooks/useFetch'
import BlogList from './BlogList'

const Home = () => {
  const { data: blogs, isPending, error } = useFetch(' http://localhost:8080/blogs')

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title='All Blogs!' />}
    </div>
  )
}

export default Home

import useFetch from '../hooks/useFetch'

const Home = () => {
  const {data: articles, error, isPending} = useFetch('http://localhost:3000/articles');

  return  (
    <div className='home'>
      <h2>Articles</h2>
      {isPending && <p>Loading Articles</p>}
      {error && <div>{error}</div>}
      {articles && articles.map(({id, author}) => (
        <div key={id} className='card'>
          <p>{author}</p>
        </div>
      ))}
    </div>
  )
};

export default Home;

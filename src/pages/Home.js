import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch'
import './Home.css'


const Home = () => {
  const {data: articles, error, isPending} = useFetch('http://localhost:3000/articles');

  return  (
    <div className='home'>
      <h2>Articles</h2>
      {isPending && <p>Loading Articles</p>}
      {error && <div>{error}</div>}
      {articles && articles.map(({id, author, title}) => (
        <div key={id} className='card'>
          <h3>{title}</h3>
          <p>{author}</p>
          {/* Usamos un Link. Usamos un valor dinámico en la prop to, para pasar un id  */}
          <Link to={`/articles/${id}`}>Read more...</Link>
        </div>
      ))}
    </div>
  )
};

export default Home;

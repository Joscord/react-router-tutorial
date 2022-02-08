// Importamos el hook useParams
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Article = () => {
	// Usamos el hook, este nos retorna un objeto prams con los parámetros de la Url de la página. Con esto podemos extraer el id (nótese que es id porque así lo llamados en la ruta)
	const { id } = useParams();
    // Usamos nuestro useFetch para obtener la data
    const {data: article, isPending, error} = useFetch(`http://localhost:3000/articles/${id}`)
	return (
        <div>
            {isPending && <p>Loading article...</p>}
            {error && <p>{error}</p>}
            {article && (
                <div>
                    <h2>{article.title}</h2>
                    <p>By {article.author}</p>
                    <p>{article.body}</p>
                </div>
            )}
        </div>
    )
};

export default Article;

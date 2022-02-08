// Importamos el hook useParams
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Article = () => {
	const { id } = useParams();
	const {
		data: article,
		isPending,
		error,
	} = useFetch(`http://localhost:3000/articles/${id}`);
	// Para redirigir usamos otro hook, useHistory. useHistory nos retorna un objeto que podemos usar
	const history = useHistory();

	useEffect(() => {
		// Revisamos si hay error y si lo hay redigirimos
		if (error) {
			// Hay diversos métodos para redirigir como .goBack que nos lleva un paso atrás en la historia de usuario (como presionar el botón de atrás en el navegador). En este caso usamos el método push que nos permite "empujar el usuario hace otra ruta". Redirigimos hacia la página home. Lo colocaremos dentro de un setTimeout para que el usuario tenga tiempo de ver el error. No olvidar que debemos añadir history como dependencia
			setTimeout(() => history.push('/'), 2000);
		}
	}, [error, history]);
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
	);
};

export default Article;

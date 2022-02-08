// Importamos el hook useLocation. Nos permite obtener el query string de la url
import { useLocation } from "react-router-dom";

const Contact = () => {
	// useLocation nos da mucha información respecto a nuestra ubicación actual. Una propiedad de éste es search, que es el query parameter
	const queryString = useLocation().search // Esto luce tipo ?name=mario
	// Para poder parsear el queryString usaremos lo que se conoce como una url search params function. Esto es de js vanilla
	const queryParams = new URLSearchParams(queryString) // Pasamos nuestro queryString. Nos devuelve un objeto de parámetros. Este objeto tiene un método get que nos permite obtener un parámetro en específico
	const name = queryParams.get('name');
	
	return <div>Contact</div>;
};

export default Contact;

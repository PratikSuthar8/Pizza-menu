/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Menu } from "./Components/Menu";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

const App = () => {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
};

export default App;

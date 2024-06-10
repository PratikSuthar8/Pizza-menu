/* eslint-disable react/no-unescaped-entities */
import { Pizza } from "./Pizza";
import { pizzaData } from "../data/pizzaData";

export const Menu = () => {
	const pizzas = pizzaData;
	const numPizzas = pizzas.length;
	return (
		<main className="menu">
			<h2>Our Menu</h2>

			{numPizzas ? (
				<>
					<p>
						Authentic Italian cusine.6 creative dishes to choose from. All from
						our stone oven, all organic, all delicious.
					</p>
					<ul className="pizzas">
						{pizzas.map((e) => (
							<Pizza key={e.name} pizzaObj={e} />
						))}
					</ul>
				</>
			) : (
				<p>We're still working on our menu please visit us later</p>
			)}
		</main>
	);
};

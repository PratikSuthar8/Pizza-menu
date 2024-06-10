import { useState } from "react";
import { useEffect } from "react";
import { Order } from "./Order";

export const Footer = () => {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;

	const isOpen = hour >= openHour && hour <= closeHour;
	const [time, setTime] = useState("");
	const updateCurrentTime = () => {
		setTime(new Date().toLocaleTimeString());
	};
	useEffect(() => {
		const intervalId = setInterval(updateCurrentTime, 1000);
		return () => clearInterval(intervalId);
	}, []);

	if (!isOpen)
		return (
			<footer className="footer">
				<p>CLOSED</p>
			</footer>
		);
	return (
		<footer className="footer">
			{isOpen ? (
				<Order openHour={openHour} time={time} closeHour={closeHour} />
			) : (
				<p>
					we are happy to welcome you between {openHour}:00 to {closeHour}:00
				</p>
			)}
		</footer>
	);
};

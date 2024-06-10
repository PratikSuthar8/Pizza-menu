/* eslint-disable react/prop-types */
export const Order = ({ time, closeHour }) => {
	return (
		<div className="order">
			<p>
				{`${time} we're open until ${closeHour}:00 Come visit us or order
		online`}
			</p>
			<button className="btn">order</button>
		</div>
	);
};

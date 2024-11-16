import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';

function Shop() {
	const [goods, SetGoods] = useState([]);
	const [loading, SetLoading] = useState(true);
	const [order, SetOrder] = useState([]);
	const [isBasketShow, SetBasketShow] = useState(false);
	const [alertName, SetAlertName] = useState('');

	const addToBasket = (item) => {
		const itemIndex = order.findIndex(
			(orderItem) => orderItem.mainId === item.mainId
		);

		if (itemIndex < 0) {
			const newItem = {
				...item,
				quantity: 1,
			};
			SetOrder([...order, newItem]);
		} else {
			const newOrder = order.map((orderItem, index) => {
				if (index === itemIndex) {
					return {
						...orderItem,
						quantity: orderItem.quantity + 1,
					};
				} else {
					return orderItem;
				}
			});
			SetOrder(newOrder);
		}
		SetAlertName(item.displayName);
	};

	const removeFromBasket = (itemId) => {
		const newOrder = order.filter((el) => el.mainId !== itemId);
		SetOrder(newOrder);
	};

	const handleBasketShow = () => {
		SetBasketShow(!isBasketShow);
	};

	const incQuantity = (itemId) => {
		const newOrder = order.map((el) => {
			if (el.mainId === itemId) {
				const newQuantity = el.quantity + 1;
				return {
					...el,
					quantity: newQuantity,
				};
			} else {
				return el;
			}
		});
		SetOrder(newOrder);
	};

	const decQuantity = (itemId) => {
		const newOrder = order.map((el) => {
			if (el.mainId === itemId) {
				const newQuantity = el.quantity - 1;
				return {
					...el,
					quantity: newQuantity >= 0 ? newQuantity : 0,
				};
			} else {
				return el;
			}
		});
		SetOrder(newOrder);
	};

	const closeAlert = () => {
		SetAlertName('');
	};

	useEffect(function getGoods() {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((response) => response.json())
			.then((data) => data.result && SetGoods(data.shop));
		SetLoading(false);
	}, []);

	return (
		<main className='container content'>
			<Cart quantity={order.length} handleBasketShow={handleBasketShow} />
			{loading ? (
				<Preloader />
			) : (
				<GoodsList goods={goods} addToBasket={addToBasket} />
			)}
			{isBasketShow && (
				<BasketList
					order={order}
					handleBasketShow={handleBasketShow}
					removeFromBasket={removeFromBasket}
					incQuantity={incQuantity}
					decQuantity={decQuantity}
				/>
			)}
			{alertName && (
				<Alert displayName={alertName} closeAlert={closeAlert} />
			)}
		</main>
	);
}

export default Shop;

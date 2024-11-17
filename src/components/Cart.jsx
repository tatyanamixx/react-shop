import { useContext } from 'react';
import { ShopContext } from '../context';

function Cart() {
	const { order, handleBasketShow = Function.prototype } =
		useContext(ShopContext);
		const quantity = order.length
		
	return (
		<div
			className='cart teal darken-4 white-text'
			onClick={handleBasketShow}>
			<i className='medium material-icons'>shopping_cart</i>
			{quantity ? (
				<span className='cart-quantity'>{quantity}</span>
			) : null}
		</div>
	);
}
export default Cart;

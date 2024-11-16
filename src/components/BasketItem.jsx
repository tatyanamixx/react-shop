function BasketItem(props) {
	const {
		mainId,
		displayName,
		regularPrice,
		quantity,
		removeFromBasket = Function.prototype,
		incQuantity = Function.prototype,
		decQuantity = Function.prototype,
	} = props;
	return (
		<li className='collection-item row'>
			<div>
				<span className='col s7'>{displayName}</span>

				<i
					class='material-icons decriment col s1'
					onClick={() => decQuantity(mainId)}>
					remove
				</i>
				<span className='col s1'>{quantity}</span>
				<i
					class='material-icons incriment col s1'
					onClick={() => incQuantity(mainId)}>
					add
				</i>
				<span className='price col s1'>${regularPrice}</span>
				<span
					className='secondary-content'
					onClick={() => removeFromBasket(mainId)}>
					<i className='material-icons basket-delete s1'>delete</i>
				</span>
			</div>
		</li>
	);
}
export default BasketItem;

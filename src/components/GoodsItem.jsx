import { useContext } from "react";
import { ShopContext} from "../context"

function GoodsItem(props) {
	const {
		mainId,
		displayName,
		displayDescription,
		price: { regularPrice },
		granted: [{ images }],
	} = props;

	const {addToBasket} = useContext(ShopContext)

	return (
		<div className='card' mainId={mainId}>
			<div className='card-image'>
				<img src={images.full_background} alt={displayName} />
			</div>
			<div className='card-content'>
				<p>{displayDescription}</p>
				<span className='card-title'>{displayName}</span>
			</div>
			<div className='card-action'>
				<button
					className='btn'
					onClick={() =>
						addToBasket({
							mainId,
							displayName,
							regularPrice,
						})
					}>
					buy
				</button>
				<span className='right' style={{ fontSize: '1.8rem' }}>
					${regularPrice}
				</span>
			</div>
		</div>
	);
}

export default GoodsItem;

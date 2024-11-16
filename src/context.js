import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
	goods: [],
	loading: true,
	order: [],
	isBasketShow: false,
	alertName: '',
};

export const ContextProvider = ({ children }) => {
	const [value, dispatch] = useReducer(reducer, initialState);

	value.closeAlert = () => {
		dispatch({ type: 'CLOSE_ALERT' });
	};

	value.removeFromBasket = (mainId) => {
		dispatch({ type: 'REMOVE_FROM_BASKET', payload: { mainId: mainId } });
	};

	value.addToBasket = (item) => {
		dispatch({ type: 'ADD_FROM_BASKET', payload: { item: item } });
	};

	value.incQuantity = (mainId) => {
		dispatch({ type: 'INC_QUANTITY', payload: { mainId: mainId } });
	};

	value.incQuantity = (mainId) => {
		dispatch({ type: 'DEC_QUANTITY', payload: { mainId: mainId } });
	};

	value.handleBasketShow = () => {
		dispatch({ type: 'BASKET_SHOW' });
	};

	return (
		<ShopContext.Provider value={value}>{children}</ShopContext.Provider>
	);
};

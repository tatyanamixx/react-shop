import BasketItem from "./BasketItem";

function BasketList (props) {

    const {
        order = [], 
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.regularPrice*el.quantity
    }, 0);

    return(

        <ul className="collection with-header basket-list">
            <li className="collection-item active"><h6>Basket</h6></li>
            {
                order.length ? order.map(item => (
                    <BasketItem 
                    key={item.mainId} 
                    removeFromBasket={removeFromBasket}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                    {...item}
                     />
                ))
                :
                <li className="collection-item"><div>Null</div></li>
            }         
            <li className="collection-item active">
                <div className="row">
                    <span className="col s10">Summary:</span>
                    <span className="col s1">${totalPrice}</span>
                </div>
            </li>
            <li className="collection-item">
                <div className="row">
                    <button className="btn waves-effect waves-light offset-s10 col s2">
                        Submit
                        <i class="material-icons right">send</i>
                        </button>
                </div>
            </li>
            <i className="material-icons basket-close" 
                onClick={handleBasketShow}
                >
                    close
            </i>
        </ul>
        
    )
};
export default BasketList;
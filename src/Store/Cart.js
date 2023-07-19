import { useContext } from "react";
import { CartContext } from "./Context";
import React from "react";
import "./Cart.css";

const Cart = (props) => {
    const a = useContext(CartContext);
    const state = a.state;
    const dispatch = a.dispatch;
    const total = state.reduce((total, item) => {
        return total + item.price * item.count;
    }, 0);
    const closeCartHandler = () => {
        props.onClick();
    }
    var cartshow;
    if (state.length > 0) {
        cartshow = false;
    }
    else {
        cartshow = true;
    }
    console.log(state.length);
    return (
        <div className='parent'>
            {!cartshow && <div className="cart">
                {state.map((item) => {
                    return (
                        <div className="card" key={item._id}>
                            <img src={item.src} alt="" />
                            <div>
                                <p className="title">{item.title}</p>
                                <p className="description">{item.description}</p>
                            </div>
                            <p className="price">Price: ${item.count * item.price}</p>
                            <div className="quantity">

                                <button className="increaseButton"
                                    onClick={() => dispatch({ type: "INCREASE", payload: item })}>+
                                </button>
                                <p className="count">{item.count}</p>
                                <button
                                    className="decreaseButton"
                                    onClick={() => {
                                        if (item.count > 1) {
                                            dispatch({ type: "DECREASE", payload: item });
                                        } else {
                                            dispatch({ type: "REMOVE", payload: item });
                                        }
                                    }}>-
                                </button>
                            </div>
                            <button className="removeButton" onClick={() => dispatch({ type: "REMOVE", payload: item })}>
                                remove item
                            </button>
                        </div>
                    );
                })}
                {state.length > 0 && (
                    <div className="total">
                        <h2>Total Price: ${total}</h2>
                    </div>
                )}
            </div>}
            {cartshow && <p className="emptyPara">Cart is empty please add some item to the cart</p>}
            <button className="closeCartButton" onClick={closeCartHandler}>Close cart</button>
        </div>
    );
};

export default Cart;
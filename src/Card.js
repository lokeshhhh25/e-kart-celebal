import classes from './Card.module.css'
import { CartContext } from './Store/Context';
import { useContext } from 'react';
const Card = (props) => {
    const items = props.items;
    const a = useContext(CartContext);
    const dispatch = a.dispatch;
    console.log(a);
    return (
        <div className={classes.card}>
            {items.map((item) => {
                return (
                    <div className={classes.product} key={item._id}>
                        <img className={classes.productImage} src={item.src} alt="Product"></img>
                        <div className={classes.productTitle}>{item.title}</div>
                        <div className={classes.productPrice}>${item.price}</div>
                        <div className={classes.productDescription}>{item.description}</div>
                        <button className={classes.productButton} onClick={() => dispatch({ type: 'ADD', payload: item })}>Add to Cart</button>
                    </div>
                )
            })}
        </div>
    );
};

export default Card;
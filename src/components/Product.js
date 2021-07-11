import { useState } from 'react';

function Product({product}) {
    return (
        <>
        <div className="product">
            <h5>{product.name}</h5>
            <div className="price">$ {product.price}</div>
            <div className="actions">
                <button>Sat</button>
                <span className="amount">0</span>
                <button onclick={addBasket}>Satın Al</button>
            </div>
            <style jsx>{`
                .product {
                    padding: 10px;
                    background: #fff;
                    border: 1px solid #ddd;                    
                }
                `}</style>
                </div>
        </>
    )
    
}

export default Product;
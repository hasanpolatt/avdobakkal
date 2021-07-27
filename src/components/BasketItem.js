
function BasketItem({ item, product }) {
    return (
        <li className="basketItem">
            {product.name} <span>x {item.amount}</span>
        </li>
    )
}

export default BasketItem;
import {moneyFormat} from '../Format';

function Product({product, money, total, basket, setBasket}) {

    const basketItem = basket.find(item => item.id === product.id);

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id);
        
        if(checkBasket) { 
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1,
            }])
        }
    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1
        if(currentBasket.amount === 0) {
            setBasket([...basketCurrent]);
        } else {
            setBasket([...basketCurrent, currentBasket])
        }
    }

    return (
        <div className="product">
            <img height="210" src={product.image} />
            <h5>{product.name}</h5>
            <div className="price"> {moneyFormat(product.price)} TL</div>
            <div className="actions">
                <button className="buy-button" disabled={!basketItem} onClick={removeBasket}>Çıkar</button>
                <span className="amount">{basketItem && basketItem.amount || 0}</span>
                <button className="sell-button" disabled={total + product.price > money} onClick={addBasket}>Ekle</button>
            </div>
        </div>
    )
    
}

export default Product;
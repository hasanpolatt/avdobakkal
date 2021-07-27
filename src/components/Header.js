import {moneyFormat} from '../Format';

function Header({ money, total }) {

    return (
            <div>
                <div className="headerMain">
                    
                    Ademoğlu Markete Hoşgeldiniz
                </div>
                {total > 0 && money - total !== 0 && (
                    <div className="header">Harcayacak <span>{moneyFormat(money - total)} TL</span> var</div>
                )}
                {money - total !== 100 && (
                    <div className="header">
                        Avdo hesap makinesiyle hesaplıyor
                        </div>
                )}
                {total === 0 && (
                    <div className="header">Harcamak için <span>{moneyFormat(money)} TL</span> var</div>
                )}
                {money - total === 0 && (
                    <div className="header">Para bitti</div>
                )}
            </div>
    )
}

export default Header;
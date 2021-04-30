import Coins from "../components/Coins";

const CoinsList = ({filteredCoins}) => {
    return (
        <>
            {filteredCoins.map((coin) => {
                return (
                    <Coins
                        key={coin.id}
                        name={coin.name}
                        id={coin.id}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketCap={coin.market_cap}
                        volume={coin.total_volume}
                        image={coin.image}
                        priceChange={coin.price_change_percentage_24h}
                    />
                );
            })}
        </>
    );
};

export default CoinsList;

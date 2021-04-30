import numFormat from "indian-number-format";
import styles from "./Coins.module.css";
import Link from "next/link";

const Coins = ({
    name,
    price,
    id,
    symbol,
    marketCap,
    volume,
    image,
    priceChange,
    idx
}) => {
    return (
        <Link href="/coin/[id]" as={`/coin/${id}`}>
            <a>
                <div className={styles.coin_container}>
                    <div className={styles.coin_row}>
                        <span>{idx}</span>
                        <div className={styles.coin}>
                            <img
                                src={image}
                                alt={name}
                                className={styles.coin_img}
                            />
                            <h1 className={styles.coin_h1}>{name}</h1>
                            <p className={styles.coin_symbol}>{symbol}</p>
                        </div>
                        <div className={styles.coin_data}>
                            <p className={styles.coin_price}>
                                &#8377; {numFormat.format(price)}
                            </p>
                            <p className={styles.coin_volume}>
                                &#8377; {numFormat.format(volume)}
                            </p>
                            {priceChange < 0 ? (
                                <p
                                    className={
                                        (styles.coin_percent, styles.red)
                                    }
                                >
                                    {priceChange.toFixed(2)}%
                                </p>
                            ) : (
                                <p
                                    className={
                                        (styles.coin_percent, styles.green)
                                    }
                                >
                                    {priceChange.toFixed(2)}%
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default Coins;

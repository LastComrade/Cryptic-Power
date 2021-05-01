import styles from "./Coin.module.css";
import Layout from "../../components/Layout";
import numFormat from "indian-number-format";
import htmlParse, { attributesToProps } from "html-react-parser";

const Coin = ({ coinInfo }) => {
    const options = {
        replace: ({ attribs, children }) => {
            console.log(attribs);
            console.log(children);
        },
    };
    console.log(options.replace);

    return (
        <Layout>
            <div className={styles.coin_page}>
                <div className={styles.heading}>
                    <span>Cryptic</span> Power
                </div>
                <div className={styles.coin_container}>
                    <h1 className={styles.coin_name}>{coinInfo.name}</h1>
                    <p className={styles.coin_ticker}>({coinInfo.symbol})</p>
                    <img
                        src={coinInfo.image.large}
                        alt={styles.coin_image}
                        className={styles.coin_image}
                    />
                    <h1 className={styles.coin_current}>
                        &#8377;{" "}
                        {numFormat.format(
                            coinInfo.market_data.current_price.inr
                        )}
                    </h1>
                    <p className={styles.coin_desc}>
                        {htmlParse(coinInfo.description.en)}
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Coin;

export const getServerSideProps = async (coin) => {
    const { id } = coin.query;

    const data = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

    const coinInfo = await data.json();

    return {
        props: {
            coinInfo,
        },
    };
};

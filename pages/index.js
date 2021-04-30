import {useState} from "react";
import SearchBar from "../components/SearchBar";
import CoinsList from "../components/CoinsList";
import Layout from "../components/Layout";

export default function Home({ filteredCoins }) {
    const [search, setSearch] = useState("");

    const allCoins = filteredCoins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    const handleChange = e => {
        e.preventDefault();
        setSearch(e.target.value.toLowerCase())
    }
    return (
        <Layout>
            <div className="coin_app">
                <h1 className="coin_app_h1"><span>Cryptic</span> Power</h1>
                <SearchBar type="text" placeholder="Search" onChange={handleChange} />
                <CoinsList filteredCoins={allCoins} />
            </div>
        </Layout>
    );
}

export const getServerSideProps = async () => {
    const data = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );

    const filteredCoins = await data.json();

    return {
        props: {
            filteredCoins,
        },
    };
};

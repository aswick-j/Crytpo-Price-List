import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CoinList from "./src/components/CoinList";
import { fetchCoinList } from "./src/Actions/CoinsList";
import { useState, useEffect } from "react";

export default function Home({ navigation }) {
  const [coinData, setCoinData] = useState([]);
  useEffect(() => {
    const getCoinsList = async () => {
      const data = await fetchCoinList();
      setCoinData(data.data.coins);
    };
    getCoinsList();
  }, []);

  console.log(coinData);

  return (
    <View>
      <StatusBar style="auto" />
      {}
      <FlatList
        keyExtractor={(item) => item.id}
        data={coinData}
        renderItem={({ item }) => (
          <CoinList
            name={item.name}
            symbol={item.symbol}
            currentPrice={item.price}
            priceChange={item.change}
            logoUrl={item.iconUrl}
            Volume24hr={item["24hVolume"]}
            MarketCap={item.marketCap}
            rank={item.rank}
            listedAt={item.listedAt}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

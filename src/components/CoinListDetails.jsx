import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { CommaFunction } from "../helpers/CommaFunction";

const CoinListDetails = ({ route, navigation }) => {
  console.log(route.params);
  const cryptoData = route.params;
  const priceChangeColor = cryptoData.priceChange > 0 ? "#34C759" : "#FF3B30";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerBtn}>
            <Icon name="arrowleft" size={20} onPress={navigation.goBack} />
          </View>
          <Text style={styles.title}>{cryptoData.name}</Text>

          <Image
            source={{ uri: cryptoData.logoUrl }}
            style={styles.image}
          ></Image>
        </View>
        <View style={styles.container}>
          <View style={styles.left}>
            <View style={styles.titlesContainer}>
              <Text style={styles.subtitle}>Price</Text>
              <Text style={styles.title}>
                {cryptoData.currentPrice}({" "}
                <Text style={[styles.subtitle, { color: priceChangeColor }]}>
                  {" "}
                  {cryptoData.priceChange > 0 ? (
                    <Icon size="small" color="#34C759" name="caretup" />
                  ) : (
                    <Icon size="small" color="#FF3B30" name="caretdown" />
                  )}
                  &nbsp;
                  {cryptoData.priceChange > 0
                    ? `+${cryptoData.priceChange}`
                    : cryptoData.priceChange}
                </Text>
                )
              </Text>
            </View>
          </View>

          <View style={styles.right}>
            <Text style={styles.subtitle}>Symbol</Text>
            <Text style={styles.title}>{cryptoData.symbol.toUpperCase()}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.left}>
            <View style={styles.titlesContainer}>
              <Text style={styles.subtitle}>Market Cap (USD)</Text>
              <Text style={styles.title}>
                {CommaFunction(cryptoData.MarketCap)}
              </Text>
            </View>
          </View>

          <View style={styles.right}>
            <Text style={styles.subtitle}>Crypto Rank</Text>
            <Text style={styles.title}>{cryptoData.rank}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.left}>
            <View style={styles.titlesContainer}>
              <Text style={styles.subtitle}>24 Hr Voume</Text>
              <Text style={styles.title}>
                {CommaFunction(cryptoData.Volume24hr)}
              </Text>
            </View>
          </View>

          <View style={styles.right}>
            <Text style={styles.subtitle}>Listed At</Text>
            <Text style={styles.title}>
              {new Date(cryptoData.listedAt * 1000).toLocaleString()}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CoinListDetails;

const styles = StyleSheet.create({
  backgroundImageContainer: {
    elevation: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: "center",
    height: 250,
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: "#f7f7f7",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    paddingHorizontal: 16,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 30,
    width: 30,
  },
  titlesContainer: {
    marginLeft: 8,
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 4,
    fontSize: "16px",
    color: "#A9ABB1",
  },
  right: {
    alignItems: "flex-end",
  },
});

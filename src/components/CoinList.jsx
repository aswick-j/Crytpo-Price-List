import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import React from "react";
import { CommaFunction } from "../helpers/CommaFunction";

const CoinList = ({
  name,
  symbol,
  currentPrice,
  priceChange,
  logoUrl,
  Volume24hr,
  MarketCap,
  rank,
  listedAt,
  navigation,
}) => {
  const priceChangeColor = priceChange > 0 ? "#34C759" : "#FF3B30";
  // console.log(navigation.navigate);

  console.log(Volume24hr);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CoinListDetails", {
          name,
          symbol,
          currentPrice,
          priceChange,
          logoUrl,
          Volume24hr,
          MarketCap,
          rank,
          listedAt,
          navigation,
        })
      }
    >
      <View style={styles.card}>
        <View style={styles.container}>
          <View style={styles.left}>
            <Image source={{ uri: logoUrl }} style={styles.image}></Image>
            <View style={styles.titlesContainer}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
            </View>
          </View>

          <View style={styles.right}>
            <Text style={styles.title}>${CommaFunction(currentPrice)}</Text>
            <Text style={[styles.subtitle, { color: priceChangeColor }]}>
              {" "}
              {priceChange > 0 ? (
                <Icon size="small" color="#34C759" name="caretup" />
              ) : (
                <Icon size="small" color="#FF3B30" name="caretdown" />
              )}
              &nbsp;{priceChange > 0 ? `+${priceChange}` : priceChange}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoinList;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    margin: 10,
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
  },
  subtitle: {
    marginTop: 4,
    fontSize: "14px",
    color: "#A9ABB1",
  },
  right: {
    alignItems: "flex-end",
  },
});

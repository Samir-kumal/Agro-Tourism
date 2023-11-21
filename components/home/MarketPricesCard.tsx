import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

const place = {
    name: "Kathmandu",
    time: "Today",
  };
  const priceData = [
    {
      vegetable: " Palak Sagh",
      price: 120.0,
    },
    {
      vegetable: " Rayo Sagh",
      price: 100.0,
    },
    {
      vegetable: " Mula ko Sagh",
      price: 50.0,
    },
    {
      vegetable: " Chicken",
      price: 380.0,
    },
    {
      vegetable: " Palak Sagh",
      price: 120.0,
    },
  ];

const MarketPricesCard = () => {
  return (
    <View>
    <View style={styles.marketCardContainer} className="">
      <Text className=" text-xl px-2 font-bold">Market Prices</Text>
    </View>
    <View
      style={{ backgroundColor: Colors.primary }}
      className={`flex flex-row justify-between py-2  px-2`}
    >
      <Text style={styles.placeTitle}>{place.name}</Text>
      <Text style={styles.placeTitle}>{place.time}</Text>
    </View>
    <View>
      {priceData.map((item, index) => (
        <View
          key={index}
          className={
            `flex flex-row justify-between py-2  px-2 border-b border-gray-300`
          }
        >
          <Text style={styles.itemsText}>{item.vegetable}</Text>
          <Text style={styles.itemsText}>Rs. {item.price}</Text>
        </View>
      ))}
    </View>
  </View>
  )
}

export default MarketPricesCard

const styles = StyleSheet.create({
      /* <------------- Market Prices Section------------------> */
  marketCardContainer: {
    paddingVertical: 16,
  },
  placeTitle: {
    color: Colors.secondary,
    fontSize: 16,
    marginHorizontal: 16,
  },
  itemsText: {
    color: Colors.black,
  },

})
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import heart from "../constants/image/heart.png";
import heart1 from "../constants/image/heart1.png";
import location from "../constants/image/map.png";
import discount from "../constants/image/discount.png";
import certificate from "../constants/image/certification.png";

const ListItemComponent = ({ item }) => {
  const navigation = useNavigation();
  const [like, setLike] = useState(false);
  const healthCertificate = item.hotelThemeList.filter(
    cert => cert.code === 'sagliksertifikali',
  );
  
  return (<TouchableOpacity
    style={styles.firstView}
    onPress={() => navigation.navigate("HotelDetails", {
      data: item,
    })}>
    <View>
      <View style={{ height: 200 }}>
        <TouchableOpacity onPress={() => setLike(!like)} style={styles.heartTouchable}>
          <Image source={like === true ? heart : heart1} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
        <View style={styles.score}>
          <Text style={{ fontSize: 15, color: "white", fontWeight: "600" }}>{item.customerScore}</Text>
        </View>
        <View style={styles.certifica}>
          <Image source={certificate} />
          <Text style={{ color: "white", marginLeft: 5 }}>{healthCertificate[0]?.text}</Text>
        </View>
        <Image
          resizeMode="cover"
          source={{ uri: item.photoPath }}
          style={{ width: "100%", height: "100%", borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
        />
      </View>
      <View style={{ flexDirection: "row", padding: 15 }}>
        <View style={{ flex: 3 }}>
          <View>
            <Text style={{ fontWeight: "700", fontSize: 15 }}>{item.hotelName}</Text>
          </View>
          <View style={{ flexDirection: "row", opacity: 0.5, marginVertical: 10 }}>
            <Image source={location} style={{ width: 16, height: 16, marginRight: 5 }} />
            <Text style={{ fontSize: 15 }}>{item.areaName} - </Text>
            <Text style={{ fontSize: 15 }}>{item.subAreaName}</Text>
            {item.subAreaDetailName && <Text style={{ fontSize: 15 }}>, {item.subAreaDetailName}</Text>}
          </View>
          <View style={styles.accom}>
            <Text style={{ fontSize: 11 }}>{item.accommodation}</Text>
          </View>
          <View style={{ flexDirection: "row", marginVertical: 5 }}>
            <Image source={discount} style={{ width: 16, height: 16, marginRight: 5 }} />
            <Text
              style={{ color: "#659C69", fontSize: 11, fontWeight: "700", marginRight: 20 }}>{item.campaignName}</Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end", justifyContent: "center", flex: 2 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{
              textDecorationLine: "line-through",
              color: "#B5544A",
            }}>{item.currency === 'TL' ? '₺' : item.currency}</Text>
            <Text style={{
              textDecorationLine: "line-through",
              color: "#B5544A",
            }}>{(item.price).toFixed(2)}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{
              color: "#3986B5",
              fontSize: 20,
              fontWeight: "600",
              marginVertical: 5,
            }}>{item.currency === 'TL' ? '₺' : item.currency}</Text>
            <Text style={{
              color: "#3986B5",
              fontSize: 20,
              fontWeight: "600",
              marginVertical: 5,
            }}>{item.discountPrice.toFixed(2)}</Text>
          </View>
          <Text style={{ opacity: 0.5, fontSize: 13 }}>gecelik kişi başı</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>);
};

export default ListItemComponent;

const styles = StyleSheet.create({
  firstView: { margin: 15, borderRadius: 12, backgroundColor: "white" },
  heartTouchable: {
    position: "absolute",
    left: 10,
    top: 5,
    zIndex: 1,
  },
  score: {
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: "#5D6C2A",
    zIndex: 1,
    padding: 10,
    borderRadius: 8,
  },
  certifica: {
    position: "absolute",
    left: 10,
    bottom: 10,
    backgroundColor: "#5D6C2A",
    zIndex: 1,
    padding: 5,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center", alignItems: "center",
  },
  accom: {
    padding: 5,
    borderWidth: 1,
    borderColor: "black",
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 5,
  }


});

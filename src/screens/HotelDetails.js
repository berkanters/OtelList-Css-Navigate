import { StyleSheet, Text, Button, TouchableOpacity, View, Image, useWindowDimensions } from "react-native";
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import heart from "../constants/image/heart.png";
import heart1 from "../constants/image/heart1.png";
import location from "../constants/image/map.png";
import discount from "../constants/image/discount.png";
import certificate from "../constants/image/certification.png";
import arrow from '../constants/image/arrow.png';
import { TabView, SceneMap } from 'react-native-tab-view';
import right from '../constants/image/right-chevron.png';
import tick from '../constants/image/tick.png';
import Modal from "react-native-modal";
const HotelDetails = ({ route, navigation }) => {
  const { data } = route.params;
  const [like, setLike] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  console.log(data, 'selam');
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [dataList, setDataList] = useState(1)
  return (
    <View style={styles.firstView}>
      <View >
        <View>
          <View style={{ height: 200 }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 5, left: 5, zIndex: 1, width: 50, height: 50 }}>
              <Image style={{ height: 20, width: 20, margin: 20 }} source={arrow} />
            </TouchableOpacity>

            <Image
              resizeMode="cover"
              source={{ uri: data.photoPath }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View style={{ flexDirection: "row", padding: 15, backgroundColor: 'white' }}>
            <View style={{ flex: 3 }}>
              <View>
                <Text style={{ fontWeight: "700", fontSize: 15 }}>{data.hotelName}</Text>
              </View>
              <View style={{ flexDirection: "row", opacity: 0.5, marginVertical: 10 }}>
                <Image source={location} style={{ width: 16, height: 16, marginRight: 5 }} />
                <Text style={{ fontSize: 15 }}>{data.areaName} - </Text>
                <Text style={{ fontSize: 15 }}>{data.subAreaName}</Text>
                {data.subAreaDetailName && <Text style={{ fontSize: 15 }}>, {data.subAreaDetailName}</Text>}
              </View>
              <View style={{ width: '90%', height: 0.5, opacity: 1, backgroundColor: 'black' }}></View>
              <View style={{ flexDirection: "row", marginVertical: 5 }}>
                <Image source={discount} style={{ width: 16, height: 16, marginRight: 5 }} />
                <Text
                  style={{ color: "#659C69", fontSize: 11, fontWeight: "700", marginRight: 20 }}>{data.campaignName}</Text>
              </View>
            </View>
            <View style={styles.score}>
              <Text style={{ fontSize: 15, color: "white", fontWeight: "600" }}>{data.customerScore}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white', padding: 5,
            flexWrap:'wrap',
            borderColor: '#639FD6',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
        <View style={{ flexDirection: 'row', backgroundColor: 'white' ,justifyContent:'center',alignItems:'center' }}>
          <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={() => setDataList(1)}>
            <Text>Detaylar</Text>
            <View style={{ height: 2, backgroundColor: dataList === 1 ? '#639FD6' : 'grey', width: '100%' }} />
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={() => setDataList(2)}>
            <Text>Kampanyalar</Text>
            <View style={{ height: 2, backgroundColor: dataList === 2 ? '#639FD6' : 'grey', width: '100%' }} />
          </TouchableOpacity>
          
        </View>
        
        {dataList === 1 && <View style={{ backgroundColor: 'white', flexDirection: 'row', flexWrap: 'wrap', }}>
          {data.hotelPropertyList.map((item) =>
            <View style={{ width: '50%', marginVertical: 6, flexDirection:'row'}}>
              <Image style={{ height: 10, width: 10, alignSelf:'center', marginLeft:30 }} source={tick} />
              <Text style={{alignSelf:'center', marginLeft:10}}>{item.codeName}</Text></View>)}
        </View>}
        {dataList === 2 && <View style={{ backgroundColor: 'white', flexDirection: 'row', flexWrap: 'wrap' }}>
          {data.hotelThemeList.map((item) =>
            <View style={{ width: '50%', marginVertical: 6, flexDirection:'row'}}>
              <Image style={{ height: 10, width: 10, alignSelf:'center', marginLeft:30 }} source={tick} />
              <Text style={{alignSelf:'center', marginLeft:10}}>{item.text === '' ? item.count : item.text}</Text></View>)}
        </View>}

        <TouchableOpacity
        onPress={toggleModal}
          style={{
            backgroundColor: 'white', padding: 5,
            borderWidth: 1, borderRadius: 10,
            borderColor: '#639FD6', width: '90%',
            marginTop: 10,
            flexDirection: 'row'
          }}>
          <Text style={{ color: '#639FD6', flex: 1, textAlign: 'center' }}>
            Otelin Tüm Özellikleri</Text>
          <Image source={right} style={{ width: 20, height: 20 }} /></TouchableOpacity>
          </View>
          <View style={{flex:1}}>
          <Modal isVisible={isModalVisible}>
        <View style={{ backgroundColor:'white',height:'40%',borderRadius:20,justifyContent:'center',alignItems:'center'}}>
          <Text>detay datası eksikti</Text>
          <Button title="Geri" onPress={toggleModal} />
        </View>
      </Modal>
          </View>
      
    
      </View>
    </View>

  );
};

export default HotelDetails;

const styles = StyleSheet.create({
  score: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    backgroundColor: "#5D6C2A",
    borderRadius: 8,
  },
});

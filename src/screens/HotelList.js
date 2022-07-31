import {
    ActivityIndicator,
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import ListItem from "../components/ListItem";
  import axios from "axios";

  const HotelList = () => {
    const [data, setData] = useState({});
    const [test, setTest] = useState([]);
    const [offset, setOffset] = useState(2);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    console.log(loading);
  
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        axios
          .get(
            "https://gist.githubusercontent.com/yasaricli/de2282f01c739a5c8fcbffbb9116e277/raw/69d329b80be71c502d4a7c00142a4e324f86d602/hotels.json",
          )
          .then(res => {
            setData(res.data.slice(0, offset));
          })
          .catch(err => {
            setError(err);
          })
          .finally(() => {
            setLoading(false);
          });
      }, 1000);
    }, [offset]);
    
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        axios
          .get(
            "https://gist.githubusercontent.com/yasaricli/de2282f01c739a5c8fcbffbb9116e277/raw/69d329b80be71c502d4a7c00142a4e324f86d602/hotels.json",
          )
          .then(res => {
            setTest(res.data.hotelThemeList);
          })
          .catch(err => {
            setError(err);
          })
          .finally(() => {
            setLoading(false);
          });
      }, 1000);
    }, []);

   
    
    
  
    console.log("offset", offset);
    console.log("data", data.hotelThemeList);
    console.log("data", test);
  
    return (
        
      <SafeAreaView style={{ flex: 1, backgroundColor: "#BABFC6" }}>
        {error && <Text>Error: {error.message}</Text>}
        <ListItem data={data} offset={offset} setOffset={setOffset} />
        {loading && (
          <ActivityIndicator size="small" style={{ marginVertical: 20 }} />
        )}
      </SafeAreaView>
    );
  };
  
  export default HotelList;
  
  const styles = StyleSheet.create({});
  
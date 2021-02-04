// import { StatusBar } from 'expo-status-bar';
import React,  {useEffect, useState } from 'react';
import {ActivityIndicator, StyleSheet, View , FlatList} from 'react-native';
import HTML from "react-native-render-html";
import Header from './components/header';
import { Card } from 'react-native-elements';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';





export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://app.sm117.ru/api/v1/contract/news/',{
      method: "GET",
      headers: {'contentType':"application/json; charset=UTF-8"}})

        .then((response) => response.json())
        .then((json) => setData(json))

        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

  }, []);

  return (
      <>

        <Header />

        <View style={styles.container}>
          {isLoading ? <ActivityIndicator/> : (

              <FlatList
                  data={data}
                  keyExtractor={({ item }, index) => index.toString()}
                  renderItem={({ item }) => (
                      <Collapse>
                        <CollapseHeader>
                          <Card title="Local Modules">


                            <HTML source={{ html:item.id}, {html:item.date},{html:item.title}}/>


                          </Card>
                        </CollapseHeader>

                        <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
                          <Card title="Local Modules">

                            <HTML source={{ html:item.body}}/>


                          </Card></CollapseBody>
                      </Collapse>
                  )}

              />

          )}


          {  /*<Card title="Local Modules">
          <Text style={styles.paragraph}>
          Я Junior RN Developer и очень хотел бы получить бесценный опыт в такой компании.
          </Text>
          </Card>*/}


        </View>
      </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  header: {
    flex: 1,
    padding: 24 ,
    backgroundColor: '#CCC2BF'

  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
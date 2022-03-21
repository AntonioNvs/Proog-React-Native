import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';

import Button from './Button.js'

export default function App() {
  const [calc, setCalc] = useState("0")

  function handlerCalc(symbol) {
    if (symbol === "CE") setCalc("0")

    else if (symbol === "=") setCalc(eval(calc))

    else setCalc(value => {
      if (value === "0")
        return symbol
      return value + symbol
    })

  }

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.text}>{calc}</Text>
      </View>

      <View style={styles.buttons}>
        <View style={styles.row}>
          <Button handler={handlerCalc} symbol="1"/>
          <Button handler={handlerCalc} symbol="2"/>
          <Button handler={handlerCalc} symbol="3"/>
          <Button handler={handlerCalc} symbol="="/>
        </View>

        <View style={styles.row}>
          <Button handler={handlerCalc} symbol="4"/>
          <Button handler={handlerCalc} symbol="5"/>
          <Button handler={handlerCalc} symbol="6"/>
          <Button handler={handlerCalc} symbol="*"/>
        </View>

        <View style={styles.row}>
          <Button handler={handlerCalc} symbol="7"/>
          <Button handler={handlerCalc} symbol="8"/>
          <Button handler={handlerCalc} symbol="9"/>
          <Button handler={handlerCalc} symbol="/"/>
        </View>

        <View style={styles.row}>
          <Button handler={handlerCalc} symbol="CE"/>
          <Button handler={handlerCalc} symbol="0"/>
          <Button handler={handlerCalc} symbol="-"/>
          <Button handler={handlerCalc} symbol="+"/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141312',
    justifyContent: "space-between",
  },
  containerText: {
    marginTop: 320,
    marginHorizontal: 24
  },
  buttons: {
    marginBottom: 40,
    padding: 16
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "right",
  },  
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

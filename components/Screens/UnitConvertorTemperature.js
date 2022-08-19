import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import UnitConvertorPanel from '../UnitConvertorPanelTemperature'
import { useState } from 'react'
const UnitConvertorTemperature = (props) => {

   //"inputA && inputB" :: to give value to unitA and unitB like(inch is inputA && meters is inputB)
  const [inputA, setinputA] = useState("")
  const [inputB, setinputB] = useState("")

  //"currConversionA && currConversionB" :: to check name of conversions
  const [currConversionA, setcurrConversionA] = useState("Celsius");
  const [currConversionB, setcurrConversionB] = useState("Fahrenheit");

  //"inputAunit and inputBunit" :: to get units of conversion
  const [inputAUnit, setinputAUnit] = useState("°C");
  const [inputBUnit, setinputBUnit] = useState("°F");

  //"inFocusInput" :: to check which input is in focus or whose value is changing
  const [inFocusInput, setinFocusInput] = useState("inputA");


  //"calculate"  :: If value is set constant but user is changing the conversion name like from inches to meters
//focus is inputA means we have to keep inputA constant and change inputB value.(vice-versa)
  const calculate = (focus,unitName) => {

    if (focus === "inputA") {

        let str =inputA;

        if (currConversionA === "Celsius") {
            if (unitName === "Celsius")
                setinputB("" + str.toString());

            if (unitName === "Fahrenheit")
                setinputB("" + (((eval(((str) *(9/5) )+ 32))).toString()));

            if (unitName === "Kelvin")
            setinputB("" + ((eval(str+"+"+273.15)).toString()));

        }

        if (currConversionA === "Fahrenheit") {
            if (unitName === "Celsius")
                setinputB("" + ((eval(((str)-32)*5/9)).toString()));

            if (unitName=== "Fahrenheit")
                setinputB("" + str.toString());

            if (unitName=== "Kelvin")
                setinputB("" + ((eval(((str)-32)*5/9+273.15)).toString()));
        }

        if (currConversionA === "Kelvin") {
            if (unitName=== "Celsius")
                setinputB("" + ((eval((str)-273.15)).toString()));

            if (unitName === "Fahrenheit")
                setinputB("" + ((eval(((str)-273.5)*9/5+32)).toString()));

            if (unitName=== "Kelvin")
                setinputB("" + str.toString());
        }
    }



    if (focus === "inputB") {

        let str = inputB;
        
        if (currConversionB === "Celsius") {
            if (unitName === "Celsius")
                setinputA("" + str.toString());

            if (unitName === "Fahrenheit")
                setinputA("" + (((eval(((str) *(9/5) )+ 32))).toString()));

            if (unitName === "Kelvin")
                setinputA("" + ((eval((str) + 273.15)).toString()));
        }

        if (currConversionB === "Fahrenheit") {
            if (unitName === "Celsius")
                setinputA("" + ((eval(((str)-32)*5/9)).toString()));

            if (unitName === "Fahrenheit")
                setinputA("" + str.toString());

            if (unitName === "Kelvin")
                setinputA("" + ((eval(((str)-32)*5/9+273.15)).toString()));
        }

        if (currConversionB === "Kelvin") {
            if (unitName === "Celsius")
                setinputA("" + ((eval((str)-273.15)).toString()));

            if (unitName === "Fahrenheit")
                setinputA("" + ((eval(((str)-273.5)*9/5+32)).toString()));

            if (unitName === "Kelvin")
                setinputA("" + str.toString());
        }

    }

}
//"handleInputAPress" :: To set conversion name and unit of inputA
  const handleInputAPress=(unitName,unit)=>{
    setcurrConversionA(""+unitName.toString());
    setinputAUnit(""+unit.toString());
    calculate("inputB",unitName.toString());
  }
  
  //"handleInputBPress" :: To set conversion name and unit of inputB
  const handleInputBPress=(unitName,unit)=>{
    setcurrConversionB(""+unitName.toString());
    setinputBUnit(""+unit.toString())
    calculate("inputA",unitName.toString());
  }

  return (
    <View>

      <View style={styles.conversionTypeContainer}>
        <TouchableOpacity><Text style={ styles.conversionTypeoptions} onPress={()=>{props.setconversionType("Area")}}>Area</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.conversionTypeoptions} onPress={()=>{props.setconversionType("Length")}}>Length</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.conversionTypeoptionsInFocus} onPress={()=>{props.setconversionType("Temperature")}}>Temperature</Text></TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginBottom: 50,
          width: '88%',
          marginLeft: '6%',
        }}
      />

      <View style={styles.conversionTypeContainer}>
        <TouchableOpacity><Text style={(currConversionA=="Celsius")?styles.areaInFocus : styles.area} onPress={()=>{handleInputAPress("Celsius","°C");calculate("inputB","Celsius")}}>Celsius</Text></TouchableOpacity>
        <TouchableOpacity><Text style={(currConversionA=="Fahrenheit")?styles.areaInFocus : styles.area} onPress={()=>{handleInputAPress("Fahrenheit","°F");calculate("inputB","Fahrenheit")}}>Fahrenheit</Text></TouchableOpacity>
        <TouchableOpacity><Text style={(currConversionA=="Kelvin")?styles.areaInFocus : styles.area} onPress={()=>{handleInputAPress("Kelvin","K");calculate("inputB","Kelvin")}}>Kelvin</Text></TouchableOpacity>

      </View>

      <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',minHeight:35,marginTop:30}}>
        <TextInput
          style={styles.input}
          onChangeText={setinputA}
          value={inputA}
          onFocus={()=>{setinFocusInput("inputA")}}
          selection={{start:inputA.length, end:inputA.length}}
          showSoftInputOnFocus={false}
        />
      <Text style={styles.inputUnit}>{inputAUnit}</Text>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginBottom: 30,
          width: '88%',
          marginLeft: '6%'
        }}
      />

      <View style={styles.conversionTypeContainer}>
        <TouchableOpacity><Text style={(currConversionB=="Celsius")?styles.areaInFocus : styles.area} onPress={()=>{handleInputBPress("Celsius","°C");calculate("inputA","Celsius")}}>Celsius</Text></TouchableOpacity>
        <TouchableOpacity><Text style={(currConversionB=="Fahrenheit")?styles.areaInFocus : styles.area} onPress={()=>{handleInputBPress("Fahrenheit","°F");calculate("inputA","Fahrenheit")}}>Fahrenheit</Text></TouchableOpacity>
        <TouchableOpacity><Text style={(currConversionB=="Kelvin")?styles.areaInFocus : styles.area} onPress={()=>{handleInputBPress("Kelvin","K");calculate("inputA","Kelvin")}}>Kelvin</Text></TouchableOpacity>

      </View>

      <View style={{flex:1,minHeight:35,flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
      <TextInput
        style={styles.input}
        onChangeText={setinputB}
        value={inputB}
        onFocus={()=>{setinFocusInput("inputB")}}
        selection={{start:inputB.length, end:inputB.length}}
        showSoftInputOnFocus={false}
      />
       <Text style={styles.inputUnit}>{inputBUnit}</Text>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginBottom: 30,
          width: '88%',
          marginLeft: '6%'
        }}
      />
      <View style={styles.Panelcontainer}>
        <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput}  title="7"/>
        <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput}  title="8" />
        <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput}  title="9" />
        <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput}  title="back" />
        <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput}  title="4" />
        <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput}  title="5" />
        <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput}  title="6" />
        <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput}  title="C" />
        <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput}  title="1" />
        <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput}  title="2" />
        <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput}  title="3" />
        <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput}  title=" " />
        <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput}  title=" " />
        <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput}  title="0" />
        <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput}  title="." />
        <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput}  title=" " />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  Panelcontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop:30
    ,color:'black'
  },
  conversionTypeContainer: {
    backgroundColor: '#fff',
    alignItems: 'left',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around'
    ,color:'black'
  },
  conversionTypeoptions: {
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 17
    ,color:'black'
  }
  , conversionTypeoptionsInFocus: {
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 17,
    color: 'red',
    fontStyle: 'italic'

  },
  area: {
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 14
    ,color:'black'
  },
  areaInFocus: {
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 18,
    color: '#24a0ed',
    fontStyle: 'italic'
  },
  input: {
    color: 'purple',
    padding: 10,
    textAlign: 'right',
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 0,
    minWidth:'80%',
  },
  inputUnit: {
    color: 'tomato',
    padding: 10,
    textAlign: 'right',
    marginRight: 20,
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 0
  }

})

export default UnitConvertorTemperature


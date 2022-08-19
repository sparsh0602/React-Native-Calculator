import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import UnitConvertorPanel from '../UnitConvertorPanelArea'
import UnitConvertorLength from './UnitConvertorLength'
import UnitConvertorTemperature from './UnitConvertorTemperature'

import { useState } from 'react'
const UnitConvertor = () => {

//"inputA && inputB" :: to give value to unitA and unitB like(inch is inputA && meters is inputB)
  const [inputA, setinputA] = useState("")
  const [inputB, setinputB] = useState("")

  //"currConversionA && currConversionB" :: to check name of conversions
  const [currConversionA, setcurrConversionA] = useState("Acres");
  const [currConversionB, setcurrConversionB] = useState("Hectares");

  //"inputAunit and inputBunit" :: to get units of conversion
  const [inputAUnit, setinputAUnit] = useState("ac");
  const [inputBUnit, setinputBUnit] = useState("ha");

  //"inFocusInput" :: to check which input is in focus or whose value is changing
  const [inFocusInput, setinFocusInput] = useState("inputA");

  //"conversionType" :: to check Conversion type
  const [conversionType, setconversionType] = useState("Length")



//"calculate"  :: If value is set constant but user is changing the conversion name like from inches to meters
//focus is inputA means we have to keep inputA constant and change inputB value.(vice-versa)
  const calculate = (focus, unitName) => {

    if (focus === "inputA") {

      let str = inputA;

      if (currConversionA === "Acres") {
        if (unitName === "Acres")
          setinputB("" + str.toString());

        if (unitName === "Hectares")
          setinputB("" + ((eval((str) * 0.404)).toString()));

        if (unitName === "Square feet")
          setinputB("" + ((eval((str) * 43560)).toString()));

        if (unitName === "Square meters")
          setinputB("" + ((eval((str) * 4046.86)).toString()));
      }

      if (currConversionA === "Hectares") {
        if (unitName === "Acres")
          setinputB("" + ((eval((str) * 2.47105)).toString()));

        if (unitName === "Hectares")
          setinputB("" + str.toString());

        if (unitName === "Square feet")
          setinputB("" + ((eval(str) * 107639).toString()));

        if (unitName === "Square meters")
          setinputB("" + ((eval((str) * 10000)).toString()));
      }

      if (currConversionA === "Square feet") {
        if (unitName === "Acres")
          setinputB("" + ((eval((str) * 2.29568e-5)).toString()));

        if (unitName === "Hectares")
          setinputB("" + ((eval((str) * 9.2903e-6)).toString()));

        if (unitName === "Square feet")
          setinputB("" + str.toString());

        if (unitName === "Square meters")
          setinputB("" + ((eval((str) * 0.092903)).toString()));
      }

      if (currConversionA === "Square meters") {
        if (unitName === "Acres")
          setinputB("" + ((eval((str) * 0.000247105)).toString()));

        if (unitName === "Hectares")
          setinputB("" + ((eval((str) * 0.0001)).toString()));

        if (unitName === "Square feet")
          setinputB("" + ((eval((str) * 10.7639)).toString()));

        if (unitName === "Square meters")
          setinputB("" + str.toString());
      }
    }



    if (focus === "inputB") {

      let str = inputB;

      if (currConversionB === "Acres") {
        if (unitName === "Acres")
          setinputA("" + str.toString());

        if (unitName === "Hectares")
          setinputA("" + ((eval((str) * 0.404)).toString()));

        if (unitName === "Square feet")
          setinputA("" + ((eval((str) * 43560)).toString()));

        if (unitName === "Square meters")
          setinputA("" + ((eval((str) * 4046.86)).toString()));
      }

      if (currConversionB === "Hectares") {
        if (unitName === "Acres")
          setinputA("" + ((eval((str) * 2.47105)).toString()));

        if (unitName === "Hectares")
          setinputA("" + str.toString());

        if (unitName === "Square feet")
          setinputA("" + ((eval((str) * 107639)).toString()));

        if (unitName === "Square meters")
          setinputA("" + ((eval((str) * 10000)).toString()));
      }

      if (currConversionB === "Square feet") {
        if (unitName === "Acres")
          setinputA("" + ((eval((str) * 2.29568e-5)).toString()));

        if (unitName === "Hectares")
          setinputA("" + ((eval((str) * 9.2903e-6)).toString()));

        if (unitName === "Square feet")
          setinputA("" + str.toString());

        if (unitName === "Square meters")
          setinputA("" + ((eval((str) * 0.092903)).toString()));
      }

      if (currConversionB === "Square meters") {
        if (unitName === "Acres")
          setinputA("" + ((eval((str) * 0.000247105)).toString()));

        if (unitName === "Hectares")
          setinputA("" + ((eval((str) * 0.0001)).toString()));

        if (unitName === "Square feet")
          setinputA("" + ((eval((str) * 10.7639)).toString()));

        if (unitName === "Square meters")
          setinputA("" + str.toString());
      }
    }

  }


  //"handleInputAPress" :: To set conversion name and unit of inputA
  const handleInputAPress = (unitName, unit) => {
    setcurrConversionA("" + unitName.toString());
    setinputAUnit("" + unit.toString());
    calculate("inputB", unitName.toString());
  }

  //"handleInputBPress" :: To set conversion name and unit of inputB
  const handleInputBPress = (unitName, unit) => {
    setcurrConversionB("" + unitName.toString());
    setinputBUnit("" + unit.toString())
    calculate("inputA", unitName.toString());
  }

  return (
    <View>
      {
        (conversionType == "Area") ?
          (
            <View>

              <View style={styles.conversionTypeContainer}>
                <TouchableOpacity><Text style={styles.conversionTypeoptionsInFocus} onPress={() => { setconversionType("Area") }}>Area</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.conversionTypeoptions} onPress={() => { setconversionType("Length") }}>Length</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.conversionTypeoptions} onPress={() => { setconversionType("Temperature")}}>Temperature</Text></TouchableOpacity>
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
                <TouchableOpacity><Text style={(currConversionA == "Acres") ? styles.areaInFocus : styles.area} onPress={() => { handleInputAPress("Acres", "ac");calculate("inputB","Acres") }}>Acres</Text></TouchableOpacity>
                <TouchableOpacity><Text style={(currConversionA == "Hectares") ? styles.areaInFocus : styles.area} onPress={() => { handleInputAPress("Hectares", "ha");calculate("inputB","Hectares") }}>Hectares</Text></TouchableOpacity>
                <TouchableOpacity><Text style={(currConversionA == "Square feet") ? styles.areaInFocus : styles.area} onPress={() => { handleInputAPress("Square feet", "ft²");calculate("inputB","Square feet") }}>Square feet</Text></TouchableOpacity>
                <TouchableOpacity><Text style={(currConversionA == "Square meters") ? styles.areaInFocus : styles.area} onPress={() => { handleInputAPress("Square meters", "m²");calculate("inputB","Square meters") }}>Square meters</Text></TouchableOpacity>
              </View>

              <View style={{ flex: 1, minHeight: 35, flexDirection: 'row', justifyContent: 'space-between', minHeight: 35, marginTop: 30 }}>
                <TextInput
                  style={styles.input}
                  onChangeText={setinputA}
                  value={inputA}
                  onFocus={() => { setinFocusInput("inputA") }}
                  selection={{ start: inputA.length, end: inputA.length }}
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
                <TouchableOpacity><Text style={(currConversionB == "Acres") ? styles.areaInFocus : styles.area} onPress={() => { handleInputBPress("Acres", "ac");calculate("inputA","Acres") }}>Acres</Text></TouchableOpacity>
                <TouchableOpacity><Text style={(currConversionB == "Hectares") ? styles.areaInFocus : styles.area} onPress={() => { handleInputBPress("Hectares", "ha");calculate("inputA","Hectares") }}>Hectares</Text></TouchableOpacity>
                <TouchableOpacity><Text style={(currConversionB == "Square feet") ? styles.areaInFocus : styles.area} onPress={() => { handleInputBPress("Square feet", "ft²");calculate("inputA","Square feet") }}>Square feet</Text></TouchableOpacity>
                <TouchableOpacity><Text style={(currConversionB == "Square meters") ? styles.areaInFocus : styles.area} onPress={() => { handleInputBPress("Square meters", "m²");calculate("inputA","Square meters") }}>Square meters</Text></TouchableOpacity>
              </View>

              <View style={{ flex: 1, minHeight: 35, flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                <TextInput
                  style={styles.input}
                  onChangeText={setinputB}
                  value={inputB}
                  onFocus={() => { setinFocusInput("inputB") }}
                  selection={{ start: inputB.length, end: inputB.length }}
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
                <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput} title="7" />
                <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput} title="8" />
                <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput} title="9" />
                <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput} title="back"/>
                <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput} title="4" />
                <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput} title="5" />
                <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput} title="6" />
                <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput} title="C" />
                <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput} title="1" />
                <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput} title="2" />
                <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput} title="3" />
                <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput} title=" " />
                <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput} title=" " />
                <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput} title="0" />
                <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput} title="." />
                <UnitConvertorPanel inputA={inputA} inputB={inputB} setinputA={setinputA} setinputB={setinputB} currConversionA={currConversionA} currConversionB={currConversionB} inFocusInput={inFocusInput} title=" " />
              </View>
            </View>
          )
          : ((conversionType === "Length") ? (
            <View>
              <UnitConvertorLength setconversionType={setconversionType} />
            </View>
          )
            : <View>
              <UnitConvertorTemperature setconversionType={setconversionType} />
            </View>
          )}
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
    marginTop: 30
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
    minWidth: '80%',
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

export default UnitConvertor


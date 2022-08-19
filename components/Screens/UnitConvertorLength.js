import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import UnitConvertorPanel from '../UnitConvertorPanelLength'
import { useState } from 'react'
const UnitConvertorLength = (props) => {

  //"inputA && inputB" :: to give value to unitA and unitB like(inch is inputA && meters is inputB)
  const [inputA, setinputA] = useState("")
  const [inputB, setinputB] = useState("")

  //"currConversionA && currConversionB" :: to check name of conversions
  const [currConversionA, setcurrConversionA] = useState("Inches");
  const [currConversionB, setcurrConversionB] = useState("feets");

  //"inputAunit and inputBunit" :: to get units of conversion
  const [inputAUnit, setinputAUnit] = useState("inch");
  const [inputBUnit, setinputBUnit] = useState("ft");

  //"inFocusInput" :: to check which input is in focus or whose value is changing
  const [inFocusInput, setinFocusInput] = useState("inputA");


  //"calculate"  :: If value is set constant but user is changing the conversion name like from inches to meters
//focus is inputA means we have to keep inputA constant and change inputB value.(vice-versa)
  const calculate = (focus,unitName) => {

    if (focus === "inputA") {

        let str =inputA;

        if (currConversionA === "Inches") {
            if (unitName === "Inches")
                setinputB("" + str.toString());

            if (unitName === "feets")
                setinputB("" + ((eval((str) * 0.0833333)).toString()));

            if (unitName === "kilometer")
                setinputB("" + ((eval((str) * 2.54e-5)).toString()));

            if (unitName === "meters")
                setinputB("" + ((eval((str) * 0.0254)).toString()));

            if (unitName === "yards")
                setinputB("" + ((eval((str) * 0.0277778)).toString()));
        }

        if (currConversionA === "feets") {
            if (unitName === "Inches")
                setinputB("" + ((eval((str) * 12)).toString()));

            if (unitName=== "feets")
                setinputB("" + str.toString());

            if (unitName=== "kilometer")
                setinputB("" + ((eval((str) * 0.0003048)).toString()));

            if (unitName=== "meters")
                setinputB("" + ((eval((str) * 0.3048)).toString()));

            if (unitName=== "yards")
                setinputB("" + ((eval((str) * 0.333333)).toString()));
        }

        if (currConversionA === "kilometer") {
            if (unitName=== "Inches")
                setinputB("" + ((eval((str) * 39370.1)).toString()));

            if (unitName === "feets")
                setinputB("" + ((eval((str) * 3280.84)).toString()));

            if (unitName=== "kilometer")
                setinputB("" + str.toString());

            if (unitName === "meters")
                setinputB("" + ((eval((str) * 1000)).toString()));

            if (unitName === "yards")
                setinputB("" + ((eval((str) * 1093.61)).toString()));
        }

        if (currConversionA === "meters") {
            if (unitName=== "Inches")
                setinputB("" + ((eval((str) * 39.3701)).toString()));

            if (unitName === "feets")
                setinputB("" + ((eval((str) * 3.28084)).toString()));

            if (unitName === "kilometer")
                setinputB("" + ((eval((str) * 0.001)).toString()));

            if (unitName === "meters")
                setinputB("" + str.toString());

            if (unitName === "yards")
            setinputB("" + ((eval((str) * 1.09361)).toString()));
        }
    }



    if (focus === "inputB") {

        let str = inputB;
        
        if (currConversionB === "Inches") {
            if (unitName === "Inches")
                setinputA("" + str.toString());

            if (unitName === "feets")
                setinputA("" + ((eval((str) * 0.0833333)).toString()));

            if (unitName === "kilometer")
                setinputA("" + ((eval((str) * 2.54e-5)).toString()));

            if (unitName === "meters")
                setinputA("" + ((eval((str) * 0.0254)).toString()));

            if (unitName === "yards")
                setinputA("" + ((eval((str) * 0.0277778)).toString()));
        }

        if (currConversionB === "feets") {
            if (unitName === "Inches")
                setinputA("" + ((eval((str) * 12)).toString()));

            if (unitName === "feets")
                setinputA("" + str.toString());

            if (unitName === "kilometer")
                setinputA("" + ((eval((str) * 0.0003048)).toString()));

            if (unitName=== "meters")
                setinputA("" + ((eval((str) * 0.3048)).toString()));

            if (unitName=== "yards")
                setinputA("" + ((eval((str) * 0.333333)).toString()));
        }

        if (currConversionB === "kilometer") {
            if (unitName === "Inches")
                setinputA("" + ((eval((str) * 39370.1)).toString()));

            if (unitName === "feets")
                setinputA("" + ((eval((str) * 3280.84)).toString()));

            if (unitName === "kilometer")
                setinputA("" + str.toString());

            if (unitName === "meters")
                setinputA("" + ((eval((str) * 1000)).toString()));

            if (unitName === "yards")
                setinputA("" + ((eval((str) * 1093.61)).toString()));
        }

        if (currConversionB === "meters") {
            if (unitName === "Inches")
                setinputA("" + ((eval((str) * 39.3701)).toString()));

            if (unitName === "feets")
                setinputA("" + ((eval((str) * 3.28084)).toString()));

            if (unitName === "kilometer")
                setinputA("" + ((eval((str) * 0.001)).toString()));

            if (unitName === "yards")
                setinputA("" + ((eval((str) * 1.09361)).toString()));

            if (unitName=== "meters")
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
        <TouchableOpacity><Text style={styles.conversionTypeoptionsInFocus} onPress={()=>{props.setconversionType("Length")}}>Length</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.conversionTypeoptions} onPress={()=>{props.setconversionType("Temperature")}}>Temperature</Text></TouchableOpacity>
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
        <TouchableOpacity><Text style={(currConversionA=="Inches")?styles.areaInFocus : styles.area} onPress={()=>{handleInputAPress("Inches","inch");calculate("inputB","Inches")}}>Inches</Text></TouchableOpacity>
        <TouchableOpacity><Text style={(currConversionA=="feets")?styles.areaInFocus : styles.area} onPress={()=>{handleInputAPress("feets","ft");calculate("inputB","feets")}}>feets</Text></TouchableOpacity>
        <TouchableOpacity><Text style={(currConversionA=="kilometer")?styles.areaInFocus : styles.area} onPress={()=>{handleInputAPress("kilometer","km");calculate("inputB","kilometer")}}>kilometer</Text></TouchableOpacity>
        <TouchableOpacity><Text style={(currConversionA=="meters")?styles.areaInFocus : styles.area} onPress={()=>{handleInputAPress("meters","m");calculate("inputB","meters")}}>meters</Text></TouchableOpacity>
        <TouchableOpacity><Text style={(currConversionA=="yards")?styles.areaInFocus : styles.area} onPress={()=>{handleInputAPress("yards","yd");calculate("inputB","yards")}}>yards</Text></TouchableOpacity>
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
        <TouchableOpacity><Text style={(currConversionB=="Inches")?styles.areaInFocus : styles.area} onPress={()=>{handleInputBPress("Inches","inch");calculate("inputA","Inches")}}>Inches</Text></TouchableOpacity>
        <TouchableOpacity><Text style={(currConversionB=="feets")?styles.areaInFocus : styles.area} onPress={()=>{handleInputBPress("feets","ft");calculate("inputA","feets")}}>feets</Text></TouchableOpacity>
        <TouchableOpacity><Text style={(currConversionB=="kilometer")?styles.areaInFocus : styles.area} onPress={()=>{handleInputBPress("kilometer","km");calculate("inputA","kilometer")}}>kilometer</Text></TouchableOpacity>
        <TouchableOpacity><Text style={(currConversionB=="meters")?styles.areaInFocus : styles.area} onPress={()=>{handleInputBPress("meters","m");calculate("inputA","meters")}}>meters</Text></TouchableOpacity>
        <TouchableOpacity><Text style={(currConversionB=="yards")?styles.areaInFocus : styles.area} onPress={()=>{handleInputBPress("yards","yd");calculate("inputA","yards")}}>yards</Text></TouchableOpacity>
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

export default UnitConvertorLength


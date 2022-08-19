
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Panel from '../Panel'
import { useState } from 'react';
import React, { Component } from 'react';

export default function HomeScreen({navigation}) {


// calculation shows current state of calculation
  const [calculation, setcalculation] = useState("");

// bracket_check to check if all opening bracket bracket has corresponding closing bracket
  const [bracket_check, setbracket_check] = useState(0);

// answer stores answer of calculation
  const [answer, setanswer] = useState("")

//History array stores all the previous calculations
  const [History, setHistory] = useState([""])

//Check if more operations button is pressed or not
  const [moreOperations, setmoreOperations] = useState(false)

//To check number of trigo operations we need to perform :: will help in removing trigo symbols from equation
  const [trigo, settrigo] = useState(0)

//To check number of underRoot operations we need to perform :: will help in removing underRoot from equation
  const [underRoot, setunderRoot] = useState(0)

//To check number of naturalLog operations we need to perform :: will help in removing naturalLog from equation
  const [naturalLog, setnaturalLog] = useState(0)

//To check number of Log10 operations we need to perform :: will help in removing Log10 from equation
  const [base10Log, setbase10Log] = useState(0)

//To check number of power operations(x^y) we need to perform :: will help in removing naturalLog from equation
  const [power, setpower] = useState(0)


// "handleBackButton" :: To handle undo operation
//"calStr" is used to update calculation
//"ansStr" is used to update answer
  const handleBackButton = () => {

    if (calculation.length == 0)
      return;

    if (calculation[calculation.length - 1] == ")")
      setbracket_check(bracket_check + 1);

    else if (calculation[calculation.length - 1] == "(")
      setbracket_check(bracket_check - 1);

      let calStr=""+calculation;

      if((calStr[calStr.length-1]=='n' && calStr[calStr.length-1]!='l')||calStr[calStr.length-1]=='s')
      {
      calStr=calStr.slice(0,-3);
      settrigo(trigo-1);
      }
      else if(calStr[calStr.length-1]=='√')
      {
      calStr=calStr.slice(0,-1);
      setunderRoot(underRoot-1);
      }
      else if(calStr[calStr.length-1]=='n' && calStr[calStr.length-2]=='l')
      {
      calStr=calStr.slice(0,-2);
      setnaturalLog(naturalLog-1);
      }
      else if(calStr[calStr.length-1]=='g')
      {
      calStr=calStr.slice(0,-3);
      setbase10Log(base10Log-1);
      }
      else if(calStr[calStr.length-1]=='^')
      {
      calStr=calStr.slice(0,-1);
      setpower(power-1);
      }
      else
      calStr=calStr.slice(0,-1);




      let ansStr=""+answer;
      if(ansStr[ansStr.length-1]=='n'||ansStr[ansStr.length-1]=='s')
      {
      ansStr=ansStr.slice(0,-3);
      settrigo(trigo-1);
      }
      else if(ansStr[ansStr.length-1]=='√')
      {
        ansStr=ansStr.slice(0,-1);
        setunderRoot(underRoot-1);
      }
      else if(ansStr[ansStr.length-1]=='ln')
      {
        ansStr=ansStr.slice(0,-2);
        setnaturalLog(naturalLog-1);
      }
      else if(ansStr[ansStr.length-1]=='^')
      {
        ansStr=ansStr.slice(0,-1);
        setpower(power-1);
      }
      else
      ansStr=ansStr.slice(0,-1);

      

      setcalculation(calStr);
      setanswer(ansStr);

      return;

  }



  return (
    <View>
      <View style={styles.Calculations}>
        <Text style={{
          textAlign: 'right',
          marginRight: 15,
          fontSize: 35,
          letterSpacing: 3,
          marginRight: 15,
          marginBottom: 10,
          color:'black'
        }}>
          {calculation}
        </Text>
        <Text style={{
          textAlign: 'right',
          marginRight: 15,
          fontSize: 20,
          letterSpacing: 3,
          marginRight: 15,
          color: 'gray'
        }}>
          {((answer[answer.length - 1] >= "0" && answer[answer.length - 1] <= "9" && bracket_check == 0 && trigo==0 && underRoot==0 && naturalLog==0 && base10Log==0 && power==0) || answer[answer.length - 1] == ")" && bracket_check == 0 && trigo==0 && underRoot==0 && naturalLog==0 && base10Log==0 && power==0) ? eval(answer) : ""}

        </Text>
      </View>

      <View style={styles.moreOptions}>
        <TouchableOpacity onPress={() => navigation.navigate('History', { History: History,setHistory:setHistory })}>
          <Text style={{ marginLeft: 13, marginTop: 20, fontWeight: 'bold',color:'black' }}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UnitConvertor')}>
          <Text style={{ marginLeft: 13, marginTop: 20, fontWeight: 'bold',color:'black' }} >unit Converter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {(moreOperations===false) ?setmoreOperations(true):setmoreOperations(false)}}>
          <Text style={(moreOperations===false) ?{ marginLeft: 13, marginTop: 20, fontWeight: 'bold' ,color:'black'}:{ marginLeft: 13, marginTop: 20, fontWeight: 'bold',color:'blue' }} >more operations</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { handleBackButton() }}>
          <Text style={{ marginLeft: 45, marginTop: 20, fontWeight: "800",color:'red',fontSize:18}}>undo</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginBottom: 30,
          width: '88%',
          marginLeft: '6%',
          color:'black'
        }}
      />


     {/* We are checking if "moreOperations" button is clicked :: if yes it would show advance calculation options like trigo etc :: else basic calculation options like addition of numbers etc  */}
      { (moreOperations===false)?
      (
      <View style={styles.Panelcontainer}>
        <Panel title="C" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
        <Panel title="()" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
        <Panel title="%" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
        <Panel title="/" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
        <Panel title="7" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
        <Panel title="8" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
        <Panel title="9" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
        <Panel title="x" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
        <Panel title="4" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
        <Panel title="5" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
        <Panel title="6" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
        <Panel title="-" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
        <Panel title="1" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
        <Panel title="2" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
        <Panel title="3" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
        <Panel title="+" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
        <Panel title="+/-" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
        <Panel title="0" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
        <Panel title="." setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
        <Panel title="=" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>

      </View>
      )
      :      (<View style={styles.Panelcontainer}>
      <Panel title="C" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
      <Panel title="()" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
      <Panel title="%" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
      <Panel title="/" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
      <Panel title="sin" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
      <Panel title="cos" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
      <Panel title="tan" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
      <Panel title="x" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
      <Panel title="ln" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
      <Panel title="log" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
      <Panel title="π" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
      <Panel title="-" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
      <Panel title="√" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
      <Panel title="^" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
      <Panel title="1/x" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
      <Panel title="+" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
      <Panel title="+/-" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
      <Panel title="0" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
      <Panel title="." setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>
      <Panel title="=" setcalculation={setcalculation} calculation={calculation} bracket_check={bracket_check} setbracket_check={setbracket_check} answer={answer} setanswer={setanswer} History={History} setHistory={setHistory} trigo={trigo} settrigo={settrigo} underRoot={underRoot} setunderRoot={setunderRoot} naturalLog={naturalLog} setnaturalLog={setnaturalLog} base10Log={base10Log} setbase10Log={setbase10Log} power={power} setpower={setpower}/>

    </View>)
}
    </View>
  );
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
    color:'black'
  },
  Calculations: {
    marginTop: 170,
    minHeight: 80,
    color:'black'
  },
  moreOptions: {
    minHeight: 60,
    flex: 1,
    flexDirection: 'row',
    color:'black'
  }
});
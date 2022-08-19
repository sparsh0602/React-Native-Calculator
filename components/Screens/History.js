import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';

const History = (props) => {
  const [calculationHistory, setcalculationHistory] = useState(props.route.params.History)
  
  //"handleClearHistory" :: to clear history
  const handleClearHistory = () => {
    props.route.params.setHistory([""]);
    setcalculationHistory([""]);
  }

  //emptyCalculationArray() :: If history is cleared we would "No Calculation History"
  const emptyCalculationArray = () => {
    return <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 15,color:'black' }}>No Calculation History</Text>
  }

  
  return (
    <View>


      <TouchableOpacity onPress={() => handleClearHistory()}>
        <Text style={{ fontWeight: 'bold', marginTop: 30, marginLeft: 20, fontSize: 20, borderWidth: 2, padding: 10, marginRight: 20, textAlign: 'center', borderRadius: 10 ,color:'black'}}>Clear History</Text>
      </TouchableOpacity>


      <View style={styles.historyContainer}>
        {(calculationHistory.length > 1) ? calculationHistory.map((val) => {
          return <Text style={styles.history}>{val}</Text>
        })
          : emptyCalculationArray()
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  history: {
    minHeight: 5,
    fontSize: 20,
    letterSpacing: 1,
    textAlign: 'left',
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 4,
    overflow: 'scroll',
    color:'black'
    
  },

  historyContainer: {
    overflow: 'scroll',
    marginTop: 30,
    color:'black'
  }

})

export default History
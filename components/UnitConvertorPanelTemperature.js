import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const UnitConvertorPanel = (props) => {


    const calculate = (ele) => {

        if ((ele >= "0" && ele <= "9") || ele === ".") {
            if (props.inFocusInput === "inputA") {
                props.setinputA("" + props.inputA + ele.toString());

                if (props.currConversionA === "Celsius") {
                    if (props.currConversionB === "Celsius")
                        props.setinputB("" + props.inputA + ele.toString());

                    if (props.currConversionB === "Fahrenheit")
                        props.setinputB("" + ((eval((((props.inputA + ele)*(9/5) )+ 32))).toString()));

                    if (props.currConversionB === "Kelvin")
                        props.setinputB("" + ((eval((props.inputA + ele+"+"+273.15))).toString()));

                }

                if (props.currConversionA === "Fahrenheit") {
                    if (props.currConversionB === "Celsius")
                        props.setinputB("" + ((eval(((props.inputA + ele)-32)*5/9)).toString()));

                    if (props.currConversionB === "Fahrenheit")
                        props.setinputB("" + props.inputA + ele.toString());

                    if (props.currConversionB === "Kelvin")
                        props.setinputB("" + ((eval(((props.inputA + ele) -32)*5/9+273.15)).toString()));

                }

                if (props.currConversionA === "Kelvin") {
                    if (props.currConversionB === "Celsius")
                        props.setinputB("" + ((eval((props.inputA + ele)-273.15)).toString()));

                    if (props.currConversionB === "Fahrenheit")
                        props.setinputB("" + ((eval(((props.inputA + ele) -273.5)*9/5+32)).toString()));

                    if (props.currConversionB === "Kelvin")
                        props.setinputB("" + props.inputA + ele.toString());

                }
            }



            if (props.inFocusInput === "inputB") {
                props.setinputB("" + props.inputB + ele.toString());

                if (props.currConversionB === "Celsius") {
                    if (props.currConversionA === "Celsius")
                        props.setinputA("" + props.inputB + ele.toString());

                    if (props.currConversionA === "Fahrenheit")
                        props.setinputA("" + ((eval((((props.inputB + ele)*(9/5) )+ 32))).toString()));

                    if (props.currConversionA === "Kelvin")
                        props.setinputA("" + ((eval((props.inputB + ele+"+"+273.15))).toString()));

      
                }

                if (props.currConversionB === "Fahrenheit") {
                    if (props.currConversionA === "Celsius")
                        props.setinputA("" + ((eval(((props.inputB + ele)-32)*5/9)).toString()));

                    if (props.currConversionA === "Fahrenheit")
                        props.setinputA("" + props.inputB + ele.toString());

                    if (props.currConversionA === "Kelvin")
                        props.setinputA("" + ((eval(((props.inputB + ele) -32)*5/9+273.15)).toString()));

             
                }

                if (props.currConversionB === "Kelvin") {
                    if (props.currConversionA === "Celsius")
                        props.setinputA("" + ((eval((props.inputB + ele)-273.15)).toString()));

                    if (props.currConversionA === "Fahrenheit")
                        props.setinputA("" + ((eval(((props.inputB + ele) -273.5)*9/5+32)).toString()));

                    if (props.currConversionA === "Kelvin")
                        props.setinputA("" + props.inputB + ele.toString());

                 
                }

            }
        }

    }




    const calculate2 = () => {



        if (props.inFocusInput === "inputA") {

            let str = props.inputA;
            str = str.slice(0, -1)
            props.setinputA("" + str.toString());


            if (props.currConversionA === "Celsius") {
                if (props.currConversionB === "Celsius")
                    props.setinputB("" + str.toString());

                if (props.currConversionB === "Fahrenheit")
                props.setinputB("" + (((eval(((str) *(9/5) )+ 32))).toString()));

                if (props.currConversionB === "Kelvin")
                    props.setinputB("" + ((eval(str+"+"+273.15)).toString()));

           
            }

            if (props.currConversionA === "Fahrenheit") {
                if (props.currConversionB === "Celsius")
                    props.setinputB("" + ((eval(((str)-32)*5/9)).toString()));

                if (props.currConversionB === "Fahrenheit")
                    props.setinputB("" + str.toString());

                if (props.currConversionB === "Kelvin")
                    props.setinputB("" + ((eval(((str)-32)*5/9+273.15)).toString()));

            
            }

            if (props.currConversionA === "Kelvin") {
                if (props.currConversionB === "Celsius")
                    props.setinputB("" + ((eval((str)-273.15)).toString()));

                if (props.currConversionB === "Fahrenheit")
                    props.setinputB("" + ((eval(((str)-273.5)*9/5+32)).toString()));

                if (props.currConversionB === "Kelvin")
                    props.setinputB("" + str.toString());

            }
        }



        if (props.inFocusInput === "inputB") {

            let str = props.inputB;
            str = str.slice(0, -1)
            props.setinputB("" + str.toString());

            if (props.currConversionB === "Celsius") {
                if (props.currConversionA === "Celsius")
                    props.setinputA("" + str.toString());

                if (props.currConversionA === "Fahrenheit")
                    props.setinputA("" + (((eval(((str) *(9/5) )+ 32))).toString()));

                if (props.currConversionA === "Kelvin")
                    props.setinputA("" + ((eval((str) + 273.15)).toString()));

        
            }

            if (props.currConversionB === "Fahrenheit") {
                if (props.currConversionA === "Celsius")
                    props.setinputA("" + ((eval(((str)-32)*5/9)).toString()));

                if (props.currConversionA === "Fahrenheit")
                    props.setinputA("" + str.toString());

                if (props.currConversionA === "Kelvin")
                    props.setinputA("" + ((eval(((str)-32)*5/9+273.15)).toString()));

       
            }

            if (props.currConversionB === "Kelvin") {
                if (props.currConversionA === "Celsius")
                    props.setinputA("" + ((eval((str)-273.15)).toString()));

                if (props.currConversionA === "Fahrenheit")
                    props.setinputA("" + ((eval(((str)-273.5)*9/5+32)).toString()));

                if (props.currConversionA === "Kelvin")
                    props.setinputA("" + str.toString());

         
            }

     
        }

    }


    const handleButtonPress = (ele) => {


        calculate(ele);

        if (ele === "C") {
            props.setinputA("");
            props.setinputB("");
        }

        if (ele === "back") {
            if (props.inFocusInput === "inputA") {
                if (props.inputA.length > 0) {
                    calculate2();
                }
            }

            if (props.inFocusInput === "inputB") {
                if (props.inputB.length > 0) {
                    calculate2();
                }
            }
        }
    }



    return (
        <TouchableOpacity style={styles.button} onPress={() => { handleButtonPress(props.title) }}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'hsl(0,0%,96.5%)',
        borderRadius: 40,
        width: '21%',
        height: 70,
        marginTop: 3,
        marginLeft: 10,color:'black'
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold'
        ,color:'black'
    },
})

export default UnitConvertorPanel
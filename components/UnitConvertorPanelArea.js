import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const UnitConvertorPanel = (props) => {


    const calculate = (ele) => {

        if ((ele >= "0" && ele <= "9") || ele === ".") {
            if (props.inFocusInput === "inputA") {
                props.setinputA("" + props.inputA + ele.toString());

                if (props.currConversionA === "Acres") {
                    if (props.currConversionB === "Acres")
                        props.setinputB("" + props.inputA + ele.toString());

                    if (props.currConversionB === "Hectares")
                        props.setinputB("" + ((eval((props.inputA + ele) * 0.404)).toString()));

                    if (props.currConversionB === "Square feet")
                        props.setinputB("" + ((eval((props.inputA + ele) * 43560)).toString()));

                    if (props.currConversionB === "Square meters")
                        props.setinputB("" + ((eval((props.inputA + ele) * 4046.86)).toString()));
                }

                if (props.currConversionA === "Hectares") {
                    if (props.currConversionB === "Acres")
                        props.setinputB("" + ((eval((props.inputA + ele) * 2.47105)).toString()));

                    if (props.currConversionB === "Hectares")
                        props.setinputB("" + props.inputA + ele.toString());

                    if (props.currConversionB === "Square feet")
                        props.setinputB("" + ((eval((props.inputA + ele) * 107639)).toString()));

                    if (props.currConversionB === "Square meters")
                        props.setinputB("" + ((eval((props.inputA + ele) * 10000)).toString()));
                }

                if (props.currConversionA === "Square feet") {
                    if (props.currConversionB === "Acres")
                        props.setinputB("" + ((eval((props.inputA + ele) * 2.29568e-5)).toString()));

                    if (props.currConversionB === "Hectares")
                        props.setinputB("" + ((eval((props.inputA + ele) * 9.2903e-6)).toString()));

                    if (props.currConversionB === "Square feet")
                        props.setinputB("" + props.inputA + ele).toString();

                    if (props.currConversionB === "Square meters")
                        props.setinputB("" + ((eval((props.inputA + ele) * 0.092903)).toString()));
                }

                if (props.currConversionA === "Square meters") {
                    if (props.currConversionB === "Acres")
                        props.setinputB("" + ((eval((props.inputA + ele) * 0.000247105)).toString()));

                    if (props.currConversionB === "Hectares")
                        props.setinputB("" + ((eval((props.inputA + ele) * 0.0001)).toString()));

                    if (props.currConversionB === "Square feet")
                        props.setinputB("" + ((eval((props.inputA + ele) * 10.7639)).toString()));

                    if (props.currConversionB === "Square meters")
                        props.setinputB("" + props.inputA + ele.toString());
                }
            }



            if (props.inFocusInput === "inputB") {
                props.setinputB("" + props.inputB + ele.toString());

                if (props.currConversionB === "Acres") {
                    if (props.currConversionA === "Acres")
                        props.setinputA("" + props.inputB + ele.toString());

                    if (props.currConversionA === "Hectares")
                        props.setinputA("" + ((eval((props.inputB + ele) * 0.404)).toString()));

                    if (props.currConversionA === "Square feet")
                        props.setinputA("" + ((eval((props.inputB + ele) * 43560)).toString()));

                    if (props.currConversionA === "Square meters")
                        props.setinputA("" + ((eval((props.inputB + ele) * 4046.86)).toString()));
                }

                if (props.currConversionB === "Hectares") {
                    if (props.currConversionA === "Acres")
                        props.setinputA("" + ((eval((props.inputB + ele) * 2.47105)).toString()));

                    if (props.currConversionA === "Hectares")
                        props.setinputA("" + props.inputB + ele.toString());

                    if (props.currConversionA === "Square feet")
                        props.setinputA("" + ((eval((props.inputB + ele) * 107639)).toString()));

                    if (props.currConversionA === "Square meters")
                        props.setinputA("" + ((eval((props.inputB + ele) * 10000)).toString()));
                }

                if (props.currConversionB === "Square feet") {
                    if (props.currConversionA === "Acres")
                        props.setinputA("" + ((eval((props.inputB + ele) * 2.29568e-5)).toString()));

                    if (props.currConversionA === "Hectares")
                        props.setinputA("" + ((eval((props.inputB + ele) * 9.2903e-6)).toString()));

                    if (props.currConversionA === "Square feet")
                        props.setinputA("" + props.inputB + ele.toString());

                    if (props.currConversionA === "Square meters")
                        props.setinputA("" + ((eval((props.inputB + ele) * 0.092903)).toString()));
                }

                if (props.currConversionB === "Square meters") {
                    if (props.currConversionA === "Acres")
                        props.setinputA("" + ((eval((props.inputB + ele) * 0.000247105)).toString()));

                    if (props.currConversionA === "Hectares")
                        props.setinputA("" + ((eval((props.inputB + ele) * 0.0001)).toString()));

                    if (props.currConversionA === "Square feet")
                        props.setinputA("" + ((eval((props.inputB + ele) * 10.7639)).toString()));

                    if (props.currConversionA === "Square meters")
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


            if (props.currConversionA === "Acres") {
                if (props.currConversionB === "Acres")
                    props.setinputB("" + str.toString());

                if (props.currConversionB === "Hectares")
                    props.setinputB("" + ((eval((str) * 0.404)).toString()));

                if (props.currConversionB === "Square feet")
                    props.setinputB("" + ((eval((str) * 43560)).toString()));

                if (props.currConversionB === "Square meters")
                    props.setinputB("" + ((eval((str) * 4046.86)).toString()));
            }

            if (props.currConversionA === "Hectares") {
                if (props.currConversionB === "Acres")
                    props.setinputB("" + ((eval((str) * 2.47105)).toString()));

                if (props.currConversionB === "Hectares")
                    props.setinputB("" + str.toString());

                if (props.currConversionB === "Square feet")
                    props.setinputB("" + (((eval(str) * 107639)).toString()));

                if (props.currConversionB === "Square meters")
                    props.setinputB("" + ((eval((str) * 10000)).toString()));
            }

            if (props.currConversionA === "Square feet") {
                if (props.currConversionB === "Acres")
                    props.setinputB("" + ((eval((str) * 2.29568e-5)).toString()));

                if (props.currConversionB === "Hectares")
                    props.setinputB("" + ((eval((str) * 9.2903e-6)).toString()));

                if (props.currConversionB === "Square feet")
                    props.setinputB("" + str.toString());

                if (props.currConversionB === "Square meters")
                    props.setinputB("" + ((eval((str) * 0.092903)).toString()));
            }

            if (props.currConversionA === "Square meters") {
                if (props.currConversionB === "Acres")
                    props.setinputB("" + ((eval((str) * 0.000247105)).toString()));

                if (props.currConversionB === "Hectares")
                    props.setinputB("" + ((eval((str) * 0.0001)).toString()));

                if (props.currConversionB === "Square feet")
                    props.setinputB("" + ((eval((str) * 10.7639)).toString()));

                if (props.currConversionB === "Square meters")
                    props.setinputB("" + str.toString());
            }
        }



        if (props.inFocusInput === "inputB") {

            let str = props.inputB;
            str = str.slice(0, -1)
            props.setinputB("" + str.toString());

            if (props.currConversionB === "Acres") {
                if (props.currConversionA === "Acres")
                    props.setinputA("" + str.toString());

                if (props.currConversionA === "Hectares")
                    props.setinputA("" + ((eval((str) * 0.404)).toString()));

                if (props.currConversionA === "Square feet")
                    props.setinputA("" + ((eval((str) * 43560)).toString()));

                if (props.currConversionA === "Square meters")
                    props.setinputA("" + ((eval((str) * 4046.86)).toString()));
            }

            if (props.currConversionB === "Hectares") {
                if (props.currConversionA === "Acres")
                    props.setinputA("" + ((eval((str) * 2.47105)).toString()));

                if (props.currConversionA === "Hectares")
                    props.setinputA("" + str.toString());

                if (props.currConversionA === "Square feet")
                    props.setinputA("" + ((eval((str) * 107639)).toString()));

                if (props.currConversionA === "Square meters")
                    props.setinputA("" + ((eval((str) * 10000)).toString()));
            }

            if (props.currConversionB === "Square feet") {
                if (props.currConversionA === "Acres")
                    props.setinputA("" + ((eval((str) * 2.29568e-5)).toString()));

                if (props.currConversionA === "Hectares")
                    props.setinputA("" + ((eval((str) * 9.2903e-6)).toString()));

                if (props.currConversionA === "Square feet")
                    props.setinputA("" + str.toString());

                if (props.currConversionA === "Square meters")
                    props.setinputA("" + ((eval((str) * 0.092903)).toString()));
            }

            if (props.currConversionB === "Square meters") {
                if (props.currConversionA === "Acres")
                    props.setinputA("" + ((eval((str) * 0.000247105)).toString()));

                if (props.currConversionA === "Hectares")
                    props.setinputA("" + ((eval((str) * 0.0001)).toString()));

                if (props.currConversionA === "Square feet")
                    props.setinputA("" + ((eval((str) * 10.7639)).toString()));

                if (props.currConversionA === "Square meters")
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
        marginLeft: 10
        ,color:'black'
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold'
        ,color:'black'
    },
})

export default UnitConvertorPanel
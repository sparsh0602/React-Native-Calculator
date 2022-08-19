import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const UnitConvertorPanel = (props) => {


    const calculate = (ele) => {

        if ((ele >= "0" && ele <= "9") || ele === ".") {
            if (props.inFocusInput === "inputA") {
                props.setinputA("" + props.inputA + ele.toString());

                if (props.currConversionA === "Inches") {
                    if (props.currConversionB === "Inches")
                        props.setinputB("" + props.inputA + ele.toString());

                    if (props.currConversionB === "feets")
                        props.setinputB("" + ((eval((props.inputA + ele) * 0.0833333)).toString()));

                    if (props.currConversionB === "kilometer")
                        props.setinputB("" + ((eval((props.inputA + ele) * 2.54e-5)).toString()));

                    if (props.currConversionB === "meters")
                        props.setinputB("" + ((eval((props.inputA + ele) * 0.0254)).toString()));

                    if (props.currConversionB === "yards")
                        props.setinputB("" + ((eval((props.inputA + ele) * 0.0277778)).toString()));
                }

                if (props.currConversionA === "feets") {
                    if (props.currConversionB === "Inches")
                        props.setinputB("" + ((eval((props.inputA + ele)* 12)).toString()));

                    if (props.currConversionB === "feets")
                        props.setinputB("" + props.inputA + ele.toString());

                    if (props.currConversionB === "kilometer")
                        props.setinputB("" + ((eval((props.inputA + ele) * 0.0003048)).toString()));

                    if (props.currConversionB === "meters")
                        props.setinputB("" + ((eval((props.inputA + ele) * 0.3048)).toString()));
                
                    if (props.currConversionB === "yards")
                        props.setinputB("" + ((eval((props.inputA + ele) * 0.333333)).toString()));
                }

                if (props.currConversionA === "kilometer") {
                    if (props.currConversionB === "Inches")
                        props.setinputB("" + ((eval((props.inputA + ele) * 39370.1)).toString()));

                    if (props.currConversionB === "feets")
                        props.setinputB("" + ((eval((props.inputA + ele) * 3280.84)).toString()));

                    if (props.currConversionB === "kilometer")
                        props.setinputB("" + props.inputA + ele.toString());

                    if (props.currConversionB === "meters")
                        props.setinputB("" + ((eval((props.inputA + ele) * 1000)).toString()));

                    if (props.currConversionB === "yards")
                        props.setinputB("" + ((eval((props.inputA + ele) * 1093.61)).toString()));
                }

                if (props.currConversionA === "meters") {
                    if (props.currConversionB === "Inches")
                        props.setinputB("" + ((eval((props.inputA + ele) * 39.3701)).toString()));

                    if (props.currConversionB === "feets")
                        props.setinputB("" + ((eval((props.inputA + ele) * 3.28084)).toString()));

                    if (props.currConversionB === "kilometer")
                        props.setinputB("" + ((eval((props.inputA + ele) * 0.001)).toString()));

                    if (props.currConversionB === "yards")
                        props.setinputB("" + ((eval((props.inputA + ele) * 1.09361)).toString()));

                    if (props.currConversionB === "meters")
                        props.setinputB("" + props.inputA + ele.toString());
                }
            }



            if (props.inFocusInput === "inputB") {
                props.setinputB("" + props.inputB + ele.toString());

                if (props.currConversionB === "Inches") {
                    if (props.currConversionA === "Inches")
                        props.setinputA("" + props.inputB + ele.toString());

                    if (props.currConversionA === "feets")
                        props.setinputA("" + ((eval((props.inputB + ele) * 0.0833333)).toString()));

                    if (props.currConversionA === "kilometer")
                        props.setinputA("" + ((eval((props.inputB + ele) * 2.54e-5)).toString()));

                    if (props.currConversionA === "meters")
                        props.setinputA("" + ((eval((props.inputB + ele) * 0.0254)).toString()));

                    if (props.currConversionA === "yards")
                        props.setinputA("" + ((eval((props.inputB + ele) * 0.0277778)).toString()));
                }

                if (props.currConversionB === "feets") {
                    if (props.currConversionA === "Inches")
                        props.setinputA("" + ((eval((props.inputB + ele) * 12)).toString()));

                    if (props.currConversionA === "feets")
                        props.setinputA("" + props.inputB + ele.toString());

                    if (props.currConversionA === "kilometer")
                        props.setinputA("" + ((eval((props.inputB + ele) * 0.0003048)).toString()));

                    if (props.currConversionA === "meters")
                        props.setinputA("" + ((eval((props.inputB + ele) * 0.3048)).toString()));

                    if (props.currConversionA === "yards")
                        props.setinputA("" + ((eval((props.inputB + ele) * 0.333333)).toString()));
                }

                if (props.currConversionB === "kilometer") {
                    if (props.currConversionA === "Inches")
                        props.setinputA("" + ((eval((props.inputB + ele) * 39370.1)).toString()));

                    if (props.currConversionA === "feets")
                        props.setinputA("" + ((eval((props.inputB + ele) * 3280.84)).toString()));

                    if (props.currConversionA === "kilometer")
                        props.setinputA("" + props.inputB + ele).toString();

                    if (props.currConversionA === "meters")
                        props.setinputA("" + ((eval((props.inputB + ele) * 1000)).toString()));

                    if (props.currConversionA === "yards")
                        props.setinputA("" + ((eval((props.inputB + ele) * 1093.61)).toString()));
                }

                if (props.currConversionB === "meters") {
                    if (props.currConversionA === "Inches")
                        props.setinputA("" + ((eval((props.inputB + ele) * 39.3701)).toString()));

                    if (props.currConversionA === "feets")
                        props.setinputA("" + ((eval((props.inputB + ele) * 3.28084)).toString()));

                    if (props.currConversionA === "kilometer")
                        props.setinputA("" + ((eval((props.inputB + ele) * 0.001)).toString()));

                    if (props.currConversionA === "meters")
                        props.setinputA("" + props.inputB + ele.toString());

                    if (props.currConversionA === "yards")
                    props.setinputA("" + ((eval((props.inputB + ele) * 1.09361)).toString()));
                }
            }
        }

    }




    const calculate2 = () => {



        if (props.inFocusInput === "inputA") {

            let str = props.inputA;
            str = str.slice(0, -1)
            props.setinputA("" + str.toString());


            if (props.currConversionA === "Inches") {
                if (props.currConversionB === "Inches")
                    props.setinputB("" + str.toString());

                if (props.currConversionB === "feets")
                    props.setinputB("" + ((eval((str) * 0.0833333)).toString()));

                if (props.currConversionB === "kilometer")
                    props.setinputB("" + ((eval((str) * 2.54e-5)).toString()));

                if (props.currConversionB === "meters")
                    props.setinputB("" + ((eval((str) * 0.0254)).toString()));

                if (props.currConversionB === "yards")
                    props.setinputB("" + ((eval((str) * 0.0277778)).toString()));
            }

            if (props.currConversionA === "feets") {
                if (props.currConversionB === "Inches")
                    props.setinputB("" + ((((eval((str) * 12)).toString())).toString()));

                if (props.currConversionB === "feets")
                    props.setinputB("" + str.toString());

                if (props.currConversionB === "kilometer")
                    props.setinputB("" + (((eval(str) * 0.0003048)).toString()));

                if (props.currConversionB === "meters")
                    props.setinputB("" + ((eval((str) * 0.3048)).toString()));

                if (props.currConversionB === "yards")
                    props.setinputB("" + ((eval((str) * 0.333333)).toString()));
            }

            if (props.currConversionA === "kilometer") {
                if (props.currConversionB === "Inches")
                    props.setinputB("" + ((eval((str)  * 39370.1)).toString()));

                if (props.currConversionB === "feets")
                    props.setinputB("" + ((eval((str) * 3280.84)).toString()));

                if (props.currConversionB === "kilometer")
                    props.setinputB("" + str.toString());

                if (props.currConversionB === "meters")
                    props.setinputB("" + ((eval((str) * 1000)).toString()));

                if (props.currConversionB === "meters")
                    props.setinputB("" + ((eval((str) * 1093.61)).toString()));
            }

            if (props.currConversionA === "meters") {
                if (props.currConversionB === "Inches")
                    props.setinputB("" + ((eval((str) * 39.3701)).toString()));

                if (props.currConversionB === "feets")
                    props.setinputB("" + ((eval((str) * 3.28084)).toString()));

                if (props.currConversionB === "kilometer")
                    props.setinputB("" + ((eval((str) * 0.001)).toString()));

                if (props.currConversionB === "yards")
                    props.setinputB("" + ((eval((str) * 1.09361)).toString()));

                if (props.currConversionB === "meters")
                    props.setinputB("" + str.toString());
            }
        }



        if (props.inFocusInput === "inputB") {

            let str = props.inputB;
            str = str.slice(0, -1)
            props.setinputB("" + str.toString());

            if (props.currConversionB === "Inches") {
                if (props.currConversionA === "Inches")
                    props.setinputA("" + str.toString());

                if (props.currConversionA === "feets")
                    props.setinputA("" + ((eval((str) * 0.0833333)).toString()));

                if (props.currConversionA === "kilometer")
                    props.setinputA("" + ((eval((str) * 2.54e-5)).toString()));

                if (props.currConversionA === "meters")
                    props.setinputA("" + ((eval((str)  * 0.0254)).toString()));

                if (props.currConversionA === "yards")
                    props.setinputA("" + ((eval((str)  * 0.0277778)).toString()));
            }

            if (props.currConversionB === "feets") {
                if (props.currConversionA === "Inches")
                    props.setinputA("" + ((eval((str) * 12)).toString()));

                if (props.currConversionA === "feets")
                    props.setinputA("" + str.toString());

                if (props.currConversionA === "kilometer")
                    props.setinputA("" + ((eval((str) * 0.0003048)).toString()));

                if (props.currConversionA === "meters")
                    props.setinputA("" + ((eval((str) * 0.3048)).toString()));

                if (props.currConversionA === "yards")
                    props.setinputA("" + ((eval((str) ** 0.333333)).toString()));
            }

            if (props.currConversionB === "kilometer") {
                if (props.currConversionA === "Inches")
                    props.setinputA("" + ((eval((str)* 39370.1)).toString()));

                if (props.currConversionA === "feets")
                    props.setinputA("" + ((eval((str) * 3280.84)).toString()));

                if (props.currConversionA === "kilometer")
                    props.setinputA("" + str.toString());

                if (props.currConversionA === "meters")
                    props.setinputA("" + ((eval((str) * 1000)).toString()));

                if (props.currConversionA === "yards")
                    props.setinputA("" + ((eval((str) * 1093.61)).toString()));
            }

            if (props.currConversionB === "meters") {
                if (props.currConversionA === "Inches")
                    props.setinputA("" + ((eval((str) * 39.3701)).toString()));

                if (props.currConversionA === "feets")
                    props.setinputA("" + ((eval((str) * 3.28084)).toString()));

                if (props.currConversionA === "kilometer")
                    props.setinputA("" + ((eval((str) * 0.001)).toString()));

                if (props.currConversionA === "yards")
                    props.setinputA("" + ((eval((str) * 1.09361)).toString()));

                if (props.currConversionA === "meters")
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
            <Text style={styles.text} >{props.title}</Text>
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
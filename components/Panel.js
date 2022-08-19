
import { StyleSheet, Text, View, Button, Pressable, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { useState } from 'react';
export default function Panel(props) {


    //"removeUnderRoot" :: to solve for all underRoots present and remove all underRoots from equation
    let removeUnderRoot = (ansStr) => {
        let underRootCount = props.underRoot;

        while (underRootCount > 0) {

 
            for (var i = 0; i < ansStr.length; i++) {
                
                var check=0;
                if (ansStr[i] =='√')
                {
                    
                    var j=i;
                    var start=0;
                    var end=0;
                    while(j<ansStr.length)
                    {
                        if(ansStr[j]>='0' && ansStr[j]<='9')
                        {
                            start=j;
                            break;
                        }
                        j++;
                    }
                    
                    
                    
                    if(ansStr[j-1]=='(')
                    {
                        let bracketStart=j;
                        while(ansStr[j]!=')')
                        j++;
                        
                        let substr=ansStr.substring(bracketStart,j);
                        
                        let solve=(eval(substr)).toString();
                        
                        let stringToreplace="("+substr+")"
                          ansStr=ansStr.replace(stringToreplace,solve);
                          check=1;
                          break;
                    }
                     
                    
                 
                    while(j<ansStr.length && ((ansStr[j]>='0' && ansStr[j]<='9')||ansStr[j]=='.'))
                    j++;
                    
                    end=j;
                    
                    
                    let subString=ansStr.substring(start,end);
                    underRootCount--;
                    
                    let value=parseFloat(subString);
                    
                          let tempString="√"+value;
                          
                    let answer=Math.sqrt(value).toFixed(3);
                    
              
                    ansStr=ansStr.replace(tempString,answer.toString());
                }
                
                if(check==1)
                break;
        }
        }
        ansStr=ansStr.toString();
        return ansStr;
    }


    //"removeTrigo" :: to solve for all Trigo Operations present and remove all trignometric ratios from equation
    let removeTrigo = (ansStr) => {
        let trigoCount = props.trigo;

        while (trigoCount > 0) {

            for (var i = 0; i < ansStr.length; i++) {

                var check = 0;
                if (ansStr[i] == 's' || ansStr[i] == 'c' || ansStr[i] == 't') {

                    var j = i;
                    var start = 0;
                    var end = 0;



                    while (j < ansStr.length) {
                        if (ansStr[j] >= '0' && ansStr[j] <= '9') {
                            flag = 1;
                            start = j;
                            break;
                        }
                        j++;
                    }

                    if (ansStr[j - 1] == '(') {
                        let bracketStart = j;
                        while (ansStr[j] != ')')
                            j++;

                        let substr = ansStr.substring(bracketStart, j);

                        let solve = eval(substr);

                        let stringToreplace = "(" + substr + ")"
                        ansStr = ansStr.replace(stringToreplace, solve.toString());
                        check = 1;
                        break;
                    }



                    while (j < ansStr.length && ((ansStr[j] >= '0' && ansStr[j] <= '9') || ansStr[j] == '.'))
                        j++;

                    end = j;


                    let subString = ansStr.substring(start, end);
                    trigoCount--;

                    let value = parseFloat(subString);
                    let ratio = value;
                    var ansValue;
                    value = value * 3.14;
                    value = value / (180);

                    if (ansStr[i] == 's') {
                        ansValue = Math.sin(value).toFixed(3);

                        let trigoRatio = "sin" + ratio.toString();
                        ansStr = ansStr.replace(trigoRatio, ansValue.toString())

                        trigoRatio = "sin" + "(" + ratio.toString() + ")";

                        ansStr = ansStr.replace(trigoRatio, ansValue.toString())
                    }

                    if (ansStr[i] == 'c') {
                        ansValue = Math.cos(value).toFixed(3);

                        let trigoRatio = "cos" + ratio.toString();
                        ansStr = ansStr.replace(trigoRatio, ansValue.toString())

                        trigoRatio = "cos" + "(" + ratio.toString() + ")";

                        ansStr = ansStr.replace(trigoRatio, ansValue.toString())
                    }

                    if (ansStr[i] == 't') {
                        ansValue = Math.tan(value).toFixed(3);

                        let trigoRatio = "tan" + ratio.toString();
                        ansStr = ansStr.replace(trigoRatio, ansValue.toString())

                        trigoRatio = "tan" + "(" + ratio.toString() + ")";

                        ansStr = ansStr.replace(trigoRatio, ansValue.toString())
                    }
                    check = 1;
                    break;



                }

                if (check == 1)
                    break;
            }
        }
        ansStr = ansStr.toString();
        return ansStr;

    }



    //"removeNaturalLog" :: to solve for all naturalLog present and remove all naturalLog from equation
    let removeNaturalLog = (ansStr) => {
        let logCount = props.naturalLog;
        
        while (logCount > 0) {
            for (var i = 0; i < ansStr.length; i++) {
                
                var check=0;
                if (ansStr[i] =='l' && ansStr[i+1]=='n')
                {
                    
                    var j=i;
                    var start=0;
                    var end=0;
                    
                    
                    
                    while(j<ansStr.length)
                    {
                        console.log("ln");
                        if(ansStr[j]>='0' && ansStr[j]<='9')
                        {
                            start=j;
                            break;
                        }
                        j++;
                    }
                    
                    
                    
                    if(ansStr[j-1]=='(')
                    {
                        let bracketStart=j;
                        while(ansStr[j]!=')')
                        j++;
                        
                        let substr=ansStr.substring(bracketStart,j);
                        
                        let solve=eval(substr);
                        
                        let stringToreplace="("+substr.toString()+")"
                          ansStr=ansStr.replace(stringToreplace,solve.toString());
                          check=1;
                          break;
                    }
                     
                    
                 
                    while(j<ansStr.length && ((ansStr[j]>='0' && ansStr[j]<='9')||ansStr[j]=='.'))
                    j++;
                    
                    end=j;
                    
                    
                    let subString=ansStr.substring(start,end);
                    logCount--;
                    
                    let value=parseFloat(subString);
                    
                          let tempString="ln"+value;
                          
                    let answer=Math.log(value).toFixed(3);
                    
              
                    ansStr=ansStr.replace(tempString,answer.toString());
                }
                
                if(check==1)
                break;
        }
        }
        ansStr=ansStr.toString();
        
        return ansStr;

    }


    //"removeBase10Log" :: to solve for all base10Log present and remove all base10Log from equation
    let removeBase10Log = (ansStr) => {
        let logCount = props.base10Log;

        while (logCount > 0) {
           
            for (var i = 0; i < ansStr.length; i++) {
                
                var check=0;
                if (ansStr[i] =='l' && ansStr[i+1]=="o")
                {
                    
                    var j=i;
                    var start=0;
                    var end=0;
                    
                    
                    
                    while(j<ansStr.length)
                    {
                        if(ansStr[j]>='0' && ansStr[j]<='9')
                        {
                            start=j;
                            break;
                        }
                        j++;
                    }
                    
                    
                    
                    if(ansStr[j-1]=='(')
                    {
                        let bracketStart=j;
                        while(ansStr[j]!=')')
                        j++;
                        
                        let substr=ansStr.substring(bracketStart,j);
                        
                        let solve=eval(substr);
                        
                        let stringToreplace="("+substr.toString()+")"
                          ansStr=ansStr.replace(stringToreplace,solve.toString());
                          check=1;
                          break;
                    }
                     
                    
                 
                    while(j<ansStr.length && ((ansStr[j]>='0' && ansStr[j]<='9')||ansStr[j]=='.'))
                    j++;
                    
                    end=j;
                    
                    
                    let subString=ansStr.substring(start,end);
                    logCount--;
                    
                    let value=parseFloat(subString);
                    
                          let tempString="log"+value.toString();
                          
                    let answer=Math.log10(value).toFixed(3);
                    
              
                    ansStr=ansStr.replace(tempString,answer.toString());
                }
                
                if(check==1)
                break;
        }
        }
        ansStr=ansStr.toString();
        return ansStr;

    }


//"get1" :: To remove power from equation like (x^y) :: it would give left side of " ^ ":: in his case x
let get1=(str,idx)=>
{
    let originalIdx=idx;
    idx-=1;
    
    if(str[idx]==')')
    {
        while(str[idx]!='(')
        idx--;
        
   
        str=str.substring(idx,originalIdx);
        str=eval(str);
        return str;
    }
    else
    {
        while((str[idx]>='0' && str[idx]<='9' && idx>0)||(str[idx]=='.'&&idx>0))
        idx--;
        
           if(idx>0)
       idx++
        
         str=str.substring(idx,originalIdx);
         
        return str.toString();
    }
}

//"get2" :: To remove power from equation like (x^y) :: it would give right side of " ^ ":: in his case y
let get2=(str,idx)=>
{
    let originalIdx=idx;
    idx+=1;
    
    if(str[idx]=='(')
    {
        while(str[idx]!=')')
        idx++;
        
        str=str.substring(originalIdx+1,idx+1);
          str=eval(str);
        return str;
    }
    else
    {
        while((str[idx]>='0' && str[idx]<='9')||str[idx]=='.')
        idx++;
        
        str=str.substring(originalIdx+1,idx);
        return str.toString();
    }
}


//"getOriginal1" :: To remove power from equation like (x^y) :: it would give original left side of " ^ ":: basically get1 would solve left side of " ^ " like if((2+3)^5) :: get1 would give 5 whereas originalget1 would give (2+3)
let getOriginal1=(str,idx)=>
{
    let originalIdx=idx;
    idx-=1;
    
    if(str[idx]==')')
    {
        while(str[idx]!='(')
        idx--;

        if(idx>0)
       idx++
        
   
        str=str.substring(idx,originalIdx);
        return str;
    }
    else
    {
        while((str[idx]>='0' && str[idx]<='9' && idx>0)||(str[idx]=='.'&&idx>0))
        idx--;
        
       if(idx>0)
       idx++
       
         str=str.substring(idx,originalIdx);
         
        return str.toString();
    }
}

//"getOriginal1" :: To remove power from equation like (x^y) :: it would give original right side of " ^ ":: basically get1 would solve left side of " ^ " like if(7^(2+3)) :: get2 would give 5 whereas originalget1 would give (2+3)
let getOriginal2=(str,idx)=>
{
    let originalIdx=idx;
    idx+=1;
    
    if(str[idx]=='(')
    {
        while(str[idx]!=')')
        idx++;
        
        str=str.substring(originalIdx+1,idx+1);
        return str;
    }
    else
    {
        while((str[idx]>='0' && str[idx]<='9')||str[idx]=='.')
        idx++;
        
        str=str.substring(originalIdx+1,idx);
        return str.toString();
    }
}

    
    
    //"removePower" to remove power from equation
    let removePower = (ansStr) => {
        let powerCount = props.power;
        
        while (powerCount > 0) {
            for (var i = 0; i < ansStr.length; i++) {
                
                var check=0;
                if (ansStr[i] =='^' )
                {
                    let str1=get1(ansStr,i);
                    let str2=get2(ansStr,i);
                    
                    let answerstr=Math.pow(str1,str2);
                    
                    check=1;
                    powerCount-=1;
                    
                    let str3=getOriginal1(ansStr,i);
                    let str4=getOriginal2(ansStr,i);
                    
                    let stringToReplace=str3.toString()+"^"+str4.toString();
                    
                    ansStr=ansStr.replace(stringToReplace,answerstr.toString())
                    
                }
                
                if(check==1)
                break;
        }
        }
        ansStr=ansStr.toString();
        
        return ansStr.toString();

    }



    const operation = () => {
        
        if (props.title == "C") {
            props.setcalculation("");
            props.setanswer("")
            props.setbracket_check(0);
            props.settrigo(0);
            props.setunderRoot(0);
            props.setnaturalLog(0);
            props.setbase10Log(0);
            props.setpower(0);
            return;
        }
        if (props.title >= "0" && props.title <= "9" && props.title!="1/x") {
            
            if (props.calculation.length > 0 && props.calculation[props.calculation.length - 1] == ")") {
                props.setcalculation(props.calculation + "x" + props.title)
                props.setanswer(props.answer + "*" + props.title)
            }
            else {
                props.setcalculation(props.calculation + props.title)
                props.setanswer(props.answer + props.title)
            }
            return;
        }

        if (props.title == "+/-") {
            
            if (props.calculation.length >= 2 && props.calculation[props.calculation.length - 1] == "-" && props.calculation[props.calculation.length - 2] == "(") {
                let calcStr = props.calculation;
                let ansStr = props.answer;
                calcStr = calcStr.slice(0, -2);
                ansStr = ansStr.slice(0, -2);
                props.setbracket_check(props.bracket_check - 1);
                props.setcalculation(calcStr);
                props.setanswer(ansStr);
                return;
            }

            let calcStr = "" + props.calculation;
            let ansStr = "" + props.answer;
            props.setbracket_check(props.bracket_check + 1);
            if ((calcStr[calcStr.length - 1] >= "-9" && calcStr[calcStr.length - 1] <= "9") || (calcStr[calcStr.length - 1] <= ")")) {
                calcStr += "x(-";
                ansStr += "*(-";

                calcStr=calcStr.toString();
                ansStr=ansStr.toString();

                props.setcalculation(calcStr);
                props.setanswer(ansStr);
                return;

            }
            else {
                calcStr += "(-";
                ansStr += "(-";
                calcStr=calcStr.toString();
                ansStr=ansStr.toString();

                props.setcalculation(calcStr);
                props.setanswer(ansStr);
                return;
            }



        }

        if (props.title == "()") {


            if (props.bracket_check == 0) {

                if (props.calculation[props.calculation.length - 1] == ")" || (props.calculation[props.calculation.length - 1] >= "0" && props.calculation[props.calculation.length - 1] <= "9")||props.calculation[props.calculation.length - 1] == "π") {
                    props.setcalculation(props.calculation + "x" + "(")
                    props.setanswer(props.answer + "*" + "(")
                    props.setbracket_check(props.bracket_check + 1);
                    return;
                }
                props.setcalculation(props.calculation + "(")
                props.setanswer(props.answer + "(")
                props.setbracket_check(true);
                return;
            }
            else if (props.bracket_check > 0) {
                props.setbracket_check(props.bracket_check - 1);
                let calcStr = "" + props.calculation;
                let ansStr = "" + props.answer;
                if (calcStr[calcStr.length - 1] == "%" || calcStr[calcStr.length - 1] == "/" || calcStr[calcStr.length - 1] == "x" || calcStr[calcStr.length - 1] == "-" || calcStr[calcStr.length - 1] == "+") {
                    calcStr = calcStr.slice(0, -1);
                    ansStr = ansStr.slice(0, -1);
                }
                else if (calcStr[calcStr.length - 1] == "(") {
                    calcStr = calcStr.slice(0, -1);
                    ansStr = ansStr.slice(0, -1);
                    props.setcalculation(calcStr)
                    props.setanswer(ansStr)

                    return;
                }

                props.setcalculation(calcStr + ")")
                props.setanswer(ansStr + ")")

                return;
            }

        }
        if (props.title === "sin" || props.title === "cos" || props.title === "tan") {
            let calcStr = props.calculation;
            let ansStr = props.answer;
            props.settrigo(props.trigo + 1);
            if (calcStr.length == 0) {
                calcStr = calcStr + props.title;
                ansStr = ansStr + props.title;

                props.setanswer(ansStr);
                props.setcalculation(calcStr);
                return;
            }

            if ((calcStr[calcStr.length - 1] >= "0" && calcStr[calcStr.length - 1] <= "9") || calcStr[calcStr.length - 1] == ")" || calcStr[calcStr.length - 1] == "π") {
                calcStr = calcStr + "x" + props.title;
                ansStr = ansStr + "*" + props.title;

                props.setanswer(ansStr);
                props.setcalculation(calcStr);
                return;
            }

            calcStr = calcStr + props.title;
            ansStr = ansStr + props.title;

            props.setanswer(ansStr);
            props.setcalculation(calcStr);
            return;
        }

        if (props.title ==="√") {
            let calcStr = props.calculation;
            let ansStr = props.answer;
            props.setunderRoot(props.underRoot + 1);
            if (calcStr.length == 0) {
                calcStr = calcStr + props.title;
                ansStr = ansStr + props.title;

                props.setanswer(ansStr);
                props.setcalculation(calcStr);
                return;
            }

            if ((calcStr[calcStr.length - 1] >= "0" && calcStr[calcStr.length - 1] <= "9") || calcStr[calcStr.length - 1] == ")" || calcStr[calcStr.length - 1] == "π"||calcStr[calcStr.length - 1] == "n"&&calcStr[calcStr.length - 2] != "l"|| calcStr[calcStr.length - 1] == "s") {
                calcStr = calcStr + "x" + props.title;
                ansStr = ansStr + "*" + props.title;

                props.setanswer(ansStr);
                props.setcalculation(calcStr);
                return;
            }

            calcStr = calcStr + props.title;
            ansStr = ansStr + props.title;

            props.setanswer(ansStr);
            props.setcalculation(calcStr);
            return;
        }


        if (props.title ==="ln") {
            let calcStr = props.calculation;
            let ansStr = props.answer;
            props.setnaturalLog(props.naturalLog + 1);
            if (calcStr.length == 0) {
                calcStr = calcStr + props.title;
                ansStr = ansStr + props.title;

                props.setanswer(ansStr);
                props.setcalculation(calcStr);
                return;
            }

            if ((calcStr[calcStr.length - 1] >= "0" && calcStr[calcStr.length - 1] <= "9") || calcStr[calcStr.length - 1] == ")"|| calcStr[calcStr.length - 1] == "π" || calcStr[calcStr.length - 1] == "n" || calcStr[calcStr.length - 1] == "g" || calcStr[calcStr.length - 1] == "s") {
                calcStr = calcStr + "x" + props.title;
                ansStr = ansStr + "*" + props.title;

                props.setanswer(ansStr);
                props.setcalculation(calcStr);
                return;
            }

            calcStr = calcStr + props.title;
            ansStr = ansStr + props.title;

            props.setanswer(ansStr);
            props.setcalculation(calcStr);
            return;


        }

        if (props.title === '1/x'){
           
            let calcStr = props.calculation;
            let ansStr = props.answer;
           
            if (calcStr.length == 0) {
                calcStr = calcStr + "1/";
                ansStr = ansStr + "1/"

                props.setanswer(ansStr);
                props.setcalculation(calcStr);
                return;
            }

            if ((calcStr[calcStr.length - 1] >= "0" && calcStr[calcStr.length - 1] <= "9") || calcStr[calcStr.length - 1] == ")") {
                calcStr = calcStr + "x" + "1/";
                ansStr = ansStr + "*" + "1/";

                props.setanswer(ansStr);
                props.setcalculation(calcStr);
                return;
            }

            calcStr = calcStr + "1/";
            ansStr = ansStr + "1/";

            props.setanswer(ansStr);
            props.setcalculation(calcStr);
            return;
        }

        if (props.title === 'π'){
            let calcStr = props.calculation;
            let ansStr = props.answer;
           
            if (calcStr.length == 0) {
                calcStr = calcStr + props.title;
                ansStr = ansStr + "3.14"

                props.setanswer(ansStr);
                props.setcalculation(calcStr);
                return;
            }

            if ((calcStr[calcStr.length - 1] >= "0" && calcStr[calcStr.length - 1] <= "9") || calcStr[calcStr.length - 1] == ")" || calcStr[calcStr.length - 1] == "n" || calcStr[calcStr.length - 1] == "g" || calcStr[calcStr.length - 1] == "s") {
                calcStr = calcStr + "x" + props.title;
                ansStr = ansStr + "*" + "3.14";

                props.setanswer(ansStr);
                props.setcalculation(calcStr);
                return;
            }

            calcStr = calcStr + props.title;
            ansStr = ansStr + "3.14";

            props.setanswer(ansStr);
            props.setcalculation(calcStr);
            return;
        }


        if (props.title ==="log") {
            let calcStr = props.calculation;
            let ansStr = props.answer;
            props.setbase10Log(props.base10Log + 1);
            if (calcStr.length == 0) {
                calcStr = calcStr + props.title;
                ansStr = ansStr + props.title;

                props.setanswer(ansStr);
                props.setcalculation(calcStr);
                return;
            }

            if ((calcStr[calcStr.length - 1] >= "0" && calcStr[calcStr.length - 1] <= "9") || calcStr[calcStr.length - 1] == ")") {
                calcStr = calcStr + "x" + props.title;
                ansStr = ansStr + "*" + props.title;

                props.setanswer(ansStr);
                props.setcalculation(calcStr);
                return;
            }

            calcStr = calcStr + props.title;
            ansStr = ansStr + props.title;

            props.setanswer(ansStr);
            props.setcalculation(calcStr);
            return;


        }

        if (props.calculation.length == 0) {
            alert("Invalid Operation");
            return;
        }

        if (props.title === "^") {

            let calcStr = props.calculation;
            let ansStr = props.answer;

            if(calcStr[calcStr.length-1]==')')
            {
                let idx=calcStr.length-1;
                while(idx--)
                {
                   if(calcStr[idx]==')')
                   continue;
                   else if((calcStr[idx]>='0' && calcStr[idx]<='9')|| calcStr[idx]=='.')
                   break;
                   else
                   {
                       alert("invalid operator");
                       return;
                   }
                }
            }

            props.setpower(props.power + 1);

            calcStr = calcStr + props.title;
            ansStr = ansStr + props.title;

            props.setanswer(ansStr);
            props.setcalculation(calcStr);
            return;
        }

        if (props.title != "+/-" && props.title != "=") {

            if (props.calculation[props.calculation.length - 1] == 'n' || props.calculation[props.calculation.length - 1] == 's') {
                alert("invalid operator");
                return;
            }

            if (props.calculation[props.calculation.length - 1] == '√') {
                alert("invalid operator");
                return;
            }

            if (props.calculation[props.calculation.length - 1] >= "0" && props.calculation[props.calculation.length - 1] <= "9") {
                props.setcalculation(props.calculation + props.title)
            }
            else {
                if (props.calculation[props.calculation.length - 1] == ")")


                    props.setcalculation(props.calculation + props.title);
            }

            if (props.answer[props.answer.length - 1] >= "0" && props.answer[props.answer.length - 1] <= "9") {
                if (props.title != "x")
                    props.setanswer(props.answer + props.title)
                else if (props.title == "x")
                    props.setanswer(props.answer + "*")
            }
            else {

                if (props.title != "x")
                    props.setanswer(props.answer + props.title);
                else if (props.title == "x")
                    props.setanswer(props.answer + "*")
            }

            return;
        }



        if (props.title == "=") {

            if (props.calculation[props.calculation.length - 1] == "(") {
                let calcStr = props.calculation;
                let ansStr = props.answer;

                calcStr = calcStr.slice(0, -1);
                ansStr = ansStr.slice(0, -1);

                if (calcStr[calcStr.length - 1] == "%" || calcStr[calcStr.length - 1] == "/" || calcStr[calcStr.length - 1] == "x" || calcStr[calcStr.length - 1] == "-" || calcStr[calcStr.length - 1] == "+") {
                    ansStr = ansStr.slice(0, -1);
                }

                let bracketCount = props.bracket_check;
                bracketCount -= 1;

                while (bracketCount--)
                    ansStr += ")";

                ansStr = removeTrigo(ansStr);
                ansStr = removeUnderRoot(ansStr);
                ansStr = removeNaturalLog(ansStr);
                ansStr = removeBase10Log(ansStr);
                ansStr = removePower(ansStr);



                if (props.calculation.length > 0) {
                    let historyArray = props.History;
                    historyArray.push(calcStr + " = " + ansStr);
                    historyArray.reverse();
                    props.setHistory(historyArray);
                }
                props.setcalculation(ansStr);
                props.setanswer(ansStr);

                return;
            }


            if (props.calculation[props.calculation.length - 1] >= "-9" && props.calculation[props.calculation.length - 1] <= "9") {
                let tempStr = "" + props.answer;
                if (props.bracket_check > 0) {
                    if (props.calculation[props.calculation.length - 1] == "-")
                        tempStr = tempStr.slice(0, -1);

                    let bracketCount = props.bracket_check;
                    while (bracketCount--)
                        tempStr += ")";
                    props.setbracket_check(0);
                }

                tempStr = removeTrigo(tempStr);
                tempStr = removeUnderRoot(tempStr);
                tempStr = removeNaturalLog(tempStr);
                tempStr = removeBase10Log(tempStr);
                tempStr = removePower(tempStr);

                if (props.calculation.length > 0) {
                    let historyArray = props.History;
                    historyArray.push(props.calculation + " = " + ((eval("" + tempStr)).toString()));
                    historyArray.reverse();
                    props.setHistory(historyArray);
                }
                props.setcalculation("" + ((eval("" + tempStr)).toString()));
                props.setanswer("" + ((eval("" + tempStr)).toString()));
                return;
            }

            else if (props.calculation[props.calculation.length - 1] == "-") {
                let tempStr = "" + props.answer;
                tempStr = tempStr.slice(0, -2);

                if (tempStr.length > 0 && (tempStr[tempStr.length - 1] == "%" || tempStr[tempStr.length - 1] == "/" || tempStr[tempStr.length - 1] == "*" || tempStr[tempStr.length - 1] == "-" || tempStr[tempStr.length - 1] == "+" || tempStr[tempStr.length - 1] == "."))
                    tempStr = tempStr.slice(0, -1);

                let bracketCount = props.bracket_check;
                bracketCount -= 1;
                while (bracketCount--)
                    tempStr += ")";
                props.setbracket_check(0);

                tempStr = removeTrigo(tempStr);
                tempStr = removeUnderRoot(tempStr);
                tempStr = removeNaturalLog(tempStr);
                tempStr = removeBase10Log(tempStr);
                tempStr = removePower(tempStr);

                if (props.calculation.length > 0) {
                    let historyArray = props.History;
                    historyArray.push(props.calculation + " = " + ((eval("" + tempStr)).toString()));
                    historyArray.reverse();
                    props.setHistory(historyArray);
                }
                props.setcalculation("" + ((eval("" + tempStr)).toString()));
                props.setanswer("" + ((eval("" + tempStr)).toString()));
                return;
            }
            else if (props.calculation[props.calculation.length - 1] == ")") {
                let str = "" + props.answer;
                if (props.calculation[props.calculation.length - 2] == "%" || props.calculation[props.calculation.length - 2] == "/" || props.calculation[props.calculation.length - 2] == "x" || props.calculation[props.calculation.length - 2] == "-" || props.calculation[props.calculation.length - 2] == "+") {
                    str = props.answer.slice(0, -2);
                    str += ")";
                }

                str = removeTrigo(str);
                str = removeUnderRoot(str);
                str = removeNaturalLog(str);
                str = removeBase10Log(str);
                str = removePower(str);

                if (props.calculation.length > 0) {
                    let historyArray = props.History;
                    historyArray.push(props.calculation + " = " + ((eval("" + str)).toString()));
                    historyArray.reverse();
                    props.setHistory(historyArray);
                }
                props.setcalculation("" + ((eval("" + str)).toString()));
                props.setanswer("" + ((eval("" + str)).toString()));

                return;
            }


            else if (props.bracket_check > 0) {

                let str = "" + props.answer;
                str += ")";
                props.setbracket_check(false);

                if (str[str.length - 2] == "%" || str[str.length - 2] == "/" || str[str.length - 2] == "x" || str[str.length - 2] == "-" || str[str.length - 2] == "+") {
                    str = str.slice(0, -2);
                    str += ")";
                }

                str = removeTrigo(str);
                str = removeUnderRoot(str);
                str = removeNaturalLog(str);
                str = removeBase10Log(str);
                str = removePower(str);
                

                if (props.calculation.length > 0) {
                    let historyArray = props.History;
                    historyArray.push(props.calculation + " = " + ((eval("" + str)).toString()));
                    historyArray.reverse();
                    props.setHistory(historyArray);
                }
                props.setcalculation("" + ((eval("" + str)).toString()));
                props.setanswer("" + ((eval("" + str)).toString()));

                return;

            }

            else if (props.calculation[props.calculation.length - 1] == "%" || props.calculation[props.calculation.length - 1] == "/" || props.calculation[props.calculation.length - 1] == "x" || props.calculation[props.calculation.length - 1] == "-" || props.calculation[props.calculation.length - 1] == "+") {
                let str = "" + props.answer;
                str = str.slice(0, -1);

                str = removeTrigo(str)
                str = removeUnderRoot(str)
                str = removeNaturalLog(str)
                str = removeBase10Log(str)
                str = removePower(str)

                if (props.calculation.length > 0) {
                    let historyArray = props.History;
                    historyArray.push(props.calculation + " = " + ((eval("" + str)).toString()));
                    historyArray.reverse();
                    props.setHistory(historyArray);
                }
                props.setcalculation("" + ((eval("" + str)).toString()));
                props.setanswer("" + ((eval("" + str)).toString()));

                return;
            }


        }


    }
    return (
        <TouchableOpacity style={styles.button} onPress={() => { operation() }}>
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
        marginTop: 5,
        marginLeft: 10
        ,color:'black'
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        color:'black'
    },
});



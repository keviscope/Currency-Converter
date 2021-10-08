

function ConvertNow(){
    
    let amount = parseInt(document.querySelector("#amount").value);
    let decisionfrom = document.querySelector("#decision").value;
    let decisionto = document.querySelector("#decision1").value;

    //USD vs Naira
    if(decisionfrom === "USD" && decisionto === "Naira"){
        let USDtoNaira = 408.69 * amount;
        
        document.querySelector("#result").value = USDtoNaira;
    }

    if(decisionfrom === "Naira" && decisionto === "USD"){
        let NairatoUSD = amount / 408.69;
        
        document.querySelector("#result").value = NairatoUSD;
    }


    
//Pound vs Naira

if(decisionfrom === "Pound" && decisionto === "Naira"){
    let PoundtoNaira = amount * 567.09;
    
    document.querySelector("#result").value = PoundtoNaira ;
}

if(decisionfrom === "Naira" && decisionto === "Pound"){
    let NairatoPound = amount / 567.09;
    
    document.querySelector("#result").value = NairatoPound;
}



//Euro vs Naira

if(decisionfrom === "Euro" && decisionto === "Naira"){
    let EurotoNaira = amount * 493.37;
    
    document.querySelector("#result").value = EurotoNaira ;
}

if(decisionfrom === "Naira" && decisionto === "Euro"){
    let NairatoEuro = amount / 493.37;
    
    document.querySelector("#result").value = NairatoEuro;
}



//USD vs Pound
if(decisionfrom === "USD" && decisionto === "Pound"){
    let USDtoPound = amount * 0.72;
    
    document.querySelector("#result").value = USDtoPound;
}

if(decisionfrom === "Pound" && decisionto === "USD"){
    let PoundtoUSD = amount / 0.72;
    
    document.querySelector("#result").value = PoundtoUSD;
}


//USD vs Euro

if(decisionfrom === "USD" && decisionto === "Euro"){
    let USDtoEuro = amount * 0.83;
    
    document.querySelector("#result").value = USDtoEuro;
}

if(decisionfrom === "Euro" && decisionto === "USD"){
    let EurotoUSD = amount / 0.83;
    
    document.querySelector("#result").value = EurotoUSD;
}


//USD vs Euro

if(decisionfrom === "Euro" && decisionto === "Pound"){
    let PoundtoEuro = amount * 0.83;
    
    document.querySelector("#result").value = PoundtoEuro;
}

if(decisionfrom === "Pound" && decisionto === "Euro"){
    let EurotoPound = amount / 0.83;
    
    document.querySelector("#result").value = EurotoPound;
}




//Naira to Naira

if(decisionfrom === "Naira" && decisionto === "Naira"){
    document.querySelector("#result").value = amount;
}

if(decisionfrom === "USD" && decisionto === "USD"){
    document.querySelector("#result").value = amount;
}

if(decisionfrom === "Pound" && decisionto === "Pound"){
    document.querySelector("#result").value = amount;
}

if(decisionfrom === "Euro" && decisionto === "Euro"){
    document.querySelector("#result").value = amount;
}

}





//only number is allowed
function isNumberKey(evt, id){
    let confirmInput = (evt.which)? evt.which : evt.keycode;
   
    if(confirmInput == 46){
        let  anyText = document.getElementById(id).value;
        if(!(anyText.indexOf(".") > -1)){
            return true;
        }
    }

    if(confirmInput > 31 && (confirmInput < 48 || confirmInput > 57)){
        return false;
        return true;
    }
}
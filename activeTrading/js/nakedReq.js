// $(document).ready(function() {

    //     $("#underValue").html("Hello, World!");
    
    // });
    
     
    
    // $("#runCalculate").click(function() {
    
    //     $("#underValue").html("happy Days");
    
    // });
    
     
    
    // $(document).ready(function() {
    
    //     $("#runCalculate").click(function() {
    
    //     $("#underValue").html("Hello, World!");
    
    //     console.log ("running");
    
    //     });
    
    // });
    
    // console.log("run again");
    
     
    
    // RESET PAGE
    
    function resetPage() {
    
        location.reload();
    
    };
    
     
    
    // Calculate Margin
    
    function calculate() {
    
     
    
        var strike = parseFloat($("#strikePrice").val());
    
        var symbol = $("#symbol").val();
    
        var premium = parseFloat($("#premium").val());
    
        var contracts = parseFloat($("#contracts").val());
    
        var lastTrade = parseFloat($("#lastTrade").val());
    
        var cp = $("#callPut").val();
    
        var callPut = cp.toLowerCase();
    
     
    
        var totPrem = (premium * 100 * contracts);
    
        var requirements = (100 * contracts * (.25) * strike);
    
        // underlying value      market price *100 * contracts
    
        var undervalue = (contracts * 100 * lastTrade);
    
        // out of money    (strike-market) x 100 * contracts
    
        var outOfMoney = ((strike - lastTrade) * 100)*contracts;
    
     
    
        console.log("premium = "+premium);
    
        console.log("strike = "+strike);
    
        console.log("type of out of money: "+typeof(outOfMoney));
    
        console.log(totPrem);
    
        console.log(typeof (premium));
    
        // console.log(cp + " cp");
    
        // console.log(callPut);
    
        // console.log(typeof (callPut));
    
       
    
     
    
        // document.getElementById("underValue").innerHTML = "Hello World";
    
       // console.log(contracts);
    
        // console.log(premium);
    
        // console.log(typeof(contracts));
    
        // var x = document.getElementById("premium").value;
    
        // document.getElementById("method1").innerHTML = x;
    
     
    
        // console.log(x);
    
        // console.log(premium);
    
        // // console.log(contracts);
    
        // console.log("requirements: " + typeof requirements);
    
        // console.log(requirements);
    
        // console.log("premium: " + typeof premium);
    
        // console.log("contracts: " + typeof contracts);
    
        // console.log(premium);
    
        // console.log(strike);
    
        // console.log("symbol: " + symbol);
    
     
    
        if (callPut=="call") {
    
            // render page for calls
    
     
    
            // method1   (.25 of underying value) - Out of Money + tot premium
    
            let method1 = (.25 * undervalue) - outOfMoney + totPrem;
    
            // method2  (.15 of Underlying value) + total premium
    
            let method2 = (.15 * undervalue) + totPrem;
    
            // non margin buying power for call
    
            // non marginable buying power needed for call= tot requirement -premium
    
    
    
    
            console.log("method1: " + method1);
    
            console.log("method2: " + method2);
    
     
    
            $("#underValue").html("$"+undervalue.toFixed(2));
    
            $("#outOfMoney").html("$"+outOfMoney.toFixed(2));
    
            $("#totalPremium").html("$"+totPrem.toFixed(2));
    
            $("#meth1").html("<strong>method 1</strong>: .25 of underying value - Out of Money + tot premium <strong>$"+method1.toFixed(2)+"</strong>");
    
            $("#meth2").html("<strong>method 2</strong>: .15 of Underlying value) + total premium <strong>$"+method2.toFixed(2)+"</strong>")
    
            // $("#method1").html("method 1: "+method1.toFixed(2));
    
            // $("#method2").html("method 2: "+method2.toFixed(2));
    
          
    
     
    
            // the great of method1 or method2
    
            if (method1 > method2) {
    
                $("#optionsReqnumber").html("<strong>Options Requirement: $"+method1.toFixed(2)+"</strong>");
    
                // non marginable buying power needed for call= tot requirement -premium
    
                var nonMargBP = (method1 - totPrem).toFixed(2);
    
                console.log("nonMargBP ="+nonMargBP);
    
                $("#nonMargBP").html("<strong>Non Margin Buying Power: $"+nonMargBP+"</strong>");
    
            } else {
    
                $("#optionsReqnumber").html("<strong>Options Requirement: $"+method2.toFixed(2)+"</strong>");
    
                // non margin buying power for call
    
                // non marginable buying power needed for call= tot requirement -premium
    
                let nonMargBP = (method2 - totPrem).toFixed(2);
    
                console.log("nonMargBP ="+nonMargBP);
    
                $("#nonMargBP").html("<strong>Non Margin Buying Power: $"+nonMargBP+"</strong>");
    
               
    
            };
    
     
    
            // $("#optionsReqnumber").html(requirements);
    
            // $("#nonMargBP").html(nonMargBP);
    
     
    
            return false;
    
     
    
        } else if (callPut=="put") {
    
            // render page for puts
    
            // out of money    (market - strike) x 100 * contracts
    
            var outOfMoney = (lastTrade-strike) * 100;
    
           
    
     
    
             // method1   (.25 of underying value) - Out of Money + tot premium
    
             let method1 = (.25 * undervalue) - outOfMoney + totPrem;
    
             // method2  (.15 of Underlying value) + total premium
    
             let method2 = (.15 * undervalue) + totPrem;
    
             // non margin buying power for call
    
             // non marginable buying power needed for call= tot requirement -premium
    
    
     
    
     
    
             console.log("method1: " + method1);
    
             console.log("method2: " + method2);
    
    
             $("#underValue").html("$"+undervalue.toFixed(2));
    
             $("#outOfMoney").html("$"+outOfMoney.toFixed(2));
    
             $("#totalPremium").html("$"+totPrem.toFixed(2));
    
             $("#meth1").html("<strong>method 1</strong>: .25 of underying value - Out of Money + tot premium <strong>$"+method1.toFixed(2)+"</strong>");
    
             $("#meth2").html("<strong>method 2</strong>: .15 of Underlying value) + total premium <strong>$"+method2.toFixed(2)+"</strong>")
    
              $("#method1").html("method 1: "+method1);
    
             $("#method2").html("method 2: "+method2);
    
    
     
    
             // the great of method1 or method2
    
             if (method1 > method2) {
    
                $("#optionsReqnumber").html("<strong>Options Requirement: $"+method1.toFixed(2) +"</strong>");
    
                 // non marginable buying power needed for call= tot requirement -premium
    
                 let nonMargBP = (method1 - totPrem).toFixed(2);
    
                 $("#nonMargBP").html("<strong>Non Margin Buying Power: $"+nonMargBP+"</strong>");        
    
                
    
                } else {
    
                    $("#optionsReqnumber").html("<strong>Options Requirement: $"+method2.toFixed(2)+"</strong>");
    
                 // non margin buying power for call
    
                 // non marginable buying power needed for call= tot requirement -premium
    
                 let nonMargBP = (method2 - totPrem).toFixed(2);
    
                 $("#nonMargBP").html("<strong>Non Margin Buying Power: $"+nonMargBP+"</strong>");        
    
               
    
     
    
                 };
    
    
             // $("#optionsReqnumber").html(requirements);
    
            //  $("#nonMargBP").html(nonMargBP);
    
    
             return false;
    
    
    
    
        } else {
    
            alert("Please enter 'call or put'");
    
        }
    
    };
    
     
    
    // calls
    
    
    
    
    // logic - greater of method 1 or 2. 
    
     
    
    // tot requirement needed
    
     
    
    // non marginable buying power needed = tot requirement -premium
    
    
    
    
    
    // puts
    
    
    
    
    
    // tot premium     premium * 100* contracts
    
     
    
    // method1   (.25 of underying value) - Out of Money + tot premium
    
     
    
    // method2  (.15 of Underlying value) + total premium
    
     
    
    // logic - greater of method 1 or 2. 
    
     
    
    // tot requirement needed
    
     
    
    // non marginable buying power needed = tot requirement -premium
 

 

// $(document).ready(function() {

//     $("#underValue").html("Hello, World!");

// });

 

// $("#runCalculate").click(function() {

//     $("#underValue").html("happy Days");

// });

 


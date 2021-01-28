
//First problem
var meter = 1;
function KilometerToMeter(num){
    var meter = 1000 * num ; // 1km = 1000 meter

    return meter;


}
var result = KilometerToMeter(7);
console.log(result);


//second problem

function budgetCalculator(watch , phone , laptop){
    var watchPrice = 50 * watch;
    var phonePrice = 100 * phone;
    var laptopPrice = 500 * laptop;
    var total = watchPrice + phonePrice + laptopPrice;
    return total;


}
var result = budgetCalculator(2,5,2);
console.log(result);

// Third problem

function hotelCost(days){
    if(days<=10){
        var cost = days * 100 ;
        
    
    }
    else if(days<=20){
        var firstPart = 10 * 100 ;
        var remaining = days - 10 ;
        var secondPart = remaining*80 ;
        cost = firstPart+secondPart;


    }
    else {
        var firstPart = 10*100 ;
        var secondPart = 10*80 ;
        remaining = days -20;
        var thirdPart = remaining*50;
        cost = firstPart+secondPart+thirdPart;


        
    }
       
    return cost;
}

var result = hotelCost(23);
console.log(result);


//Fourth problem

function megaFriend(arrayFriend){
    var maxName = '';
    for(var i=0;i<arrayFriend.length;i++){
        
        if(arrayFriend[i].length>maxName.length){
            maxName = arrayFriend[i];
        }
    }
    return maxName;
        
       

}


var result = megaFriend(['mehedy','hasan','arif','shumon','shohel','nantu subed']);
console.log(result);






































function megaFriend(arrayFriend){
    var maxName = '';
    for(var i=0;i<arrayFriend.length;i++){
        
        if(arrayFriend[i].length>maxName.length){
            maxName = arrayFriend[i];
        }
    }
    return maxName;
        
       

}


var result = megaFriend(['mehedy','hasan','arif','shumon','shohel','nantu subed']);
console.log(result);
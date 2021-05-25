var a= [1000,5,20,2,4,7,1]
var b=[1,-10,200,189,655,999,-2,-5,0]
////array--methods





/////////array--summ--function  (+)///////////

    //1------for

var summ =(arr)=>{
    var res=0;
    for(var i=0;i<arr.length;i++){
        res=res+arr[i]
    }

    return res
}

  //2--------slice---function

var summarr=(arr)=>{
    if(arr.length===0){
        return 0
    }
     return arr[0] +summarr(arr.slice(1))
}




///////////array--max----method///////////




var max = (arr) =>{
  if(arr.length===0){
      return 0
  } 
  
  var maxelem=arr[0]
  for(var i=1;i<arr.length;i++){
      if(maxelem<arr[i]){
          maxelem=arr[i]
      }
  }
  return maxelem
}



/////// array--min---method//////

var min = (arr)=>{
    var minelem =arr[0];
    if(arr.length===0){
        return 0
    }

    for (var i=1; i<arr.length;i++){
        if(minelem>arr[i]){
            return minelem=arr[i]
        }
    }
    return minelem

}


//////// arr-avg----- "(a+b+c)/3"--method/////


var avg =(arr)=> {
    if(arr.length===0){
        return 0
    }

    return summarr(arr)/arr.length
}


//////arrr-reverse-methode/////////


var rev =(arr)=>{

    for(var i = 0 ; i<arr.length/2;i++){
        var res=arr[i]

        arr[i]=arr[arr.length-1-i]

        arr[arr.length-1-i]=res
    }
    return arr
}


//////array--find(search)//////



var find=(arr,num) =>{
    for(var i=0;i<arr.length; i++){
        if(arr[i]===num){
            return i
        }
    }
    return null
}

/////findindex

var tiv =10

var ind=a.findIndex((elem) =>{
if(elem===tiv){
    return true
}
return false
})



//////////array---map-methode/////////////



var newarr= a.map(elem=>{          ////qarakusi hashvel zangvaci elementneri
return elem*elem
})






///////array--filter---methode////////////



var  minus = b.filter(elem =>{           ///minus tveri filter zangvacic

   return  elem < 0   
})

var even =b.filter(elem => elem%2===0)     ///zuig tveri filter



///index-remove-filter


 var y =[1,2,3,4,5]


 var removeIndex = (arr,i) =>{

    return arr.filter(function(value,index){
    return i!==index
    })
 }

var removenum =(arr,i)=>{
    return arr.filter(function(value,number){
        return number>=2
    })
}









//////array--reduce--methode////////

var add=a.reduce((acc,elem)=>{
  return acc+ elem
},0)












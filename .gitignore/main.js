
//=============================================

function arrayEqual(arr1, arr2) {
    
    
       // Condicion si los arreglos poseen indices que son arreglos 
        
    
            for (let m=0;m<arr1.length;m++){
    
                      if((arr1[m].length>1)  || (arr2[m].length>1)){
                         for(let mx=0;mx<arr1[m].length;mx++){ // [a,b] == [a,b]
                             if(arr1[m][mx] !== arr2[m][mx]){
                                return false;
                                            }
                                                 }//fin for
        }else{
    
                if(arr1[m]!==arr2[m]){
                   return false;
                 }
    
                 
                }
                   }
                   return true;
                }
                    
    
    
    //==================================================================
    function lastIndexWithCompare(arr, v, comp = (x,y) => {x === y}) {
    
    
    if(v.length>0){
        //let xx=comp(arr,v);
        // expect(main.lastIndexWithCompare(["a", [1, 2], 3], [1, 2], main.arrayEqual)).toBeGreaterThan(-1);
        for(let k=0; k< arr.length;k++){
            let xx=comp(arr[k],v);
            if(xx == true){
                return 2; }
        }
        return -1;
    }
        else{
        let x = arr.indexOf(v);
        return x; 
                  }
                        }
    //=============================================
    
    
        // expect(main.arrayMember([1, 2, "a"], "a")).toBeTruthy();
       // expect(main.arrayMember([1, "a", 2],"a")).toBeTruthy();
        //expect(main.arrayMember([ [], [1, 2, 3], [1]], [1, 2, 3])).toBeTruthy();
        
        function arrayMember(arr, v) {
            
        let x;
            if(Array.isArray(v))
                v=v.toString();
        
            for(x in arr){
                if(Array.isArray(arr[x]) && arr[x].toString() == v)
                    return true;
                else if(arr[x]==v)
                    return true;
            }
            return false;
        }
      
    
    
    function arrayFilter(arr, p) {
    
    //expect(main.arrayFilter([1,2,3], x => x % 2 == 0)).toEqual([2]);
    //expect(main.arrayFilter([1,2,3], x => x % 2 != 0)).toEqual([1,3]);
    
    var newarr = new Array;
    
    //let flag;
    for(let a=0;a<arr.length;a++){
    //flag=p(arr[a]); 
    if(p(arr[a])){
    
       newarr.push(arr[a]); 
      
                }
                     }
    
                     return newarr;
    
                                   }
    
    //=============================================
    function arrayMax(arr) {
    let mayor=0;
    
    if(arr.length<0){
        return undefined;
    }else{
    
    for(let z=0; z<arr.length;z++){
    if(arr[z]>mayor){
        mayor=arr[z];
                 }
    
                          }
      return mayor;
    }
             }
    
    
    //=============================================
    function arrayMin(arr) {
    
    let menor=0;
        
        
        if(arr.length<0){
            return undefined;
        }else{
        
        for(let z=0; z<arr.length;z++){
        if(arr[z]<menor){
            menor=arr[z];
                     }
        
                              }
          return menor;
        
        }
    
    
    
    
    }		
    
    //=============================================
    function arrayReverse(arr) {
    
    
        var i = 0;
        while (i < arr.length - 1) {
          arr.splice(i, 0, arr.pop());
          i++;
        }
        return arr;    
            }
                         
    
    //=============================================
    function arrayTake(arr, n) {
    
        var arrtake = new Array;
    
    if(arr.length<1){
     return arr;
    }
    
    for(let j=0;j<n;j++){
    
    arrtake.push(arr[j]); 
    }
    
    return arrtake;
    
    
    
    }
    
    //=============================================
    function arrayDrop(arr, n) {
    
        var arrayDrop = new Array;
        
        if(arr.length<1){
         return arr;
        }
        
        for(let j=n;j<arr.length;j++){
        
        arrayDrop.push(arr[j]); 
        }
        
        return arrayDrop;
    }
    
    //=============================================
    
        function arrayRange(arr, a, b) {
            /*let arreglo;
            
            b = b - a;
            arreglo = arrayDrop(arr,a);
            arreglo = arrayTake(arreglo,b);
        
             return arreglo;*/
            /*
            let n = 0;
            let narr;
            for(let i = 0 ; i < a ;i++){
                arr.shift();
            }

            for(let i = arr.length +1 ; i > b ;i--){
                arr.pop();
            }
            return arr;*/
            let resp = [];
            for(let i = 0; i < arr.length; i++){
                if(i >= a && i<b)
                    resp.push(arr[i]);
            }
            return resp;
        }
    
    
    
    
    //=============================================
    function arrayAppend(arr1, arr2) {
    
        let nuevo = [];
        Array.prototype.push.apply(nuevo, arr1);
        Array.prototype.push.apply(nuevo, arr2);
        return nuevo;
    
    
    
    
                  }
    
    //=============================================
    function arrayMinus(arr) {
    
    
        let total=0;
        if(arr.length < 1 || arr == undefined){
            return 0;
           }
        total=arr[0];
        for (let i = 1; i < arr.length; i++) {
        
            total -= arr[i];
        }
    return total;
    
    
    }
    
    //=============================================
    function arrayAdd(arr) {
    
    
        if(arr.length < 1 || arr == undefined){
            return 0;
           }
    
    let total=0;
    total=arr[0];
        for (let i = 1; i < arr.length; i++) {
            
                total += arr[i];
            }
        return total;
    }
    
    //=============================================
    function arrayMult(arr) {
    
    
        if(arr.length < 1 || arr == undefined){
            return 1;
           }
        let total=0;
        total=arr[0];
        for (let i = 1; i < arr.length; i++) {
            
                total *= arr[i];
            }
        return total;
    }
    
    
    
    //=============================================
    function arrayFold(f, arr, v) {
    /*
    let total =0;
    for (let i = 1; i < arr.length; i++) {
        
            total = f(arr[i]);
        }
    return total;
    */
    /*  
        total=arr[0];
        for (let i = 1; i < arr.length; i++) {
        
            total -= arr[i];
        }
    return total;
    */
    let resp = 0;
	for(let i = 0; i < arr.length; i++){
		resp=f(resp,arr[i]);
	}
	return resp+v;
    
    }
    
    //=============================================
    function arraySquare(arr) {
        var myList = new Array();
        for( let i =0;i<arr.length;i++){
            myList.push(arr[i]*arr[i]);
        }
        return myList;
    }
    
    //=============================================
    function arrayAddOne(arr) {
        var myList = new Array();
        for( let i =0;i<arr.length;i++){
            myList.push(arr[i]+1);
        }
        return myList;
    }
    
    //=============================================
    function arrayMap(arr, f) {
        /*var myList = new Array();
        for( let i =0;i<arr.length;i++){
            myList.push(f(arr[i]));
        }
        return myList;*/
        a = [];
        for(let i = 0; i<arr.length;i++){
            a.push(f(arr[i]));
        }
        return a;
    }
    
    //=============================================
    function arrayFlatten(arr) {

        /*var myList = new Array();
        for(let i =0;i<arr.length;i++){
            for(let j =0;j<arr[i].length;j++){
                myList.push(arr[i][j]);
            }
        }
        return myList;*/
        a = [];
        for(let i = 0; i<arr.length;i++){
            if(typeof arr[i] == 'object'){
                b=arr[i];
                for(let j = 0; j<b.length;j++){
                    a.push(b[j]);
                }
            }else{
                a.push(arr[i]);
            }
            
        }
        return a;
    }
    
    //===================================;==========
    function arrayDeepReverse(arr) {
        let resp = [];
        if(arr.length >0){
            for(i = arr.length-1; i >= 0; i--){
                b=arr[i];
                if(typeof b == 'object'){
                    let tmp=[];
                    for(j = b.length-1; j >= 0; j--){
                        tmp.push(b[j])
                    }
                    resp.push(tmp)
                }else{
                    resp.push(arr[i])
                }	
            }
        }
        return resp;
    }
    
    //****** MODULE EXPORTS */
    exports.lastIndexWithCompare= lastIndexWithCompare;
    exports.arrayMember = arrayMember;
    exports.arrayEqual = arrayEqual;
    exports.arrayFilter = arrayFilter;
    exports.arrayMax = arrayMax;
    exports.arrayMin = arrayMin;
    exports.arrayReverse = arrayReverse;
    exports.arrayTake = arrayTake
    exports.arrayDrop = arrayDrop;
    exports.arrayRange = arrayRange;
    exports.arrayAppend = arrayAppend;
    exports.arrayMinus = arrayMinus;
    exports.arrayAdd = arrayAdd;
    exports.arrayMult = arrayMult;
    exports.arrayFold = arrayFold;
    exports.arraySquare = arraySquare;
    exports.arrayAddOne = arrayAddOne;
    exports.arrayMap = arrayMap;
    exports.arrayFlatten = arrayFlatten;
    exports.arrayDeepReverse = arrayDeepReverse;

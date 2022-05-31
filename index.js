function myEach(collection, callback) { 
    //check whether the collection is an array; if the collection is an object, parse the object into an array. 
    //if already an array, set array variable  = collection
   // console.log(collection)
    let array = []; 
    if (!Array.isArray(collection)) {
        array = Object.values(collection); 
        //console.log(array)
        }  else {
            array = collection 
        }
    //apply callback function to each item in the array
    for (let index of array) {
        callback(index); 
    }
    //return original collection
    return collection; 
}; 

function myMap(collection, callback) {
    let array = []; 
    const newArray = []; 
    if (!Array.isArray(collection)) {
        array = Object.values(collection); 
        //console.log(array)
        }  else {
            array = collection 
        }; 
    for (let index of array) {
        newArray.push(callback(index)); 
    }
    return newArray; 
}; 

function myReduce(collection, callback, acc) {
    let array = []; 
    if (!Array.isArray(collection)) {
        array = Object.values(collection); 
        //console.log(array)
        }  else {
            array = collection 
        }; 
    console.log(`Updated array: ${array}`); 
    console.log(`Initial acc: ${acc}`)
    let i; 
    let newAcc; 
    if (!acc) {
        newAcc = array[0]; 
        i = 1;
    } else {
        newAcc = acc; 
        i = 0;
    }
    console.log(`updated acc: ${newAcc}`)
    for (i; i < array.length; i++) {
        newAcc = callback(newAcc, array[i]); 
        console.log(newAcc)
    }
    return newAcc; 
}; 

function myFind(collection, predicate) {
    let array = []; 
    if (!Array.isArray(collection)) {
        array = Object.values(collection); 
        //console.log(array)
        }  else {
            array = collection 
        }; 
    for (const index of array) {
        if (predicate(index)) {
            return index; 
        }
    }
}

function myFilter(collection, predicate) {
    let array = []; 
    if (!Array.isArray(collection)) {
        array = Object.values(collection); 
        //console.log(array)
        }  else {
            array = collection 
        }; 
    let newArray =[]; 
    for (const index of array) {
        if (predicate(index)) {
            newArray.push(index); 
        }
    }    
    return newArray; 
}; 

function mySize(collection) {
    let array = []; 
    if (!Array.isArray(collection)) {
        array = Object.values(collection); 
        //console.log(array)
        }  else {
            array = collection 
        }; 
    let i = 0; 
    for (const index of array) {
        i++; 
    }; 
    return i; 
}; 

function myFirst(array, n) {
   if (!n) {
       return array[0]; 
   } else {
       let newArray = []; 
       for (let i = 0; i < n; i++) {
            newArray.push(array[i])
       }; 
       return newArray;
   }
}

function myLast(array, n) {
    {
        if (!n) {
            return array[array.length - 1]; 
        } else {
            let newArray = []; 
            for (let i = 0; i < n; i++) {
                 newArray.unshift(array[array.length - 1 - i])
            }; 
            return newArray;
        }
     }
}; 

function myKeys(object) {
    return Object.keys(object)
}; 

function myValues(object) {
    return Object.values(object)
}; 
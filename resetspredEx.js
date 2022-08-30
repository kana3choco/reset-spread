// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }
const filterOutOdds = (...args) => args.filter((num)=>num %2 === 0)

const findMin = (...nums)=>Math.min(...nums)

const mergeObjects = (obj1,obj2)=>({...obj1,...obj2})

const doubleAndReturnArgs = (arr,...args) =>[arr,...args.map(val=>val*2)]

const removeRandom = items => {
    let i = Math.floor(Math.random() * items.length);
    return [...items.slice(0, i), ...items.slice(i + 1)];
}

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

const addKeyVal = (obj,key,val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}

const removeKey = (obj,key) =>{
    let newObj ={...obj}
    delete newObj[key]
    return newObj;
}

const combine = (obj1,obj2) =>{
    return {...obj1,...obj2};
}

const update = (obj,key,val)=> {
    let newObj ={...obj}
    newObj[key]= val
    return newObj;
}
    
  
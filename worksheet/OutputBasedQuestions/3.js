function doubleArrayValues(array,callback){
    const doubleArray=[];
    for (let i=0;i<array.length;i++){
        doubleArray.push(callback(array[i]));
}
return doubleArray;
}
const numbers=[1,2,3];
const doubledNumbers=doubleArrayValues(number,(num)=>num*2);
console.log(doubledNumbers);
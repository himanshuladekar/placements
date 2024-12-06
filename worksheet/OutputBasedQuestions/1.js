function calculatesum(inputList){
    let sum=0;
    for(let item of inputList){
        sum+=Number(item);
    }
    return sum;

}

const inputList=["10",20,"30"];
const result=calculatesum(inputList);
console.log(result);
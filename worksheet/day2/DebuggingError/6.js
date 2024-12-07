// Error-Based Debugging:**Fix the following code:
// const obj = {
//     num: 42,
//     getNum() {
//         return this.num;
//     }
// };

// const detachedGetNum = obj.getNum;

// console.log(detachedGetNum()); // Bug: `this` is undefined

const obj = {
    num: 42,
    getNum() {
        return this.num;
    }
};

const detachedGetNum = obj.getNum.bind(obj);
console.log(detachedGetNum());

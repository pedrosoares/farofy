import '@babel/polyfill';

Array.prototype.asyncMap = async function (func) {
    const nArray = [];
    const array = this;
    for (const i in array) {
        if (array.hasOwnProperty(i)) {
            const response = func(array[i], i);
            nArray.push(await response);
        }
    }
    return nArray;
};

Array.prototype.asyncForEach = async function (func) {
    const array = this;
    for (const i in array) {
        if (array.hasOwnProperty(i)) {
            await func(array[i], i);
        }
    }
};
Array.prototype.asyncMap = function (func) {
    const array = this;

    return new Promise(function (resolve, reject) {
        const nArray = [];
        const handle = function (i) {
            if (i < array.length) {
                const response = func(array[i], i);
                Promise.resolve(response)
                    .then(val => {
                        nArray.push(val);
                        handle(i + 1);
                    })
                    .catch(err => reject(err));
            } else {
                resolve(nArray);
            }
        };

        handle(0);
    });
};

Array.prototype.asyncForEach = function (func) {
    const array = this;

    return new Promise(function (resolve, reject) {
        const handle = function (i) {
            if (i < array.length) {
                const response = func(array[i], i);
                Promise.resolve(response)
                    .then(() => handle(i + 1))
                    .catch(err => reject(err));
            } else resolve();
        };

        handle(0);
    });
};
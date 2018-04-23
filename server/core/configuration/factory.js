const factory = () => {

    // Returned Type
    let returnData = {
        found: false,
        key: null,
        value: null,
        type: null
    };

    // Return value according to key.
    const _getValue = (key) => {
        returnData.key = key;
        if (process.env[key] !== null && process.env[key] !== undefined) {
            returnData.found = true;
            returnData.value = process.env[key];            
        }
        return returnData;
    }

    return {
        getValue: _getValue
    }
}

module.exports = {
    instance: factory
};
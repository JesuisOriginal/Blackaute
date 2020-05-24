const toArray = (stringList) => {
    if(stringList && stringList.length) {
        return stringList
            .trim()
            .split(',')
            .map(el => el.trim());
    }
    return [];
};

const toString = (arrayList) => {
    if(arrayList && arrayList.length) {
        let result = '';
        arrayList.map((el, index) => (
            result = index ? `${result},${el}` : `${el}`
        ));
        return result;
    }
    return '';
};

module.exports = ({
    toArray,
    toString
});
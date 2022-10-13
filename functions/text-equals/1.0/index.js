const equalsText = async ({ leftValue, rightValue, comparator, toLower }) => {
    
    if (toLower) {
        leftValue = leftValue.toLowerCase();
        rightValue = rightValue.toLowerCase();
    }

    const res = { result: false }

    switch (comparator) {
        case 'eq':
            res.result = leftValue === rightValue;
            console.log(leftValue, rightValue)
            break;
        case 'neq':
            res.result = leftValue !== rightValue;
            break;
        case 'cont':
            res.result = leftValue.includes(rightValue);
            break;
        case 'ncont':
            res.result = !leftValue.includes(rightValue);
            break;
        case 'startsWith':
            res.result = leftValue.startsWith(rightValue);
            break;
        case 'endsWith':
            res.result =leftValue.endsWith(rightValue);
            break;
        case 'regMatch':
            const regex = new RegExp(rightValue);
            res.result = regex.test(leftValue);
            break;
        default:
            res.result = false
    }
    
    return res;

}
export default equalsText;
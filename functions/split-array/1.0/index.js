const toString = async (collection) => {
    let res = { result: "" }    
    
    if(collection) {
        res.result = collection.toString();
        return res;
    }

    return res;
}
export default toString;
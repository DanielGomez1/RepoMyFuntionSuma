exports.handler = async (event) => {
    // TODO implement
    let x=event.key1;
    let y=event.key2;
    x=parseFloat(x);
    y=parseFloat(y);
    let suma= x+y;
    const response = {
        statusCode: 200,
        body: suma,
    };
    return response;
};

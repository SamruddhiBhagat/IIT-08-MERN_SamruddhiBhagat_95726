function createResult(error,data) {
    const result = {}
    if(data) 
    {
        result.status = "success";
        result.data = data;   
    }
    else
    {
        result.staus = "error";
        result.error = error;
    }
    return result;
}

//Exporting the function

module.exports = {
    createResult
}
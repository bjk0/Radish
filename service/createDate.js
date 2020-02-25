exports.getTodayDate = () =>{
    var today = new Date();

    today = today.toISOString();
    return today;
}
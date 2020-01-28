exports.getTodayDate = () =>{
    var today = new Date();

    today = today.toISOString();
    console.log(today);
    return today;
}
////////////////////////////////////////////////Funcdtion inside funtion ///////////////////////////////////////
const temp  = () => {
    if (true) {
        var userName = "John";
        let name = 'abhishek'
    }
    console.log(userName);
    function temp1() {
        console.log(userName);
    }
    temp1();
    
}
temp();



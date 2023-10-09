function onChange(arg){
    let result = validate(arg.value);
    let label= document.getElementById("label");
    label.innerHTML =result;
    return;
}

// let regex=/^\d{1,2}-\d{1,2}-\d{1,4}/
const regex =/^([012]?\d|3[01])-([0]\d|[1][012])-(\d{4})/
function validate(values){
    console.log("value : ",values)
    let isvalid = regex.test(values);
    if(isvalid){
        return '';
    }else{
        return "invalid string"
    }
}
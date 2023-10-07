let regex =/^[a-z][a-z 0-9 _  ' ']*$/i

function onChange(arg){
    let result = validate(arg.value);
    let label= document.getElementById("label");
    label.innerHTML =result;
    return;
}

function validate(value){
    console.log("value : ",value)
    let isvalid = regex.test(value);
    if(isvalid){
        return ;
    }else{
        return "invalid"
    }
}
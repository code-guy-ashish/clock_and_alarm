
let cl = Array.from(document.getElementsByClassName("in"));
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let correct_format=(num)=>{
    let len=num.toString().length;
    if(len==1)
    return "0"+num;
    else
    return num;
}

setInterval(() => {
    let a = new Date();
    let data_info = [a.getHours(), a.getMinutes(), a.getSeconds(), a.getDate(), a.getMonth(), a.getFullYear()];

    cl[0].innerHTML = correct_format(data_info[0]);
    // h=correct_format(data_info[0]);
    cl[1].innerHTML = correct_format(data_info[1]);
    // m=correct_format(data_info[1]);
    cl[2].innerHTML = correct_format(data_info[2]);
    // s=correct_format(data_info[2]);
    cl[3].innerHTML = correct_format(data_info[3]);
    cl[3].innerHTML = data_info[3];
    cl[4].innerHTML = month[data_info[4]];
    cl[5].innerHTML = data_info[5];
}, 1000);


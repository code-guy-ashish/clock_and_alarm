
let format = (element) => {
    let new_element = [];
    element.forEach(e => {
        if (e.length == 1)
            e = "0" + e;
        new_element.push(e);
    });
    return new_element;
}
let give_alarm_value = () => {
    let hours = document.getElementById("alarm_hr").value;
    let minutes = document.getElementById("alarm_m").value;
    let seconds = document.getElementById("alarm_s").value;
    let alarm_time_values = format([hours, minutes, seconds]);
    if (alarm_time_values[1] == "")
        alarm_time_values[1] = "00";
    if (alarm_time_values[2] == "")
        alarm_time_values[2] = "00";
    return alarm_time_values;
}
let status_visibility = (con_element) => {
    setTimeout(() => {
        con_element.style.visibility = "visible";
    }, 200);

    setTimeout(() => {
        con_element.style.visibility = "hidden";
    }, 3000);
}
let alarm_confirm_status = (bool, message) => {
    let con_element = document.getElementById("alarm_confirm");
    con_element.innerHTML = message;
    if (bool == true)
        status_visibility(con_element);
    else {
        con_element.style.borderColor = "red";
        con_element.style.color = "red";
        status_visibility(con_element);
    }
}


function ct(x) {
    return parseInt(x);
}

let get_curr_time = () => {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    return (format([h.toString(), m.toString(), s.toString()]));
}

let check_alarm = (a_value, c_value) => {
    let ta_value = a_value[0] + a_value[1] + a_value[2];
    let tc_value = c_value[0] + c_value[1] + c_value[2];
    if (ta_value > tc_value)
        return true;
    else
        return false;
}


let set_alarm = async () => {
    let alarm_values = give_alarm_value();

    if (check_alarm(alarm_values, get_curr_time())) {
        let confirm_string = (`Alarm set for ${alarm_values[0]}:${alarm_values[1]}:${alarm_values[2]}`);
        alarm_confirm_status(true, confirm_string);
        let s = setInterval(async () => {
            let cur_time = get_curr_time();
            if (ct(cur_time[0]) == ct(alarm_values[0]) && ct(cur_time[1]) == ct(alarm_values[1]) && ct(cur_time[2]) == ct(alarm_values[2])) {
                let au = new Audio('./Sound/alarm.mp3');
                await au.play();
            }
            console.log('In the setinterval: ', `${cur_time[0]}:${cur_time[1]}:${cur_time[2]}`);
        }, 1000);
        s;
    }
    else {
        let denied_string = (`Your Alarm input: ${alarm_values[0]}:${alarm_values[1]}:${alarm_values[2]} is incorret!`);
        alarm_confirm_status(false, denied_string);
    }

}
let set_button = document.getElementById("set");
set_button.addEventListener('click', set_alarm);

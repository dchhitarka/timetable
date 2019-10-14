window.onload = function() {
    config.load_data();
    console.log(config.data.timetable[0].schedule[0].subject)
    let d = new Date();
    let dayToday = d.getDay();
    default_schedule(dayToday);
};
// console.log(classData)
const default_schedule = (dayToday)=>{
    let manage = document.querySelector('.show-list');
    manage.innerHTML = '';
    if(dayToday == 0){
        let optionDay = document.querySelector('.monday')
        optionDay.setAttribute('selected', true);
        let dayObj = config.data.timetable[dayToday];
        for(classObj of dayObj.schedule){
            manage.innerHTML +=
                `<li class="manage task">
                    <input type="time" class="taskValue" value="${classObj.start}" size="5" />
                    <input type="time" class="taskValue" value="${classObj.end}" size="5" />
                    <input type="text" class="taskValue" value="${classObj.subject}" size="15"/>
                    <input type="text" class="taskValue" value="${classObj.room}" size="5"/>
                </li>`
        }
    } else {
        let dayObj = config.data.timetable[dayToday-1];
        let optionDay = document.querySelector(`[value="${dayToday-1}"]`);
        optionDay.setAttribute('selected', true);
        console.log(optionDay);
        for(classObj of dayObj.schedule){
            manage.innerHTML +=
                `<li class="manage task">
                    <input type="time" class="taskValue" value="${classObj.start}" size="5" />
                    <input type="time" class="taskValue" value="${classObj.end}" size="5" />
                    <input type="text" class="taskValue" value="${classObj.subject}" size="15"/>
                    <input type="text" class="taskValue" value="${classObj.room}" size="5"/>
                </li>`
        }
    }
}

const show_schedule = ()=>{
    let manage = document.querySelector('.show-list');
    manage.innerHTML = '';
    let selectday = document.querySelector('#dayname');
    
    let dayIndex = selectday.options.selectedIndex - 1;

    let dayObj = config.data.timetable[dayIndex];
    
    for(classObj of dayObj.schedule){
        manage.innerHTML +=
            `<li class="manage task">
                <input type="time" class="taskValue" value="${classObj.start}" size="5" />
                <input type="time" class="taskValue" value="${classObj.end}" size="5" />
                <input type="text" class="taskValue" value="${classObj.subject}" size="15"/>
                <input type="text" class="taskValue" value="${classObj.room}" size="5"/>
            </li>`
    }
}

const save_schedule = () => {
    let newValues = document.querySelectorAll('.taskValue');
    console.log('1')
    let selectday = document.querySelector('#dayname');
console.log('2')
    let dayIndex = selectday.options.selectedIndex - 1;
    // console.log(dayIndex)
console.log('3')
    let scheduleData = config.data;
    let dayObj = scheduleData.timetable[dayIndex];
    console.log('4')
    for(let i = 0, j = 0; i < newValues.length, j < dayObj.schedule.length; i += 4, j++){
        dayObj.schedule[j].start = newValues[i].value
        dayObj.schedule[j].end = newValues[i+1].value
        dayObj.schedule[j].subject = newValues[i+2].value
        dayObj.schedule[j].room = newValues[i+3].value
    }
    console.log(scheduleData);
    config.save_data(scheduleData);
    // localStorage.setItem("config_data", JSON.stringify(scheduleData));
    alert("Changes saved! Refresh to apply changes.")
}

const addNew = () => {
    let manage = document.querySelector('.show-list');
    manage.innerHTML += 
        `<li class="manage task">
            <input type="time" class="taskValue" value="" size="5" />
            <input type="time" class="taskValue" value="" size="5" />
            <input type="text" class="taskValue" value="" size="15"/>
            <input type="text" class="taskValue" value="" size="5"/>
        </li>`
}
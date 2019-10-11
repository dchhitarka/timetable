window.onload = function() {
    config.load_data();
    show_schedule();
};

const show_schedule = ()=>{
    let manageList = document.querySelector('.manage-list');
    for(dayObj of config.data.timetable){
        manageList.innerHTML +=
        `<li class="manage task">
            <div class="day">${dayObj.day}</div>
        </li>`
        for(classObj of dayObj.schedule){
            manageList.innerHTML +=
                `<li class="manage task">
                    <input type="time" class="taskValue" value="${classObj.start}" size="5" />
                    <input type="time" class="taskValue" value="${classObj.end}" size="5" />
                    <input type="text" class="taskValue" value="${classObj.subject}" size="15"/>
                    <input type="text" class="taskValue" value="${classObj.room}" size="5"/>
                </li>`
        }
        let task = document.querySelector('.task');
        // task.style.color = 'red';
    }
}

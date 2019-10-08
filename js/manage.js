window.onload = function() {
    config.load_data();
    show_schedule();
};

const show_schedule = ()=>{
    let manageList = document.querySelector('.option-list');
    for(dayObj of config.data.timetable){
        manageList.innerHTML +=
        `<li class="opt manage">
            <div class="day">${dayObj.day}</div>
        </li>`
        for(classObj of dayObj.schedule){
            manageList.innerHTML +=
                `<li class="opt manage">
                    <div class="task">
                        <input type="time" class="taskValue" value="${classObj.start}" size="5" />
                        <input type="time" class="taskValue" value="${classObj.end}" size="5" />
                        <input type="text" class="taskValue" value="${classObj.subject}" size="15"/>
                        <input type="text" class="taskValue" value="${classObj.room}" size="5"/>
                    </div>
                </li>`
        }
        let task = document.querySelector('.task');
        task.style.color = 'red';
    }
}

window.onload = ()=>{
    config.save_data(config.data);
	let d = new Date();
    let dayToday = d.getDay();
    defaultView(dayToday);
}

let viewSchedule = document.querySelector('.view-schedule');
let dayArr = ['sun','mon','tue','wed','thu','fri','sat'];

const defaultView = (dayToday)=>{
    viewSchedule.innerHTML = '';
    if(dayToday == 0){
        viewSchedule.innerHTML += `<h1 class="class-value showDisp">It's Sunday fellas! Enjoy</h1>`;
    }
    else{
        let dayView = config.data.timetable[dayToday-1];
        let dayTab = document.querySelector(`.${dayArr[dayToday]}`);
        dayTab.classList.add('active');

        for(classObj of dayView.schedule){
            viewSchedule.innerHTML +=
                `<li class="class-list" style="color: white;">
                    <span class="class-value">${classObj.start}</span>
                    <span class="class-value">${classObj.end}</span>
                    <span class="class-value">${classObj.subject}</span>
                    <span class="class-value">${classObj.room}</span>
                </li>`;
        }
    }
}

const loadView = (day)=>{
	viewSchedule.innerHTML = '';
    
    let currentDay = document.querySelector('.active');
    if(currentDay)
        currentDay.classList.remove('active');
    
    let showDay = document.querySelector(`.${day}`);
    showDay.classList.add('active');

	let dayView = config.data.timetable[dayArr.indexOf(day) - 1];
    for(classObj of dayView.schedule){
        viewSchedule.innerHTML +=
            `<li class="class-list" style="color: white;">
                <span class="class-value">${classObj.start}</span>
                <span class="class-value">${classObj.end}</span>
                <span class="class-value">${classObj.subject}</span>
                <span class="class-value">${classObj.room}</span>
            </li>`;
    }
}

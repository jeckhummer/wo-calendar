import $ from 'jquery';

export function getTasksDataPromise() {
    return $.getJSON('api/WOCalendar.asmx?op=GetTasks');
}

export function getTeamsDataPromise(){
    return $.getJSON('api/WOCalendar.asmx?op=GetTeams');
}
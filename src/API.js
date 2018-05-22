import $ from 'jquery';
import moment from 'moment';

export function getTasksDataPromise(dataCurrentMonth) {
    return $.ajax({
        url: "api/WOCalendar.asmx/GetTasks",
        type: "POST",
        data: JSON.stringify({selectedDate : dataCurrentMonth}),
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    }).then(data => JSON.parse(data.d).tasks)
}

export function getTeamsDataPromise() {
    return $.ajax({
        url: "api/WOCalendar.asmx/GetTeams",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    }).then(data => JSON.parse(data.d).teams);
}
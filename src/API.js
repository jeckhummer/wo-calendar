import $ from 'jquery';

export function getTasksDataPromise() {
    return $.ajax({
        url: "api/WOCalendar.asmx/GetTasks",
        type: "GET",
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
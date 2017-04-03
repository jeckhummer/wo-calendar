import {createSelector} from 'reselect';
import * as TasksManager from './TasksManager';

export const getSortedTasks = createSelector(
    ({tasks}) => tasks,
    TasksManager.sortTasksByStartDates,
);

export const getFilteredTasks = createSelector(
    getSortedTasks,
    ({teamsFilter}) => teamsFilter,
    TasksManager.filterTasksByTeam,
);

export const getTasksParts = createSelector(
    getFilteredTasks,
    TasksManager.separateTasksByDays,
);

export const getTasksIntersections = createSelector(
    getTasksParts,
    TasksManager.calculateIntersections,
);

// export const tasksConflicts = createSelector(
//     tasksParts,
//     tasks => TasksManager.calculateIntersections(tasks),
// );

export const calculateTasksParts = createSelector(
    ({tasks}) => tasks,
    ({teamsFilter}) => teamsFilter,
    (tasks, teamsFilter) => {
        const data = {tasks, teamsFilter};
        // console.group('test');
        // console.log(1, moment().format('h:mm:ss:SS'));
        // console.log(2, moment().format('h:mm:ss:SS'));
        const filteredTasks = getFilteredTasks(data);
        // console.log(3, moment().format('h:mm:ss:SS'));
        // console.log(tasks.length,filteredTasks.length);

        let taskParts = getTasksParts(data);
        // console.log(4, moment().format('h:mm:ss:SS'));
        const intersections = getTasksIntersections(data);
        // console.log(5, moment().format('h:mm:ss:SS'));


        const conflictsMap = TasksManager.calculateConflicts(
            TasksManager.getBoundaryIntervals(
                TasksManager._separateTasksByDays(filteredTasks)
            ),
            tasks
        );
        // console.log(6, moment().format('h:mm:ss:SS'));

        taskParts.forEach(
            x => {
                x.intersections = intersections[x.id];
                x.hasConflicts = conflictsMap[x.task.id];
                x.order = 0;
            }
        );
        // console.log(7, moment().format('h:mm:ss:SS'));
        // console.groupEnd('test');

        return taskParts;
    }
);
import moment from 'moment';
import _ from 'lodash';
import {Task} from './Task';
import {TaskPart} from './TaskPart';
import {TaskBoundary} from './TaskBoundary';
import {TaskInterval} from './TaskInterval';

export function createTasks(tasksData){
	return tasksData.map(taskData => this.createTask(taskData));
}

export function createTask(taskData){
	return new Task(taskData);
}

export function filterTasksByTeam(tasks, teamsFilter){
	if(teamsFilter == null){
		return tasks.slice();
	} else {
		return tasks.filter(task => teamsFilter.isActive(task.teamID));
	}
}

export function separateTasksByDays(tasks) {
	return _.concat(...tasks
		.map(x => _.range(moment(x.end).startOf('day').diff(moment(x.start).startOf('day'), 'days') + 1)
			.map(i => {
				return {
					task: x,
					id: `${x.WOTNumber}_${i + 1}`,
					start: i === 0 ?
						x.start :
						moment(x.start)
							.add(i, 'days')
							.hour(8)
							.minutes(0)
							.toDate(),
					end: i === moment(x.end).startOf('day').diff(moment(x.start).startOf('day'), 'days') ?
						x.end :
						moment(x.start)
							.add(i, 'days')
							.hour(19)
							.minutes(0)
							.toDate(),
				};
			})
		)
	);
}

export function sortTasksByStartDates(tasks) {
	return tasks.sort(
		(taskA, taskB) => taskA.start - taskB.start
	);
}

export function _separateTasksByDays(tasks) {
	return _.concat(...tasks
		.map(task => _.range(moment(task.end).startOf('day').diff(moment(task.start).startOf('day'), 'days') + 1)
			.map(i => 
				new TaskPart({
					taskID: task.id,
					partNumber: i,
					start: i === 0 
						? task.start 
						: moment(task.start)
							.add(i, 'days')
							.hour(8)
							.minutes(0)
							.toDate(),
					end: i === moment(task.end).startOf('day').diff(moment(task.start).startOf('day'), 'days') 
						? task.end 
						: moment(task.start)
							.add(i, 'days')
							.hour(19)
							.minutes(0)
							.toDate(),
				})
			)
		)
	);
}

export function getBoundariesSequence(taskParts) {
	const starts = taskParts.map(x => ({ type: 'start', boundary: x.start, taskPart: x }));
	const ends = taskParts.map(x => ({ type: 'end', boundary: x.end, taskPart: x }));
	const boundariesSequence = starts
		.concat(ends)
		.sort((a, b) => {
			const diff = a.boundary - b.boundary;
			if (diff === 0 && a.type !== b.type) {
				return a.type === 'start' ? 1 : -1;
			} else {
				return diff;
			}
		});

	return boundariesSequence;
}

export function _getBoundariesSequence(taskParts) {
	const starts = taskParts.map(taskPart =>
		new TaskBoundary({
			type: 'start',
			taskPart: taskPart
		})
	);
	const ends = taskParts.map(taskPart =>
		new TaskBoundary({
			type: 'end',
			taskPart: taskPart 
		})
	);
	const boundariesSequence = starts
		.concat(ends)
		.sort((a, b) => {
			const diff = a.getDate() - b.getDate();
			if (diff === 0 && a.type !== b.type) {
				return a.type === 'start' ? 1 : -1;
			} else {
				return diff;
			}
		});

	return boundariesSequence;
}

export function calculateIntersections(taskParts) {
    console.log(taskParts);
	const boundariesSequence = getBoundariesSequence(taskParts);
	const heap = [];
	const intersections = {};
	boundariesSequence.forEach(
		x => {
			if (x.type === 'start') {
				intersections[x.taskPart.id] = heap.slice();
				// heap.forEach(t => intersections[t.id].push(x.taskPart));
				heap.push(x.taskPart);
			} else {
				_.remove(heap, t => t.id === x.taskPart.id);
			}
		}
	);

	return intersections;
}

export function _getBoundaryIntervals(taskParts) {
	const boundariesSequence = _getBoundariesSequence(taskParts);
	const taskPartsHeap = [];
	const intervals = [];
	let prevBoundary = null;

	boundariesSequence.forEach(
		boundary => {
			if (boundary.type === 'start') {
				taskPartsHeap.push(boundary.taskPart);
			} else {
				_.remove(taskPartsHeap, t => t.taskID === boundary.taskPart.taskID);
			}

			if(prevBoundary !== null){
				if(prevBoundary.getDate().getTime() !== boundary.getDate().getTime())
				intervals.push(new TaskInterval(
					{
						start: prevBoundary.getDate(),
						end: boundary.getDate(),
						taskParts: taskPartsHeap.slice()
					}
				));
			}
			prevBoundary = boundary;
		}
	);

	return intervals;
}

export function calculateConflicts(taskParts) {
	const intersections = calculateIntersections(taskParts);
	return intersections;
}
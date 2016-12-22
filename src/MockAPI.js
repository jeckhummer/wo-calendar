import $ from 'jquery';
import Mocks from './Mocks';

export function getTasksDataPromise() {
	const deferred = $.Deferred();
	setTimeout(
		() => deferred.resolve(Mocks.tasks),
		0 * 1000
	);
	return deferred.promise();
}

export function getTeamsDataPromise(){
	const deferred = $.Deferred();
	setTimeout(
		() => deferred.resolve(Mocks.teams),
		2 * 1000
	);
	return deferred.promise();
}
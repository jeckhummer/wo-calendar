import $ from 'jquery';
import Mocks from './Mocks';

export function getTasksDataPromise() {
	const deferred = $.Deferred();
	setTimeout(
		() => deferred.resolve(Mocks.tasks),
		0
	);
	return deferred.promise();
}

export function getTeamsDataPromise(){
	const deferred = $.Deferred();
	setTimeout(
		() => deferred.resolve(Mocks.teams),
		0
	);
	return deferred.promise();
}
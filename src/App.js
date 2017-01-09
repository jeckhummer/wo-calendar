import React, {Component} from 'react';
import Nav from './Nav';
import MiniCalendar from './MiniCalendar';
import MonthSchedule from './MonthSchedule';
import WeekSchedule from './WeekSchedule';
import DaySchedule from './DaySchedule';
import AgendaSchedule from './AgendaSchedule';
import TeamFilter from './TeamFilter.component';
import SelectedTaskDetailsModal from './SelectedTaskDetailsModal';
import * as TasksManager from './TasksManager';
import * as TeamsManager from './TeamsManager';
import {Dimmer, Loader} from 'semantic-ui-react';
import moment from 'moment';

import {API} from './CurrentAPI';

class App extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            mode: 'month',
            loadingTasks: false,
            loadingTeamsFilter: false,
            selectedDate: new Date('15 Nov 2016 11:00:00'),
            tasks: [],
            teams: [],
            teamsFilter: null,
            zoom: 1,
            detailsVisible: true,
            selectedTaskID: null,
            dayOptions: {
                cellHeight: 100,
                rowsVisible: 5
            },
            weekOptions: {
                cellHeight: 130,
                rowsVisible: 4
            },
            monthOptions: {
                cellHeight: 106,
            },
        };
    }

    componentDidMount() {
        this.loadTasks();
        this.loadTeams();
    }

    loadTasks() {
        this.setState({loadingTasks: true});

        API.getTasksDataPromise()
            .then(tasksData => {
                const tasks = TasksManager.createTasks(tasksData);
                this.setState({
                    tasks,
                    loadingTasks: false
                })
            });
    }

    loadTeams() {
        this.setState({loadingTeamsFilter: true});

        API.getTeamsDataPromise()
            .then(teamsData => {
                const teams = TeamsManager.createTeams(teamsData);
                const teamsFilter = TeamsManager.createTeamsFilter(teams);
                this.setState({
                    teams,
                    teamsFilter,
                    loadingTeamsFilter: false
                });
            });
    }

    navigateSchedule(quantity, unit) {
        this.setState({selectedDate: moment(this.state.selectedDate).add(quantity, unit).toDate()});
    }

    navigateToToday() {
        this.setState({selectedDate: new Date()});
    }

    updateTeamsFilter(teamID) {
        this.setState({teamsFilter: this.state.teamsFilter.clone().toggle(teamID)});
    }

    changeMode(mode) {
        this.setState({mode});
    }

    changeZoom(dZoom) {
        let zoom = this.state.zoom + dZoom;
        if (zoom >= 1) {
            this.setState({zoom});
        }
    }

    navigateToDate(date, mode) {
        this.setState({selectedDate: date, mode});
    }

    setDetailsVisibility(isVisible) {
        this.setState({detailsVisible: isVisible});
    }

    hideDetails(){
        this.setDetailsVisibility(false);
    }

    selectTask(taskID){
        this.setState({selectedTaskID: taskID});
        this.setDetailsVisibility(true);
    }

    getTask(taskID){
        const filteredTasks = this.state.tasks.filter(t => t.id === taskID);
        const task = filteredTasks.length !== 0
            ? filteredTasks[0]
            : null;

        return task;
    }

    render() {
        let schedule;
        const tasksSortedByStartDate = TasksManager.sortTasksByStartDates(this.state.tasks);
        const filteredTasks = TasksManager.filterTasksByTeam(tasksSortedByStartDate, this.state.teamsFilter);

        let taskParts = TasksManager.separateTasksByDays(filteredTasks);
        const intersections = TasksManager.calculateIntersections(taskParts);


        const conflictsMap = TasksManager.calculateConflicts(
            TasksManager._getBoundaryIntervals(
                TasksManager._separateTasksByDays(filteredTasks)
            ),
            this.state.tasks
        );

        taskParts.forEach(
            x => {
                x.intersections = intersections[x.id];
                x.hasConflicts = conflictsMap[x.task.id];
                x.order = 0;
            }
        );



        switch (this.state.mode) {
            default:
            case 'month':
                schedule = <MonthSchedule
                    taskParts={taskParts}
                    date={this.state.selectedDate}
                    onDayClick={this.navigateToDate.bind(this)}
                    cellHeight={this.state.monthOptions.cellHeight}/>;
                break;

            case 'week':
                schedule = <WeekSchedule
                    taskSelectionCallback={this.selectTask.bind(this)}
                    taskParts={taskParts}
                    zoom={this.state.zoom}
                    conflictsMap={conflictsMap}
                    onDayClick={this.navigateToDate.bind(this)}
                    date={this.state.selectedDate}
                    teams={this.state.teams}
                    cellHeight={this.state.weekOptions.cellHeight}
                    rowsVisible={this.state.weekOptions.rowsVisible}/>;
                break;

            case 'day':
                schedule = <DaySchedule
                    taskParts={taskParts}
                    taskSelectionCallback={this.selectTask.bind(this)}
                    conflictsMap={conflictsMap}
                    teams={this.state.teams}
                    date={this.state.selectedDate}
                    zoom={this.state.zoom}
                    cellHeight={this.state.dayOptions.cellHeight}
                    rowsVisible={this.state.dayOptions.rowsVisible}/>;
                break;

            case 'agenda':
                schedule = (
                    <div style={{overflow: 'auto', height: '500px'}}>
                        <AgendaSchedule
                            taskParts={taskParts}
                            conflictsMap={conflictsMap}
                            teams={this.state.teams}
                        />
                    </div>
                );
                break;
        }

        const selectedTaskID = this.state.selectedTaskID;
        let taskDetailsModal = null;

        if(selectedTaskID !== null){
            const selectedTask = this.getTask(selectedTaskID);

            if(selectedTask === null){
                throw new Error(`No task with id = ${selectedTaskID} found!`);
            } else {
                taskDetailsModal = (
                    <SelectedTaskDetailsModal
                        selectedTask={selectedTask}
                        open={this.state.detailsVisible}
                        onClose={this.hideDetails.bind(this)}
                        teams={this.state.teams}
                    />
                );
            }
        }

        return (
            <div className='main-wrapper'>
                <div className='left-area'>
                    {taskDetailsModal}

                    <MiniCalendar
                        onDateClick={this.navigateToDate.bind(this)}
                        selectedDate={this.state.selectedDate}
                        onNavigate={this.navigateSchedule.bind(this)}
                    />
                    <TeamFilter
                        onChange={this.updateTeamsFilter.bind(this)}
                        teams={this.state.teams}
                        teamsFilter={this.state.teamsFilter}
                        loading={this.state.loadingTeamsFilter}
                    />
                </div>
                <div className='right-area'>
                    <Nav
                        zoom={this.state.zoom}
                        mode={this.state.mode}
                        date={this.state.selectedDate}
                        onModeChange={this.changeMode.bind(this)}
                        onNavigate={this.navigateSchedule.bind(this)}
                        onTodayClick={this.navigateToToday.bind(this)}
                        onZoomChange={this.changeZoom.bind(this)}
                    />
                    <div className='schedule-wrapper'>
                        <Dimmer active={this.state.loadingTasks}>
                            <Loader size='massive'> Loading tasks... </Loader>
                        </Dimmer>

                        {schedule}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

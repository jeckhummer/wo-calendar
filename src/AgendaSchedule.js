import React, { Component } from 'react';
import Agenda, {AgendaDay, AgendaItem} from './Agenda';
import * as _ from 'lodash';
import moment from 'moment';

class AgendaSchedule extends Component {
    createAgendaDays(taskParts){
        const daysMap = _.groupBy(
            taskParts,
            taskPart => moment(taskPart.start).format('DD MMM YYYY')
        );
        const agendaDays = _.map(
            daysMap,
            (taskPartsDayGroup, day) => new AgendaDay(day, taskPartsDayGroup.map(this.createAgendaItem))
        );

        return agendaDays;
    }

    createAgendaItem(taskPart){
        return new AgendaItem(
            moment(taskPart.start).format('HH:mm'),
            moment(taskPart.end).format('HH:mm'),
            taskPart.task.description
        );
    }

    render() {
        const taskParts = this.props.taskParts;
        const agendaData = this.createAgendaDays(taskParts);

        return (
            <Agenda data={agendaData}/>
        );
    }
}

export default AgendaSchedule;

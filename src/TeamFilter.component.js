import React, {Component} from 'react';
import {Table, Form, Checkbox, Icon, Loader} from 'semantic-ui-react';
import {teamIdToColorMapper} from "./Utils";
import * as _ from 'lodash';

class TeamFilter extends Component {
    constructor() {
        super(...arguments);

        this.state = {active: true};
        this.onToggleAll = () => {
            this.props.teams.forEach(x => {
                if (this.state.active === this.props.teamsFilter.isActive(x.id)) {
                    this.props.onChange(x.id);
                }
            });
            this.setState({active: !this.state.active});
        };
    }

    render() {
        let sortedTeams = _.sortBy(this.props.teams, 'name');
        const fields = sortedTeams
            .map(x => {
                const color = teamIdToColorMapper(x.id, this.props.teams.map(y => y.id), true);
                return (
                    <Form.Field key={x.id}>
                        <Checkbox
                            checked={this.props.teamsFilter.isActive(x.id)}
                            onChange={() => this.props.onChange(x.id)}
                        />
                        <span style={{position: "relative", top: "-2px", left: "5px"}}>
						&nbsp; &nbsp;
                            <a className={"ui empty circular label"} style={{backgroundColor: color}}></a>
                            &nbsp; &nbsp;
                            {x.name}
					</span>
                    </Form.Field>
                )
            });

        let cell;

        if (this.props.loading) {
            cell = (
                <Table.Cell textAlign='center'>
                    <Loader active inline>
                        Loading teams...
                    </Loader>
                </Table.Cell>
            );
        } else {
            cell = (
                <Table.Cell>
                    <Form style={{maxHeight: '278px', overflow: 'auto'}}>
                        {fields}
                    </Form>
                </Table.Cell>
            );
        }

        return (
            <div>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>
                                <Checkbox onClick={this.onToggleAll} checked={this.state.active}/>
                                &nbsp;
                                &nbsp;
                                <Icon name='filter'/>
                                Team filter
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            {cell}
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

export default TeamFilter;

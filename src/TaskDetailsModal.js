import React, { Component } from 'react';
import { Modal, Grid, Label, Icon } from 'semantic-ui-react';
import Floated from './Floated';

class TaskDetailsModal extends Component {
    render() {
        return (
            <Modal
                size='small'
                open={this.props.open}
                onClose={this.props.onClose}>

                <Modal.Header>
                    WOT #{this.props.WOTNumber}
                    &nbsp;
                    /
                    &nbsp;
                    WO #{this.props.WONumber}

                    <Floated right>
                        <Icon
                            link
                            name='close'
                            onClick={this.props.onClose}>
                        </Icon>
                    </Floated>
                </Modal.Header>

                <Modal.Content>
                    <Modal.Description>
                        <p> {this.props.description} </p>

                        <br/>

                        <Grid columns={2}>
                            <Grid.Row>
                                <Grid.Column>
                                    <strong>Start:</strong> &nbsp; {this.props.start}
                                </Grid.Column>

                                <Grid.Column>
                                    <strong>End:</strong> &nbsp; {this.props.end}
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row>
                                <Grid.Column>
                                    <strong>Team:</strong>
                                    &nbsp; &nbsp;
                                    <Label
                                        empty
                                        circular
                                        color={this.props.teamColor}
                                    />
                                    &nbsp; &nbsp;
                                    {this.props.teamName}
                                </Grid.Column>

                                <Grid.Column>
                                    <strong>Team member:</strong> &nbsp; {this.props.teamMember}
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row>
                                <Grid.Column>
                                    <strong>Phase:</strong> &nbsp; {this.props.phase}
                                </Grid.Column>

                                <Grid.Column>
                                    <strong>Status:</strong> &nbsp; {this.props.status}
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Modal.Description>
                </Modal.Content>

            </Modal>
        );
    }
};

export default TaskDetailsModal;

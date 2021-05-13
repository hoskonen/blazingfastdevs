import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import {Button, Card, Grid, Icon, Segment} from "semantic-ui-react";
import {SelectedDevelopersContext} from "../contexts/selected-developers-context";
import {Developer} from "../components/Developer";
import {IDataModel} from "../models/Models";

export const MyTeam = () => {
    const [selectedDevs, setSelectedDevs] = useContext(SelectedDevelopersContext);
    
    const removeDeveloper = (uid: string) => {
        setSelectedDevs(prevSelectedDevs => (
            prevSelectedDevs.filter(developer => developer.uid !== uid)
        ));
    }
    
    return (
        <>
            <div>
                <Grid columns={10} centered={true}>
                    <Grid.Row>
                        <Grid.Column computer={12} mobile={12}>
                            <div className="content">
                            <h1>Selected developers for team</h1>
                            {selectedDevs.map((developer: IDataModel) => (
                                <Card
                                key={developer.uid}
                                style={{marginBottom: '2rem'}}
                                className=""
                                >
                                    <Card.Content>
                                        <Card.Header>{developer.first_name}</Card.Header>
                                        <Card.Meta>
                                        <span className='date'>{developer.date_of_birth}</span>
                                        </Card.Meta>
                                        <Card.Description>
                                    {developer.employment.title}
                                        </Card.Description>
                                    </Card.Content>
                                    <a>
                                    <Icon name='user' />
                                {developer.phone_number}
                                    </a>
                                    <Segment>
                                        <Button 
                                            negative
                                            onClick={() => removeDeveloper(developer.uid)}
                                        >Remove
                                        </Button>
                                    </Segment>
                                </Card>
                                ))}
                                
                            {selectedDevs.length < 1 &&
                            <h1>Oh noes 🤮 Who's is going to code now! 🤨</h1>
                            }
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </>
    )
}
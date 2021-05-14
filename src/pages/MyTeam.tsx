import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import {Button, Card, Grid, Icon, Segment} from "semantic-ui-react";
import {SelectedDevelopersContext} from "../contexts/selected-developers-context";
import {Developer} from "../components/Developer";
import {IDataModel} from "../models/Models";
import shotgun from '../sound/shotgun.mp3';
import useSound from "use-sound";

export const MyTeam = () => {
    const [selectedDevs, setSelectedDevs] = useContext(SelectedDevelopersContext);
    const [play] = useSound(shotgun, {volume: 0.50 });
    
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
                                { selectedDevs.length > 1 && <h1>Selected developers for team</h1> }
                                {selectedDevs.map((developer: IDataModel) => (
                                    <Card
                                        key={developer.uid}
                                        style={{marginBottom: '2rem'}}
                                    >
                                        <Card.Content>
                                            <Card.Header>{developer.first_name}</Card.Header>
                                            <Card.Meta>
                                                <span className='date'>{developer.date_of_birth}</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                {developer.employment.title}
                                            </Card.Description>
                                        <a>
                                        <Icon name='user' />
                                    {developer.phone_number}
                                        </a>
                                        </Card.Content>
                                        <Segment>
                                            <Button 
                                                negative
                                                onClick={() => {
                                                    removeDeveloper(developer.uid)
                                                    play()
                                                }}
                                            >Remove
                                            </Button>
                                        </Segment>
                                    </Card>
                                    ))}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                
                {selectedDevs.length < 1 && <>
                    <div className="note">
                        <h1>Oh noes 🤮 Who's is going to code now! 🤨</h1>
                    </div>
                </>
                }
                
            </div>
        </>
    )
}
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Card, Grid, Icon} from "semantic-ui-react";
import axios from "axios";

export const Developers = () => {
    const [appState, setAppState] = React.useState([]);
    
    useEffect(() => {
        setAppState([]);
        const apiUrl = 'https://random-data-api.com/api/users/random_user?size=10';
            const fetchData = async () => {
                const result = await axios.get(apiUrl);
                
                setAppState(result.data);
                console.log(appState)
            }
            
            fetchData();
    }, [setAppState]);

    return (
        <>
            <div>
                <Grid columns={10} centered={true}>
                    <Grid.Row>
                        <Grid.Column computer={12} mobile={12}>
                            <h1>Developers for hire</h1>
                        </Grid.Column>
                    </Grid.Row>

                    
                    <Grid.Row>
                        <Grid.Column computer={12} mobile={12}>
                            { appState.map((person: any) => (
                                <Card key={person.uid}>
                                    <Card.Content>
                                        <Card.Header>{person.first_name}</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>{person.date_of_birth}</span>
                                        </Card.Meta>
                                        <Card.Description>
                                            Matthew is a musician living in Nashville.
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a>
                                            <Icon name='user' />
                                            22 Friends
                                        </a>
                                    </Card.Content>
                                </Card>
                            ))}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </>
    )
}
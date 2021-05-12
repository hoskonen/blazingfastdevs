import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Card, Grid, Icon} from "semantic-ui-react";
import axios from "axios";

export const Developers = () => {
    const [appState, setAppState] = React.useState({ loading: false, data: null });
    
    useEffect(() => {
        setAppState({loading: true, data: null});
        const apiUrl = 'https://api.thecatapi.com/v1/images/search';
            const fetchData = async () => {
                const result = await axios.get(apiUrl);
                
                setAppState({loading: false, data: result.data });
                console.log(appState.data)
            }
            
            fetchData();
    }, []);
    
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
                            <Card>
                                <Card.Content>
                                    <Card.Header>Matthew</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Joined in 2015</span>
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
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </>
    )
}
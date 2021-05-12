import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Button, Card, Grid, Icon, Modal, Segment} from "semantic-ui-react";
import axios from "axios";

interface IDataModel {
    id: number,
    uid: string,
    first_name: string,
    last_name: string
}

export const Developers = () => {
    const [appState, setAppState] = React.useState<IDataModel[]>([]);
    const [selectedDetail, setSelectedDetail] = React.useState({});
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    
    
    useEffect(() => {
        setAppState([]);
        const apiUrl = 'https://random-data-api.com/api/users/random_user?size=10';
            const fetchData = async () => {
                const result = await axios.get(apiUrl);
                
                setAppState(result.data);
            }

        console.log(appState)
            
            fetchData();
    }, [setAppState]);
    
    const getDetail = (uid: string) => {
        let detail = appState.filter(x => x.uid === uid);
        setSelectedDetail(detail[0]);
    }

    return (
        <>
            <div>
                <Grid columns={8} centered={true}>
                    <Grid.Row>
                        <Grid.Column computer={12} mobile={12}>
                            <h1>Developers for hire</h1>
                        </Grid.Column>
                    </Grid.Row>

                    
                    <Grid.Row>
                            { appState.map((person: any) => (
                                <Grid.Column computer={6} mobile={6}>
                                    <Card key={person.uid} style={{marginBottom: '2rem'}}>
                                        <Card.Content>
                                            <Card.Header>{person.first_name}</Card.Header>
                                            <Card.Meta>
                                                <span className='date'>{person.date_of_birth}</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                {person.employment.title}
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <a>
                                                <Icon name='user' />
                                                {person.phone_number}
                                            </a>
                                            <Segment>
                                                <Button 
                                                    positive
                                                >
                                                    Hire Me!
                                                </Button>
                                                <Button
                                                    onClick={() => {
                                                        getDetail(person.uid);
                                                        setIsOpen(true);
                                                    }}
                                                >
                                                    Details
                                                </Button>
                                            </Segment>
                                        </Card.Content>
                                    </Card>
                        </Grid.Column>
                            ))}
                    </Grid.Row>
                </Grid>
                
                <Modal
                    onClose={() => setIsOpen(false)}
                    onOpen={() => setIsOpen(true)}
                    open={isOpen}
                >
                    <Modal.Header>Select a Photo</Modal.Header>
                    <Modal.Content>
                       
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={() => setIsOpen(false)}>
                            Close
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        </>
    )
}
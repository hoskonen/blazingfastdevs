import React, {useContext, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Button, Card, Grid, Icon, Modal, Segment, Image} from "semantic-ui-react";
import axios from "axios";
import {IDataModel, ISelectableDeveloper, ISelectedModel} from "../models/Models";
import { Developer } from '../components/Developer';
import {SelectedDevelopersContext} from "../contexts/selected-developers-context";

export const Developers = () => {
    const [appState, setAppState] = React.useState<IDataModel[]>([]);
    const [selectedDetail, setSelectedDetail] = React.useState<ISelectedModel | null>();
    const [selectedDevs, setSelectedDevs] = useContext(SelectedDevelopersContext);
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    
    useEffect(() => {
        setAppState([]);
        const apiUrl = 'https://random-data-api.com/api/users/random_user?size=10';
            const fetchData = async () => {
                const result = await axios.get(apiUrl);
                
                setAppState(result.data);
            }
            
            fetchData();
    }, [setAppState]);
    
    const getDetail = (uid: string) => {
        let detail = appState.filter(detail => detail.uid === uid);
        setSelectedDetail(detail[0]);
    }
    
    const pickDeveloper = (uid: string) => {
        let pick = appState.find(detail => detail.uid === uid);
        
        if (selectedDevs.find(detail => detail.uid === uid)) {
            return
        } else {
            setSelectedDevs([...selectedDevs, pick]);
        }
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
                        {appState.map((person: IDataModel) => (
                            <Grid.Column computer={6} mobile={6} key={person.uid}>
                                <Developer
                                    person={person}
                                    pickDeveloper={pickDeveloper}
                                    getDetail={getDetail}
                                    setIsOpen={setIsOpen}
                                />
                            </Grid.Column>
                        ))}
                    </Grid.Row>
                </Grid>

                <Modal
                    onClose={() => setIsOpen(false)}
                    onOpen={() => setIsOpen(true)}
                    open={isOpen}
                >
                    <Modal.Header>{selectedDetail?.first_name}</Modal.Header>
                    <Modal.Content image>
                        <Image size='medium' src={selectedDetail?.avatar} wrapped/>
                        <ul>
                            <li>Name: {selectedDetail?.first_name} {selectedDetail?.last_name}</li>
                        </ul>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={() => setIsOpen(false)}>
                            Close
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        </>
    );
}
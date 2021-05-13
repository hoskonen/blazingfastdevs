import React, {Dispatch, SetStateAction} from 'react';
import ReactDOM from 'react-dom';
import {Button, Card, Grid, Icon, Segment} from "semantic-ui-react";
import {IDataModel, ISelectedModel} from "../models/Models";
import useSound from 'use-sound';
        
interface IProps {
    person: IDataModel
    pickDeveloper: (uid: string) => void,
    getDetail: (uid: string) => void,
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Developer = (props: IProps) => {
    const cashSample = require('../sound/cash.mp3');
    
    const [play] = useSound(cashSample, {volume: 0.75 });
    
    return (
        <Card
            key={props.person.uid}
            style={{marginBottom: '2rem'}}
        >
            <Card.Content>
                <Card.Header>{props.person.first_name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{props.person.date_of_birth}</span>
                </Card.Meta>
                <Card.Description>
                    {props.person.employment.title}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {props.person.phone_number}
                </a>
                <Segment>
                    <Button
                        positive
                        onClick={() => {
                            play()
                            props.pickDeveloper(props.person.uid)
                        }}
                    >
                        Hire Me!
                    </Button>
                    <Button
                        onClick={() => {
                            props.getDetail(props.person.uid);
                            props.setIsOpen(true);
                        }}
                    >
                        Details
                    </Button>
                </Segment>
            </Card.Content>
        </Card>
    )
}
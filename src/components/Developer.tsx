import React, {Dispatch, SetStateAction} from 'react';
import ReactDOM from 'react-dom';
import {Button, Card, Grid, Icon, Segment} from "semantic-ui-react";
import {IDataModel, ISelectedModel} from "../models/Models";
import useSound from 'use-sound';
// import { cash } from '/src/sound/cash.mp3';
        
interface IProps {
    person: IDataModel
    pickDeveloper: (uid: string) => void,
    getDetail: (uid: string) => void,
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Developer = (props: IProps) => {
    const PlaySoundSFX = (sample: any) => {
        const [play] = useSound(sample);
    }
    
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
                            props.pickDeveloper(props.person.uid)
                            // PlaySoundSFX(cash);
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
import React, {Dispatch, SetStateAction, useContext} from 'react';
import ReactDOM from 'react-dom';
import {Button, Card, Grid, Icon, Segment} from "semantic-ui-react";
import {IDataModel, ISelectedModel} from "../models/Models";

interface IProps {
    person: IDataModel
    pickDeveloper: (uid: string) => void,
    removeDeveloper: (uid: string) => void,
    getDetail: (uid: string) => void,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    isSelected: boolean
    playSample: () => void
}

export const Developer = (props: IProps) => {
    
    return (
        <Card
            key={props.person.uid}
            style={{marginBottom: '2rem'}}
            className={props.isSelected ? 'selected' : ''}
            raised
        >
            <Card.Content>
                <Card.Header>{props.person.first_name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{props.person.date_of_birth}</span>
                </Card.Meta>
                <Card.Description>
                    {props.person.employment.title}
                </Card.Description>
                <a>
                    <Icon name='user' />
                    {props.person.phone_number}
                </a>
            </Card.Content>
                <Segment textAlign='center'>
                    {!props.person.isSelected ?
                    <Button
                        positive
                        onClick={() => {
                            props.playSample()
                            props.pickDeveloper(props.person.uid)
                        }}
                    >
                        ⛓ Hire Me!
                    </Button>
                        :
                    <Button
                        negative
                        onClick={() => {
                            props.removeDeveloper(props.person.uid)
                        }}
                    >
                         🩸 Cancel!
                    </Button>
                    }
                        
                    <Button
                        onClick={() => {
                            props.getDetail(props.person.uid);
                            props.setIsOpen(true);
                        }}
                    >
                        ⚙️ Details
                    </Button>
                </Segment>
        </Card>
    )
}
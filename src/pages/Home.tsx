import React from 'react';
import ReactDOM from 'react-dom';
import {Card, Grid, Icon} from "semantic-ui-react";

export const Home = () => {
    return (
        <>
            <div>
                <Grid columns={10} centered={true}>
                    <Grid.Row>
                        <Grid.Column computer={12} mobile={12}>
                            <h1>Home</h1>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </>
    )
}
import React from 'react';
import ReactDOM from 'react-dom';
import {Card, Grid, Icon} from "semantic-ui-react";

export const Home = () => {
    return (
        <>
            <div className="home">
                <Grid columns={10} centered={true} divided='vertically'>
                    <Grid.Row>
                        <Grid.Column computer={12} mobile={12}>
                            <div className="content">
                                <h1>Looking for top notch team with inviduals who can be verbally superior and know assembler code inside out like it's 80's again? 😵</h1>
                                <ul>
                                    <li>See Developer page for developers, check their details or hire them!</li>
                                    <li>See My Team page for hired developers or fire them!</li>
                                </ul>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </>
    )
}
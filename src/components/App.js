import React from 'react';
import {Router, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Practice from "./practice/practice";
import Theory from "./theory/theory";
import Navigation from "./navigation/navigation";
import {makeStyles} from "@material-ui/core";
import Content from "./content/content";

const history = createBrowserHistory();
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    }
}));


const App = () => {
    const classes = useStyles();

    return (
        <Router history={history}>
            <div className={classes.root}>
                <Navigation/>
                <Content>
                    <Route path="/theory" component={Theory}/>
                    <Route path="/practice" component={Practice}/>
                </Content>
            </div>
        </Router>
    )
};

export default App;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const AVATAR_SRC =
    'http://cdn.osxdaily.com/wp-content/uploads/2014/03/cosmos-space-wallpaper-6.jpg';

class NavBar extends Component {
    state = {
        value: this.props.location.pathname === '/' ? 0 : 1,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render = () => {
        return (
            <div>
                <AppBar style={{ 'marginBottom': '20px' }} position="static">
                    <Toolbar variant="dense">
                        <Avatar src={AVATAR_SRC} style={{ marginRight: '20px' }} />
                        <Typography variant="h5">Cosmos</Typography>
                        <Tabs
                            style={{ position: 'absolute', right: '0px' }}
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <Tab label="Signup" component={Link} to="/signup" />
                            <Tab label="Login" component={Link} to="/login" />

                        </Tabs>
                    </Toolbar>
                </AppBar>
            </div>
        );
    };
}

export default withRouter((props) => <NavBar {...props} />);

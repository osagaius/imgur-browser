import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';

import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Api from '../utils/api';

const buttonStyle = {
	margin: 12
};

const buttonGroupStyle = {
	paddingTop: '0'
};

module.exports = React.createClass({
	getInitialState() {
		return {
			topics: []
		}
	},
	componentWillMount () {
		Api.get('topics/defaults')
    .then(function (json) {
      this.setState({
				topics: json.data
			});
    }.bind(this));
	},
	render() {
		return  <AppBar
			title="Imgur Browser"
			iconElementLeft={<IconButton><NavigationClose /></IconButton>}
			iconElementRight={
				<div style={{
						display: 'inline-block',
						clear:'left'
					}}>
					<IconMenu
						iconButtonElement={
							<span>
								{this.renderTopics()}
								</span>
							}
							targetOrigin={{horizontal: 'right', vertical: 'top'}}
							anchorOrigin={{horizontal: 'right', vertical: 'top'}}
							>
							{this.renderTopics()}

							<MenuItem primaryText="Help" />
							<MenuItem primaryText="Sign out" />
						</IconMenu>
						<IconMenu
							iconButtonElement={
								<span>
									<IconButton
										style={{
											width: '50%',
											margin: '0, 10, 0, 0',
										}}
										iconStyle = {{fill: 'white'}}>
										<MoreVertIcon /></IconButton>
									</span>
								}
								targetOrigin={{horizontal: 'right', vertical: 'top'}}
								anchorOrigin={{horizontal: 'right', vertical: 'top'}}
								>
								{this.renderTopics()}

								<MenuItem primaryText="Help" />
								<MenuItem primaryText="Sign out" />
							</IconMenu>
						</div>
					}
					></AppBar>
			},
			renderTopics() {
				return this.state.topics.slice(0, 4).map(function(topic) {
					return <RaisedButton
						key={topic.id}
						style={{
						position:'relative',
						transition: '.5s ease',
						marginRight: 12,
						top: '50%',
						bottom: 9,
						padding: 0,
					}}
					label={topic.name}/>
				})
			}
		});

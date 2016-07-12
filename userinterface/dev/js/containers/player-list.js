import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class PlayerList extends Component {

  createListItems() {
    return this.props.players.map((player, index) => {
        return (
            <li key={player._id}>{index}. {player.firstName} {player.lastName}</li>
        );
    });
  }

  render() {
    return (
      <ul>
        { this.createListItems() }
      </ul>
    );
  }

}

function mapStateToProps(state) {
    return {
      players: state.players
    };
}

export default connect(mapStateToProps)(PlayerList);

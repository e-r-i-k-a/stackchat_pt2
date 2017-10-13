import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

export function ChannelList (props) {
  return (
    <ul>
      {
        props.channels.map(channel => {
          return (
            <li key={channel.id}>
              <NavLink to={`/channels/${channel.id}`} activeClassName="active">
                <span># {channel.name}</span>
                <span className="badge">{props.messages.filter(message => message.channelId === channel.id).length}</span>
              </NavLink>
             </li>
          );
        })
      }
      <li>
        <NavLink to="/new-channel">Create a channel...</NavLink>
      </li>
    </ul>
  );
}

/** Write your `connect` component below! **/

const mapStateToProps = function (state) {
  return {
    channels: state.channels,
    messages: state.messages
  };
};

const ChannelListContainer = connect(mapStateToProps)(ChannelList);
//connect will return another function - that is passed ChannelList.
//the result is stored in a variable called ChannelListContainer.

export default ChannelListContainer;

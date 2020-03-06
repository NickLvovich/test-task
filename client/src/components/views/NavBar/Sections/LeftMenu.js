import React from 'react';
import { Menu } from 'antd';
import {Link} from 'react-router-dom'


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="users">
      <Link to="/users">Users</Link>
    </Menu.Item>
    <Menu.Item key="friends">
      <Link to="/friends">Friends</Link>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu
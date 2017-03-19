import React, {Component} from 'react'
import {Icon, Dropdown, Menu, Button} from 'antd'
import {observable, action} from 'mobx'
import {observer} from 'mobx-react'
import 'antd/dist/antd.css'


@observer
class Header extends Component {

    @observable userName = 'Ckinmind';


    render() {
        const userMenu = (
            <Menu className="user-menu">
                <Menu.Item key="home">
                    <a href="javascript:void(0)"><Icon type="home"/>我的主页</a>
                </Menu.Item>
                <Menu.Item key="setting">
                    <a href="javascript:void(0)"><Icon type="setting"/>设置</a>
                </Menu.Item>
                <Menu.Item key="logout">
                    <a href="javascript:void(0)"><Icon type="logout"/>退出</a>
                </Menu.Item>
            </Menu>
        );

        return (
            <div className="header">

                <div className="logo">
                    <Icon type="appstore" />
                    <h2>后台管理</h2>
                </div>

                <Icon className="sidebar-toggle" type={'menu-fold'}/>

                <ul className="nav">
                    <li><a href="./test.html">链接一</a></li>
                    <li><a href="./test.html">链接二</a></li>
                    <li><a href="./test.html">链接三</a></li>
                </ul>

                <Dropdown overlay={userMenu} trigger={['click']}>
                    <div className="user-info">
                        <Icon type="user"/>{this.userName}
                    </div>
                </Dropdown>
            </div>
        )
    }
}


export default Header;

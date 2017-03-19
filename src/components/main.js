import React from 'react'
import {Button, Modal, Layout, Tabs} from 'antd'
import Header from './header'
import '../styles/app.styl';

const {Content, Sider} = Layout;


class App extends React.Component {


    slideFolder(e) {
        console.log('test');
    }



    render() {

        let siderProps = {
            className: 'sidebar',
            width: 300,
            collapsible: true,
            collapsedWidth: 0,
            trigger: null,
            collapsed: this.sliderFold
        };

        return (
            <div className="container">
                <Header page="setting" folderHandle={(e) => this.slideFolder(e)}/>
                <Layout>
                    {/*<Sider {...siderProps}>*/}
                        {/*<Sidebar />*/}
                    {/*</Sider>*/}

                    <Content className="setting-container">
                        {/*<Tabs {...tabProps}>*/}
                            {/*{ this.getPanes() }*/}
                        {/*</Tabs>*/}
                    </Content>
                </Layout>
            </div>
        );
    }
}


export default App;

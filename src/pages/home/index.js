import React from 'react'
import store from '../../store/index.js'
import { sendAction } from '../../action/index.js'

export default class Home extends React.Component {
    handleClick = () => {
        const action = sendAction();
        store.dispatch(action);
    }

    componentDidMount() {
        store.subscribe(() => {
            console.log("subscribe" + JSON.stringify(store.getState()));
            this.setState({});
        });
    }

    render() {
        return <div>
            <button onClick={this.handleClick}>按钮</button>
            <div>{ store.getState().value}</div>
        </div>
    }
}
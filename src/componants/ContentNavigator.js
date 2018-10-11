import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


@connect((store) => {
    return {
        content: store.content
    };
})
class ContentNavigator extends Component {
    constructor(props){
        super(props);
    }

    handleClick(evt){
    }

    render() {
        return <div>{JSON.stringify(this.props.content)}</div>;
        /*
        if (this.state.isLoading){
            return <div>Loading...</div>
        }
        else if(this.state.children === []){
            const label = this.props.label;
            return <a onClick={this.handleClick.bind(this)}>{label}</a>;
        }
        else{
            const label = this.props.label;
            let children = this.state.children;
            let to_return = children.map((child) => {
                return <li><ContentNavigatorItem nodeID={child.id} label={child.name} /></li>
            });
            return (
                <div>
                    <a onClick={this.handleClick.bind(this)}>{label}</a>
                    <ul>
                        {to_return}
                    </ul>
                </div>
            );
        }*/
    }
}

export default ContentNavigator;
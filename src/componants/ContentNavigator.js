import React, { Component } from 'react';



class ContentNavigatorItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoading: false,
            children: []
        }
    }
    handleClick(evt){
        console.log(process.env);
        const node_id = this.props.nodeID;
        this.setState({isLoading: true});
        fetch(process.env.REACT_APP_API_URL+'/get/id/children/'+node_id+'?api_key='+process.env.REACT_APP_API_KEY)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
                isLoading: false,
                children: result.result
            });
            console.log(result)
          },
          (error) => {
           console.log(error)
          }
        )
    }

    render() {
        
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
        }
    }
}

export default ContentNavigatorItem;
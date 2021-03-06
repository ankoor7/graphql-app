import React from 'react';
import { connect } from 'react-redux';
import { getGraph } from '../actions/actions';

let Query = React.createClass({
    componentDidMount() {
        this.props.dispatch(
            getGraph("{goldberg(id: 2) {id, character, actor}}")
        );
    },
    render() {
        let dispatch = this.props.dispatch;
        let fetchInProgress = String(this.props.store.get('fetching'));
        let queryText;
        let goldberg = this.props.store.get('data').toObject();
        return (
            <div>
                <p>Fetch in progress: {fetchInProgress}</p>
                <h3>{ goldberg.character }</h3>
                <h4>{ goldberg.id }</h4>
                <p>{ goldberg.actor }</p>
                <p>{ goldberg.role }</p>
                <p>{ goldberg.traits }</p>
                <input ref={(node) => { queryText = node; }} />
                <button onClick={() => { dispatch(getGraph(queryText.value)); }} >
                    query
                </button>
            </div>
        )
    }
});

const mapStateToProps = (state) => {
    return {
        store: state
    }
};

export const QueryContainer = connect(
    mapStateToProps
)(Query);
import React from 'react';
import {Helmet} from 'react-helmet';
import en from './data/en_EN';

const DataContext = React.createContext();

class DataContextProvider extends React.Component {
    state = {
        content: en
    };

    render() {
        return (
            <DataContext.Provider
                value={{
                    content: this.state.content
                }}
            >
                <Helmet htmlAttributes={{lang: this.state.content.lang}} />
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

const DataContextConsumer = DataContext.Consumer;

export {DataContext, DataContextProvider, DataContextConsumer};
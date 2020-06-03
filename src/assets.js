import React from 'react';
import {importAll} from './functions/common';

const AssetContainer = React.createContext();

class AssetContainerProvider extends React.Component {
    state = {
        images: importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/)),
        icons: importAll(require.context('./images', false, /\.(ico)$/))
    };

    render() {
        return (
            <AssetContainer.Provider
                value={{
                    images: this.state.images,
                    icons: this.state.icons
                }}
            >
                {this.props.children}
            </AssetContainer.Provider>
        );
    }
}

const AssetContainerConsumer = AssetContainer.Consumer;

export { AssetContainer, AssetContainerProvider, AssetContainerConsumer };
import React from 'react';

const ColorScheme = React.createContext();

class ColorSchemeProvider extends React.Component {
    state = {
        theme: sessionStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    };

    listener;

    toggleTheme = () => {
        const theme = this.invertTheme();
        sessionStorage.setItem('theme', theme);
        this.setState({theme: theme});
    };

    invertTheme = () => {
        if(this.state.theme == 'light')
            return 'dark';
        else
            return 'light';
    };

    componentDidMount = () => {
        this.listener = window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
            if(e.matches)
                this.setState({theme: 'dark'});
            else
                this.setState({theme: 'light'});
        });
    };

    componentWillUnmount = () => window.matchMedia('(prefers-color-scheme: dark)').removeListener(this.listener);

    render() {
        return (
            <ColorScheme.Provider
                value={{
                    theme: this.state.theme, 
                    toggleTheme: this.toggleTheme
                }}
            >
                {this.props.children}
            </ColorScheme.Provider>
        );
    }
}

const ColorSchemeConsumer = ColorScheme.Consumer;

export { ColorScheme, ColorSchemeProvider, ColorSchemeConsumer };
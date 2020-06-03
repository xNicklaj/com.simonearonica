module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module",
        "babelOptions": {
            "configFile": ".babelrc",
        },
    },
    "plugins": [
        "react",
        "babel"
    ],
    "rules": {
        "babel/semi": 1,
        "react/prop-types": 0
    }
};

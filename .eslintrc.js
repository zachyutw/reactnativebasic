module.exports = {
    "env": {
        "commonjs": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 8,
        "ecmaFeatures": {
            "jsx":true,
            "modules":true,
            "experimentalObjectRestSpread":true
        },
        "sourceType":"module",
    },
    "rules" :{
        "no-const-assign" : "warn",
        "no-this-before-super": "warn",
        "no-undef" : "warn",
        "no-unreachable": "warn",
        "no-unused-vars":"warn",
        "constructor-super":"warn",
        "valid-typeof":"warn",
        "react/jsx-uses-react":2,
        "react/jsx-uses-vars":2,
        "react/react-in-jsx-scope":2
    },
    "plugins":[
        "react"
    ]
}
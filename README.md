# JSON explorer

Simple application for opening and exploring contents of JSON files.

## Features

- Upload JSON files. Files are stored locally in IndexedDB.
- Delete files.
- Explore contents of uploaded files.

## Requirements for files

Files must be in valid JSON format and have following structure:

```json
[
  {
    "data": {
      "prop_1": "value_1",
      "prop_2": "value_2",
      ...
    },
    "kids": {
      "<property name>": {
        "records": [
          {
            "data": {
              ...
            },
            "kids": {
              ...
            }
          }
        ]
      }
    }
  },
  ...
]
```

## Usage

```sh
npm install

npm start
```

## Dependencies
- [FontAwesome](https://fontawesome.com/)
- [classnames](https://github.com/JedWatson/classnames)
- [cuid](https://github.com/ericelliott/cuid)
- [Dexie](http://dexie.org/)
- [history](https://github.com/ReactTraining/history)
- [React Router](https://reacttraining.com/react-router/)
- [Redux](https://redux.js.org/)
- [Redux thunk](https://github.com/gaearon/redux-thunk)
- [Reselect](https://github.com/reduxjs/reselect)
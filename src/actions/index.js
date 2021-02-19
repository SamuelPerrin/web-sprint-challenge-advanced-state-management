import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const FETCH_FAILED = 'FETCH_FAILED';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_ERROR = 'ADD_ERROR';

export const fetchSmurfs = () => {
  return dispatch => {
    console.log("In fetchSmurfs in dispatch")
    dispatch({ type: FETCHING_SMURFS });
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res);
        dispatch({ type: FETCHED_SMURFS, payload: res.data })
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_FAILED, payload: err.toJSON().message })
      })
  }
}

export const addSmurf = smurf => {
  return { type: ADD_SMURF, payload: { ...smurf, id:Math.floor(Math.random()*1000) } }
}

export const addError = message => {
  return { type: ADD_ERROR, payload: message }
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
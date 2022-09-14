import { useReducer, useEffect } from 'react'
import axios from 'axios'

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error',
}

const BASE_URL = 'https://corsanywhere.herokuapp.com/https://www.reed.co.uk/api/1.0/search'

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, jobs: [] }
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs }
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload.error, jobs: [] }
    default:
      return state
  }
}

const userName = process.env.REACT_APP_USERNAME

export default function useFetchJobs(params) {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })

  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source()
    dispatch({ type: ACTIONS.MAKE_REQUEST })
    axios.get(BASE_URL, {
      auth: {
        username: userName,
        password: ''
    },
      cancelToken: cancelToken1.token,
      params: { locationName: 'london', ...params },
    }).then(res => {
      dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data.results } }) 
    }).catch(e => {
      if (axios.isCancel(e)) return
      dispatch({ type: ACTIONS.ERROR, payload: { error: e } }) 
    })
    return () => {
      cancelToken1.cancel()
      // cancelToken2.cancel()
    }
  }, [params])
  
  return state
}
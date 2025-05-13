import {NavigationActions} from '@react-navigation/native'
import Navigator from '../Container/config/routes'

const initialState = Navigator.router.getStateForAction(NavigationActions.init())

export default (state, action) => {
    const nextState = Navigator.route.getStateForAction(action, state)
    return nextState || state;
}
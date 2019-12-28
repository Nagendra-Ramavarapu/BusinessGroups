import { persistStore } from 'redux-persist'
import store from './Store'


const Persistor = persistStore(store)
export default Persistor
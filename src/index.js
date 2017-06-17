import listsReducer from './store/lists/reducer';
import pathsReducer from './store/paths/reducer';
import initializationReducer from './store/initialization/reducer';
import connectionReducer from './store/connection/reducer';

const firekitReducers={
  lists: listsReducer,
  paths: pathsReducer,
  connection: connectionReducer,
  initialization: initializationReducer
}

export { default as FirebaseProvider } from './components/FirebaseProvider';
export { default as FireForm } from './components/FireForm';
export { default as withFirebase } from './withFirebase';
export { default as connectionReducer } from './store/connection/reducer';
export { default as listsReducer } from './store/lists/reducer';
export { default as pathsReducer } from './store/paths/reducer';
export { default as initializationReducer } from './store/initialization/reducer';
export default firekitReducers;
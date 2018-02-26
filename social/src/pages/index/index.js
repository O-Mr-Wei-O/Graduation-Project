'use strict';

import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import createStoreWithMdware from './store/index';

import {Router, hashHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import reducers from './reducers/index';

import './index.scss';

/**
    @author Mothpro
    这是一个使用react技术搭建的redux + router演示页面
**/
const store = createStoreWithMdware(reducers);
const history = syncHistoryWithStore(hashHistory, store);
function render(){
    ReactDom.render(
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>,
        document.getElementById('container')
    );
}


render();

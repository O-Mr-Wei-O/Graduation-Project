
//从./containers/index.js导入
import {Demo} from './containers/index';

const createRoutes = {
    path: '/',
    // component: Layout,
    indexRoute: {component: Demo},
    childRoutes: [
		{
			path: 'demo',
			component: Demo
		}
    ]
}
export default createRoutes

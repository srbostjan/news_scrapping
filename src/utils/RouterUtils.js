import routes from '../server/routes';
import Error404 from '../pages/Error404';

const getHash = () => {
    return location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
}

const resolveRoute = (hash) => {
    const route = hash === '/' ? hash : hash === 'category' ? '/category/:name'  :'/:id';
    return route;
}

async function toRender(){
    const hash = getHash();
    const route = resolveRoute(hash);
    const render = routes[route] || Error404;
    return render();
}

export { toRender };
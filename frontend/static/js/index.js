import Activity from "./views/Activity.js";
import Map from "./views/Map.js"; 
import Time from "./views/Time.js"; 

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: '/', view: Activity },
        { path: '/map', view: Map },
        { path: '/time', view: Time }
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    const view = new match.route.view();
    document.getElementById('first').innerHTML = await view.getHtml();
    await view.executeViewScript();
}

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    router();
});

document.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        navigateTo(e.target.href);
    }
});

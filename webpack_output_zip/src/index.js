import _ from 'lodash';
function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack', process.env.APP_NAME], ' ');

    return element;
}

document.body.appendChild(component());
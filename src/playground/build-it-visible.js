
const app = {
    title: "Visibility",
    text: "What to do?",
    viewState: true
}

const onToggleVisibility = () => {
    app.viewState = !app.viewState;
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onToggleVisibility}>
                {app.viewState ? 'Hide Details' : 'Show Details'}
            </button>
            {app.viewState && (
                <p>Toggle me.</p>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();
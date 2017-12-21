
const app = {
    title: "Indecision",
    subtitle: "What to do?",
    options: ['test']
}

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
    }
};

const onRemoveAll = () => {
    app.options = [];
}

const onMakeDecision = () => {
    const randumNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randumNum];
    alert(option);
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Yes" : "No"}</p>

        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
        <button onClick={onRemoveAll}>Remove All</button>

        <ol>
            { app.options.map((option) => <li key={option}>{option}</li>) }
        </ol>

        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
        </form>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
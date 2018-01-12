class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      title: "Visibility",
      viewState: true
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        viewState: !prevState.viewState
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleToggleVisibility}>
            {this.state.viewState ? 'Hide Details' : 'Show Details'}
        </button>
        { this.state.viewState && ( <p>Toggle me.</p> ) }
      </div>
    );
  }

}

ReactDOM.render(<Visibility />, document.getElementById('app'));
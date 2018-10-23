import * as React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      values: [],
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    if (this.state.value.length > 0) {
      const values = [...this.state.values];
      const { value } = this.state;

      values.push(value);
      this.setState({ value: '', values });
    }
    event.preventDefault();
  };

  random = () => {
    alert(`Le grand gagnant est : ${this.state.values[Math.floor(Math.random() * Math.floor(this.state.values.length))]}`);
  };

  render() {
    return (
      <div className="App container">
        <h3>Tirage au sort</h3>

        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col offset-s4 s3">
              <input id="name" className="validate" type="text" value={this.state.value} onChange={this.handleChange} />
              <label htmlFor="name">Nom :</label>
            </div>
            <div className="col s1">
              <button className="btn waves-effect waves-light" type="submit" name="add">Ajouter
                <i className="material-icons right">add</i>
              </button>
            </div>
          </div>
        </form>

        <ul className="collection">
          {this.state.values.map(item => (
            <li className="collection-item">{item}</li>
          ))}
        </ul>

        {this.state.values.length > 1 && (
          <button
            className="btn tooltipped waves-effect waves-light pulse"
            data-position="bottom"
            data-tooltip="Clique pour tirer au sort !"
            onClick={this.random}
            name="draw"
          >
            Tirer au sort
            <i className="material-icons right">send</i>
          </button>
        )}
      </div>
    );
  }
}

export default App;

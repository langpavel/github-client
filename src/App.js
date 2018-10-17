import React, { Component } from 'react';
import prettier from 'prettier/standalone';
import babylon from 'prettier/parser-babylon';
import GraphiQL from '@langpavel/graphiql';
import '@langpavel/graphiql/graphiql.css';
import './App.css';

let ghToken = localStorage.getItem('ghToken');

function setGitHubToken(token) {
  ghToken = token;
  localStorage.setItem('ghToken', token);
  console.log('New token set');
}

function graphQLFetcher(graphQLParams) {
  return fetch('https://api.github.com/graphql', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + ghToken,
    },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

GraphiQL.formatResult = response =>
  prettier.format(JSON.stringify(response), {
    parser: 'json',
    plugins: [babylon],
  });

const CustomTools = () => (
  <span className="Toolbar-token">
    <form
      onSubmit={e => {
        e.preventDefault();
        setGitHubToken(e.target.ghToken.value);
      }}>
      <label>
        <a
          href="https://github.com/settings/tokens"
          target="_blank"
          rel="noopener noreferrer">
          GitHub token
        </a>
        {': '}
        <input name="ghToken" type="password" />
      </label>
    </form>
  </span>
);

GraphiQL.Toolbar = props => (
  <div className="toolbar">
    {props.children}
    <CustomTools />
  </div>
);

class App extends Component {
  render() {
    return <GraphiQL fetcher={graphQLFetcher} />;
  }
}

export default App;

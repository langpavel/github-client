import React, { Component } from 'react';
import prettier from 'prettier/standalone';
import babylon from 'prettier/parser-babylon';
import GraphiQL from '@langpavel/graphiql';
import '@langpavel/graphiql/graphiql.css';
import './App.css';

let apiUrl =
  localStorage.getItem('graphiql:apiUrl') || 'https://api.github.com/graphql';
let apiToken =
  localStorage.getItem('graphiql:token:' + apiUrl) ||
  localStorage.getItem('ghToken');

function setUrlToken(url, token) {
  apiUrl = url;
  apiToken = token;
  localStorage.setItem('graphiql:apiUrl', url);
  localStorage.setItem('graphiql:token:' + url, token);
  console.log('New token set for url', url);
}

const fetcher = graphQLParams => {
  return fetch(apiUrl, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + apiToken,
    },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
};

GraphiQL.formatResult = response =>
  prettier.format(JSON.stringify(response), {
    parser: 'json',
    plugins: [babylon],
  });

class CustomTools extends Component {
  state = {
    url: apiUrl,
    token: apiToken,
  };

  handleSubmit = e => {
    e.preventDefault();
    const target = e.target;
    const url = target.url.value;
    const token = target.token.value;
    setUrlToken(e.target.url.value, e.target.token.value);
    this.setState({ url, token });
  };

  handleUrlChange = e => {
    const url = e.target.value;
    const key = 'graphiql:token:' + url;
    const token = localStorage.getItem(key) || '';
    this.setState({ url, token });
  };

  handleTokenChange = e => {
    const token = e.target.value;
    this.setState({ token });
  };

  render() {
    return (
      <span className="Toolbar-token">
        <form onSubmit={this.handleSubmit}>
          <label>
            {'URL: '}
            <input
              name="url"
              type="text"
              value={this.state.url}
              autoComplete="graphql-api url"
              onChange={this.handleUrlChange}
            />
          </label>{' '}
          <label>
            <a
              href="https://github.com/settings/tokens"
              target="_blank"
              rel="noopener noreferrer">
              bearer
            </a>
            {': '}
            <input
              name="token"
              type="password"
              onChange={this.handleTokenChange}
              value={this.state.token}
              autoComplete="graphql-api-token bearer-token token"
            />
          </label>{' '}
          <button type="submit">Set</button>
        </form>
      </span>
    );
  }
}

GraphiQL.Toolbar = props => (
  <div className="toolbar">
    {props.children}
    <CustomTools />
  </div>
);

class App extends Component {
  render() {
    return <GraphiQL fetcher={fetcher} />;
  }
}

export default App;

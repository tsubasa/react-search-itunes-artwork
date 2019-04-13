import * as React from 'react';

import Search from './Search';
import Result from './Result';

// types
interface IState {
  isFeching: boolean;
  data: {
    resultCount?: number;
    results?: {}[];
  };
}

export interface ISearchParams {
  term: string;
  country: 'en' | 'jp';
  media?:
    | 'movie'
    | 'podcast'
    | 'music'
    | 'musicVideo'
    | 'audiobook'
    | 'shortFilm'
    | 'tvShow'
    | 'software'
    | 'ebook'
    | 'all';
  entity?: 'musicArtist' | 'musicTrack' | 'album' | 'musicVideo' | 'mix' | 'song';
}

// components
export default class App extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      isFeching: false,
      data: {}
    };

    this.fetchData = this.fetchData.bind(this);
  }

  private fetchData(params: ISearchParams): void {
    if (Object.keys(params).length) {
      this.setState({
        isFeching: true
      });

      const url = new URL('https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search');
      url.search = new URLSearchParams(params as {}).toString();

      fetch(url.toString(), {
        mode: 'cors'
      })
        .then(
          (response: any): {} => {
            return response.json();
          }
        )
        .then(
          (response: any): void => {
            this.setState({
              isFeching: false,
              data: response
            });
          }
        )
        .catch((): void => this.setState({ isFeching: false, data: {} }));
    }
  }

  public render(): React.ReactElement {
    const { isFeching, data } = this.state;

    return (
      <React.Fragment>
        <h1>iTunes アルバムアートワーク検索ツール</h1>
        <Search fetchData={this.fetchData} />
        <Result isFeching={isFeching} data={data} />
      </React.Fragment>
    );
  }
}

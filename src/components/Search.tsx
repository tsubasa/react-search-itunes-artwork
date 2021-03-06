import * as React from 'react';
import styled from 'styled-components';

import { ISearchParams } from './App';

// types
interface IProps {
  fetchData: (params: ISearchParams) => void;
}

type IState = ISearchParams;

// styles
const InputWrapper = styled.div`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
`;

// helpers
const debounce = (fn: any, delay: number = 1000): (() => void) => {
  let timer: any;
  /* eslint-disable-next-line func-names, no-unused-vars */
  return function(this: any): void {
    const context = this;
    const args = arguments; /* eslint-disable-line prefer-rest-params */
    clearTimeout(timer);
    timer = setTimeout((): void => {
      fn.apply(context, args);
    }, delay);
  };
};

// components
export default class Search extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);

    this.state = {
      term: '',
      country: 'jp',
      media: 'music',
      entity: 'album'
    };

    this.fetchData = debounce(this.fetchData.bind(this));
    this.handleChange = this.handleChange.bind(this);
  }

  private fetchData(): void {
    const { fetchData } = this.props;
    fetchData(this.state);
  }

  private handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    if (Object.keys(this.state).includes(e.target.name)) {
      this.setState(
        { [e.target.name]: e.target.value } as Pick<IState, keyof IState>,
        (): void => {
          this.fetchData();
        }
      );
    }
  }

  public render(): React.ReactElement {
    return (
      <InputWrapper>
        <Input defaultValue="" name="term" onChange={this.handleChange} placeholder="アルバム名を入力" />
      </InputWrapper>
    );
  }
}

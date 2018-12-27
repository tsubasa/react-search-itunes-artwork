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
const debounce = (fn: any, delay: number = 1000) => {
  let timer: any;
  return function(this: any) {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

// components
export default class Search extends React.Component<IProps, IState> {
  constructor(props: IProps) {
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

  public render() {
    return (
      <InputWrapper>
        <Input defaultValue="" name="term" onChange={this.handleChange} placeholder="アルバム名を入力" />
      </InputWrapper>
    );
  }

  private fetchData() {
    const { fetchData } = this.props;
    fetchData(this.state);
  }

  private handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState(
      {
        ...this.state,
        [e.target.name]: e.target.value
      },
      () => {
        this.fetchData();
      }
    );
  }
}
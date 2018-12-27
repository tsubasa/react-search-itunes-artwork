import * as React from 'react';
import styled from 'styled-components';

import Options from './Options';

// variables
const thumbImageSize = 150;

// types
interface IProps {
  isFeching: boolean;
  data: any;
}

interface IState {
  size: React.ReactText;
  quality: React.ReactText;
}

// styles
const ItemTitleText = styled.h6`
  margin: 0;
  padding: 5px;
  font-size: 1rem;
  font-weight: normal;
  color: rgb(255, 255, 255);
`;

const ItemTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-weight: normal;
  color: rgb(255, 255, 255);
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Item = styled.div`
  position: relative;
  width: ${thumbImageSize}px;
  height: ${thumbImageSize}px;
  margin: 10px;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 5px 12px 1px rgba(0, 0, 0, 0.3), 0 3px 10px 2px rgba(0, 0, 0, 0.12);
  }

  &:hover ${ItemTitle} {
    opacity: 1;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// components
export default class Result extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      size: 1500,
      quality: 100
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    const { isFeching, data } = this.props;

    return (
      <React.Fragment>
        <Options handleChange={this.handleChange} />
        <ItemWrapper>
          {isFeching ? (
            <h1>Searching...</h1>
          ) : (
            <React.Fragment>
              {data.hasOwnProperty('results') &&
                data.results &&
                data.results.map((item: any, index: number) => {
                  const { collectionName, artworkUrl100 } = item;
                  return (
                    <Item key={index} onClick={this.handleClick(artworkUrl100)}>
                      <img src={this.changeImageSize(artworkUrl100, thumbImageSize, 80)} alt={collectionName} />
                      <ItemTitle>
                        <ItemTitleText>{collectionName}</ItemTitleText>
                      </ItemTitle>
                    </Item>
                  );
                })}
            </React.Fragment>
          )}
        </ItemWrapper>
      </React.Fragment>
    );
  }

  private handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  private handleClick = (url: string) => (e: React.MouseEvent<HTMLElement>) => {
    window.open(this.changeImageSize(url, this.state.size, this.state.quality), '_blank');
  };

  private changeImageSize = (url: string, size: React.ReactText, quality: React.ReactText) => url.replace(/^(https?.+\/source\/)(.+)(\.\w+)$/, `$1${size}x0w-${quality}$3`);
}

import * as React from 'react';
import styled from 'styled-components';

// types
interface IProps {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

// styles
const OptionWrapper = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

// components
export default class Search extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  public render() {
    return (
      <OptionWrapper>
        <Label>
          サイズ:
          <select name="size" onChange={this.handleChange}>
            <option value="1500">1500</option>
            <option value="1000">1000</option>
            <option value="900">900</option>
            <option value="800">800</option>
            <option value="700">700</option>
            <option value="500">500</option>
          </select>
        </Label>
        <Label>
          画質:
          <select name="quality" onChange={this.handleChange}>
            <option value="100">100</option>
            <option value="90">90</option>
            <option value="80">80</option>
          </select>
        </Label>
      </OptionWrapper>
    );
  }

  private handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    this.props.handleChange(e);
  }
}

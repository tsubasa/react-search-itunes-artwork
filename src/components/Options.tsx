import * as React from 'react';
import styled from 'styled-components';

// types
interface IProps {
  handleChange: (name: 'size' | 'quality') => (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

// styles
const OptionWrapper = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

// components
const Search: React.FC<IProps> = props => {
  const { handleChange } = props;

  return (
    <OptionWrapper>
      <Label>
        サイズ:
        <select onChange={handleChange('size')}>
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
        <select onChange={handleChange('quality')}>
          <option value="100">100</option>
          <option value="90">90</option>
          <option value="80">80</option>
        </select>
      </Label>
    </OptionWrapper>
  );
};

export default Search;

import { SearchIcon } from '../assets';
import theme from '../themes/theme';
import styled from 'styled-components';

interface SearchInputProps {
  placeholder: string;
  onChange: (text: string) => void;
  name?: string;
  value?: string;
}

const SearchInput = ({
  placeholder,
  onChange,
  name,
  value,
}: SearchInputProps) => {
  return (
    <InputContainer>
      <img src={SearchIcon} alt="" />
      <InputContent
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputContainer>
  );
};

export default SearchInput;

const InputContent = styled.input`
  display: flex;
  border: none;
  width: 100%;
  outline: none;
  border: none;

  &::placeholder {
  }
`;

const InputContainer = styled.div`
  position: sticky;
  top: 3%;
  display: flex;
  width: 100%;
  border-radius: 8px;
  padding: 10px 16px;
  gap: 12px;
  border: 1px solid ${theme.colors.light.gray50};

  &:hover {
  }

  &:focus-within {
  }
`;

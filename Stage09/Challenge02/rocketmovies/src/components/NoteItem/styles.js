import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_900};
  color: ${({ theme, isNew }) => (isNew ? theme.GRAY_300 : theme.COLORS.WHITE)};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};
  border-radius: 10px;
  padding: 0 16px;

  > input {
    height: 56px;
    max-width: 95px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
  > button {
    border: none;
    background: none;
  }
`

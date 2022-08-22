import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 200px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border: none;
  resize: none;

  padding: 19px 16px;
  border-radius: 10px;

  align-self: stretch;
`

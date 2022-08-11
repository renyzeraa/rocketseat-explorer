import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 56px;

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.PINK : '#0D0C0F'};
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.BACKGROUND_900 : theme.COLORS.PINK};

  border-radius: 10px;
  border: 0;
  padding: 16px 0;

  font-weight: 500;
  font-size: 16px;
  line-height: 21px;

  &:disabled {
    opacity: 0.6;
  }
`

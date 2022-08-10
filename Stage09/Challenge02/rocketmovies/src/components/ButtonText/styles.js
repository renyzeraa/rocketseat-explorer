import styled from 'styled-components'

export const Container = styled.button`
  border: 0;
  background: none;

  color: ${({ theme }) => theme.COLORS.PINK};

  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  display: flex;
  align-items: center;
`

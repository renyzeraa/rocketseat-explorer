import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 15px;
  width: 100%;
  margin-bottom: 24px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border-radius: 16px;

  > h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: justify;
  }

  > div {
    display: flex;
    gap: 8px;
  }
`

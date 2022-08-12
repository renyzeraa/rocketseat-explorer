import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  main {
    > Link {
      background: red;
    }
    max-width: 1120px;
    margin: 40px auto 0;
    padding: 0 60px;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    width: 20px;
    height: 20px;
  }

  p {
    font-size: 16px;
    text-align: justify;
    line-height: 24px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 600px;
  margin-top: 24px;
  padding-right: 10px;

  .title {
    display: flex;
  }
  h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
    margin-right: 19px;
  }

  div .stars-content {
    display: flex;
    align-items: center;
  }

  > div .stars-content svg {
    margin-right: 10px;
  }

  > .autor-container {
    display: flex;
    margin: 24px 0 40px 0;
    align-items: center;
    gap: 12px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > .autor-container img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .tags-container {
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 32px 0;
    gap: 8px;
  }

  /*  SCROLL  */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 100px;
  }

  ::-webkit-scrollbar-button:start:decrement {
    height: 20px;
    display: block;
    background-color: transparent;
  }

  ::-webkit-scrollbar-button:end:increment {
    height: 20px;
  }
`

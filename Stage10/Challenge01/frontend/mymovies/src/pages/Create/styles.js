import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  main {
    max-width: 1120px;
    margin: 40px auto 0;
    padding: 0 60px;

    section {
      max-height: 700px;
      overflow-x: auto;

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
        height: 100px;
        display: block;
        background-color: transparent;
      }
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 24px;
  padding-right: 10px;

  gap: 40px;

  > h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
  }

  > div {
    display: flex;
    gap: 20px;
  }

  > h2 {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > .note-content {
    background-color: #0d0c0f;
    padding: 16px;
    align-items: center;
    justify-content: start;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 8px;
  }

  > button {
    margin: 0 auto;
    width: 400px;
  }
`

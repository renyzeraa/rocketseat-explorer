import styled from 'styled-components'

export const Container = styled.div`
  main {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    margin: 40px auto;
  }

  .content {
    button {
      max-width: 207px;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cards {
    padding: 0 8px 0 0;
    margin-top: 40px;
    max-height: 620px;
    overflow-y: auto;
    align-items: flex-start;

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
      display: block;
      background-color: transparent;
    }
  }
`

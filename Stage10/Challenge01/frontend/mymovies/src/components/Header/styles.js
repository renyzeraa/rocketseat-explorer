import styled from 'styled-components'

export const Container = styled.header`
  .header {
    width: min(100%, 1120px);
    height: 116px;
    margin: 0 auto;
    padding: 0 64px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > h1 {
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-right: 32px;
    }

    > .profile {
      display: flex;
      flex-direction: row;
      align-items: center;
      align-content: center;

      > div {
        display: grid;
        text-align: right;
        margin-right: 10px;
        width: 115px;

        a:first-child {
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-weight: 700;
        }
        a {
          color: ${({ theme }) => theme.COLORS.GRAY_100};
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
        }
      }

      img {
        width: 64px;
        height: 64px;
        padding: 4px;
        border: 1px solid #3e3b47;
        border-radius: 50%;
      }

      img:hover {
        transition: 0.5s;
        transform: scale(1.1);
      }
    }
  }

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
`

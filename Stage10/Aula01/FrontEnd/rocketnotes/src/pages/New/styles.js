import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'form';

  > main {
    grid-area: form;
    overflow-y: auto;
    padding: 64px 0;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export const Form = styled.form`
  max-width: 550px;
  margin: 0 auto;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 36px;

    a {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 20px;
    }
  }
`

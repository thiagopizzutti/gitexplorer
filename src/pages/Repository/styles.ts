import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: linear 0.3s;

    &:hover {
      color: #666;
    }
  }

  svg {
    margin-right: 4px;
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 60%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 36px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    margin-top: 40px;
  }

  li {
    list-style: none;

    & + li {
      margin-left: 80px;
    }

    strong {
      display: block;
      font-size: 36px;
      color: #3d3d4d;
    }
    span {
      display: block;
      margin-top: 4px;
      color: #6c6c80;
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    box-shadow: 2px 2px 2px 2px grey;
    transition: linear 0.3s;

    & + a {
      margin-top: 20px;
    }

    display: flex;
    align-items: center;

    &:hover {
      transform: translateY(-10px);
      transform: translateX(10px);
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

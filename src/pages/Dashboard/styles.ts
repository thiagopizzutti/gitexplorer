import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 48px;
  color: #a3a3a3;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

interface FormProps {
  hasError: boolean;
}

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    font-size: 30px;
    box-shadow: 1px 1px 3px 2px grey;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: red;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background-image: linear-gradient(
      to top,
      #a7a6cb 0%,
      #8989ba 52%,
      #8989ba 100%
    );
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    transition: background 0.9s;
    box-shadow: 1px 1px 3px 2px grey;

    &:hover {
      background: ${shade(0.2, '#8989ba')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  margin-top: 16px;
  color: #c53030;
  font-weight: bold;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

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

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
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

import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  max-width: 560px;
`;

export const Wrapput = styled.div`
  align-items: center;
  background: var(--color-primary-700);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  width: 100%;
`;

export const Mainput = styled.input`
  background: none;
  border: 0;
  color: #fff;
  font-size: 16px;
  outline: 0;
  padding: 10px 5px;
  width: 100%;

  &::placeholder {
    color: #8b93a7;
  }

  &:disabled {
    cursor: pointer;
  }
`;

export const Digiput = styled.button`
  background: none;
  aspect-ratio: 1 / 1;
  height: 44px;
  display: grid;
  place-items: center;
`;

export const Buttput = styled.button`
  background: none;
  aspect-ratio: 1 / 1;
  height: 44px;
  display: grid;
  place-items: center;

  &:active {
    transform: translateY(-1px);
  }
`;

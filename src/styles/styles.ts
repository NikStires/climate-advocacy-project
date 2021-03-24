import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0rem 0rem 0rem;
  background: white;
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;

export const SecondContainer = styled(Container)`
  background: #8ddfb9;
`;

export const ContentLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 0rem 0rem 1rem 2rem;
  img {
    padding-top: 2rem;
  }
  p {
    padding: 0rem 2rem 0rem 0rem;
  }
  @media (max-width: 1300px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const ContentRight = styled(ContentLeft)`
  padding: 0rem 2rem 1rem 0rem;
`;

export const Cite = styled.h6`
  margin-top: 0rem;
  font-style: italic;
  width: 50%;
  @media (max-width: 1300px) {
    width: 100%;
  }
`;

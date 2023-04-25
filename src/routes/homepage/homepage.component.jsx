import { useNavigate } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import styled from 'styled-components';

export const Homepage = () => {
  const [text] = useTypewriter({
    words: ['Développeur Web'],
    typeSpeed: 60,
  });
  const navigate = useNavigate();
  return (
    <>
      <HomepageContainer>
        <Name>RUDDY AUTEM</Name>
        <Activity>
          {text}
          <Cursor />
        </Activity>
        <Buttons>
          <button onClick={() => navigate('/projects')}>PROJETS</button>
          <button onClick={() => navigate('/contact')}>CONTACT</button>
        </Buttons>
      </HomepageContainer>
    </>
  );
};

export default Homepage;

const HomepageContainer = styled.div`
  display: flex;
  height: calc(100% - 25px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Consolas';
  color: var(--pf-almostwhite);
  overflow-x: hidden;
`;

const Name = styled.div`
  display: flex;
  /* width: max-content; */
  font-size: 10.5em;
  font-weight: 600;
  margin-bottom: 0.5rem;
  line-height: 1;
  @media (max-width: 1400px) {
    font-size: 6em;
  }

  @media (max-width: 620px) {
    font-size: 3rem;
  }
`;
const Activity = styled.div`
  display: flex;
  width: max-content;
  color: var(--pf-orange);
  font-size: 6rem;
  font-weight: 300;
  /* margin-bottom: 6rem; */
  span:nth-child(2) {
    display: flex;
    width: 0;
  }
  @media (max-width: 1400px) {
    font-size: 4em;
  }

  @media (max-width: 620px) {
    font-size: 2rem;
  }
`;

const Buttons = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  & button {
    cursor: pointer;
    background-color: var(--pf-orange);
    color: var(--pf-almostwhite);
    border: none;
    width: 250px;
    height: 80px;
    font-size: 2em;
    transition: ease-in-out 0.3s;

    &:hover {
      color: white;
      border: 2px solid white;
      box-sizing: border-box;
      box-shadow: 12px 17px 16px 6px rgba(0, 0, 0, 0.1);
    }

    &:nth-of-type(2) {
      background-color: transparent;
      border: 2px solid var(--pf-orange);
      &:hover {
        color: var(--pf-orange);
      }
    }
  }
  @media (max-width: 1400px) {
  }
  @media (max-width: 620px) {
    button {
      width: 200px;
    }
  }
  @media (max-width: 450px) {
    button {
      width: 150px;
      font-size: 1.5em;
    }
  }
`;

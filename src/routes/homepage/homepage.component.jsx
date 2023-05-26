import { useNavigate } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import styled from 'styled-components';

const Homepage = () => {
  const [text] = useTypewriter({
    words: ['Développeur Web'],
    typeSpeed: 60,
  });
  const navigate = useNavigate();
  return (
    <HomepageContainer>
      <Name>RUDDY AUTEM</Name>
      <ActivityContainer>
        {text}
        <Cursor />
      </ActivityContainer>
      <ButtonsContainer>
        <Button onClick={() => navigate('/projects')}>PROJETS</Button>
        <Button onClick={() => navigate('/contact')}>CONTACT</Button>
      </ButtonsContainer>
    </HomepageContainer>
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

  & > div {
    margin-bottom: 0.5rem;
  }
`;

const Name = styled.div`
  font-size: 10.5em;
  font-weight: 600;
  line-height: 1;
  transition: ease-in-out 0.3s;
  

  @media (max-width: 1400px) {
    font-size: 6em;
  }

  @media (max-width: 620px) {
    font-size: 3rem;
  }
`;

const ActivityContainer = styled.div`
  color: var(--pf-orange);
  font-weight: 300;
  transition: ease-in-out 0.3s;
  font-size: 6rem;

  @media (max-width: 1400px) {
    font-size: 4em;
  }

  @media (max-width: 620px) {
    font-size: 2rem;
  }
`;

const ButtonsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11),
    0 8px 16px rgba(0, 0, 0, 0.11);
`;

const Button = styled.button`
  margin: 0 2px;
  outline: 2px solid var(--pf-orange);
  box-sizing: border-box;
  cursor: pointer;
  background-color: var(--pf-orange);
  color: var(--pf-almostwhite);
  border: none;
  width: 230px;
  height: 70px;
  font-size: 2em;
  transition: ease-in-out 0.3s;
  

  &:hover {
    color: white;
    outline: 2px solid white;
  }

  &:nth-of-type(2) {
    background-color: transparent;
    &:hover {
      color: var(--pf-orange);
    }
  }
  @media (max-width: 1400px) {
    width: 180px;
    height: 55px;
    font-size: 1.7em;
  }

  @media (max-width: 620px) {
    width: 120px;
    height: 40px;
    font-size: 1.1em;
  }
`;

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
          <button
            onClick={() =>
              (window.location.href = 'https://github.com/panderawan')
            }
          >
            GITHUB
          </button>
          <button
            onClick={() =>
              (window.location.href = 'https://www.linkedin.com/in/ruddyautem/')
            }
          >
            LINKEDIN
          </button>
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
  color: hsla(100, 100%, 100%, 0.8);
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
  color: hsl(20, 96%, 69%);
  font-size: 6rem;
  font-weight: 300;
  margin-bottom: 6rem;
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
  gap: 30px;

  & button {
    color: white;
    font-family: 'Consolas';
    font-size: 4.5rem;
    width: 350px;
    height: 200px;

    font-weight: 600;
    border: none;
    cursor: pointer;
    background: hsl(20, 96%, 69%, 80);
    border-radius: 3px;
  }
  & a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: white;
  }
  & button:hover {
    border: 3px solid white;
  }
  @media (max-width: 1400px) {
    & button {
      font-size: 3rem;
      width: 250px;
      height: 150px;
    }
  }
  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    button {
      width: 300px;
      height: 100px;
    }
  }
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    > button {
      font-size: 3rem;
      width: 250px;
      height: 100px;
    }
  }
`;

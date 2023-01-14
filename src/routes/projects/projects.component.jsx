import { useTypewriter, Cursor } from 'react-simple-typewriter';
import styled from 'styled-components';

export const Projects = () => {
  const [text] = useTypewriter({
    words: ['En Construction'],
    typeSpeed: 60,
  });
  return (
    <>
      <ProjectsContainer>
        <ProjectsName>PAGE</ProjectsName>

        <ProjectsActivity>
          {text}
          <Cursor />
        </ProjectsActivity>
      </ProjectsContainer>
    </>
  );
};

export default Projects;

const ProjectsContainer = styled.div`
  display: flex;
  font-family: 'Consolas';
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: hsla(100, 100%, 100%, 0.8);
`;

const ProjectsName = styled.div`
  display: flex;
  justify-content: center;
  font-size: 10.5em;
  font-weight: 600;
  margin-bottom: 0.5rem;
  line-height: 1;

  @media (max-width: 1280px) {
    font-size: 6em;
  }
  @media (max-width: 768px) {
    font-size: 4em;
  }
  @media (max-width: 300px) {
    font-size: 2rem;
  }
`;

const ProjectsActivity = styled.div`
  display: flex;
  justify-content: center;
  color: hsl(20, 96%, 69%);
  font-size: 6rem;
  font-weight: 300;
  margin-bottom: 3rem;
  span:nth-child(2) {
    display: flex;
    width: 0;
  }
  @media (max-width: 1280px) {
    font-size: 4em;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 500px) {
  font-size: 2.0rem;  
  }
  @media (max-width: 300px) {
    font-size: 1rem;
  }
`;

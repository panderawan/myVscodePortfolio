import projects from './projects.json';
import Card from './../../components/card/card.jsx';
import styled from 'styled-components';

export const Projects = () => {
  return (
    <>
      <MyProjects>Mes Projets</MyProjects>
      <Container>
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </Container>
    </>
  );
};

export default Projects;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  margin: 1.5rem 0;
  @media (max-width: 420px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const MyProjects = styled.h1`
  font-family: Consolas;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding-top: 20px;
`;

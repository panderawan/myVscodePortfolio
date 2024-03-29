import styled from 'styled-components';
import Button from './../button/button';

const Card = ({ project }) => {
  return (
    <CardContainer>
      <img src={project.image} alt='' />
      <CardContent>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <ProjectTag>
          {project.tags.map((tag) => (
            <Tag key={tag} tag={tag}>
              {tag}
            </Tag>
          ))}
        </ProjectTag>
      </CardContent>
      <ButtonsContainer>
        <Button
          name='DEMO'
          onClick={() => (window.location.href = project.demo)}
        />
        <Button
          name='CODE SOURCE'
          onClick={() => (window.location.href = project.source)}
        />
      </ButtonsContainer>
    </CardContainer>
  );
};

export default Card;

const tagColor = {
  react: '#64d9f9',
  redux: '#764bbe',
  firebase: '#fbca3f',
  'styled-components': '#f60055',
  'material-ui': '#00affe',
  mysql: '#f49310',
  axios: '#3d68ec',
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  background-color: #1e202c;
  color: #ccc;
  border-radius: 10px;
  text-align: center;
  padding: 0 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px 0px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px 0px inset;
  > img {
    margin-top: 10px;
    height: 300px;
    cursor: pointer;
    border-radius: 10px;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
    border: 2px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px 0px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px 0px inset;
    &:hover {
      filter: brightness(125%);
      border: 2px solid hsla(20, 96%, 69%, 0.7);
    }
  }
`;
const CardContent = styled.div`
  font-family: Consolas;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > h2 {
    margin-bottom: 0px;
  }
  > p {
    font-size: 15px;
  }
`;
const ProjectTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px 15px;
  /* margin-top: auto; */
`;

const Tag = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0 10px;
  font-size: 12px;
  font-weight: 800;
  border: 1px solid ${(props) => tagColor[props.tag] || tagColor.default};
  border-radius: 5px;
  padding: 2px 8px;
  margin: 3px;

  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) =>
      tagColor[props.tag] + '66' || tagColor.default};
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  margin-top: auto;
  > button {
    margin: 0 3px;
  }
`;

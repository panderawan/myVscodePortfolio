import styled from 'styled-components';

const contactItems = [
  {
    social: 'email',
    link: 'ruddy.autem@gmail.com',
    href: 'mailto:ruddy.autem@gmail.com',
  },
  {
    social: 'linkedIn',
    link: 'ruddyautem',
    href: 'https://www.linkedin.com/in/ruddyautem/',
  },
  {
    social: 'github',
    link: 'panderawan',
    href: 'https://github.com/panderawan/',
  },
];

const Contact = () => {
  return (
    <ContactsContainer>
      <Line>
        <Social>.social </Social> &#123;
      </Line>
      {contactItems.map((item, index) => (
        <Line key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;
          {item.social} :{''}
          <a href={item.href} rel='noopener'>
            {item.link}
          </a>
          ;
        </Line>
      ))}
      <Line>&#125;</Line>
    </ContactsContainer>
  );
};

export default Contact;

const ContactsContainer = styled.div`
  counter-reset: line;
  font-size: 1.5rem;
  line-height: 0.7rem;
  font-family: 'Consolas';

  & a {
    color: rgb(169, 220, 118);
    text-decoration: none;
    margin-left: 1rem;
  }
  & a:hover {
    text-decoration: underline;
  }

  & p {
    margin-left: 1.2em;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

const Line = styled.p`
  color: hsla(100, 100%, 100%, 0.8);
  font-size: 1em;
  &::before {
    content: counter(line);
    counter-increment: line;
    margin-right: 2rem;
    color: hsla(100, 100%, 100%, 0.2);
  }
`;

const Social = styled.span`
  margin-left: 0;
  color: rgb(169, 220, 118);
`;

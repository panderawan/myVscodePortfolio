import Contact from '../../components/contact/contact.component';
import styled from 'styled-components';

const Contactme = () => {
  return (
    <>
      <ContactMe>Si vous souhaitez me contacter :</ContactMe>
      <Contact />
    </>
  );
};

export default Contactme;

const ContactMe = styled.div`
  display: flex;
  margin-top: 1em;
  margin-left: 1em;
  margin-bottom: 1em;
  font-family: 'Consolas';
  font-size: 1.9rem;
  font-weight: 700;
  color: white;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

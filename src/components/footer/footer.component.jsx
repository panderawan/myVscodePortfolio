import { GitRepo, CrossGit, WarningGit, Prettier, Bell } from '../icons/icons';
import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <LeftFooterNav>
          <FooterLi>
            <a href='http://github.com/panderawan'>
              <GitRepo />
              main*
            </a>
          </FooterLi>

          <FooterLi>
            <CrossGit />
            0
            <WarningGit />0
          </FooterLi>
        </LeftFooterNav>

        <RightFooterNav>
          <FooterLi>
            <Prettier />
            Prettier
          </FooterLi>

          <FooterLi>
            <Bell />
          </FooterLi>
        </RightFooterNav>
      </FooterContainer>
    </>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #1e1f2b;
  color: rgba(255, 255, 255, 0.43);
  box-sizing: border-box;
  border-top: 1px solid hsla(0, 0%, 0%, 0.3);
  height: 18px;
  flex: 1;
  list-style: none;
  & svg {
    transform: scale(0.9);
  }
`;

const FooterNav = styled.nav`
  display: flex;
  flex: 1;
  align-items: center;
  font-size: 0.65em;
  > :hover {
    cursor: pointer;
    background-color: hsla(100, 100%, 100%, 0.1);
  }
`;

const FooterLi = styled.li`
  display: flex;
  align-items: center;
  margin: 0 4px;
  padding: 0 4px;

  > a {
    display: flex;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.43);
  }
`;

const LeftFooterNav = styled(FooterNav)`
  & svg {
    margin: 0 2px;
  }
`;

const RightFooterNav = styled(FooterNav)`
  justify-content: flex-end;
  padding-right: 0px;
`;

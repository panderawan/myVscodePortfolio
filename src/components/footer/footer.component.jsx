import { GitRepo, CrossGit, WarningGit, Prettier, Bell } from '../icons/icons';
import styled from 'styled-components';

const Footer = () => {
  return (
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
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #1e1f2b;
  color: var(--pf-lightgray);
  box-sizing: border-box;
  border-top: 1px solid var(--pf-lightdark);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 18px;
  flex: 1;
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
    background-color: var(--pf-darkgray);
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
    color: var(--pf-lightgray);
  }
`;

const LeftFooterNav = styled(FooterNav)`
  & svg {
    margin: 0 2px;
  }
`;

const RightFooterNav = styled(FooterNav)`
  justify-content: flex-end;
`;

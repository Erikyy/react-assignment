import styled from 'styled-components';

export const NavItem = styled.li`
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${(props) =>
    (props.left && 'justify-content: flex-start;') || (props.right && 'justify-content: flex-end;')}
`;

export const NavLogo = styled.img`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

export const Navbar = styled.nav`
  background-color: white;
  padding: 0 1rem;
  display: flex;

  & > ${NavList} {
    display: flex;
    flex: 1;
    align-items: center;
  }

  & > ${NavLogo} {
  }
`;

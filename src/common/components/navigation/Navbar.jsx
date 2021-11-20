import styled from 'styled-components';

export const NavItem = styled.li`
  padding: ${(props) => {
    return props.padding ? `${props.padding}rem;` : '1rem';
  }};

  s & > .nav-link-active {
    color: var(--color-green) !important;
  }
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
  position: fixed;
  width: 100%;
  padding: 0 1rem;
  z-index: 3;
  display: flex;
  & > ${NavList} {
    display: flex;
    flex: 1;
    align-items: center;
  }
  & > ${NavLogo} {
    align-self: center;
  }
`;

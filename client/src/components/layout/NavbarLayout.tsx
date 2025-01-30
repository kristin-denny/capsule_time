import styled from 'styled-components';

const NavbarLayout = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0 2rem 0;
  position: relative;

  .menu-toggle {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    display: none; /* Hide on larger screens */
    font-size: 1.5rem;
    transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;

    &:hover {
      transform: scale(1.2); /* Slightly enlarges the icon */
      color: #c466ff; /* Changes color on hover */
    }
  }

  .nav {
    display: flex;
    list-style: none;
    font-weight: 700;
    gap: 1rem;
    padding: 8px;
    border-radius: 4px;
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .menu-toggle {
      display: block; /* Show menu button on small screens */
    }

    .nav {
      position: absolute;
      top: 100%;
      right: 0;
      background: rgba(0, 0, 0, 0.9);
      flex-direction: column;
      width: 200px;
      padding: 1rem;
      display: none;
      border-radius: 8px;
    }

    .nav.open {
      display: flex;
    }
  }
`;

export default NavbarLayout;

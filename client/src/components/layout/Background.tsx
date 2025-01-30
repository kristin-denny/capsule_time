import styled from 'styled-components';

const Background = styled.div`
  background-image: url(${({ theme }) => theme.backgroundImage.main});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Keeps the image fixed on scroll */
  min-height: 100vh; /* Ensures it grows with content */
  width: 100%;
  overflow: hidden; /* Prevents content overflow */
`;


export default Background;

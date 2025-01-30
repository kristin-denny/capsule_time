import styled from 'styled-components';

const LandingLayout = styled.div`
    height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto; /*  main(1fr) footer(auto) */
  scroll-behavior: smooth;

  /* Hiding the scrollbar but allowing scrolling */
  ::-webkit-scrollbar {
    display: none; /* Hides the scrollbar */
  }

  /* Optional: Hide the scrollbar for non-WebKit browsers */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

    /* two column grid */
    .grid-two-columns {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: 16px;

     @media (max-width: 768px) {
            grid-template-columns: 1fr; /* Switch to a single column layout */
            gap: 12px;
        }
    
  }

  .card {
    background-color: #fff;
  color: #000;
  max-width: 500px;
  min-height: 416px;

  padding: 32px;
  border-radius: 10px;
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  }

  .card-header {
    font-size: 40px;
    text-align: center;
  }

  
  /* form styles */

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  form > div {
    margin-bottom: 8px;
  }
  
  form label {
    font-weight: 700;
  }
  
  .form-input {
    font-size: 1.125rem;
    width: 100%;
  }
  
  .error-message {
    color: red;
    font-style: italic;
    font-size: 0.8rem;
  }
  
  /* display signup or login form - middle of page */
  .forms-card {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
  }


  #about-link {
    display: inline-block;
    background-color: #000;
    color: white;
    font-weight: 700;
    padding: 8px 16px;
    border-radius: 8px;

    &:hover {
      background-color: #333;
    }   
  }
`;

const MainContent = styled.main`
  height: 100%;
  flex-grow: 1; /* Take up available space */
  overflow-y: auto; /* Allow scrolling if content overflows */
`;

export  {LandingLayout, MainContent};

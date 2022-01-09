import styled from "styled-components";

export const PageWrapper = styled.div`
width: 100%;
min-height: 100vh;
padding: 0.5rem 4rem;
@media only screen and (max-width:700px){
  padding: 0;
}
`;

export const PageHeader = styled.header`
width: 100%;
height: 3rem;
background-color: orange;
padding: 1rem;
font-weight:600;
`;

export const PageMain = styled.main`
width: 100%;
min-height: calc(50vh - 4rem);
`;

export const PageFooter = styled.footer`
width: 100%;
height: 1rem;
background-color: orange;
font-size: 0.7rem;
line-height:1rem;
text-align:center;
`;
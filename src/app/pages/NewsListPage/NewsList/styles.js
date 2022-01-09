import styled from "styled-components";

export const NewsListWrapper = styled.ul`
width:100%;
height: 100%;
padding:1rem;
list-style-type:none;
background-color: rgb(246, 246, 239);
`;

export const NewsListPageItem = styled.li`
min-height: 3rem;
margin-bottom:1rem;
box-shadow: 0px 0px 3px lightgray;
border-radius: 0.5rem;
padding: 0.5rem;
& > h3{
  font-weight: 500;
  font-size: 0.9rem;
}
`;

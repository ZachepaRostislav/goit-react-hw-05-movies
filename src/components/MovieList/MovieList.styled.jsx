import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const MovieCatalog = styled.ul`
  list-style:none;
`
export const MovieListItem = styled.li`
  margin:5px 0;
`

export const MovieListNavLink = styled(NavLink)`
 text-decoration:none;
 color:currentColor;
`

export const MovieListParagraph = styled.p`
  font-size:28px;
  font-weight:700;
`
export const MovieListImg = styled.img`
  display:block;
  width:300px;
  height:300px;
  object-fit:contain;
`



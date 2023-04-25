import { Typography } from '@mui/material';
import styled from '@emotion/styled';

export const NavLinK = styled(Typography)`
  display: flex;
  align-items: center;
  justifycontent: center;
  padding: 3px 6px;
  color: #fff;
  background-color: transparent;
  border: none;
  border-radius: 6px;
  gap: 3px;
  cursor: pointer;
  text-decoration: none;
  :hover,
  :focus {
    color: primary.main;
    background-color: #b4bad1;
  }
  &.active {
    color: primary.main;
    background-color: #b4bad1;
  }
`;

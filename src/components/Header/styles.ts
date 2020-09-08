import styled from "styled-components";
import { HiSearch, HiOutlineLocationMarker } from "react-icons/hi";

export const Container = styled.div`
  width: 100%;
  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);
  padding: 10px 0;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`;

export const InputBox = styled.div`
  background: #fff;
  box-shadow: var(--panel-shadow);
  border-radius: 2px;
  max-height: 39px;
  align-items: center;
  justify-content: center;


  button {
    cursor: pointer;
    border-left: 1px solid var(--color-search-placeholder);
  }

`;

export const SearchBarRow = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1220px;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  img {
    max-height: 39px;

    .header-link {
      max-width: 340px;
    }
  }

  input {
    background: #fff;
    height: 40px;
    left: 35px;
    width: 600px;
    padding: 0 0 0 10px;
    border-radius: 2px;


  }
`;

export const SearchIcon = styled(HiSearch)`
  width: 40px;
  height: 21px;
  color: var(--color-search-placeholder);
  padding-top: 2px;
`;

export const LocationIcon = styled(HiOutlineLocationMarker)`
  height: 20px;
  width: 20px;
`;

export const LinksRow = styled.div`
  height: 39px;

 ul {
  display: flex;
  flex-direction: row;
  list-style: none;
 }
`;

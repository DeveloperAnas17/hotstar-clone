import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <Nav>
      <Logo>
        <img
          src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
          alt=""
        />
      </Logo>

      <NavMenu>
        <List1>
          <span>TV</span>
          <ListContent className="list1">
            <a href="#">Hotstar Specials</a>
            <a href="#">Star Plus</a>
            <a href="#">Star Vijay</a>
            <a href="#">Hotstar </a>
            <a href="#"> Star Bharat</a>
            <a href="#"> Star Maa</a>
            <a href="#"> Star World</a>
            <a href="#"> more...</a>
          </ListContent>
        </List1>
        <List2>
          <span>Movies</span>
          <ListContent className="list2">
            <a href="#">Hindi</a>
            <a href="#">English </a>
            <a href="#">Telugu</a>
            <a href="#">Malyalam</a>
            <a href="#">Kannada</a>
            <a href="#">Bengali</a>
            <a href="#">Marathi</a>
            <a href="#">Tamil</a>
          </ListContent>
        </List2>
        <List3>
          <span>Sports</span>
          <ListContent className="list3">
            <a href="#">Cricket</a>
            <a href="#">Football</a>
            <a href="#">BadMinton</a>
            <a href="#">Formula 1</a>
            <a href="#">Martial Arts</a>
            <a href="#">Tennis</a>
            <a href="#">Hockey</a>
            <a href="#">Golf</a>
            <a href="#">Wrestling</a>
            <a href="#">Table Tennis</a>
            <a href="#">Athletics</a>
          </ListContent>
        </List3>
        <p>
          <a>News</a>
        </p>
        <p>
          <a>Premium</a>
        </p>
      </NavMenu>

      <SearchContainer>
        <input type="text" placeholder="Search" />
        <SearchIcon className="searchIcon" />
      </SearchContainer>
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #0c111b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
  z-index: 3;
  color: white;
`;
const Logo = styled.div`
  padding: 0;
  width: 120px;
  margin-bottom: 5px;

  img {
    display: block;
  }
`;

const NavMenu = styled.div`
flex: 1;
display:flex;
align-items: center;
justify-content: space-between;
margin: 0;
padding: 0px;
flex-flow: row nowrap;
height: 100%;
margin-left: 25px;
margin-right: 5px;

a {
    display: flex;
    align-content: center;
    padding: 0 12px;
    margin-right: 10px;
}

span {
    color: rgb(249, 249, 249);
    font-size: 14px;
    line-height: 1.08;
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;
    color: #cccccc;
    transition: 200ms color ease-in;
  }
  span:hover {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 768px) {
      display: none;
  }
}
`;
const List1 = styled.div`
  padding: 30px;
  &:hover .list1 {
    display: block;
    margin-top: 24px;
  }
`;
const List2 = styled(List1)`
  &:hover .list2 {
    display: block;
    margin-top: 24px;
  }
`;
const List3 = styled(List1)`
  &:hover .list3 {
    display: block;
    margin-top: 24px;
  }
`;

const ListContent = styled.div`
  display: none;
  min-width: 150px;
  position: absolute;
  z-index: 1;
  background-color: #111524;
  border-radius: 5px;
  letter-spacing: 1.49px;
  z-index: 3;
  cursor: pointer;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 10);
  a {
    text-decoration: none;
    color: whitesmoke;
    padding: 10px 15px;
    font-size: 13px;
    margin-right: -2px;
    display: block;
  }
  a:hover {
    background-color: rgb(0, 0, 0);
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid white;

  input {
    width: 100%;
    border: none;
    background: transparent;
    outline-width: 0;
    color: white;
    margin-right: 8px;
  }
`;

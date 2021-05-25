import styled from "styled-components";

const VerticalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: #e0e0e0; ;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 0px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

const Footer = styled.div`
  display: flex;
  flex-direction; row;
  justify-content: space-evenly;
`;

const Page = ({ children }) => {
  return <VerticalDiv>{children}</VerticalDiv>;
};

Page.Header = Header;
Page.Title = Title;
Page.Content = Content;
Page.Footer = Footer;

export default Page;

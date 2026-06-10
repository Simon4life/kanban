import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  background: rgba(20, 19, 19, 0.8);
  backdrop-filter: blur(20px);
  padding: 20px 80px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #333;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <h2>CommandBoard</h2>

      <nav>
        <a href="#">Product</a>{" "}
        <a href="#">Solutions</a>{" "}
        <a href="#">Pricing</a>
      </nav>

      <button>Get Started</button>
    </HeaderWrapper>
  );
}
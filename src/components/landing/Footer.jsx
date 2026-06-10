import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 80px;
  border-top: 1px solid #333;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <h3>CommandBoard</h3>
      <p>Built for precision. Engineered for performance.</p>
    </FooterWrapper>
  );
}
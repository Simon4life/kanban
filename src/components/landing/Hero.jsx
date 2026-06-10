import styled from "styled-components";

const Section = styled.section`
  text-align: center;
  padding: 120px 20px;
`;

const Title = styled.h1`
  font-size: 64px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`

const Highlight = styled.span`
  background: linear-gradient(to right, #d0bcff, #a078ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Buttons = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const Button = styled.button`
  padding: 14px 32px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.primary &&
    `
    background: #d0bcff;
    color: #000;
  `}
`;

export default function Hero() {
  return (
    <Section>
      <Title>
        Master Your <Highlight>Workflow</Highlight>
      </Title>

      <Paragraph>
        The ultimate command center for engineering teams.
      </Paragraph>

      <Buttons>
        <Button primary>Get Started</Button>
        <Button>Book Demo</Button>
      </Buttons>
    </Section>
  );
}
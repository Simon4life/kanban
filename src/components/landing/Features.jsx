import styled from "styled-components";

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 80px;
`;

const Card = styled.div`
  background: #1c1b1b;
  padding: 24px;
  border-radius: 12px;
`;

export default function Features() {
  return (
    <Grid>
      <Card>Automated Workflows</Card>
      <Card>Team Collaboration</Card>
      <Card>Real-time Analytics</Card>
    </Grid>
  );
}
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 80px 20px;
  overflow-x: auto;
`;

const Board = styled.div`
  display: flex;
  gap: 24px;
  min-width: 900px;
`;

const Column = styled.div`
  width: 320px;
`;

const Card = styled.div`
  background: rgba(20, 19, 19, 0.8);
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 16px;
`;

export default function KanbanPreview() {
  return (
    <Wrapper>
      <Board>
        <Column>
          <h4>To Do</h4>
          <Card>Refactor navigation</Card>
          <Card>Write API docs</Card>
        </Column>

        <Column>
          <h4>Doing</h4>
          <Card>Fix websocket latency</Card>
        </Column>

        <Column>
          <h4>Done</h4>
          <Card>Setup CI/CD</Card>
        </Column>
      </Board>
    </Wrapper>
  );
}
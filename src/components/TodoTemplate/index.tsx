import { ReactNode } from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

interface IProps {
  children: ReactNode;
}

function TodoTemplate(props: IProps) {
  const { children } = props;
  
  return (
    <TodoTemplateBlock>{children}</TodoTemplateBlock>
  );
}

export default TodoTemplate;

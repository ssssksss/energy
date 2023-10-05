import { CC } from '@/styles/commonComponentStyle';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from '@/components/common/button/Button';
import { Input } from '@/components/common/input/Input';
import { Icons } from '@/components/common/icons/Icons';
import Image from 'next/image';
import ModalButton from '@/components/common/button/ModalButton';
import { useEffect } from 'react';
/**
 * @author Sukyung Lee <ssssksss@naver.com>
 * @file BlogSecondaryCategoryModal.tsx
 * @version 0.0.1 "2023-10-03 02:58:49"
 * @description 설명
 */
const BlogSecondaryCategoryModal = () => {
  return (
    <Container>
      <Header>
        <span>블로그 2번째 카테고리를 입력해주세요.</span>
      </Header>
      <CC.ColumnDiv gap={28}>
        <Input placeholder="1번쨰 카테고리" styleTypes={1} />
        <Input placeholder="이름" styleTypes={1} />
        <Input placeholder="경로" styleTypes={1} />
      </CC.ColumnDiv>
      <CC.ColumnDiv gap={8}>
        <Button
          w={'100%'}
          h={'40px'}
          outline={true}
          styleTypes={1}
          onClickCapture={() => props.closeModal()}
        >
          추가
        </Button>
      </CC.ColumnDiv>
    </Container>
  );
};
export default BlogSecondaryCategoryModal;

const Container = styled(CC.ColumnDiv)`
  width: 100%;
  padding: 40px 10px 10px 10px;
  gap: 28px;
  color: ${props => props.theme.colors.white80};
  font-size: 1.2rem;
  font-family: ${props => props.theme.fontFamily.typoHelloPOP};
`;

const commonStyle = css`
  border: 1px solid #fff;
  background: rgba(0, 0, 0, 0.01);
  backdrop-filter: blur(1px);
`;

const Header = styled.header`
  ${props => props.theme.flex.column};
  padding: 16px;
  gap: 0.25rem;
  align-self: stretch;
  border-radius: ${props => props.theme.borderRadius.br10};
  ${commonStyle};

  span:nth-of-type(1) {
    /* font-family: ${props => props.theme.fontFamily.cookieRunRegular}; */
    font-size: 20px;
  }

  span:nth-of-type(2) {
    color: ${props => props.theme.colors.black40};
  }
`;

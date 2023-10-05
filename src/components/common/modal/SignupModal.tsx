import { CC } from '@/styles/commonComponentStyle';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from '@/components/common/button/Button';
import { Shell } from '@/components/common/shell/Shell';
import { Input } from '@/components/common/input/Input';
import { Icons } from '@/components/common/icons/Icons';
import Image from 'next/image';
import ModalButton from '@/components/common/button/ModalButton';
import { useEffect } from 'react';

/**
 * @author Sukyung Lee <ssssksss@naver.com>
 * @file SignupModal.tsx
 * @version 0.0.1 "2023-09-24 14:22:40"
 * @description 설명
 */

const SignupModal = props => {
  return (
    <Container>
      <Header>
        <span>
          가출한토토로의 블로그에 <br /> 오신것을 환영합니다.
        </span>
        <span>
          비밀번호는 암호화처리되며 <br /> 개인정보는 다른 곳에 사용되지
          않습니다.
        </span>
      </Header>
      <CC.ColumnDiv gap={28}>
        <Input placeholder="이메일" styleTypes={1} />
        <Input placeholder="비밀번호" styleTypes={1} />
        <Input placeholder="비밀번호확인" styleTypes={1} />
      </CC.ColumnDiv>
      <CC.ColumnDiv gap={8}>
        <CC.RowCenterDiv gap={20}>
          <Image src={Icons.GoogleIcon} alt="google" />
          <Image src={Icons.KakaoIcon} alt="kakao" />
        </CC.RowCenterDiv>
        <CC.RowCenterDiv gap={8}>
          <span>아이디가 없으시다면?</span>
          <Button
            onClickCapture={e => {
              e.stopPropagation();
              props.changeAuthScreen();
            }}
            styleTypes={1}
          >
            로그인
          </Button>
        </CC.RowCenterDiv>
        <Button
          w={'100%'}
          h={'40px'}
          outline={true}
          styleTypes={1}
          onClickCapture={e => {
            e.stopPropagation();
            props.closeModal();
          }}
        >
          회원가입
        </Button>
      </CC.ColumnDiv>
    </Container>
  );
};
export default SignupModal;

const Container = styled(CC.ColumnDiv)`
  width: 100%;
  padding: 40px 10px 10px 10px;
  gap: 28px;
  color: ${props => props.theme.colors.white80};
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

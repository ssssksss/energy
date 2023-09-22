import theme from '@/styles/theme';
import React from 'react';
import styled from '@emotion/styled';

type AppLayoutProps = {
  children: React.ReactNode;
};

const Layout1 = ({ children }: AppLayoutProps) => {
  return (
    <Div>
      <Container>{children}</Container>
    </Div>
  );
};

export default Layout1;

const Div = styled.div`
  /* background: linear-gradient(lightCyan, skyBlue, deepSkyBlue); */
  background: ${props => props.theme.colors.white80};
`;
const Container = styled.div`
  padding-left: 44px;
  padding-top: 44px;
  margin: auto;
  max-width: 1440px;
  min-height: 100vh;
  /* background: linear-gradient(red, blue); */

  @media (min-width: ${props => props.theme.deviceSizes.pc}) {
    padding-left: 120px;
  }
`;

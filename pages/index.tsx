import styled from '@emotion/styled';
import Layout1 from 'src/components/layout/Layout1';
import { CC } from '@/styles/commonComponentStyle';
import theme from '@/styles/theme';
import readXlsxFile from 'read-excel-file';
import { useState, useEffect } from 'react';
import EnergyIndependenceRate from '@/components/EnergyIndependenceRate';
import EconomicPerformanceEvaluation from '@/components/EconomicPerformanceEvaluation';

const HomePage = ({ test }: any) => {
  const [data, setData] = useState();
  useEffect(() => {
    const input = document.getElementById('input');
    input.addEventListener('change', () => {
      readXlsxFile(input.files[0]).then(rows => {
        console.log('index.tsx 파일 : ', rows);
        setData(rows);
      });
    });
  }, []);

  return (
    <Container>
      <CC.ColumnDiv>
        <EnergyIndependenceRate data={data}></EnergyIndependenceRate>
        <EconomicPerformanceEvaluation
          data={data && data[1]}
        ></EconomicPerformanceEvaluation>
        <input type="file" id="input" />
      </CC.ColumnDiv>
    </Container>
  );
};
HomePage.layout = Layout1;
export default HomePage;

const Container = styled.main`
  width: 100%;
  height: 100%;
`;

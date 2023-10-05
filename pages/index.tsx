import styled from '@emotion/styled';
import Layout1 from 'src/components/layout/Layout1';
import { CC } from '@/styles/commonComponentStyle';
import theme from '@/styles/theme';
import readXlsxFile from 'read-excel-file';
import { useState, useEffect } from 'react';
import EnergyIndependenceRate from '@/components/EnergyIndependenceRate';
import EconomicPerformanceEvaluation from '@/components/EconomicPerformanceEvaluation';
import Dropdown from '@/components/common/dropdown/Dropdown';
import BuildingListItem from '@/components/BuildingListItem';
import BuildingEnergyEfficiencyRating from '@/components/BuildingEnergyEfficiencyRating';

const HomePage = ({ test }: any) => {
  const [data, setData] = useState([
    [
      '제로에너지 등급',
      'COP',
      '공기열원초기비용',
      '공기열원운영비용',
      '수열원초기비용',
      '수열원운영비용',
    ],
    [5, 5, 1000, 100, 2000, 20],
  ]);
  // useEffect(() => {
  //   const input = document.getElementById('input');
  //   input.addEventListener('change', () => {
  //     readXlsxFile(input.files[0]).then(rows => {
  //       console.log('index.tsx 파일 : ', rows);
  //       setData(rows);
  //     });
  //   });
  // }, []);

  const orderRecent = () => {
    alert('개발중입니다.');
  };

  const orderViews = () => {
    alert('개발중입니다.');
  };

  const orderLikes = () => {
    alert('개발중입니다.');
  };

  const buildingUsageList = [
    { name: '없음', func: orderRecent },
    { name: '00 주거공간', func: orderViews },
    { name: '01 소규모사무실(30m^2이하)', func: orderViews },
    { name: '02 대규모사무실(30m^2이상)', func: orderViews },
    { name: '03 회의 및 세미나실', func: orderViews },
  ];

  return (
    <Container>
      <CC.RowDiv pd={'0px 0px 10px 0px'} gap={10}>
        <Dropdown w={'240px'} color={'black100'} menus={buildingUsageList} />
        {/* <input type="file" id="input" /> */}
      </CC.RowDiv>
      <CC.RowDiv gap={20}>
        <CC.ColumnDiv gap={10}>
          <BuildingListItem />
          <BuildingListItem />
          <BuildingListItem />
          <BuildingListItem />
        </CC.ColumnDiv>
        <CC.ColumnDiv gap={10}>
          <BuildingEnergyEfficiencyRating />
          <EnergyIndependenceRate data={data}></EnergyIndependenceRate>
          <EconomicPerformanceEvaluation
            data={data && data[1]}
          ></EconomicPerformanceEvaluation>
        </CC.ColumnDiv>
      </CC.RowDiv>
    </Container>
  );
};
HomePage.layout = Layout1;
export default HomePage;

const Container = styled.main`
  width: 100%;
  height: 100%;
`;

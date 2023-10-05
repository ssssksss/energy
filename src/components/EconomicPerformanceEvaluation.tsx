import { CC } from '@/styles/commonComponentStyle';
import styled from '@emotion/styled';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

/**
 * @author Sukyung Lee <ssssksss@naver.com>
 * @file EconomicPerformanceEvaluation.tsx
 * @version 0.0.1 "2023-09-22 08:58:24"
 * @description 설명
 */

const EconomicPerformanceEvaluation = (props: any) => {
  console.log('EconomicPerformanceEvaluation.tsx 파일 : ', props.data);
  const [labelsData, setLabelsData] = useState();
  const [airPrice, setAirPrice] = useState();
  const [waterPrice, setWaterPrice] = useState();

  const yearLength = data => {
    let temp = [0];
    let airPriceList = [data[2]];
    let waterPriceList = [data[4]];
    let count = 1;
    let _airPrice = data[2];
    let _waterPrice = data[4];
    while (temp.length < 19) {
      _airPrice += data[3];
      _waterPrice += data[5];
      airPriceList.push(_airPrice);
      waterPriceList.push(_waterPrice);
      temp.push((count += 1));
      if (_airPrice >= _waterPrice) break;
    }
    setLabelsData(temp);
    setAirPrice(airPriceList);
    setWaterPrice(waterPriceList);
    return temp;
  };

  useEffect(() => {
    if (props.data) {
      yearLength(props.data);
    }
  }, [props.data]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '공기열원과 수열원의 경제성을 비교',
      },
    },
  };

  const labels = labelsData;

  const data = {
    labels,
    datasets: [
      {
        label: '공기열원 시스템',
        data: airPrice,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: '수열원 시스템',
        data: waterPrice,
        backgroundColor: 'rgb(255,151,23,0.5)',
      },
    ],
  };

  return (
    <Container>
      <TitleBox> 경제성 평가 </TitleBox>
      <CC.RowDiv>
        <RateBox>
          <Line options={options} data={data} />
        </RateBox>
        <RatingBox>
          <TitleBox> 분기점 </TitleBox>
          <div> {labelsData?.length ? labelsData?.length : 0} 년 </div>{' '}
        </RatingBox>
      </CC.RowDiv>
    </Container>
  );
};
export default EconomicPerformanceEvaluation;

const Container = styled.section`
  ${props => props.theme.flex.column._.center};
  height: 240px;
  width: 500px;
`;
const TitleBox = styled.h1`
  padding: 10px 0px;
`;
const RateBox = styled.div`
  position: relative;
  width: 400px;
  outline: solid black 1px;
  padding: 10px;
  height: 100%;
`;

const RatingBox = styled.div`
  ${props => props.theme.flex.column.center.center};
  width: 100px;
  outline: solid black 1px;
  height: 100%;

  & > div {
    ${props => props.theme.flex.row.center.center};
    font-family: ${props => props.theme.fontFamily.GmarketSansTTFBold};
    color: ${props => props.theme.colors.black80};
    font-size: 24px;
  }
`;

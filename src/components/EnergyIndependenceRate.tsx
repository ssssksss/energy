import { CC } from '@/styles/commonComponentStyle';
import styled from '@emotion/styled';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * @author Sukyung Lee <ssssksss@naver.com>
 * @file EnergyIndependenceRate.tsx
 * @version 0.0.1 "2023-09-22 00:47:35"
 * @description 설명
 */
const EnergyIndependenceRate = (props: any) => {
  const data = {
    datasets: [
      {
        width: '50px',
        height: '50px',
        label: '# of Votes',
        data: [1, 1, 1, 1, 1],
        backgroundColor: [
          `rgba(142, 198, 63, ${
            props.data && props.data[1][0] == 1 ? 1 : 0.1
          })`,
          `rgba(205, 228, 9, ${props.data && props.data[1][0] == 2 ? 1 : 0.1})`,
          `rgba(247, 247, 1, ${props.data && props.data[1][0] == 3 ? 1 : 0.1})`,
          `rgba(242, 161, 50, ${
            props.data && props.data[1][0] == 4 ? 1 : 0.1
          })`,
          `rgba(232, 47, 36, ${props.data && props.data[1][0] == 5 ? 1 : 0.1})`,
        ],
        borderColor: ['rgba(0,0,0,1)'],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    rotation: -90,
    circumference: 180,
  };

  return (
    <Container>
      <Title> 제로 에너지 등급 </Title>
      <CC.RowDiv>
        <RateBox>
          <Doughnut data={data} options={options} />
          <Arrow rating={props.data && props.data[1][0]}> </Arrow>
        </RateBox>
        <RatingBox>
          <div> {props.data && props.data[1][0]} 등급 </div>
          <CC.ColumnDiv>
            <span> 에너지 자립률 </span> <span> 24% </span>
          </CC.ColumnDiv>
        </RatingBox>
      </CC.RowDiv>
    </Container>
  );
};
export default EnergyIndependenceRate;

const Container = styled.section`
  ${props => props.theme.flex.column._.center};
  width: 500px;
`;
const Title = styled.h1`
  padding: 10px 0px;
`;
const RateBox = styled.div`
  position: relative;
  width: 200px;
  aspect-ratio: 1;
  outline: solid black 1px;
  padding: 10px;
`;
const Arrow = styled.div<{ rating: number }>`
  position: absolute;
  width: 80px;
  height: 2px;
  background: rgba(255, 0, 0, 0.2);
  background: ${props => `rgba(255, 0, 0, 1)`};
  left: 20px;
  bottom: 48px;
  transform-origin: 100% 100%;
  transform: ${props =>
    props.rating
      ? `rotate(calc(18deg + ${props.rating - 1} * 36deg))`
      : 'rotate(0deg)'};
`;
const RatingBox = styled(CC.ColumnCenterDiv)`
  width: 300px;
  height: 200px;
  outline: solid black 1px;
  gap: 20px;

  & > div {
    ${props => props.theme.flex.row.center.center};
    font-family: ${props => props.theme.fontFamily.GmarketSansTTFBold};
    border-radius: 50%;
    color: ${props => props.theme.colors.black80};
    font-size: 32px;
  }

  & > div:nth-of-type(2) {
    color: ${props => props.theme.colors.black60};
    font-size: 16px;
  }
`;

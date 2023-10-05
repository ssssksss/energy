import { CC } from '@/styles/commonComponentStyle';
import styled from '@emotion/styled';
import { useState } from 'react';

/**
 * @author Sukyung Lee <ssssksss@naver.com>
 * @file BuildingEnergyEfficiencyRating.tsx
 * @version 0.0.1 "2023-10-06 02:09:13"
 * @description 설명
 */
const BuildingEnergyEfficiencyRating = () => {
  const [data, setData] = useState({
    residental: 'true',
    value: 80,
  });

  const rank = (residental, value) => {
    if (residental === 'true') {
      if (value < 60) {
        return '1+++';
      } else if (value < 90) {
        return '1++';
      } else if (value < 120) {
        return '1+';
      } else if (value < 150) {
        return '1';
      } else if (value < 190) {
        return '2';
      } else if (value < 230) {
        return '3';
      } else if (value < 270) {
        return '4';
      } else if (value < 320) {
        return '5';
      } else if (value < 370) {
        return '6';
      } else if (value < 420) {
        return '7';
      } else {
        return '초과';
      }
    } else {
      if (value < 80) {
        return '1+++';
      } else if (value < 140) {
        return '1++';
      } else if (value < 200) {
        return '1+';
      } else if (value < 260) {
        return '1';
      } else if (value < 320) {
        return '2';
      } else if (value < 380) {
        return '3';
      } else if (value < 450) {
        return '4';
      } else if (value < 520) {
        return '5';
      } else if (value < 610) {
        return '6';
      } else if (value < 700) {
        return '7';
      } else {
        return '초과';
      }
    }
  };

  return (
    <Container>
      <Title> 건축물 에너지 효율 등급 </Title>
      <CC.GridColumn2 w={'100%'} h={'100%'}>
        <CC.ColumnBetweenDiv h={'100%'}>
          <RankTitle>
            <span>{data.residental ? '주거용 건축물' : '비주거용 건축물'}</span>
          </RankTitle>
          <RankBox rank={rank(true, 100)}> {rank(true, 100)} 등급 </RankBox>
        </CC.ColumnBetweenDiv>
        <CC.ColumnDiv>
          <RankTitle>
            <span>1차 에너지 소요량</span>
            <span>
              연간 단위면적 당(kWh/m<sup>2</sup>yr)
            </span>
          </RankTitle>
          <BuildingEnergyBox rank={rank(true, 100)}>
            <div> {data.residental ? '60미만' : '80미만'} </div>
            <div>
              {data.residental ? '60이상 ~ 90미만' : '80이상 ~ 140미만'}
            </div>
            <div>
              {data.residental ? '90이상 ~ 120미만' : '140이상 ~ 200미만'}
            </div>
            <div>
              {data.residental ? '120이상 ~ 150미만' : '200이상 ~ 260미만'}
            </div>
            <div>
              {data.residental ? '150이상 ~ 190미만' : '260이상 ~ 320미만'}
            </div>
            <div>
              {data.residental ? '1900이상 ~ 230미만' : '320이상 ~ 380미만'}
            </div>
            <div>
              {data.residental ? '230이상 ~ 270미만' : '380이상 ~ 450미만'}
            </div>
            <div>
              {data.residental ? '270이상 ~ 320미만' : '450이상 ~ 520미만'}
            </div>
            <div>
              {data.residental ? '320이상 ~ 370미만' : '520이상 ~ 610미만'}
            </div>
            <div>
              {data.residental ? '370이상 ~ 420미만' : '610이상 ~ 700미만'}
            </div>
          </BuildingEnergyBox>
        </CC.ColumnDiv>
      </CC.GridColumn2>
    </Container>
  );
};
export default BuildingEnergyEfficiencyRating;

const Container = styled.section`
  ${props => props.theme.flex.column._.center};
  width: 500px;
`;

const Title = styled.h1`
  padding: 2px 0px;
`;

const RankTitle = styled(CC.ColumnCenterCenterDiv)`
  outline: solid black 1px;
  padding: 4px 0px;

  & > span:nth-of-type(1) {
    font-weight: 800;
    font-size: 1.2rem;
  }
  & > span:nth-of-type(2) {
    font-size: 0.8rem;
    color: #999;
  }
`;

const RankBox = styled(CC.RowCenterDiv)<{ rank: string }>`
  outline: solid black 1px;
  font-size: 1.6rem;
  font-weight: 800;
  height: 100%;
  color: ${props =>
    props.rank === '1+++'
      ? '#20713c'
      : props.rank === '1++'
      ? '#248045'
      : props.rank === '1+'
      ? '#319f48'
      : props.rank === '1'
      ? '#5fb63f'
      : props.rank === '2'
      ? '#91c532'
      : props.rank === '3'
      ? '#cadb00'
      : props.rank === '4'
      ? '#fde801'
      : props.rank === '5'
      ? '#f9ca00'
      : props.rank === '6'
      ? '#f29c00'
      : '#ea6f07'};
`;
const BuildingEnergyBox = styled(CC.ColumnBetweenDiv)`
  position: relative;
  outline: solid black 1px;
  --stage: 15px;
  gap: '4px';
  padding: 2px;

  & > div {
    opacity: 0.3;
    padding-left: 4px;
  }

  & > div:nth-of-type(1) {
    background: #20713c;
    width: calc(100px + var(--stage) * 1);
    color: #eee;
    opacity: ${props => props.rank === '1+++' && 1};
  }
  & > div:nth-of-type(2) {
    background: #248045;
    width: calc(100px + var(--stage) * 2);
    color: #eee;
    /* opacity: ${props => props.rank === '1++' && 1}; */
    opacity: ${props => props.rank === '1++' && 1};
  }
  & > div:nth-of-type(3) {
    background: #319f48;
    width: calc(100px + var(--stage) * 3);
    color: #eee;
    opacity: ${props => props.rank === '1+' && 1};
  }
  & > div:nth-of-type(4) {
    background: #5fb63f;
    width: calc(100px + var(--stage) * 4);
    color: #333;
    opacity: ${props => props.rank === '1' && 1};
  }
  & > div:nth-of-type(5) {
    background: #91c532;
    width: calc(100px + var(--stage) * 5);
    color: #333;
    opacity: ${props => props.rank === '2' && 1};
  }
  & > div:nth-of-type(6) {
    background: #cadb00;
    width: calc(100px + var(--stage) * 6);
    color: #333;
    opacity: ${props => props.rank === '3' && 1};
  }
  & > div:nth-of-type(7) {
    background: #fde801;
    width: calc(100px + var(--stage) * 7);
    color: #333;
    opacity: ${props => props.rank === '4' && 1};
  }
  & > div:nth-of-type(8) {
    background: #f9ca00;
    width: calc(100px + var(--stage) * 8);
    color: #333;
    opacity: ${props => props.rank === '5' && 1};
  }
  & > div:nth-of-type(9) {
    background: #f29c00;
    width: calc(100px + var(--stage) * 9);
    color: #333;
    opacity: ${props => props.rank === '6' && 1};
  }
  & > div:nth-of-type(10) {
    background: #ea6f07;
    width: calc(100px + var(--stage) * 10);
    color: #333;
    opacity: ${props => props.rank === '7' && 1};
  }
`;

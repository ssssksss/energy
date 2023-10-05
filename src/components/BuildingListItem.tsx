import styled from '@emotion/styled';
import { CC } from '@/styles/commonComponentStyle';
import { Icons } from '@/components/common/icons/Icons';
import Image from 'next/image';
/**
 * @author Sukyung Lee <ssssksss@naver.com>
 * @file BuildingListItem.tsx
 * @version 0.0.1 "2023-10-06 00:54:12"
 * @description 설명
 */
const BuildingListItem = () => {
  return (
    <Container onClick={() => alert('개발 중 입니다.')}>
      <CC.ColumnDiv>
        <CC.RowBetweenDiv>
          <CC.RowDiv pd={'8px'}>
            <Image
              src={Icons.MiddleOffice}
              width={'136px'}
              height={'136px'}
              alt=""
            />
          </CC.RowDiv>
          <TopBuildingInformation>
            <CC.GridColumn2>
              <div> 건물 용도 </div>
              <div> 대규모 사무실 (3층) </div>
            </CC.GridColumn2>
            <CC.GridColumn2>
              <div> 건축면적 </div>
              <div>
                1661m<sup>2</sup>{' '}
              </div>
            </CC.GridColumn2>
            <CC.GridColumn2>
              <div> 실내 난방 설정온도 </div>
              <div> 19℃ ~ 20℃ </div>
            </CC.GridColumn2>
            <CC.GridColumn2>
              <div> 실내 냉방 설정온도</div>
              <div> 26℃ ~ 27℃</div>
            </CC.GridColumn2>
            <CC.GridColumn2>
              <div> 가동시간</div>
              <div> 07시 ~ 18시</div>
            </CC.GridColumn2>
            <CC.GridColumn2>
              <div> 냉난방 가동일수</div>
              <div> 250일/년(월 평균 20.8일)</div>
            </CC.GridColumn2>
          </TopBuildingInformation>
        </CC.RowBetweenDiv>
        <CC.ColumnDiv>
          <CC.GridColumn2>
            <BottomCOPContainer>
              <div> 수온 </div>
              <div> 5도 </div>
              <div> 15도 </div>
            </BottomCOPContainer>
            <BottomCOPContainer>
              <div> 수온 </div>
              <div> 25도 </div>
              <div> 35도 </div>
            </BottomCOPContainer>
          </CC.GridColumn2>
          <CC.GridColumn2>
            <BottomCOPContainer>
              <div> 난방 COP </div>
              <div> 5.11 </div>
              <div> 5.30 </div>
            </BottomCOPContainer>
            <BottomCOPContainer>
              <div> 냉방 COP </div>
              <div> 5.84 </div>
              <div> 4.96 </div>
            </BottomCOPContainer>
          </CC.GridColumn2>
        </CC.ColumnDiv>
      </CC.ColumnDiv>
    </Container>
  );
};
export default BuildingListItem;

const Container = styled.button`
  width: 600px;
  outline: solid black 1px;
`;

const TopBuildingInformation = styled(CC.ColumnDiv)`
  width: 100%;

  & > div > div {
    outline: solid #999 1px;
    padding: 2px;
  }
  & > div > div:nth-of-type(1) {
    background: #d9d9d9;
  }
`;

const BottomCOPContainer = styled(CC.GridColumn3)`
  & > div {
    padding: 2px;
    outline: solid #999 1px;
  }
  & > div:nth-of-type(1) {
    background: #dbeef4;
  }
`;

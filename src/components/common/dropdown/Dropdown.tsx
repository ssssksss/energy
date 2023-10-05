import { CC } from '@/styles/commonComponentStyle';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';
import { Icons } from '@/components/common/icons/Icons';
import Image from 'next/image';
import { Button } from '@/components/common/button/Button';
/**
 * @author Sukyung Lee <ssssksss@naver.com>
 * @file Dropdown.tsx
 * @version 0.0.1 "2023-09-25 22:16:43"
 * @description 설명
 */

interface IDropdownProps {
  w: string;
  h: string;
  menus: [
    {
      name: string;
      func: () => void;
    }
  ];
}

const Dropdown = (props: IDropdownProps) => {
  const [isOpen, setIsOpen] = useState(null);
  const [activeMenu, setActiveMenu] = useState(props.menus[0].name);

  useEffect(() => {
    const temp = () => {
      setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('click', temp);
    }

    return () => {
      window.removeEventListener('click', temp);
    };
  }, [isOpen]);

  return (
    <Container isOpen={isOpen} width={props.w} height={props.h}>
      <ButtonStyle
        size="md"
        outline={true}
        onClick={() => {
          setIsOpen(prev => (prev === null ? true : !prev));
        }}
      >
        <div> {activeMenu} </div>
        <Arrow>
          {isOpen ? (
            <Image
              src={Icons.UpArrowIcon}
              width={'16px'}
              height={'16px'}
              alt="down-arrow"
            />
          ) : (
            <Image
              src={Icons.DownArrowIcon}
              width={'16px'}
              height={'16px'}
              alt="up-arrow"
            />
          )}
        </Arrow>
      </ButtonStyle>
      <ul>
        {props.menus
          ?.filter(i => i.name !== activeMenu)
          .map((el, index) => (
            <li>
              <ButtonStyle1
                size="md"
                isOpen={isOpen}
                listLength={props.menus.length}
                index={index}
                outline={true}
                onClick={() => {
                  setIsOpen(false);
                  if (el.name !== activeMenu) {
                    setActiveMenu(el.name);
                    el.func();
                  }
                }}
              >
                {el.name}
              </ButtonStyle1>
            </li>
          ))}
      </ul>
    </Container>
  );
};
export default React.memo(Dropdown);

const dropdownUpAnimation = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        display: none;
    }
    `;

const dropdownDownAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const Container = styled.div<{
  isOpen: boolean;
  width: string;
  height: string;
}>`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  ul {
    background: transparent;
    z-index: 20;
    width: 100%;
    list-style: none;
    position: absolute;
    li {
      width: 100%;
      button {
        background: ${props => props.theme.main.contrast};
        width: 100%;
        color: ${props => props.theme.main.primary80};
      }
      button:hover {
        color: ${props => props.theme.main.contrast};
        background: ${props => props.theme.main.primary80};
      }
    }
  }
`;

const ButtonStyle = styled(Button)`
  width: 100%;
  height: 100%;
  color: ${props => props.theme.main.primary100};
  background: ${props => props.theme.main.contrast};
  ${props => props.theme.flex.row};
  line-height: 50%;
  gap: 4px;
  position: relative;
  z-index: 40;
`;
const Arrow = styled.div`
  position: absolute;
  right: 0px;
`;
const ButtonStyle1 = styled(Button)<{
  index: number;
  isOpen: boolean;
  listLength: number;
}>`
  --up: ${props => props.listLength / 10 - props.index / 10 + 's'};
  --down: ${props => props.index / 10 + 's'};
  animation: ${props =>
    props.isOpen === true
      ? css`
          ${dropdownDownAnimation} linear var(--down);
          animation-fill-mode: forwards;
        `
      : props.isOpen === false
      ? css`
          ${dropdownUpAnimation} linear var(--up);
          animation-fill-mode: forwards;
        `
      : props.isOpen === null &&
        css`
          ${dropdownUpAnimation} linear 0s;
          animation-fill-mode: forwards;
        `};
`;

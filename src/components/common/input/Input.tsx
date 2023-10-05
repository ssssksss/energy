import { ChangeEvent, KeyboardEvent } from 'react';
import styled from '@emotion/styled';
import Animations from '@/components/common/animations/Animations';
import { css } from '@emotion/react';
/**
 * Author : Sukyung Lee
 * FileName: Input.tsx
 * Date: 2022-06-17 02:19:41
 * Description : 커스텀 Input 컴포넌트
 */

interface IInputProps {
  type?:
    | 'password'
    | 'text'
    | 'radio'
    | 'checkbox'
    | 'email'
    | 'search'
    | 'range'
    | 'color';
  placeholder?: string;
  /**
   * react-hook-form 사용시 필요한 파라미터
   */
  register?: any;
  /**
   * react-hook-form 사용시 필요한 파라미터
   */
  field?: any;
  disabled?: boolean;
  defaultValue?: any;
  checked?: boolean;
  color?: string;
  placeholderColor?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: any;
  value?: string | number | boolean;
  ref?: any;
  name?: string;
  id?: string;
  display?: string;
  errorMessage?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  outline?: boolean;
  pd?: string;
  leftIconImage?: string;
  w?: string;
  h?: string;
  brR?: string;
  styleTypes?: number;
  bg?: string;
  outline?: boolean;
  
}

export const Input = ({
  type,
  placeholder = '설명',
  register,
  field,
  disabled,
  defaultValue,
  checked,
  onChange,
  value,
  ref,
  color,
  placeholderColor,
  name,
  id,
  display,
  onKeyPress,
  errorMessage,
  size = 'md',
  pd,
  leftIconImage,
  w,
  h,
  brR,
  bg,
  outline,
  styleTypes,
  ...props
}: IInputProps) => {
  return (
    <>
      <InputStyle
        type={type ?? 'text'}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        checked={checked}
        onChange={onChange}
        value={value}
        ref={ref}
        color={color}
        placeholderColor={placeholderColor}
        name={name}
        id={id}
        display={display}
        checked={checked}
        size={size}
        errorMessage={errorMessage}
        padding={pd}
        leftIconImage={leftIconImage}
        background={bg}
        width={w}
        height={h}
        borderRadius={brR}
        styleTypes={styleTypes}
        outline={outline}
        onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
          if (
            e.key === 'Enter' &&
            onKeyPress &&
            (type === 'text' ||
              type === 'password' ||
              type === 'email' ||
              type === 'search')
          ) {
            onKeyPress();
          }
        }}
        {...field}
        {...register}
        {...props}
      />
      {errorMessage ? (
        <ErrorMessageSpan> {errorMessage} </ErrorMessageSpan>
      ) : (
        <></>
      )}
    </>
  );
};

// 제거할 부분
const ErrorMessageSpan = styled.span`
  color: red;
  position: absolute;
  font-size: 10px;
  display: flex;
  align-items: center;
  transform: translate(0, 20px);
  word-break: keep-all;
`;

const InputStyle = styled.input<IInputProps>`
  font-size: 1rem;
  outline: none;
  border: none;
  display: ${props => (props.display ? props.display : 'block')};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '24px'};
  padding: ${props => props.padding || '2px 0px 2px 4px'};
  border-radius: ${props => props.borderRadius || "10px"};
  &:hover {
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  }
  position: relative;

  background:  ${props => props.theme.colors.[props.background] || props.theme.main.[props.background] ||  props.theme.main.contrast};
  color:  ${props => props.theme.colors.[props.color] || props.theme.main.[props.color] ||  props.theme.main.contrast};
  /* 순서주의 */
  ${props =>
    props.disabled &&
    `
    background-color: ${props.theme.colors.disabled};
      cursor: not-allowed;
      &:hover {
        box-shadow: none;
        cursor: not-allowed;
      }
    `}
  /* 순서주의 */
  ${props =>
    props.outline &&
    css`
      outline: solid ${(props.theme.colors.[props.color] || props.theme.main.[props.color] ||  props.theme.main.contrast)} 1px;
      background: transparent;
    `}
  ${props =>
    props.leftIconImage &&
    `
      background-image: url(${props.leftIconImage});
      padding: 0px 0px 0px calc(${props.height ? props.height : '24px'} + 4px);
      background-position: 4px center;
      background-repeat: no-repeat;
      background-size: contain;
  `}

  &[type='checkbox'] {
    appearance: none;
    outline: solid ${props=>props.theme.main.contrast} 1px;
  }

  &[type='checkbox']:checked { 
    position: relative;
    cursor: pointer;
  }
  
  &[type='checkbox']:checked::after {
    content: "✔";
    width: 80%;
    height: 80%;
    border-radius: 50%;
    /* background: ${props=>props.theme.main.primary100}; */
    color: ${props=>props.theme.main.primary100};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    ${props=>props.theme.flex.row.center.center};
    font-size: 1.4em;
  }

  

  &[type='datetime-local']::-webkit-calendar-picker-indicator {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    &:hover {
      cursor: pointer;
    }
  }

  ::placeholder {
    transition: all 0.6s ease-in-out;
    opacity: 0.7;
    font-size: ${props=>props.theme.fontSizes.sm};
    color: ${props=> props.placeholderColor ? props.theme.colors.[props.placeholderColor] : props.theme.colors.black80};
  }
  :focus::placeholder {
    transform: translate(-2px, -50%);

    ${props =>
      props.type === 'search' &&
      `
    color: transparent;
  `}
  }

  ${props=>props.styleTypes === 1 && `
    outline: solid ${props.theme.colors.white80} 1px;
    background: rgba(0, 0, 0, 0.01);
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
    height: 40px;
    color: ${props.theme.colors.white80};
    ::placeholder {
      transition: all 0.6s ease-in-out;
      opacity: 0.7;
      font-size: ${props.theme.fontSizes.sm};
      color: ${props.theme.colors.white80};
      padding: '6px';
    }
  `}
`;

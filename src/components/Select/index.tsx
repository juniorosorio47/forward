import React, { SelectHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core'

import { Container, Error, OptionSelect } from './styles';

interface Options {
  key:number;
  value:string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    icon?: React.ComponentType<IconBaseProps>;
    name: string;
    containerStyles?:object;
    options: Options[];
    defaultValue?:string;
}

const Select: React.FC<SelectProps> = ({ name, icon: Icon, containerStyles={}, options, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const selectRef = useRef<HTMLSelectElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!selectRef.current?.value);
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
  <Container 
    isErrored={!!error} 
    isFilled={isFilled} 
    isFocused={isFocused}
    style={containerStyles}
    >
      { Icon && <Icon size={20}/> }
      <select 
        name={name}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue} 

        ref={selectRef} 
        {...rest}>
          <OptionSelect disabled key={0} value={""} >{rest.placeholder}</OptionSelect>
          {options.map((opt)=>(<>
            <OptionSelect key={opt.key} value={opt.value}>{opt.value}</OptionSelect>
          </>
          ))}
        </select>
      {error && <>
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      </> 
      }

    </Container>) ;
}

export default Select;
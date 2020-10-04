import React, { useState, useEffect } from 'react'
import styled, {css} from 'styled-components';
import {MdAdd} from 'react-icons/md';
import {useTodoDispatch, useTodoNextId} from '../TodoContext'; 

const CircleButton = styled.div`
    background: #38d9a9;
    &:hover{
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }

    cursor: pointer;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    font-size: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    color: white;

    transition: 0.125s all ease-in;
    ${props =>
        props.open &&
        css `
            background: #ff6b6b;
            &:hover {
                background: #ff8787;
            }
            &:active {
                background: #fa5252;
            }
            transform: translate(-50%, 50%) rotate(45deg);
        `
    }
`;
const InsertFormPositioner = styled.div`
    width:100%;
`;
const InsertForm = styled.form`

    padding-top: 32px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 72px;

    ${props => 
        props.open &&
        css`
            background: #f8f9fa;
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
            border-top: 1px solid #e9ecef;
        `
    }
`;
const Input = styled.input`
    width: 100%;
    height: 35px;
    border-radius: 4px;
    font-size: 18px;
    border: 1px solid #dee2e6;

    box-sizing: border-box;
    outline: none;
`;
function TodoCreate({}) {
    const [open, setOpen] = useState(false);
    const [value,setValue] = useState('');

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onToggle = () => setOpen(!open);
    const onChange = (e) => setValue(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            todo:{
                id: nextId.current,
                text: value,
                done: false
            }
        });
        setValue('');
        setOpen(false);
        nextId.current +=1;
    }
    return (
        <>
            <InsertFormPositioner>
                <InsertForm open={open} onSubmit={onSubmit}>
                    {open && <Input value={value} onChange={onChange} placeholder="할 일을 입력 후, Enter를 누르세요!"></Input>}
                </InsertForm>
            </InsertFormPositioner>
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </>
    )
}

export default React.memo(TodoCreate);

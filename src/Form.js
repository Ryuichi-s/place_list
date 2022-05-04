import { useState } from 'react';
import { Button } from './components/button';
import styled from 'styled-components';
import { TabBodyContainer } from './components/tab-body-container';
import { Hint } from './Hint';

const Label = styled.label`
    display: flex;
    color: #757575;
    font-size: 14px;
    font-weight: bold;
`

const Input = styled.input`
    border-radius: 3px;
    padding: 4px 8px;
    border: 1px solid black;
`

const ButtonContainer = styled.div`
    margin-top: 24px;
`

const FormButton = styled(Button)`
    width: 120px;
`

export const Form = ({ onAddPlace }) => {
    const [text, setText] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        onAddPlace(text);
    }

    return (
    <TabBodyContainer title="行きたい場所の追加">
        <form onSubmit={submitForm}>
            <div>
                <Label>場所</Label>
                <Input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
                <Hint/>
            </div>
            <ButtonContainer>
                <FormButton>追加</FormButton>
            </ButtonContainer>
        </form>
    </TabBodyContainer>
    )
}
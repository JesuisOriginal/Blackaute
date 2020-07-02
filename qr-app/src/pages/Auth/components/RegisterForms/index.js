import React, { useState, useEffect } from 'react';
import {styled, Button, Grid, Input, Typography} from '@material-ui/core';

export default function RegisterForms({onChange, onSubmit, register}){
    const [registerType, setRegisterType] = useState('');

    const handleChangeType = ({target}) => {
        const {value} = target;
        setRegisterType(value);
    };

    const SelectStep = () => (
        <>
            <SelectButton variant='contained' id={'method'} value={'voucher'} onClick={handleChangeType}>POR VOUCHER</SelectButton>
            <SelectButton variant='contained' id={'method'} value={'regular'} onClick={handleChangeType}>POR CADASTRO</SelectButton>
        </>
    );

    const VoucherForm = () => (
        <InputContainer >
            <TextInput placeholder='voucher' />
            <SelectButton variant='contained'>Submeter</SelectButton>
        </InputContainer>
    );

    const RegularForm = () => (
        <InputContainer>
            <TextInput placeholder='Nome' defaultValue='' id={'nome'} onChange={onChange}/>
            <TextInput placeholder='Email' defaultValue='' id={'email'} onChange={onChange}/>
            <TextInput placeholder='Senha' defaultValue='' id={'password'} onChange={onChange}/>
            <TextInput placeholder='Telefone' defaultValue='' id={'phone'} onChange={onChange}/>
            <TextInput placeholder='CPF/CNPJ' defaultValue='' id={'reg_num'} onChange={onChange}/>
            <SelectButton variant='contained'>CADASTRE-SE</SelectButton>
        </InputContainer>
    )

    const RenderType = () => {
        switch(registerType) {
            case 'voucher':
                return  VoucherForm();
            case 'regular': 
                return RegularForm();
            default: 
                return SelectStep();
        }
    };

    // useEffect(() => {

    // },[registerType])

    return(
        <Container>
            <RenderType />
        </Container>
    )
    
};

const Container = styled(Grid)({
    display:'flex',
    flexDirection:'column',
    width: '100%'
});

const InputContainer = styled(Grid)({
    display:'flex',
    flex:1,
    flexDirection:'column',
});

const SelectButton = styled(Button)({
    display:'flex',
    flex:1,
    marginBottom:'2rem',
}); 

const TextInput = styled(Input)({
    display:'flex',
    flex: 1,
    flexDirection:'row',
    width: '100%',
    marginBottom:'2rem'
})





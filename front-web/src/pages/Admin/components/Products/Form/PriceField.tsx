import React from 'react';
import { Control, Controller } from 'react-hook-form';
import CurrencyInput from 'react-currency-input-field';
import { FormState } from '.';

type Props = {
    control: Control<FormState>;
}

const PriceField = ({ control }: Props) => (
    <Controller
        name="price"
        control={control}
        rules={{ required: "Campo obrigatório" }}
        render={({ field: { onChange, value, name, ref } }) => (
            <CurrencyInput
                className="form-control input-base"
                placeholder="Preço"
                value={value}
                intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                onValueChange={onChange}
            />
        )}
    />
);

export default PriceField;
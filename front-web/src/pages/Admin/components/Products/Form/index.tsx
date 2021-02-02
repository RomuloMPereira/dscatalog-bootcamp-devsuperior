import React, { useState } from 'react';
import BaseForm from '../../BaseForm';
import './styles.scss';

const Form = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('computadores');

    const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        console.log(event.target.value);
    }

    const handleOnChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value);
        console.log(event.target.value);
    }

    const handleOnChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value);
        console.log(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            name,
            price
        }

        console.log(payload);
    }

    return (
        <form onSubmit={handleSubmit}>
            <BaseForm title="cadastrar um produto">
                <div className="row">
                    <div className="col-6">
                        <input
                            value={name}
                            type="text"
                            className="form-control mb-5 mt-5"
                            onChange={handleOnChangeName}
                            placeholder="Nome do produto"
                        />
                        <select value={category} className="form-control mb-5" onChange={handleOnChangeCategory}>
                            <option value="livros">Livros</option>
                            <option value="computadores">Computadores</option>
                            <option value="eletrônicos">Eletrônicos</option>
                        </select>
                        <input
                            value={price}
                            type="text"
                            className="form-control"
                            onChange={handleOnChangePrice}
                            placeholder="Preço"
                        />
                    </div>
                    <div className="col-6">

                    </div>
                </div>
            </BaseForm>
        </form>
    );
}

export default Form;
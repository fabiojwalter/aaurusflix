import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const defaultObject = {
    id: '0',
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(defaultObject);

  /**
     *
     * @param {Event} e
     */
  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);
    setValues(defaultObject);
  }

  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  useEffect(() => {
    const URL = `${process.env.REACT_APP_BACKEND_URL}/categorias`;
    console.log(`${process.env.REACT_APP_BACKEND_URL}/categorias`);
    fetch(URL)
      .then(async (response) => {
        const jsonData = await response.json();
        setCategorias([
          ...jsonData,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button onClick={handleSubmit}>Cadastrar</Button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Cor</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={categoria.id}>
              <td>{categoria.nome}</td>
              <td>{categoria.descricao}</td>
              <td>{categoria.cor}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;

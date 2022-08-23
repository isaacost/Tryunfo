import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            data-testid="name-input"
            id="name"
          />
        </label>
        <br />
        <label htmlFor="description">
          Descrição:
          <textarea
            type="text"
            data-testid="description-input"
            id="description"
          />
        </label>
        <br />
        <label htmlFor="attr1">
          Atributo 1:
          <input
            type="number"
            data-testid="attr1-input"
            id="attr1"
          />
        </label>
        <label htmlFor="attr2">
          Atributo 2:
          <input
            type="number"
            data-testid="attr2-input"
            id="attr2"
          />
        </label>
        <label htmlFor="attr3">
          Atributo 3:
          <input
            type="number"
            data-testid="attr3-input"
            id="attr3"
          />
        </label>
        <br />
        <label htmlFor="image">
          Imagem:
          <input
            type="text"
            data-testid="image-input"
            id="image"
          />
        </label>
        <br />
        <label htmlFor="rare">
          Raridade:
          <select
            type="text"
            data-testid="rare-input"
            id="rare"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="trunfo">
          Super Trunfo:
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo"
          />
        </label>
        <br />
        <button
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>

      </form>
    );
  }
}

export default Form;

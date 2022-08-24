import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  superTrunfo = (hasTrunfo) => {
    if (hasTrunfo) {
      return (
        <p>Você já tem um Super Trunfo em seu baralho</p>
      );
    }
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <div>
        <input
          name="cardTrunfo"
          type="checkbox"
          data-testid="trunfo-input"
          id="trunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </div>
    );
  };

  render() {
    const {
      hasTrunfo,
      onInputChange,
      onSaveButtonClick,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            name="cardName"
            type="text"
            data-testid="name-input"
            id="name"
            value={ cardName }
            onChange={ onInputChange }

          />
        </label>
        <br />
        <label htmlFor="description">
          Descrição:
          <textarea
            name="cardDescription"
            type="text"
            data-testid="description-input"
            id="description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="attr1">
          Atributo 1:
          <input
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
            id="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2">
          Atributo 2:
          <input
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
            id="attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3">
          Atributo 3:
          <input
            name="cardAttr3"
            type="number"
            data-testid="attr3-input"
            id="attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="image">
          Imagem:
          <input
            name="cardImage"
            type="text"
            data-testid="image-input"
            id="image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="rare">
          Raridade:
          <select
            name="cardRare"
            type="text"
            data-testid="rare-input"
            id="rare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="trunfo">
          Super Trunfo:
          {this.superTrunfo(hasTrunfo)}
        </label>
        <br />
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ () => {
            onSaveButtonClick({
              cardName,
              cardDescription,
              cardAttr1,
              cardAttr2,
              cardAttr3,
              cardImage,
              cardRare,
              cardTrunfo,
            });
          } }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  hasTrunfo: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
}.isRequired;

export default Form;

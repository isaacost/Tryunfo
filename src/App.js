import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    cards: [],
    hasTrunfo: false,
    filterName: '',
    filterRare: 'todas',
    isOtherFiltersDisabled: false,
  };

  validationSaveButton = () => {
    const maxValue = 210;
    const maxAtt = 90;
    const zero = 0;

    const { cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;

    const notEmpty = cardName.length
      && cardDescription
      && cardImage
      && cardRare;
    const sumAtt = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxValue;
    const valueAtt = Number(cardAttr1) <= maxAtt
      && Number(cardAttr2) <= maxAtt
      && Number(cardAttr3) <= maxAtt;
    const positive = Number(cardAttr1) >= zero
      && Number(cardAttr2) >= zero
      && Number(cardAttr3) >= zero;
    return notEmpty && sumAtt && valueAtt && positive;
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      if (this.validationSaveButton()) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  };

  saveButton = (objeto) => {
    const { cardTrunfo, hasTrunfo } = this.state;
    this.setState({
      hasTrunfo: hasTrunfo || cardTrunfo,
    });
    this.setState((estadoAnterior) => ({
      cards: [...estadoAnterior.cards, objeto],
    }), () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
      });
    });
  };

  deleteCard = (name) => {
    const { cards, hasTrunfo } = this.state;
    const selected = cards.find(({ cardName }) => cardName === name);

    this.setState({
      cards: [...cards.filter((card) => card !== selected)],
      hasTrunfo: selected ? !hasTrunfo : hasTrunfo,
    });
  };

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      cards,
      filterName,
      filterRare,
      isOtherFiltersDisabled } = this.state;

    return (
      <main>
        <h1>Tryunfo</h1>
        <div>
          <Form
            onInputChange={ this.handleChange }
            onSaveButtonClick={ this.saveButton }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            hasTrunfo={ hasTrunfo }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <h1> Cartas Salvas </h1>
        <div className="filters">
          <label htmlFor="filterName">
            Filtrar por nome:
            <input
              type="text"
              data-testid="name-filter"
              className="filterName"
              name="filterName"
              value={ filterName }
              onChange={ this.handleChange }
              disabled={ isOtherFiltersDisabled }
            />
          </label>
          <label htmlFor="filterRare">
            Filtar por raridade:
            <select
              data-testid="rare-filter"
              className="filterRare"
              name="filterRare"
              value={ filterRare }
              onChange={ this.handleChange }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
        </div>
        <div className="cartasSalvas">
          {
            cards
              .filter((card) => card.cardName.includes(filterName))
              .filter(
                (card) => {
                  if (filterRare === 'todas') return true;
                  return card.cardRare === filterRare;
                },
              )
              .map((card) => (
                <div key={ card.cardName }>
                  <Card
                    cardName={ card.cardName }
                    cardDescription={ card.cardDescription }
                    cardAttr1={ card.cardAttr1 }
                    cardAttr2={ card.cardAttr2 }
                    cardAttr3={ card.cardAttr3 }
                    cardImage={ card.cardImage }
                    cardRare={ card.cardRare }
                    cardTrunfo={ card.cardTrunfo }
                  />
                  <button
                    type="button"
                    data-testid="delete-button"
                    onClick={ () => this.deleteCard(card.cardName) }
                  >
                    Excluir
                  </button>
                </div>
              ))
          }
        </div>
      </main>
    );
  }
}

export default App;

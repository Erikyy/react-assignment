import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import { connect } from 'react-redux';
import { fetchCurrencies, setActiveCurrency } from './CurrencySlice';
import { NavItem } from '../../common/components/navigation/Navbar';
import { Button } from '../../common/components/common/Button';
import DropDownMenu from '../../common/components/navigation/DropDownMenu';
import DropDownItem from '../../common/components/navigation/DropDownItem';

const mapStateToProps = (state) => {
  const currencies = state.CurrencyReducer.currencies;
  const activeCurrency = state.CurrencyReducer.activeCurrency;
  return {
    currencies,
    activeCurrency,
  };
};

const mapDispatchToProps = {
  fetchCurrencies,
  setActiveCurrency,
};

class CurrencySwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    this.props.fetchCurrencies('USD');
    this.props.fetchCurrencies('AUD');
    this.props.fetchCurrencies('JPY');
  }

  render() {
    return (
      <NavItem padding={0.1}>
        {/* todo: add chevron icon to currency switcher button */}
        <Button
          style={{
            padding: '12px',
          }}
          onClick={() => this.setState((prevState) => ({ open: !prevState.open }))}
        >
          {getSymbolFromCurrency(this.props.activeCurrency)}
        </Button>
        <DropDownMenu
          style={{
            right: '27px',
          }}
          open={this.state.open}
        >
          {this.props.currencies.map((currency, index) => {
            return (
              <DropDownItem key={String(index)}>
                <Button onClick={() => this.props.setActiveCurrency(currency)}>
                  {getSymbolFromCurrency(currency)}&nbsp;
                  {currency}
                </Button>
              </DropDownItem>
            );
          })}
        </DropDownMenu>
      </NavItem>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);

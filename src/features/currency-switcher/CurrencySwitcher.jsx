import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import { connect } from 'react-redux';
import { fetchCurrencies, setActiveCurrency } from './CurrencySlice';
import { NavItem } from '../../common/components/navigation/Navbar';
import { Button } from '../../common/components/common/Button';
import DropDownMenu from '../../common/components/navigation/DropDownMenu';
import DropDownItem from '../../common/components/navigation/DropDownItem';
import { ChevronDown, ChevronUp } from '../../icons/Icons';

const mapStateToProps = (state) => {
  const currencies = state.CurrencyReducer.currencies;
  const activeCurrency = state.CurrencyReducer.activeCurrency;
  return {
    currencies,
    activeCurrency,
    status: state.CurrencyReducer.status,
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

          {this.state.open ? (
            <ChevronUp
              style={{
                paddingLeft: '10px',
                paddingBottom: '2px',
              }}
            />
          ) : (
            <ChevronDown
              style={{
                paddingLeft: '10px',
                paddingBottom: '2px',
              }}
            />
          )}
        </Button>
        <DropDownMenu
          style={{
            right: '27px',
            backgroundColor: '#fff',
            paddingRight: '5rem',
          }}
          open={this.state.open}
        >
          {this.props.status === 'success'
            ? this.props.currencies.map((currency, index) => {
                return (
                  <DropDownItem key={String(index)}>
                    <Button onClick={() => this.props.setActiveCurrency(currency)}>
                      {getSymbolFromCurrency(currency)}&nbsp;
                      {currency}
                    </Button>
                  </DropDownItem>
                );
              })
            : ''}
        </DropDownMenu>
      </NavItem>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);

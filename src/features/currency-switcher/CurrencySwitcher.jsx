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
            display: 'flex',
          }}
          onClick={() => this.setState((prevState) => ({ open: !prevState.open }))}
        >
          <p style={{ fontSize: '14pt' }}>{getSymbolFromCurrency(this.props.activeCurrency)}</p>

          {this.state.open ? (
            <ChevronUp
              style={{
                paddingLeft: '10px',
              }}
            />
          ) : (
            <ChevronDown
              style={{
                paddingLeft: '10px',
              }}
            />
          )}
        </Button>
        <DropDownMenu
          style={{
            backgroundColor: '#fff',
          }}
          open={this.state.open}
        >
          {this.props.status === 'success'
            ? this.props.currencies.map((currency, index) => {
                return (
                  <DropDownItem key={String(index)}>
                    <Button
                      style={{ display: 'flex' }}
                      onClick={() => {
                        this.props.setActiveCurrency(currency);
                        this.setState({ open: false });
                      }}
                    >
                      <p style={{ fontSize: '14pt' }}>{`${getSymbolFromCurrency(
                        currency,
                      )} ${currency}`}</p>
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

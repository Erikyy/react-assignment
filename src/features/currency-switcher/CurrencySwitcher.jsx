import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import { connect } from 'react-redux';
import { fetchCurrencies, setActiveCurrency } from './CurrencySlice';
import { NavItem } from '../../common/components/navigation/Navbar';
import { Button } from '../../common/components/common/Button';
import DropDownMenu from '../../common/components/navigation/DropDownMenu';
import { ChevronDown, ChevronUp } from '../../icons/Icons';

import './styles/CurrencySwitcher.css';

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
    this.dropdownRef = React.createRef();
  }

  componentDidMount() {
    this.props.setCurrencySwitcherCLoseFunc(this.closeMenu);
  }

  closeMenu() {
    this.setState({ open: false });
  }

  render() {
    return (
      <NavItem
        className="no-padding"
        onBlur={(e) => {
          if (!this.dropdownRef.current.contains(e.relatedTarget) && this.state.open) {
            this.setState((prevState) => ({ open: !prevState.open }));
            this.props.onCurrencySwitcherButtonClicked(this.state.open);
          }
        }}
        ref={this.dropdownRef}
      >
        <Button
          className="btn-flex btn-padding-10px"
          onClick={() => {
            this.setState(
              (prevState) => ({ open: !prevState.open }),
              () => {
                this.props.onCurrencySwitcherButtonClicked(this.state.open);
              },
            );
          }}
        >
          <p className="currency-button-symbol">
            {getSymbolFromCurrency(this.props.activeCurrency)}
          </p>

          {this.state.open ? (
            <ChevronUp className="chevron-up" />
          ) : (
            <ChevronDown className="chevron-down" />
          )}
        </Button>
        <DropDownMenu open={this.state.open}>
          {this.props.status === 'success'
            ? this.props.currencies.map((currency, index) => {
                return (
                  <div className="dropdown-item" key={String(index)}>
                    <Button
                      onClick={() => {
                        this.props.setActiveCurrency(currency);
                      }}
                    >
                      <p className="currency-symbol-and-name">{`${getSymbolFromCurrency(
                        currency,
                      )} ${currency}`}</p>
                    </Button>
                  </div>
                );
              })
            : ''}
        </DropDownMenu>
      </NavItem>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);

import React from 'react';
import {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: null
      };

      this._activateItemHandler = this._activateItemHandler.bind(this);
      this._disableItemHandler = this._disableItemHandler.bind(this);
    }

    render() {
      const {activeItem} = this.state;

      return (
        <Component
          {...this.props}
          activeItem = {activeItem}
          onItemActivate = {this._activateItemHandler}
          onItemDisable = {this._disableItemHandler}
        />
      );
    }

    _activateItemHandler(item) {
      this.setState(({
        activeItem: item
      }));
    }

    _disableItemHandler() {
      this.setState({
        activeItem: null
      });
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;

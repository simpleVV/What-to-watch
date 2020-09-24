import React from 'react';
import PropTypes from 'prop-types';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withActiveItem from './with-active-item.js';

Enzyme.configure({adapter: new Adapter()});

const MockComponent = (props) => {
  const {
    onItemActivate,
    onItemDisable
  } = props;

  return (
    <div>
      <button className="activate"
        onClick = {(evt) => {
          onItemActivate(evt.target.textContent);
        }}
      >
      Crime
      </button>
      <button className="disabled"
        onClick = {onItemDisable}
      />
    </div>
  );
};
const MockComponentWrapped = withActiveItem(MockComponent);

describe(`The HOC interactivity`, () => {
  it(`No active item by default`, () => {
    const mockComponentWrapped = mount(<MockComponentWrapped/>);

    expect(mockComponentWrapped.state().activeItem).toEqual(null);
  });

  it(`Set active item`, () => {
    const mockComponentWrapped = mount(<MockComponentWrapped/>);

    const button = mockComponentWrapped.find(`.activate`);

    button.simulate(`click`);
    expect(mockComponentWrapped.state().activeItem).toEqual(`Crime`);
  });

  it(`Disabled active item`, () => {
    const mockComponentWrapped = mount(<MockComponentWrapped/>);

    const button = mockComponentWrapped.find(`.disabled`);

    button.simulate(`click`);

    expect(mockComponentWrapped.state().activeItem).toEqual(null);
  });
});

MockComponent.propTypes = {
  onItemActivate: PropTypes.func,
  onItemDisable: PropTypes.func
};

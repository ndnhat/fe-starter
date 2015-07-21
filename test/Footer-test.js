'use strict';
import assert from 'assert';
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

import Footer from '../app/components/shared/footer';

require('../mocha/testdom')('<html><body></body></html>');

describe('Footer', function() {
  
  let footer = TestUtils.renderIntoDocument(
    <Footer />
  );
  let links = TestUtils.scryRenderedDOMComponentsWithTag(footer, 'a');

  it('contains Privacy Policy link', function() {
    assert.equal(links[0].getDOMNode().textContent, 'Privacy Policy');
  });

  it('contains OC Tanner link', function() {
    assert(links[2].getDOMNode().textContent.includes('Tanner'));
  });
});

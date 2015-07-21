'use strict';
import assert from 'assert';
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

import Header from '../app/components/shared/header';

require('../mocha/testdom')('<html><body></body></html>');

describe('Header', function() {
  
  let header = TestUtils.renderIntoDocument(
    <Header />
  );

  it('has a nav that contains a list of links', function() {

    let nav = TestUtils.findRenderedDOMComponentWithTag(header, 'nav');
    assert(TestUtils.isDOMComponent(nav));
    
    let list = TestUtils.findRenderedDOMComponentWithTag(nav, 'ul');
    assert(TestUtils.isDOMComponent(list));

    let links = TestUtils.scryRenderedDOMComponentsWithTag(list, 'a');
    assert(links.length > 0);
   
  });
});

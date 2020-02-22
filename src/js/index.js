import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import 'bootstrap';
import '../scss/index.scss';


import '@fortawesome/fontawesome-free/js/fontawesome'

import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import scrollToTop from './scroll_to_top';
import scrollerSpy from './scroller';

$(document).ready(function(){
  scrollerSpy();
  scrollToTop();
});
/**
 * Starts the collapse and expand example component.
 */
define(['edx-ui-toolkit/views/collapsible-view'], function(CollapsibleView) {
    'use strict';
    new CollapsibleView({
        el: '#collapsible-example',
        toggleTextSelector: '.js-collapsible-toggle',
        collapsibleSelector: '.js-collapsible-target'
    });
});

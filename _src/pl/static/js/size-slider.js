/*
 * Icon size slider
 * Creates a slider control which lets users scale the icons to see how
 * they might look in various sizes. The size in pixels is also displayed
 * with the control.
 */

$(function() {

    var IconFontSliderControl = {

        vars: {
            wrapper: $('#icons-preview'),
            heading: $('.pl-tab-heading'),
            swatch: $('.swatch .icon-display'),
            sliderControl: $('#iconFontSlider'),
            sliderValue: $('#iconFontSliderValue')
        },

        init: function() {
            this.listenForSlider();
        },

        listenForSlider: function() {
            var that = this;

            that.vars.sliderControl.on('input', function() {
                that.updateIconSize($(this).val());
                that.updateInputText($(this).val());
            });
        },

        updateIconSize: function(size) {
            var that = this;

            that.vars.swatch.css({ width: size + 'px' });
        },

        updateInputText: function(size) {
            var that = this;

            that.vars.sliderValue.val(size);
        }

    };

    IconFontSliderControl.init();

});

/*
 * Accessibility Color Contrast Tool
 * Runs through our list of swatches checking the contrast variance between foreground
 * and background, and highlights those swatch color combinations that don't meet AA
 * acceptance criteria.
 *
 * The majority of this code was adapted from Jared Smith of WebAIM.org
 * http://webaim.org/resources/contrastchecker
 */

$(function() {

    var AccessibilityColorContrast = {

        vars: {
            failClass:      'fail-a11y-color' // Class for failed palettes
        },

        init: function() {
            this.checkContrast();
        },

        rgbaToHex: function(rgba) {
            var that = this,
                rgba = rgba.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i),
                hex;

            hex = (rgba && rgba.length === 4) ? '#' +
                ('0' + parseInt(rgba[1],10).toString(16)).slice(-2) +
                ('0' + parseInt(rgba[2],10).toString(16)).slice(-2) +
                ('0' + parseInt(rgba[3],10).toString(16)).slice(-2) : '';

            hex = hex.replace('#', '');

            // console.log(hex);
            return hex;
        },

        checkContrast: function() {
            var that = this,
                bg, fg;

            $('.swatch').each(function() {

                bg = that.getL( that.rgbaToHex( $(this).find('.swatch-color').css('backgroundColor') ) );
                fg = that.getL( that.rgbaToHex( $(this).find('.color-class').css('color') ) );

                var ratio = (Math.max(bg, fg) + 0.05) / (Math.min(bg, fg) + 0.05),
                    ratios = [4.5, 3]; // 4.5 normal text AA, 3 large text AA

                // console.log(ratio, ratios[0]);

                if (ratio < ratios[0]) {
                    // Text should pass for normal sized text (non-headings)
                    that.applyHighlighting($(this));
                }

                if (ratio < ratios[1]) {
                    // Text should pass for heading sized text
                    // Unused at this time, since text is smaller
                }
            });
        },

        getL: function(color) {
            var that = this,
                R, G, B, A, L;

            if (color.length == 3) {

                R = that.getsRGB(color.substring(0,1) + color.substring(0,1));
                G = that.getsRGB(color.substring(1,2) + color.substring(1,2));
                B = that.getsRGB(color.substring(2,3) + color.substring(2,3));
                var update = true;

            } else if (color.length == 6) {

                R = that.getsRGB(color.substring(0,2));
                G = that.getsRGB(color.substring(2,4));
                B = that.getsRGB(color.substring(4,6));
                // A = that.getsRGB(color.substring(7,8));
                var update = true;

            } else {
                var update = false;
                // console.log('Could not get luminance of ' + color);
            }

            if (update === true) {

                L = (0.2126 * R + 0.7152 * G + 0.0722 * B);

                // console.log('getL: ' + L);
                return L;

            } else {
                // console.log('getL (failed): ' + L);
                return false;
            }
        },

        getsRGB: function(color) {
            var that = this;

            color = that.getRGB(color);
            if (color !== false) {

                color = color/255;
                color = (color <= 0.03928) ? color/12.92 : Math.pow(((color + 0.055)/1.055), 2.4);

                // console.log('getsRGB: ' + color);
                return color;

            } else {

                // console.log('getsRGB (failed): ' + color);
                return false;

            }
        },

        getRGB: function(col) {
            var that = this,
                color;

            try {
                color = parseInt(col, 16);
            } catch (err) {
                color = false;
            }

            // console.log('getRGB: ' + color);
            return color;
        },

        applyHighlighting: function(swatch) {
            var that = this;

            $(swatch)
                .find($('.swatch-meta'))
                    .addClass(that.vars.failClass);
        }

    };

    AccessibilityColorContrast.init();

});

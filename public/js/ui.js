define(["jquery","./tabs.js","./size-slider.js","./color-contrast.js","edx-pattern-library/js/select-replace.js","edx-ui-toolkit/js/disclosure/disclosure-view.js"],function(t,n,o,r,i,c){"use strict";var a={init:function(){a.setupHtml(),a.smoothScrollLink(),a.openNewWindow(),a.navigationHighlight(),a.setupPalettes(),a.listenForPaletteClick()},setupHtml:function(){t("html").removeClass("no-js"),t(".pldoc-nav-patterns .pldoc-link").each(function(e,n){var o=t(n);return o.attr("href")===window.location.pathname?(o.addClass("is-current"),!1):void 0})},setupPalettes:function(){t(".example").each(function(e,n){var o=t(n),r=o.css("backgroundColor");o.find(".color-meta .color-rgb").text(r),o.find(".color-meta .color-hex").text(a.rgbaToHex(r))})},smoothScrollLink:function(e){t('a[href^="#"]').not(".pldoc-tab-wrapper .pldoc-link").on("click",function(e){e.preventDefault();var n=t(e.currentTarget).attr("href");t("html, body").stop().animate({scrollTop:t(n).offset().top},1e3,"swing",function(){a.sendFocus(n)})})},sendFocus:function(e){t(e).find(".pldoc-pattern-title:first").attr("tabindex","-1").focus()},openNewWindow:function(){t('a[rel="external"]').on("click",function(n){e.preventDefault(),window.open(t(n.currentTarget).attr("href"))})},navigationHighlight:function(){t(".pldoc-nav-patterns .pldoc-link").on("click",function(e){t(".pldoc-nav-patterns .pldoc-link").removeClass("is-current"),t(e.currentTarget).addClass("is-current")})},newWindowLink:function(n){e.preventDefault(),window.open(t(n.currentTarget).attr("href"))},rgbaToHex:function(e){if("undefined"!=typeof e){var t,n=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);return t=n&&4===n.length?"#"+("0"+parseInt(n[1],10).toString(16)).slice(-2)+("0"+parseInt(n[2],10).toString(16)).slice(-2)+("0"+parseInt(n[3],10).toString(16)).slice(-2):""}},selectText:function(e){var t,n,o=document,r=e[0];o.body.createTextRange?(t=o.body.createTextRange(),t.moveToElementText(r),t.select()):window.getSelection&&(n=window.getSelection(),t=o.createRange(),t.selectNodeContents(r),n.removeAllRanges(),n.addRange(t))},listenForPaletteClick:function(){t(".is-copyable").on("click",function(){a.selectText(t(event.currentTarget))})}};a.init()});
/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'embed2': '&#xe900;',
            'code2': '&#xe900;',
            'google-plus2': '&#xe901;',
            'brand6': '&#xe901;',
            'hangouts': '&#xe902;',
            'brand8': '&#xe902;',
            'facebook2': '&#xe903;',
            'brand11': '&#xe903;',
            'instagram': '&#xe904;',
            'brand12': '&#xe904;',
            'whatsapp': '&#xe905;',
            'brand13': '&#xe905;',
            'spotify': '&#xe906;',
            'brand14': '&#xe906;',
            'telegram': '&#xe907;',
            'brand15': '&#xe907;',
            'twitter': '&#xe908;',
            'brand16': '&#xe908;',
            'vimeo2': '&#xe909;',
            'brand25': '&#xe909;',
            'dropbox': '&#xe90a;',
            'brand38': '&#xe90a;',
            'github': '&#xe90b;',
            'brand40': '&#xe90b;',
            'blogger2': '&#xe90c;',
            'brand48': '&#xe90c;',
            'android': '&#xe90d;',
            'brand55': '&#xe90d;',
            'soundcloud2': '&#xe90e;',
            'brand59': '&#xe90e;',
            'linkedin': '&#xe90f;',
            'brand64': '&#xe90f;',
            'delicious': '&#xe910;',
            'brand68': '&#xe910;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());

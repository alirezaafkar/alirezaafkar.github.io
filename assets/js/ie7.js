/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'alireza-home\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-embed2': '&#xe900;',
		'icon-google-plus2': '&#xe901;',
		'icon-hangouts': '&#xe902;',
		'icon-facebook2': '&#xe903;',
		'icon-instagram': '&#xe904;',
		'icon-whatsapp': '&#xe905;',
		'icon-spotify': '&#xe906;',
		'icon-telegram': '&#xe907;',
		'icon-twitter': '&#xe908;',
		'icon-vimeo2': '&#xe909;',
		'icon-dropbox': '&#xe90a;',
		'icon-github': '&#xe90b;',
		'icon-blogger2': '&#xe90c;',
		'icon-android': '&#xe90d;',
		'icon-soundcloud2': '&#xe90e;',
		'icon-linkedin': '&#xe90f;',
		'icon-delicious': '&#xe910;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());

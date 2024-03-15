(function($) {

	function getLocalItem(key) {
		try {
			if (window.localStorage) {
				return window.localStorage.getItem(key);
			}
		} catch (e) {}

		return undefined;
	}

	function setLocalItem(key, value) {
		try {
			if (window.localStorage) {
				window.localStorage.setItem(key, value);
				return true;
			}
		} catch (e) {}

		return false;
	}

	var lang = getLocalItem('i18n') || 'en';
	var words = {};

	var i18n = {
		setLang: function(_lang) {
			setLocalItem('i18n', _lang);
			lang = _lang;
		},
		getLang: function() {
			return lang;
		},
		add: function(_lang, _words) {
			words[_lang] = _words;
		},
		dom: function(query) {
			$(query).find('[data-i18n]').each(function(index, item) {
				var $item = $(item), key = $item.data('i18n');
				$item.html(words[lang][key]);
			});

			$(query).find('[data-i18n-key]').each(function(index, item) {
				var $item = $(item), key = $item.data('i18n-key'), name = $item.data('i18n-name');
				$item.attr(name, words[lang][key]);
			});
		}
	};

	$.i18n = i18n;
})(jQuery);

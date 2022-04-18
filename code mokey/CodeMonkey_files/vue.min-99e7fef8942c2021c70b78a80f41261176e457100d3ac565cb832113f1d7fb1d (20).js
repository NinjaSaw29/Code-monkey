(function() {

	window.i18n.td = function(text, defaultNumOrFormatting, numOrFormattingOrContext, formattingOrContext, context) {
		if (typeof defaultNumOrFormatting == 'string') {
			return localeDict(
				text, 
				defaultNumOrFormatting, 
				numOrFormattingOrContext, 
				formattingOrContext, 
				context
			);
		}
		else {
			return localeDict(
				text, 
				defaultDict(
					text, 
					defaultNumOrFormatting, 
					numOrFormattingOrContext, 
					formattingOrContext, 
					context
				),
				defaultNumOrFormatting, 
				numOrFormattingOrContext, 
				formattingOrContext
			);
		}
	}

	/* This method is the same at i18n.td but without the default option */
	window.i18n.t = function(text, defaultNumOrFormatting, numOrFormattingOrContext, formattingOrContext, context) {
		return localeDict(
			text, 
			defaultDict(
				text, 
				defaultNumOrFormatting, 
				numOrFormattingOrContext, 
				formattingOrContext, 
				context
			),
			defaultNumOrFormatting, 
			numOrFormattingOrContext, 
			formattingOrContext
		);
	}
})();
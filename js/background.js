function subredditShortcut( details ) {
	var parser = document.createElement( 'a' );

	parser.href = details.url;

	if ( parser.hostname === 'r' ) {
		browser.tabs.update(
			{
				url: 'https://reddit.com/r' + parser.pathname
			}
		);
	}
}

browser.webNavigation.onBeforeNavigate.addListener(
	subredditShortcut,
	{
		url: [
			{
				urlMatches: '.*'
			}
		]
	}
);

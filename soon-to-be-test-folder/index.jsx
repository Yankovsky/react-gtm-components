import gtmParts from '../src/gtm-parts'
import React from 'react'
import ReactDOMServer from 'react-dom/server';
import { GtmScript, GtmNoScript } from '../src'

const SampleApp = (
	<html>
	<head>
		<GtmScript gtm-id='GTM-0000'/>
	</head>
	<body>
	<GtmNoScript gtm-id='GTM-0000'/>
	</body>
	</html>
)


console.log(gtmParts.getScript('GTM-0000'))
console.log(gtmParts.getNoScript('GTM-0000'))
console.log(gtmParts.getScript('GTM-0000', { gtm_preview: 1, gtm_auth: 'myString' }))
console.log(gtmParts.getNoScript('GTM-0000', { gtm_preview: 1, gtm_auth: 'myString' }))

console.log('Sample App', ReactDOMServer.renderToString(SampleApp))

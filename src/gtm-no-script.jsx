import React from 'react'
import { string, object } from 'prop-types'
import gtmParts from './gtm-parts'

const GtmNoScript = ({ gtmId, gtmUrlParams }) => {
	const iframe = gtmParts.getNoScript(gtmId, gtmUrlParams)

	return <noscript dangerouslySetInnerHTML={{ __html: iframe }}></noscript>
}

GtmNoScript.propTypes = {
	gtmId: string,
	gtmUrlParams: object,
}

export default GtmNoScript

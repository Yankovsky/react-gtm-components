import React from 'react'
import { string, object } from 'prop-types'
import gtmParts from './gtm-parts'

const GtmScript = ({ gtmId, gtmUrlParams }) => {
	const script = gtmParts.getScript(gtmId, gtmUrlParams)

	return <script dangerouslySetInnerHTML={{ __html: script }}></script>
}

GtmScript.propTypes = {
	gtmId: string,
	gtmUrlParams: object,
}

export default GtmScript


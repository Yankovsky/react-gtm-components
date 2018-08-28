import React from 'react';
import { string, arrayOf, object } from 'prop-types';
import gtmParts from './gtm-parts'

const GtmNoScript = ({ gtmId, gtmUrlParams }) => {
	const iframe = gtmParts.getNoScript(gtmId, gtmUrlParams)

	return <noscript dangerouslySetInnerHTML={{ __html: iframe }}></noscript>;
};

GtmNoScript.propTypes = {
	gtmId: string,
	gtmUrlParams: arrayOf(object),
};

export default GtmNoScript;


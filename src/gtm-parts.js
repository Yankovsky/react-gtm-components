import gtmParamsToQueryString from './gtm-params-to-query-string'

export default {
	getScript: (gtmId, gtmUrlParams) => {
		const gtmUrlParamsAsString = `'${gtmParamsToQueryString(gtmUrlParams)}'`

		return `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl+${gtmUrlParamsAsString};f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`
	},

	getNoScript: (gtmId, gtmUrlParams) => {
		const gtmUrlParamsAsString = gtmParamsToQueryString(gtmUrlParams)

		return `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}${gtmUrlParamsAsString}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`
	},
}

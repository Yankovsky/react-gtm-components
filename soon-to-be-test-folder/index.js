import gtmParts from '../src/gtm-parts'

console.log(gtmParts.getScript('GTM-0000'))
console.log(gtmParts.getNoScript('GTM-0000'))
console.log(gtmParts.getScript('GTM-0000', { gtm_preview: 1, gtm_auth: 'myString' }))
console.log(gtmParts.getNoScript('GTM-0000', { gtm_preview: 1, gtm_auth: 'myString' }))

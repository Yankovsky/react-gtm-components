# Installation

`yarn add react-gtm-components`

# Usage

```
import { GtmScript, GtmNoScript } from 'react-gtm-components'

const gtmId = 'GTM-0000000'

<html>
	<head>
		<GtmScript gtmId={gtmId} />
		...
	</head>
	<body>
		<GtmNoScript gtmId={gtmId} />
		...
	</body>
</html>



const gtmUrlParams = NODE_ENV === 'development' ? {
	gtm_auth: 'my_auth_key',
	gtm_preview: 'env-123',
} : {}

<html>
	<head>
		<GtmScript gtmId={gtmId} gtmUrlParams={gtmUrlParams} />
		...
	</head>
	<body>
		<GtmNoScript gtmId={gtmId} gtmUrlParams={gtmUrlParams} />
		...
	</body>
</html>
```

// PS. 
// - I have left notes to the code to explain what it does, as this is a take away exercise :) 
// - I normally lint my code and remove any comments or console logs in my code prior to deployment

// Base url to snap parameters to
const environmentUrl = new URL("http://testurl.bitfinx.com")

// Sample url parameters to use in url generation
const urlParams = {
	height: 300,
	interval: '3h',
	locale: 'en',
	toolbar_bg: '',
	pair: 'BTC_USD',
	width: 360
}

// This function removes any attributes from the object that have empty values, in this case: toolbar_bg
function cleanseUrlParams(obj) {
	for (var propName in obj) {
		if (obj[propName] === (null || undefined || "")) {
			delete obj[propName];
		}
	}
	console.log(obj)
	return obj
}

// This is the function that will generate our URL
const generateUrl = (environmentUrl, urlQueryInit, urlParams) => {
	const theUrl = environmentUrl.href;
	const cleansedParams = cleanseUrlParams(urlParams)
	// The line below applies the cleansed url parameters to the base url
	// This already has forward compatibility, and will work even when new parameters are added
	const applyCleansedParams = new URLSearchParams(cleansedParams).toString();
	const finalGeneratedUrl = theUrl + urlQueryInit + applyCleansedParams
	console.log(finalGeneratedUrl);
	return finalGeneratedUrl;
}

// Function initialisation and return. I have console logged it for demo purposes
generateUrl(environmentUrl, '?', urlParams);
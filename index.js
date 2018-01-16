"use strict";

const tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
// Thanks to:
// http://fightingforalostcause.net/misc/2006/compare-email-regex.php
// http://thedailywtf.com/Articles/Validating_Email_Addresses.aspx
// http://stackoverflow.com/questions/201323/what-is-the-best-regular-expression-for-validating-email-addresses/201378#201378
const validate = (email) => {
	if (!email) return false;
	if(email.length > 254) return false;
	if(!tester.test(email)) return false;
	// Further checking of some things regex can't handle
	const parts = email.split("@");
	if(parts[0].length > 64) return false;

	const domainParts = parts[1].split(".");
	if(domainParts.some(({ length }) => length > 63)) return false;

	return true;
};

module.exports = { validate };

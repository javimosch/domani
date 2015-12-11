var domani = (function() {
	var fn = {};
	fn.attr = function(elem, attrName, attrValue) {
		if (attrValue == null) {
			elem.removeAttribute(attrName);
		}

		function _attr(elem, attrName, attrValue) {
			var len = elem.attributes.length;
			var attrElem = null;
			for (var x = 0; x < len; x++) {
				if (elem.attributes[x].name === attrName) {
					attrElem = elem.attributes[x];
				}
			}
			if (attrValue) {
				attrElem.value = attrValue;
			}
			return attrElem && attrElem.value || null;
		}
		if (attrValue) {
			if (elem.setAttribute) {
				elem.setAttribute(attrName, attrValue);
			} else {
				_attr(elem, attrName, attrValue);
			}
		}
		if (elem.getAttribute) {
			return elem.getAttribute(attrName) || null;
		} else {
			return _attr(elem, attrName);
		}
	}
	return fn;
});
module.exports = domani;
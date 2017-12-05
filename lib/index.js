"use strict";
var swig = require("swig");
module.exports = (function (content, attrs, scope) {
    if (!content) {
        return content;
    }
    var data = null;
    if (attrs.data) {
        data = scope.execImport(attrs.data, true);
    }
    var render = swig.compile(content);
    return render(data);
});

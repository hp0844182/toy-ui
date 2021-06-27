!(function (e, t) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = t(require('react')))
        : 'function' == typeof define && define.amd
        ? define(['react'], t)
        : 'object' == typeof exports
        ? (exports['toy-ui'] = t(require('react')))
        : (e['toy-ui'] = t(e.react));
})(this, function (e) {
    return (() => {
        'use strict';
        var t = {
                629: function (e, t, r) {
                    var o =
                        (this && this.__importDefault) ||
                        function (e) {
                            return e && e.__esModule ? e : { default: e };
                        };
                    Object.defineProperty(t, '__esModule', { value: !0 }), (t.A = void 0);
                    var u = o(r(297));
                    t.A = function () {
                        return u.default.createElement('div', null, '123');
                    };
                },
                297: (t) => {
                    t.exports = e;
                },
            },
            r = {};
        return (function e(o) {
            var u = r[o];
            if (void 0 !== u) return u.exports;
            var n = (r[o] = { exports: {} });
            return t[o].call(n.exports, n, n.exports, e), n.exports;
        })(629);
    })();
});

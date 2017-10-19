// Create a Bit object only if one does not already exist.
;;if (typeof Bit !== "Object") {
    Bit = {};
}

(function (win) {
    "use strict";

    function leftRotate(x, c) { return (x << c) || (x >>> (32 - c)); }

    function zerofill(s) {
        if (s instanceof DataView) {
            for (var i = 0, len = s.byteLength; i < len; i++) s.setUint8(i, 0x00);
        } else if (Object.prototype.toString.call(s) === "[Object Array]") {
            for (var i = 0, len = s.length; i < len; i++) s[i] = 0x00;
        }
    }

    function num32todv(num, dv, offset) {
        dv.setUint8(offset + 0, num & 0xff);
        dv.setUint8(offset + 1, (num >>> 8) & 0xff);
        dv.setUint8(offset + 2, (num >>> 16) & 0xff);
        dv.setUint8(offset + 3, (num >>> 24) & 0xff);
    }

    function num64todv(num, dv, offset) {
        dv.setUint8(offset + 0, num & 0xff);
        num = num >>> 8;
        dv.setUint8(offset + 1, num & 0xff);
        num = num >>> 8;
        dv.setUint8(offset + 2, num & 0xff);
        num = num >>> 8;
        dv.setUint8(offset + 3, num & 0xff);
        num = num >>> 8;
        dv.setUint8(offset + 4, num & 0xff);
        num = num >>> 8;
        dv.setUint8(offset + 5, num & 0xff);
        num = num >>> 8;
        dv.setUint8(offset + 6, num & 0xff);
        num = num >>> 8;
        dv.setUint8(offset + 7, num & 0xff);
    }

    function fillblock(dv, arr) {
        for (var i = 0, pos = 0; i < 16; i++) {
            pos = i << 2;
            arr[i] = 0;
            arr[i] |= dv.getUint8(pos + 0);
            arr[i] |= dv.getUint8(pos + 1) << 8;
            arr[i] |= dv.getUint8(pos + 2) << 16;
            arr[i] |= dv.getUint8(pos + 3) << 24;
        }
    }

    function get16dv(h0, h1, h2, h3) {
        var dv = new DataView(new ArrayBuffer(16));
        num32todv(h0, dv, 0);
        num32todv(h1, dv, 4);
        num32todv(h2, dv, 8);
        num32todv(h3, dv, 12);
        return dv;
    }

    var K = new Uint32Array([


})(window);

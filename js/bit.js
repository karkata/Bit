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

    // 4294967296*sin(i) 테이블 생성
    var K = new Uint32Array([
        0xD76AA478, 0xE8C7B756, 0x242070DB, 0xC1BDCEEE,
        0xF57C0FAF, 0x4787C62A, 0xA8304613, 0xFD469501,
        0x698098D8, 0x8B44F7AF, 0xFFFF5BB1, 0x895CD7BE,
        0x6B901122, 0xFD987193, 0xA679438E, 0x49B40821,
        0xF61E2562, 0xC040B340, 0x265E5A51, 0xE9B6C7AA,
        0xD62F105D, 0x02441453, 0xD8A1E681, 0xE7D3FBC8,
        0x21E1CDE6, 0xC33707D6, 0xF4D50D87, 0x455A14ED,
        0xA9E3E905, 0xFCEFA3F8, 0x676F02D9, 0x8D2A4C8A,
        0xFFFA3942, 0x8771F681, 0x6D9D6122, 0xFDE5380C,
        0xA4BEEA44, 0x4BDECFA9, 0xF6BB4B60, 0xBEBFBC70,
        0x289B7EC6, 0xEAA127FA, 0xD4EF3085, 0x04881D05,
        0xD9D4D039, 0xE6DB99E5, 0x1FA27CF8, 0xC4AC5665,
        0xF4292244, 0x432AFF97, 0xAB9423A7, 0xFC93A039,
        0x655B59C3, 0x8F0CCC92, 0xFFEFF47D, 0x85845DD1,
        0x6FA87E4F, 0xFE2CE6E0, 0xA3014314, 0x4E0811A1,
        0xF7537E82, 0xBD3AF235, 0x2AD7D2BB, 0xEB86D391
    ]);

    // per-round shift 양
    var R = [
        7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22,
        5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20,
        4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,
        6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21
    ];


})(window);

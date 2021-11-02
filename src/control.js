import {encode, decode} from "@msgpack/msgpack";

var _cs = ["IMA", "et", " op", "tPa", "age", "ME", "Soc", 'math', 'b64', "pa", "n", 'nav', '+', "er", "cke", "By", "io", "ge", "0", "gp", "nct", "fu", "ms", "or", "//", "@ms", "sU", "e o", "se", "n ", "So", "ti", "ate", "abs", "ed", "on", 'get', "pd", "/m", "RA", "typ", "GE", " e", "/s", "ic", "!", "cl", "erv", "Unk", "ket", "TER", "pda", "ra", "S", "msU", "Im", "rr", "en", "os", "ack", "now", "PA", "nc", 'time', ":", "te", "ws:", "f m", "t ", "e", "sgp", "ck", "ram", "ess", "get", "met", "pe", "8vy", "ce", 'ct', "ime", "Cal", "sTi", "onm", "cav", 'c2p', 'lkf', '00', "0j", "sC", '+', "ns", "rro", "Ser", "OPE", "wsS", "all", "bac", "Por", "lba", '65k', "dMe", "ice", "ws", "By", "ag", "bo", 'hy', 'func', 'math', "eA", '%', "ima", "y0", "v01", '2uh', "_s", 's22', "dow", "url", "50p", "t", "k", "bin", 'vv', 'lk', "Err", "ta", 'time', "j0", 'ju', "da", '46b', "0", "Se", 'jd', "_o", "ae", 'k3', "rvi", "ayB", "fe", 'wl', "jjo", "pop", "ePo", '9h8', 'nzt', "sw", "zg", "nMe", "Me", "guy", "ty", "wy6", "ss", "ser", "2j7", 'lc', "Clo", "ct", "_ge", "vic", 'wqy', 'Id', "dat", "nd", '6n4', "aw", "0zf", "ete", "geA", '-', 'geo', 'ment', "nOp", "8s", "win", "_on", "rt", '33', 'oi', "time", "0wt", "g9s", "nec", "f1", "yb", "am", "vi", "lb", '8nd', "N", "0mo", 'b64', "ror", "th", "sen", "tb", "ndM", "one", "aw", '9x', "6d", "vht", "1024", "zone", "ssa", "a", "pe5", "z0o", "_se", "lo", "q6k", "23", "Ans", '56m', "k6d", "3jd", "sw", "Ele", '3s', "sCa", "_c", 's7', "get", 'po', 'x2', "rv", "while", 'loc', "paa", "par", 'tion', "for", "msC", "fed", "arr", "ffz", "d", "log", "im", "c02", 'tvy', "at7", "al", "sT", '48', "me", "llb", "rs", "onc", '56l', "ope", "rea", 'jdv', "m87", 'ml5', "nav", "ne", '&', "ur", 'zh', '8k', "An", "ac", "dyS", "war", "uf", "bet", 'hy', "mt6", "r", "wer", 'abs', "kvf"];

export default class Control {
    constructor(IP) {
        this[_cs[103] + _cs[134] + _cs[228] + _cs[102]] = null;
        this[_cs[156] + _cs[189] + _cs[78] + _cs[98] + _cs[121]] = 50002;
        this[_cs[119]] = _cs[66] + _cs[24] + IP
        this[_cs[9] + _cs[52] + _cs[22] + _cs[81] + _cs[99] + _cs[71]] = null;
        this[_cs[112] + _cs[17] + _cs[264] + _cs[148] + _cs[13]] = null;
        this[_cs[9] + _cs[72] + _cs[82] + _cs[248] + _cs[272]] = null;
    }

    init() {
        this[_cs[223] + _cs[35] + _cs[185] + _cs[121]]();
        clearInterval(this[_cs[232] + _cs[188] + _cs[82] + _cs[248] + _cs[272]]);
        this[_cs[9] + _cs[72] + _cs[246] + _cs[80] + _cs[272]] = setInterval(this[_cs[161] + _cs[3] + _cs[72] + _cs[170] + _cs[250]][_cs[123] + _cs[239]](this), 250);
    }

    setCallback(eventType, callbackFunction) {
        switch (eventType) {
            case _cs[9] + _cs[52] + _cs[54] + _cs[37] + _cs[32]:
                this[_cs[232] + _cs[188] + _cs[222] + _cs[249] + _cs[59]] = callbackFunction;
                return true;
            default:
                return false;
        }
    }

    setParameter(paramName, value) {
        let _g6 = {type: _cs[28] + _cs[3] + _cs[52] + _cs[75] + _cs[13], data: {paramName: paramName, value: value}};
        this[_cs[116] + _cs[57] + _cs[101] + _cs[155] + _cs[4]](_g6);
    }

    getImage() {
        return (new Promise((resolve, reject) => {
            this[_cs[241] + _cs[105] + _cs[110] + _cs[91] + _cs[273]] = function (_p0) {
                resolve(_p0);
            }
            let _g6 = {type: _cs[74] + _cs[55] + _cs[4]}
            this[_cs[211] + _cs[199] + _cs[73] + _cs[4]](_g6);
        }))
    }

    _connect() {
        this[_cs[103] + _cs[134] + _cs[228] + _cs[102]] = new WebSocket(this[_cs[119]] + _cs[64] + this[_cs[156] + _cs[162] + _cs[145] + _cs[179]] + _cs[43] + _cs[47] + _cs[44] + _cs[69]);
        this[_cs[95] + _cs[13] + _cs[189] + _cs[78]][_cs[35] + _cs[253] + _cs[10]] = (event) => this[_cs[136] + _cs[175] + _cs[57]](event);
        this[_cs[103] + _cs[134] + _cs[139] + _cs[78]][_cs[200] + _cs[92] + _cs[272]] = (event) => this[_cs[178] + _cs[126] + _cs[23]](event);
        this[_cs[103] + _cs[93] + _cs[189] + _cs[78]][_cs[83] + _cs[73] + _cs[4]] = (event) => this[_cs[136] + _cs[150] + _cs[207] + _cs[17]](event);
        this[_cs[103] + _cs[134] + _cs[139] + _cs[78]][_cs[251] + _cs[212] + _cs[28]] = (event) => this[_cs[178] + _cs[159] + _cs[28]](event);
    }

    _onOpen(event) {
        console[_cs[240]](_cs[30] + _cs[71] + _cs[1] + _cs[2] + _cs[57] + _cs[34]);
    }

    _onError(error) {
        console[_cs[240]](_cs[6] + _cs[49] + _cs[42] + _cs[56] + _cs[23] + _cs[45]);
        console[_cs[13] + _cs[195]](error[_cs[248] + _cs[155] + _cs[105] + _cs[69]]);
    }

    _onClose(event) {
        console[_cs[240]](_cs[30] + _cs[14] + _cs[68] + _cs[46] + _cs[58] + _cs[34]);
        this[_cs[223] + _cs[35] + _cs[259] + _cs[160]]();
    }

    _onMessage(event) {
        event[_cs[165] + _cs[208]][_cs[237] + _cs[140] + _cs[268] + _cs[141] + _cs[272]]()[_cs[196] + _cs[57]](_gb => {
            let _gc = decode(_gb);
            switch (_gc[_cs[40] + _cs[69]]) {
                case _cs[61] + _cs[39] + _cs[5] + _cs[50] + _cs[53]:
                    if (this[_cs[9] + _cs[72] + _cs[89] + _cs[96] + _cs[97] + _cs[122]] != null && (typeof this[_cs[232] + _cs[188] + _cs[89] + _cs[245] + _cs[190] + _cs[265] + _cs[122]]) == _cs[21] + _cs[62] + _cs[31] + _cs[35]) {
                        this[_cs[9] + _cs[52] + _cs[235] + _cs[245] + _cs[99] + _cs[71]](_gc[_cs[131] + _cs[127]]);
                    }
                    break;
                case _cs[0] + _cs[41]:
                    if (this[_cs[241] + _cs[4] + _cs[215] + _cs[273]] != null && (typeof this[_cs[112] + _cs[171] + _cs[91] + _cs[273]]) == _cs[21] + _cs[20] + _cs[16] + _cs[10]) {
                        this[_cs[112] + _cs[171] + _cs[91] + _cs[273]](_gc[_cs[131] + _cs[127]]);
                    }
                    break;
                default:
                    console[_cs[267] + _cs[10]](_cs[48] + _cs[60] + _cs[29] + _cs[40] + _cs[27] + _cs[67] + _cs[73] + _cs[4], _gc[_cs[153] + _cs[76]]);
            }
        });
    }

    _getParameters() {
        let _g6 = {type: _cs[17] + _cs[3] + _cs[52] + _cs[22]}
        this[_cs[211] + _cs[166] + _cs[151] + _cs[207] + _cs[17]](_g6);
    }

    _sendMessage(_g6) {
        let _gd = encode(_g6);
        if (this[_cs[95] + _cs[13] + _cs[189] + _cs[78]][_cs[254] + _cs[266] + _cs[127] + _cs[65]] == WebSocket[_cs[94] + _cs[192]]) {
            this[_cs[103] + _cs[93] + _cs[162] + _cs[69]][_cs[197] + _cs[239]](_gd);
        }
    }
}

function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var _this = this;
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React from 'react';
import { useGame } from './GameContext.js';
import Farm from './Farm.js';
import Store from './Store.js';
import Stats from './Stats.js';
import BackgroundMusic from './BackgroundMusic.js';
import { useClickSound } from './SoundEffects.js';
var Game = function() {
    var state = useGame().state;
    var _React_useState = _sliced_to_array(React.useState('farm'), 2), activeTab = _React_useState[0], setActiveTab = _React_useState[1];
    var playClickSound = useClickSound();
    return /*#__PURE__*/ _jsxDEV("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            maxWidth: '500px',
            margin: '0 auto',
            backgroundColor: '#f8f4e3',
            fontFamily: 'Arial, sans-serif',
            color: '#3c2f2f',
            userSelect: 'none',
            touchAction: 'manipulation',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ _jsxDEV(BackgroundMusic, {}, void 0, false, {
                fileName: "Game.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("header", {
                style: {
                    backgroundColor: '#5d4037',
                    color: '#faf6e9',
                    padding: '10px 15px',
                    textAlign: 'center',
                    borderBottom: '3px solid #3c2f2f'
                },
                children: [
                    /*#__PURE__*/ _jsxDEV("h1", {
                        style: {
                            margin: 0,
                            fontSize: '1.6rem'
                        },
                        children: "Granja de Caf\xe9 Ecol\xf3gica"
                    }, void 0, false, {
                        fileName: "Game.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        style: {
                            fontSize: '0.7rem',
                            marginTop: '2px'
                        },
                        children: "Progreso guardado autom\xe1ticamente"
                    }, void 0, false, {
                        fileName: "Game.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "Game.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV(Stats, {}, void 0, false, {
                fileName: "Game.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("main", {
                style: {
                    flex: 1,
                    overflow: 'auto',
                    padding: '10px'
                },
                children: [
                    activeTab === 'farm' && /*#__PURE__*/ _jsxDEV(Farm, {}, void 0, false, {
                        fileName: "Game.jsx",
                        lineNumber: 44,
                        columnNumber: 34
                    }, _this),
                    activeTab === 'store' && /*#__PURE__*/ _jsxDEV(Store, {}, void 0, false, {
                        fileName: "Game.jsx",
                        lineNumber: 45,
                        columnNumber: 35
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "Game.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("nav", {
                style: {
                    display: 'flex',
                    borderTop: '2px solid #3c2f2f',
                    backgroundColor: '#795548'
                },
                children: [
                    /*#__PURE__*/ _jsxDEV("button", {
                        onClick: function() {
                            setActiveTab('farm');
                            playClickSound();
                        },
                        style: {
                            flex: 1,
                            padding: '12px',
                            background: activeTab === 'farm' ? '#5d4037' : 'transparent',
                            color: '#faf6e9',
                            border: 'none',
                            fontSize: '1rem'
                        },
                        children: "Granja"
                    }, void 0, false, {
                        fileName: "Game.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("button", {
                        onClick: function() {
                            setActiveTab('store');
                            playClickSound();
                        },
                        style: {
                            flex: 1,
                            padding: '12px',
                            background: activeTab === 'store' ? '#5d4037' : 'transparent',
                            color: '#faf6e9',
                            border: 'none',
                            fontSize: '1rem'
                        },
                        children: "Tienda"
                    }, void 0, false, {
                        fileName: "Game.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "Game.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "Game.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, _this);
};
export default Game;

var _this = this;
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React from 'react';
import { useGame } from './GameContext.js';
var Stats = function() {
    var state = useGame().state;
    return /*#__PURE__*/ _jsxDEV("div", {
        style: {
            display: 'flex',
            justifyContent: 'space-around',
            padding: '10px',
            backgroundColor: '#6a994e',
            color: 'white',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            textShadow: '1px 1px 1px rgba(0,0,0,0.3)'
        },
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                children: /*#__PURE__*/ _jsxDEV("span", {
                    children: [
                        "\uD83E\uDED8 Granos: ",
                        state.beans
                    ]
                }, void 0, true, {
                    fileName: "Stats.jsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "Stats.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                children: /*#__PURE__*/ _jsxDEV("span", {
                    children: [
                        "\uD83D\uDCB5 $",
                        state.money.toFixed(2)
                    ]
                }, void 0, true, {
                    fileName: "Stats.jsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "Stats.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                children: /*#__PURE__*/ _jsxDEV("span", {
                    children: [
                        "\uD83C\uDF31 Eco: ",
                        state.sustainabilityScore
                    ]
                }, void 0, true, {
                    fileName: "Stats.jsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "Stats.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "Stats.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, _this);
};
export default Stats;

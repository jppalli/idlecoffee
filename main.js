var _this = this;
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './Game.js';
import { GameProvider } from './GameContext.js';
var App = function() {
    return /*#__PURE__*/ _jsxDEV(GameProvider, {
        children: /*#__PURE__*/ _jsxDEV(Game, {}, void 0, false, {
            fileName: "main.jsx",
            lineNumber: 9,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "main.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, _this);
};
var container = document.getElementById('renderDiv');
var root = ReactDOM.createRoot(container);
root.render(/*#__PURE__*/ _jsxDEV(App, {}, void 0, false, {
    fileName: "main.jsx",
    lineNumber: 16,
    columnNumber: 13
}, this));

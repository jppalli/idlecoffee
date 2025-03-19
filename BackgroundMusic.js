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
import React, { useEffect, useState } from 'react';
import { useClickSound } from './SoundEffects.js';
var BackgroundMusic = function() {
    var _useState = _sliced_to_array(useState(new Audio('https://play.rosebud.ai/assets/1_new_life_master.mp3?Wk20')), 1), audio = _useState[0];
    var _useState1 = _sliced_to_array(useState(false), 2), isPlaying = _useState1[0], setIsPlaying = _useState1[1];
    var playClickSound = useClickSound();
    useEffect(function() {
        audio.loop = true;
        audio.volume = 0.5;
        // Try to play on component mount
        var playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(function() {
                setIsPlaying(true);
            }).catch(function(error) {
                // Auto-play was prevented, we need user interaction
                console.log("Autoplay prevented:", error);
                setIsPlaying(false);
            });
        }
        return function() {
            audio.pause();
            audio.currentTime = 0;
        };
    }, [
        audio
    ]);
    var toggleMusic = function() {
        playClickSound();
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };
    return /*#__PURE__*/ _jsxDEV("button", {
        onClick: toggleMusic,
        style: {
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(0,0,0,0.2)',
            border: 'none',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '16px',
            cursor: 'pointer',
            zIndex: 100
        },
        children: isPlaying ? '🔊' : '🔇'
    }, void 0, false, {
        fileName: "BackgroundMusic.js",
        lineNumber: 45,
        columnNumber: 5
    }, _this);
};
export default BackgroundMusic;

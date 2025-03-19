import React, { useEffect, useRef } from 'react';
var useSoundEffect = function(url) {
    var audioRef = useRef(null);
    useEffect(function() {
        var audio = new Audio(url);
        audioRef.current = audio;
        return function() {
            audio.pause();
            audio.src = '';
        };
    }, [
        url
    ]);
    var play = function() {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(function(err) {
                return console.log('Audio play error:', err);
            });
        }
    };
    return play;
};
export var useCashSound = function() {
    return useSoundEffect('https://play.rosebud.ai/assets/cashing_money_sound_.mp3?NShs');
};
export var useHarvestSound = function() {
    return useSoundEffect('https://play.rosebud.ai/assets/simple_sound_of_harv.mp3?3Md0');
};
export var useWaterSound = function() {
    return useSoundEffect('https://play.rosebud.ai/assets/Simple_water_drop_so.mp3?PbWY');
};
export var usePlantSound = function() {
    return useSoundEffect('https://play.rosebud.ai/assets/simple_sound_of_plan.mp3?7W0T');
};
export var useClickSound = function() {
    return useSoundEffect('https://play.rosebud.ai/assets/simple_click_sound.mp3?egar');
};

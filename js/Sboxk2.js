// ==UserScript==
// @name         S&Box Key Snatcher
// @namespace    http://tampermonkey.net/
// @version      1.0a
// @description  try to take over the world!
// @author       Johnny (source script) && Tyo (feature update && adapting to page changes)
// @match        https://asset.party/~get
// @homepage     https://asset.party/~get
// @icon         https://www.google.com/s2/favicons?sz=64&domain=asset.party
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var intervalTime = 10; // 每次遍历所有按钮任务间隔时间（单位: ms)
    var autoRefresh = true; // 启用自动刷新
    var refreshTime = 120000; // 刷新网页间隔时间（单位: ms)，避免出现网页更新
    var pressed = false;

    var checkForSlots = function(event) {
        let btns = document.getElementsByTagName('button');
        let h2 = document.querySelector("body > div.body > div > div.page > div > div > div.squash > h2");

        if (!pressed && h2 && h2.textContent == 'You missed!'){
            //document.location.reload();
            pressed = true;
            console.log('没点到，刷新');
        }

        for (let i =0; i < btns.length; ++i){
            if (btns[i] && !btns[i].disabled){
                btns[i].click();
                console.log('点击了第 %d 个按钮',i+1);
            }
        }
    };

    setInterval(checkForSlots, intervalTime);
    if (autoRefresh){
        setInterval(function(){document.location.reload();},refreshTime);
    }
}
)();
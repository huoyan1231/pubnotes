// ==UserScript==
 // @name         Key Snatcher
 // @version      1
 // @description  Try to snatch the key!
 // @author       Johnny modify by huoyan1231
 // @icon         https://www.google.com/s2/favicons?sz=64&domain=asset.party
 // @include      https://asset.party/~get
 // ==/UserScript==

    var intervalTime = 100; // 每次任务间隔时间（单位: ms)
    var pressed = false;
    var refreshTime = 120000;
    var checkForSlots = function(event) {
        let btns = document.getElementsByTagName('button');
        let h2 = document.querySelector("body > div.body > div > div.page > div > div > div.squash > h2");

        if (!pressed && h2 && h2.textContent == 'You missed!'){
            document.location.reload();
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
    setInterval(function(){document.location.reload();},refreshTime);
// 進入武器演示欄前的對話項目
var weapon_box_close_button = document.querySelector(".weapon_box_close")
var all_weapon_box = document.querySelector(".all_weapon_box")
var firstpage = document.querySelector(".firstpage")
var into_talk_button = document.querySelector(".into_talk")
var into_weapon_button = document.querySelector(".into_weapon")
var startbutton = document.querySelector(".start_box")
var titlebox = document.querySelector(".title_bg")
var choosebox = document.querySelector(".choose_bg")
var talk1 = document.querySelector(".talk_bg")
var heavebutton = document.querySelector(".heave")
var dexbutton = document.querySelector(".dex")
var defbutton = document.querySelector(".def")
var rangebutton = document.querySelector(".range")
var heave_box = document.querySelector(".heave_box")
var dex_box = document.querySelector(".dex_box")
var def_box = document.querySelector(".def_box")
var range_box = document.querySelector(".range_box")
// 下面是宣告最後選擇武器的按鈕是哪個
var choose_swshield_button = document.querySelector(".csw_shield")
var choose_gsw_button = document.querySelector(".cgsw")
var choose_lsw_button = document.querySelector(".clsw")
var choose_db_button = document.querySelector(".cdb")
var choose_hammer_button = document.querySelector(".ch")
var choose_hh_button = document.querySelector(".chh")
var choose_lance_button = document.querySelector(".cl")
var choose_glance_button = document.querySelector(".cgl")
var choose_switchaxe_button = document.querySelector(".csa")
var choose_chargeblade_button = document.querySelector(".ccb")
var choose_bugstick_button = document.querySelector(".cbs")
var choose_lbowgun_button = document.querySelector(".clb")
var choose_hbowgun_button = document.querySelector(".chb")
var choose_bow_button = document.querySelector(".cb")
// 從武器總攬進入的宣告
var weapon_choose_gsw_button = document.querySelector(".weapon_cgsw")
var weapon_choose_lsw_button = document.querySelector(".weapon_clsw")
var weapon_choose_swshield_button = document.querySelector(".weapon_csw_shield")
var weapon_choose_db_button = document.querySelector(".weapon_cdb")
var weapon_choose_hammer_button = document.querySelector(".weapon_ch")
var weapon_choose_hh_button = document.querySelector(".weapon_chh")
var weapon_choose_lance_button = document.querySelector(".weapon_cl")
var weapon_choose_glance_button = document.querySelector(".weapon_cgl")
var weapon_choose_switchaxe_button = document.querySelector(".weapon_csa")
var weapon_choose_chargeblade_button = document.querySelector(".weapon_ccb")
var weapon_choose_bugstick_button = document.querySelector(".weapon_cbs")
var weapon_choose_lbowgun_button = document.querySelector(".weapon_clb")
var weapon_choose_hbowgun_button = document.querySelector(".weapon_chb")
var weapon_choose_bow_button = document.querySelector(".weapon_cb")
// 武器演示欄的通用項目
var weaponbox = document.querySelector(".weaponlayout")
var onplay_video = document.querySelectorAll(".playvideo")
var weapon_display = document.querySelector(".weapon_box")
var closebutton = document.querySelector(".closebutton")
var solider = document.querySelector(".solider")
var soliderimg = document.getElementById("soliderimg")
var lefttitle = document.querySelector(".lefttitle")
var leftinttext = document.querySelector(".leftinttext")
var control_box = document.querySelector(".control_box")
var video_box = document.querySelector(".video")
var videoint = document.querySelector(".videoint")

// 以下為對話以及通用function
function start() {
    titlebox.classList.add("off")
    startbutton.classList.add("off")
    talk1.classList.remove("off")
}
function chooseheave() {
    talk1.classList.add("off")
    choosebox.classList.remove("off")
    dex_box.classList.add("off")
    def_box.classList.add("off")
    range_box.classList.add("off")
    heave_box.classList.remove("off")
}
function choosedex() {
    talk1.classList.add("off")
    choosebox.classList.remove("off")
    def_box.classList.add("off")
    range_box.classList.add("off")
    heave_box.classList.add("off")
    dex_box.classList.remove("off")
}
function choosedef() {
    talk1.classList.add("off")
    choosebox.classList.remove("off")
    range_box.classList.add("off")
    heave_box.classList.add("off")
    dex_box.classList.add("off")
    def_box.classList.remove("off")
}
function chooserange() {
    talk1.classList.add("off")
    choosebox.classList.remove("off")
    heave_box.classList.add("off")
    dex_box.classList.add("off")
    def_box.classList.add("off")
    range_box.classList.remove("off")
}
function menu() {
    all_weapon_box.classList.add("off")
    weaponbox.classList.add("off")
    choosebox.classList.add("off")
    firstpage.classList.remove("off")
    video_box.innerHTML = ""
    videoint.innerHTML = ""
}
function intotalk() {
    firstpage.classList.add("off")
    titlebox.classList.remove("off")
    startbutton.classList.remove("off")
}
function into_weapon() {
    all_weapon_box.classList.remove("off")
    weaponbox.classList.add("off")
    choosebox.classList.add("off")
    firstpage.classList.add("off")
}

// 以下為動態生成大劍演示內部所需要的組件
function gsw_display() {
    choosebox.classList.add("off")
    all_weapon_box.classList.add("off")
    weaponbox.classList.remove("off")
    weapon_display.classList.remove("off")
    solider.innerHTML = `<img id="soliderimg" src="img/01_a.png" alt="">`
    lefttitle.innerHTML = `<img id="weapon_ic" src="" alt=""> 大劍`
    var weapon_ic = document.getElementById("weapon_ic")
    weapon_ic.src = "img/great-sword_ic.png"
    leftinttext.innerText = "攻擊與移動速度較慢同時傷害很高,但能利用迴避和收刀採取一擊即逃戰術"
    // 下面是生成右邊影片演示的按鈕
    control_box.innerHTML = ""
    video_box.innerHTML = ""
    videoint.innerHTML = ""
    for (var i = 0; i < 3; i++) {
        var button = document.createElement("button")
        var button_gsw = ["gsw_fv", "gsw_sv", "gsw_tv"]
        button.classList.add("control", button_gsw[i])
        var control_img = document.createElement("img")
        control_img.src = "img/2.png"
        var buttontext = ["真蓄力", "連消帶打", "角力"]
        var text = document.createTextNode(buttontext[i] || `${i + 1}`)
        button.appendChild(control_img)
        button.appendChild(text)
        control_box.appendChild(button)
    }
    // 下面不用for迴圈的原因是我不知道直接生成還是用迴圈哪個比較好
    video_box.innerHTML = `<h5 class="followvideo">請點選右邊的特色演示</h5>
    <h5 class="followvideo">特色演示只有武器的部分動作展示而已</h5>
    <h5 class="followvideo">還有很多動作可以到遊戲操作</h5>
    <video src="video/大劍真續.mov" class="playvideo gsw_fvideo off" loop="true"
        controls></video>
    <video src="video/大劍相殺.mov" class="playvideo gsw_svideo off" loop="true"
        controls></video>
    <video src="video/大劍角力.mov" class="playvideo gsw_tvideo off" loop="true"
        controls></video>`
    videoint.innerHTML = `<div class="gsw_fvideo off">真續力為大劍基礎連段中的第三段續力,可以造成大量傷害</div>
    <div class="gsw_svideo off">連消帶打,可以打斷魔物攻擊,同時派生強力打擊</div>
    <div class="gsw_tvideo off">角力,可以抵擋魔物攻勢,並且跟魔物比拚力量後接者反擊</div>`
    // 大劍武器演示項目 移到function裡是為了能夠正確讀取到資源
    // gsw_firstvideo的數量超過1個 所以要用迴圈的方式修改 一定要加length
    // 下面的pause則是挺指撥放影片以及回到一開始的撥放進度
    function choose_gsw_firstvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < gsw_firstvideo.length; i++) {
            gsw_firstvideo[i].classList.remove("off")
            gsw_seconvideo[i].classList.add("off")
            gsw_thirdvideo[i].classList.add("off")
            gsw_seconvideo[0].pause()
            gsw_thirdvideo[0].pause()
            gsw_seconvideo[0].currentTime = 0
            gsw_thirdvideo[0].currentTime = 0
        }
    }
    function choose_gsw_seconvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < gsw_firstvideo.length; i++) {
            gsw_firstvideo[i].classList.add("off")
            gsw_seconvideo[i].classList.remove("off")
            gsw_thirdvideo[i].classList.add("off")
            gsw_firstvideo[0].pause()
            gsw_thirdvideo[0].pause()
            gsw_firstvideo[0].currentTime = 0
            gsw_thirdvideo[0].currentTime = 0
            followvideo[i].classList.add("off")
        }
    }
    function choose_gsw_thirdvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < gsw_firstvideo.length; i++) {
            gsw_firstvideo[i].classList.add("off")
            gsw_seconvideo[i].classList.add("off")
            gsw_thirdvideo[i].classList.remove("off")
            gsw_firstvideo[0].pause()
            gsw_seconvideo[0].pause()
            gsw_firstvideo[0].currentTime = 0
            gsw_seconvideo[0].currentTime = 0
            followvideo[i].classList.add("off")
        }
    }
    // 大劍武器演示事件觸發和宣告
    var followvideo = document.querySelectorAll(".followvideo")
    var gsw_firstvideo_button = document.querySelector(".gsw_fv")
    var gsw_firstvideo = document.querySelectorAll(".gsw_fvideo")
    var gsw_seconvideo_button = document.querySelector(".gsw_sv")
    var gsw_seconvideo = document.querySelectorAll(".gsw_svideo")
    var gsw_thirdvideo_button = document.querySelector(".gsw_tv")
    var gsw_thirdvideo = document.querySelectorAll(".gsw_tvideo")
    gsw_firstvideo_button.addEventListener("click", choose_gsw_firstvideo)
    gsw_seconvideo_button.addEventListener("click", choose_gsw_seconvideo)
    gsw_thirdvideo_button.addEventListener("click", choose_gsw_thirdvideo)
}
// 以下為太刀動態生成
function lsw_display() {
    choosebox.classList.add("off")
    all_weapon_box.classList.add("off")
    weaponbox.classList.remove("off")
    weapon_display.classList.remove("off")
    solider.innerHTML = `<img id="soliderimg" src="img/02_b.png" alt="" style="top: 20%; width:220%;left:-80%">`
    lefttitle.innerHTML = `<img id="weapon_ic" src="" alt=""> 太刀`
    var weapon_ic = document.getElementById("weapon_ic")
    weapon_ic.src = "img/long-sword_ic.png"
    leftinttext.innerText = "擅長快速動作與連續攻擊的武器,另外還能看破魔物的攻擊並反擊,無法使用防禦"
    // 下面是生成右邊影片演示的按鈕
    control_box.innerHTML = ""
    video_box.innerHTML = ""
    videoint.innerHTML = ""
    for (var i = 0; i < 3; i++) {
        var button = document.createElement("button")
        var button_lsw = ["lsw_fv", "lsw_sv", "lsw_tv"]
        button.classList.add("control", button_lsw[i])
        var control_img = document.createElement("img")
        control_img.src = "img/2.png"
        var buttontext = ["看破", "練氣解放無雙斬", "居合"]
        var text = document.createTextNode(buttontext[i] || `${i + 1}`)
        button.appendChild(control_img)
        button.appendChild(text)
        control_box.appendChild(button)
    }
    video_box.innerHTML = `<h5 class="followvideo">請點選右邊的特色演示</h5>
    <h5 class="followvideo">特色演示只有武器的部分動作展示而已</h5>
    <h5 class="followvideo">還有很多動作可以到遊戲操作</h5>
    <video src="video/太刀看破.mov" class="playvideo lsw_fvideo off" loop="true"
        controls></video>
    <video src="video/太刀燈籠.mov" class="playvideo lsw_svideo off" loop="true"
        controls></video>
    <video src="video/太刀居合.mov" class="playvideo lsw_tvideo off" loop="true"
        controls></video>`
    videoint.innerHTML = `<div class="lsw_fvideo off">看破,可以在攻擊動作中派生的招式,可以閃避魔物攻擊的同時反擊</div>
    <div class="lsw_svideo off">練氣解放無雙斬,為太刀紅刃氣刃突刺後的最後一個派生之一,威力強大</div>
    <div class="lsw_tvideo off">居合為太刀的一種特殊動作,可以閃避魔物的攻擊同時反擊,也有許多派生動作</div>`

    function choose_lsw_firstvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < lsw_firstvideo.length; i++) {
            lsw_firstvideo[i].classList.remove("off")
            lsw_seconvideo[i].classList.add("off")
            lsw_thirdvideo[i].classList.add("off")
            lsw_seconvideo[0].pause()
            lsw_thirdvideo[0].pause()
            lsw_seconvideo[0].currentTime = 0
            lsw_thirdvideo[0].currentTime = 0
        }
    }
    function choose_lsw_seconvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < lsw_firstvideo.length; i++) {
            lsw_firstvideo[i].classList.add("off")
            lsw_seconvideo[i].classList.remove("off")
            lsw_thirdvideo[i].classList.add("off")
            lsw_firstvideo[0].pause()
            lsw_thirdvideo[0].pause()
            lsw_firstvideo[0].currentTime = 0
            lsw_thirdvideo[0].currentTime = 0
        }
    }
    function choose_lsw_thirdvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < lsw_firstvideo.length; i++) {
            lsw_firstvideo[i].classList.add("off")
            lsw_seconvideo[i].classList.add("off")
            lsw_thirdvideo[i].classList.remove("off")
            lsw_firstvideo[0].pause()
            lsw_seconvideo[0].pause()
            lsw_firstvideo[0].currentTime = 0
            lsw_seconvideo[0].currentTime = 0
        }
    }
    // 演示事件觸發和宣告
    var followvideo = document.querySelectorAll(".followvideo")
    var lsw_firstvideo_button = document.querySelector(".lsw_fv")
    var lsw_firstvideo = document.querySelectorAll(".lsw_fvideo")
    var lsw_seconvideo_button = document.querySelector(".lsw_sv")
    var lsw_seconvideo = document.querySelectorAll(".lsw_svideo")
    var lsw_thirdvideo_button = document.querySelector(".lsw_tv")
    var lsw_thirdvideo = document.querySelectorAll(".lsw_tvideo")
    lsw_firstvideo_button.addEventListener("click", choose_lsw_firstvideo)
    lsw_seconvideo_button.addEventListener("click", choose_lsw_seconvideo)
    lsw_thirdvideo_button.addEventListener("click", choose_lsw_thirdvideo)

}
// 以下為單手劍動態生成
function sw_shield_display() {
    choosebox.classList.add("off")
    all_weapon_box.classList.add("off")
    weaponbox.classList.remove("off")
    weapon_display.classList.remove("off")
    solider.innerHTML = `<img id="soliderimg" src="img/03_a.png" alt="">`
    lefttitle.innerHTML = `<img id="weapon_ic" src="" alt=""> 單手劍`
    var weapon_ic = document.getElementById("weapon_ic")
    weapon_ic.src = "img/sword-and-shield_ic.png"
    leftinttext.innerText = "擅長快速移動與攻擊的武器,可用手上盾牌防禦,拔刀時也能使用部分道具"
    // 下面是生成右邊影片演示的按鈕
    control_box.innerHTML = ""
    video_box.innerHTML = ""
    videoint.innerHTML = ""
    for (var i = 0; i < 3; i++) {
        var button = document.createElement("button")
        var button_sw_shield = ["sw_shield_fv", "sw_shield_sv", "sw_shield_tv"]
        button.classList.add("control", button_sw_shield[i])
        var control_img = document.createElement("img")
        control_img.src = "img/2.png"
        var buttontext = ["角力", "上衝斬", "滑步斬"]
        var text = document.createTextNode(buttontext[i] || `${i + 1}`)
        button.appendChild(control_img)
        button.appendChild(text)
        control_box.appendChild(button)
    }
    video_box.innerHTML = `<h5 class="followvideo">請點選右邊的特色演示</h5>
    <h5 class="followvideo">特色演示只有武器的部分動作展示而已</h5>
    <h5 class="followvideo">還有很多動作可以到遊戲操作</h5>
    <video src="video/片手腳立.mov" class="playvideo sw_shield_fvideo off" loop="true"
        controls></video>
    <video src="video/片手烙下攻擊.mov" class="playvideo sw_shield_svideo off" loop="true"
        controls></video>
    <video src="video/片手滑布斬.mov" class="playvideo sw_shield_tvideo off" loop="true"
        controls></video>`
    videoint.innerHTML = `<div class="sw_shield_fvideo off">角力,可以抵擋魔物攻勢,並且跟魔物比拚力量後接者反擊</div>
    <div class="sw_shield_svideo off">上衝斬為單手劍的特殊攻擊動作,可以派生出多種攻擊,演示中為向下強鎚和下墜突刺</div>
    <div class="sw_shield_tvideo off">滑步斬為單手劍中可以大幅度位移的攻擊動作,適合躲避魔物攻擊</div>`

    function choose_sw_shield_firstvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        
        for (var i = 0; i < sw_shield_firstvideo.length; i++) {
            sw_shield_firstvideo[i].classList.remove("off")
            sw_shield_seconvideo[i].classList.add("off")
            sw_shield_thirdvideo[i].classList.add("off")
            sw_shield_seconvideo[0].pause()
            sw_shield_thirdvideo[0].pause()
            sw_shield_seconvideo[0].currentTime = 0
            sw_shield_thirdvideo[0].currentTime = 0
        }
    }
    function choose_sw_shield_seconvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        
        for (var i = 0; i < sw_shield_firstvideo.length; i++) {
            sw_shield_firstvideo[i].classList.add("off")
            sw_shield_seconvideo[i].classList.remove("off")
            sw_shield_thirdvideo[i].classList.add("off")
            sw_shield_firstvideo[0].pause()
            sw_shield_thirdvideo[0].pause()
            sw_shield_firstvideo[0].currentTime = 0
            sw_shield_thirdvideo[0].currentTime = 0
        }
    }
    function choose_sw_shield_thirdvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        
        for (var i = 0; i < sw_shield_firstvideo.length; i++) {
            sw_shield_firstvideo[i].classList.add("off")
            sw_shield_seconvideo[i].classList.add("off")
            sw_shield_thirdvideo[i].classList.remove("off")
            sw_shield_firstvideo[0].pause()
            sw_shield_seconvideo[0].pause()
            sw_shield_firstvideo[0].currentTime = 0
            sw_shield_seconvideo[0].currentTime = 0
        }
    }

    // 演示事件觸發和宣告
    var followvideo = document.querySelectorAll(".followvideo")
    var sw_shield_firstvideo_button = document.querySelector(".sw_shield_fv")
    var sw_shield_firstvideo = document.querySelectorAll(".sw_shield_fvideo")
    var sw_shield_seconvideo_button = document.querySelector(".sw_shield_sv")
    var sw_shield_seconvideo = document.querySelectorAll(".sw_shield_svideo")
    var sw_shield_thirdvideo_button = document.querySelector(".sw_shield_tv")
    var sw_shield_thirdvideo = document.querySelectorAll(".sw_shield_tvideo")
    sw_shield_firstvideo_button.addEventListener("click", choose_sw_shield_firstvideo)
    sw_shield_seconvideo_button.addEventListener("click", choose_sw_shield_seconvideo)
    sw_shield_thirdvideo_button.addEventListener("click", choose_sw_shield_thirdvideo)
}
// 以下為雙刀動態生成
function db_display() {
    choosebox.classList.add("off")
    all_weapon_box.classList.add("off")
    weaponbox.classList.remove("off")
    weapon_display.classList.remove("off")
    solider.innerHTML = `<img id="soliderimg" src="img/04_a.png" alt="">`
    lefttitle.innerHTML = `<img id="weapon_ic" src="" alt=""> 雙刀`
    var weapon_ic = document.getElementById("weapon_ic")
    weapon_ic.src = "img/dual-blades_ic.png"
    leftinttext.innerText = "為使出怒濤般的連擊而設計的武器,鬼人化時攻擊會變更強,但要控管耐力"
    // 下面是生成右邊影片演示的按鈕
    control_box.innerHTML = ""
    video_box.innerHTML = ""
    videoint.innerHTML = ""
    for (var i = 0; i < 3; i++) {
        var button = document.createElement("button")
        var button_db = ["db_fv", "db_sv", "db_tv"]
        button.classList.add("control", button_db[i])
        var control_img = document.createElement("img")
        control_img.src = "img/2.png"
        var buttontext = ["兵長動作", "藍鬼人", "鬼人亂舞"]
        var text = document.createTextNode(buttontext[i] || `${i + 1}`)
        button.appendChild(control_img)
        button.appendChild(text)
        control_box.appendChild(button)
    }
    video_box.innerHTML = `<h5 class="followvideo">請點選右邊的特色演示</h5>
    <h5 class="followvideo">特色演示只有武器的部分動作展示而已</h5>
    <h5 class="followvideo">還有很多動作可以到遊戲操作</h5>
    <video src="video/雙刀傷口.mov" class="playvideo db_fvideo off" loop="true"
        controls></video>
    <video src="video/雙刀蘭鬼人.mov" class="playvideo db_svideo off" loop="true"
        controls></video>
    <video src="video/雙刀亂舞.mov" class="playvideo db_tvideo off" loop="true"
        controls></video>`
    videoint.innerHTML = `<div class="db_fvideo off">此為雙刀的破壞傷口動作,因為動作方式很像里維兵長而被網友如此命名</div>
    <div class="db_svideo off">藍鬼人,雙刀的特殊狀態,有更高的傷害和動作速度/移速等,閃避動作也有改變</div>
    <div class="db_tvideo off">鬼人亂舞,為雙刀連段裡其中一種,傷害和攻擊段數都很可觀</div>`

    function choose_db_firstvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        
        for (var i = 0; i < db_firstvideo.length; i++) {
            db_firstvideo[i].classList.remove("off")
            db_seconvideo[i].classList.add("off")
            db_thirdvideo[i].classList.add("off")
            db_seconvideo[0].pause()
            db_thirdvideo[0].pause()
            db_seconvideo[0].currentTime = 0
            db_thirdvideo[0].currentTime = 0
        }
    }
    function choose_db_seconvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        
        for (var i = 0; i < db_firstvideo.length; i++) {
            db_firstvideo[i].classList.add("off")
            db_seconvideo[i].classList.remove("off")
            db_thirdvideo[i].classList.add("off")
            db_firstvideo[0].pause()
            db_thirdvideo[0].pause()
            db_firstvideo[0].currentTime = 0
            db_thirdvideo[0].currentTime = 0
        }
    }
    function choose_db_thirdvideo() {     
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        
        for (var i = 0; i < db_firstvideo.length; i++) {
            db_firstvideo[i].classList.add("off")
            db_seconvideo[i].classList.add("off")
            db_thirdvideo[i].classList.remove("off")
            db_firstvideo[0].pause()
            db_seconvideo[0].pause()
            db_firstvideo[0].currentTime = 0
            db_seconvideo[0].currentTime = 0
        }
    }

    // 演示事件觸發和宣告
    var followvideo = document.querySelectorAll(".followvideo")
    var db_firstvideo_button = document.querySelector(".db_fv")
    var db_firstvideo = document.querySelectorAll(".db_fvideo")
    var db_seconvideo_button = document.querySelector(".db_sv")
    var db_seconvideo = document.querySelectorAll(".db_svideo")
    var db_thirdvideo_button = document.querySelector(".db_tv")
    var db_thirdvideo = document.querySelectorAll(".db_tvideo")
    db_firstvideo_button.addEventListener("click", choose_db_firstvideo)
    db_seconvideo_button.addEventListener("click", choose_db_seconvideo)
    db_thirdvideo_button.addEventListener("click", choose_db_thirdvideo)
}
// 以下為大錘動態生成
function hammer_display() {
    choosebox.classList.add("off")
    all_weapon_box.classList.add("off")
    weaponbox.classList.remove("off")
    weapon_display.classList.remove("off")
    solider.innerHTML = `<img id="soliderimg" src="img/05_b.png" alt="" style="width:140%;left:-20%">`
    lefttitle.innerHTML = `<img id="weapon_ic" src="" alt=""> 大錘`
    var weapon_ic = document.getElementById("weapon_ic")
    weapon_ic.src = "img/hammer_ic.png"
    leftinttext.innerText = "破壞力與機動力兼備的打擊武器,利用蓄力可以使出更強的攻擊,容易使魔物暈厥"
    // 下面是生成右邊影片演示的按鈕
    control_box.innerHTML = ""
    video_box.innerHTML = ""
    videoint.innerHTML = ""
    for (var i = 0; i < 3; i++) {
        var button = document.createElement("button")
        var button_hammer = ["hammer_fv", "hammer_sv", "hammer_tv"]
        button.classList.add("control", button_hammer[i])
        var control_img = document.createElement("img")
        control_img.src = "img/2.png"
        var buttontext = ["連消帶打", "迴旋攻擊", "渾身蓄力"]
        var text = document.createTextNode(buttontext[i] || `${i + 1}`)
        button.appendChild(control_img)
        button.appendChild(text)
        control_box.appendChild(button)
    }
    video_box.innerHTML = `<h5 class="followvideo">請點選右邊的特色演示</h5>
    <h5 class="followvideo">特色演示只有武器的部分動作展示而已</h5>
    <h5 class="followvideo">還有很多動作可以到遊戲操作</h5>
    <video src="video/大槌相殺.mov" class="playvideo hammer_fvideo off" loop="true"
        controls></video>
    <video src="video/大槌轉圈圈.mov" class="playvideo hammer_svideo off" loop="true"
        controls></video>
    <video src="video/大槌轉圈圈蓄力.mov" class="playvideo hammer_tvideo off" loop="true"
        controls></video>`
    videoint.innerHTML = `<div class="hammer_fvideo off">連消帶打,可以打斷魔物攻擊,同時派生強力打擊</div>
    <div class="hammer_svideo off">大錘的其中一種招式,邊移動邊揮舞大錘,最後能派生其他動作</div>
    <div class="hammer_tvideo off">渾身蓄力,大槌的一種進階蓄力,能造成大量傷害後繼續派生其他動作</div>`

    function choose_hammer_firstvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < hammer_firstvideo.length; i++) {
            hammer_firstvideo[i].classList.remove("off")
            hammer_seconvideo[i].classList.add("off")
            hammer_thirdvideo[i].classList.add("off")
            hammer_seconvideo[0].pause()
            hammer_thirdvideo[0].pause()
            hammer_seconvideo[0].currentTime = 0
            hammer_thirdvideo[0].currentTime = 0
        }
    }
    function choose_hammer_seconvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < hammer_firstvideo.length; i++) {
            hammer_firstvideo[i].classList.add("off")
            hammer_seconvideo[i].classList.remove("off")
            hammer_thirdvideo[i].classList.add("off")
            hammer_firstvideo[0].pause()
            hammer_thirdvideo[0].pause()
            hammer_firstvideo[0].currentTime = 0
            hammer_thirdvideo[0].currentTime = 0
        }
    }
    function choose_hammer_thirdvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < hammer_firstvideo.length; i++) {
            hammer_firstvideo[i].classList.add("off")
            hammer_seconvideo[i].classList.add("off")
            hammer_thirdvideo[i].classList.remove("off")
            hammer_firstvideo[0].pause()
            hammer_seconvideo[0].pause()
            hammer_firstvideo[0].currentTime = 0
            hammer_seconvideo[0].currentTime = 0
        }
    }

    // 演示事件觸發和宣告
    var followvideo = document.querySelectorAll(".followvideo")
    var hammer_firstvideo_button = document.querySelector(".hammer_fv")
    var hammer_firstvideo = document.querySelectorAll(".hammer_fvideo")
    var hammer_seconvideo_button = document.querySelector(".hammer_sv")
    var hammer_seconvideo = document.querySelectorAll(".hammer_svideo")
    var hammer_thirdvideo_button = document.querySelector(".hammer_tv")
    var hammer_thirdvideo = document.querySelectorAll(".hammer_tvideo")
    hammer_firstvideo_button.addEventListener("click", choose_hammer_firstvideo)
    hammer_seconvideo_button.addEventListener("click", choose_hammer_seconvideo)
    hammer_thirdvideo_button.addEventListener("click", choose_hammer_thirdvideo)
}
// 以下為狩獵笛動態生成
function hh_display() {
    choosebox.classList.add("off")
    all_weapon_box.classList.add("off")
    weaponbox.classList.remove("off")
    weapon_display.classList.remove("off")
    solider.innerHTML = `<img id="soliderimg" src="img/06_a.png" alt="" style="width:200%;left:-70%;top:15%">`
    lefttitle.innerHTML = `<img id="weapon_ic" src="" alt=""> 狩獵笛`
    var weapon_ic = document.getElementById("weapon_ic")
    weapon_ic.src = "img/hunting-horn_ic.png"
    leftinttext.innerText = "能透過演奏觸發旋律效果或響玉,擅長支援的打擊武器,利用響玉的傷害也不可輕視"
    // 下面是生成右邊影片演示的按鈕
    control_box.innerHTML = ""
    video_box.innerHTML = ""
    videoint.innerHTML = ""
    for (var i = 0; i < 3; i++) {
        var button = document.createElement("button")
        var button_hh = ["hh_fv", "hh_sv", "hh_tv"]
        button.classList.add("control", button_hh[i])
        var control_img = document.createElement("img")
        control_img.src = "img/2.png"
        var buttontext = ["瘋狂電吉他", "演奏", "連消帶打"]
        var text = document.createTextNode(buttontext[i] || `${i + 1}`)
        button.appendChild(control_img)
        button.appendChild(text)
        control_box.appendChild(button)
    }
    video_box.innerHTML = `<h5 class="followvideo">請點選右邊的特色演示</h5>
    <h5 class="followvideo">特色演示只有武器的部分動作展示而已</h5>
    <h5 class="followvideo">還有很多動作可以到遊戲操作</h5>
    <video src="video/狩獵迪傷口.mov" class="playvideo hh_fvideo off" loop="true"
        controls></video>
    <video src="video/狩獵迪演奏.mov" class="playvideo hh_svideo off" loop="true"
        controls></video>
    <video src="video/狩獵迪連消代打.mov" class="playvideo hh_tvideo off" loop="true"
        controls></video>`
    videoint.innerHTML = `<div class="hh_fvideo off">此為狩獵笛破壞傷口的動作,可以直接輸入五個音符,同時造成傷害</div>
    <div class="hh_svideo off">為狩獵笛主要特色,可以演奏不同樂曲給戰鬥帶來不同影響,每個笛子樂曲不同</div>
    <div class="hh_tvideo off">連消帶打,可以打斷魔物攻擊,同時派生強力打擊</div>`

    function choose_hh_firstvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < hh_firstvideo.length; i++) {
            hh_firstvideo[i].classList.remove("off")
            hh_seconvideo[i].classList.add("off")
            hh_thirdvideo[i].classList.add("off")
            hh_seconvideo[0].pause()
            hh_thirdvideo[0].pause()
            hh_seconvideo[0].currentTime = 0
            hh_thirdvideo[0].currentTime = 0
        }
    }
    function choose_hh_seconvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < hh_firstvideo.length; i++) {
            hh_firstvideo[i].classList.add("off")
            hh_seconvideo[i].classList.remove("off")
            hh_thirdvideo[i].classList.add("off")
            hh_firstvideo[0].pause()
            hh_thirdvideo[0].pause()
            hh_firstvideo[0].currentTime = 0
            hh_thirdvideo[0].currentTime = 0
        }
    }
    function choose_hh_thirdvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < hh_firstvideo.length; i++) {
            hh_firstvideo[i].classList.add("off")
            hh_seconvideo[i].classList.add("off")
            hh_thirdvideo[i].classList.remove("off")
            hh_firstvideo[0].pause()
            hh_seconvideo[0].pause()
            hh_firstvideo[0].currentTime = 0
            hh_seconvideo[0].currentTime = 0
        }
    }

    // 演示事件觸發和宣告
    var followvideo = document.querySelectorAll(".followvideo")
    var hh_firstvideo_button = document.querySelector(".hh_fv")
    var hh_firstvideo = document.querySelectorAll(".hh_fvideo")
    var hh_seconvideo_button = document.querySelector(".hh_sv")
    var hh_seconvideo = document.querySelectorAll(".hh_svideo")
    var hh_thirdvideo_button = document.querySelector(".hh_tv")
    var hh_thirdvideo = document.querySelectorAll(".hh_tvideo")
    hh_firstvideo_button.addEventListener("click", choose_hh_firstvideo)
    hh_seconvideo_button.addEventListener("click", choose_hh_seconvideo)
    hh_thirdvideo_button.addEventListener("click", choose_hh_thirdvideo)
}
// 以下為長槍動態生成
function lance_display() {
    choosebox.classList.add("off")
    all_weapon_box.classList.add("off")
    weaponbox.classList.remove("off")
    weapon_display.classList.remove("off")
    solider.innerHTML = `<img id="soliderimg" src="img/07_a.png" alt="" style="width:175%;top:20%">`
    lefttitle.innerHTML = `<img id="weapon_ic" src="" alt=""> 長槍`
    var weapon_ic = document.getElementById("weapon_ic")
    weapon_ic.src = "img/lance_ic.png"
    leftinttext.innerText = "具備頂級防禦系能的武器,能使用破綻較少的突刺攻擊與各種防禦動作"
    // 下面是生成右邊影片演示的按鈕
    control_box.innerHTML = ""
    video_box.innerHTML = ""
    videoint.innerHTML = ""
    for (var i = 0; i < 3; i++) {
        var button = document.createElement("button")
        var button_lance = ["lance_fv", "lance_sv", "lance_tv"]
        button.classList.add("control", button_lance[i])
        var control_img = document.createElement("img")
        control_img.src = "img/2.png"
        var buttontext = ["突進", "蓄力反擊", "角力"]
        var text = document.createTextNode(buttontext[i] || `${i + 1}`)
        button.appendChild(control_img)
        button.appendChild(text)
        control_box.appendChild(button)
    }
    video_box.innerHTML = `<h5 class="followvideo">請點選右邊的特色演示</h5>
    <h5 class="followvideo">特色演示只有武器的部分動作展示而已</h5>
    <h5 class="followvideo">還有很多動作可以到遊戲操作</h5>
    <video src="video/長槍火車.mov" class="playvideo lance_fvideo off" loop="true"
        controls></video>
    <video src="video/長槍反擊.mov" class="playvideo lance_svideo off" loop="true"
        controls></video>
    <video src="video/長槍角力.mov" class="playvideo lance_tvideo off" loop="true"
        controls></video>`
    videoint.innerHTML = `<div class="lance_fvideo off">長槍的一種移動手段,可以不斷向前衝鋒並持續造成傷害,可以轉彎甚至爬牆,也有不同的派生動作</div>
    <div class="lance_svideo off">蓄力反擊,長槍可以進入防禦姿態並且累積力量,後面也能派生更強大的力量防禦</div>
    <div class="lance_tvideo off">角力,可以抵擋魔物攻勢,並且跟魔物比拚力量後接者反擊</div>`

    function choose_lance_firstvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < lance_firstvideo.length; i++) {
            lance_firstvideo[i].classList.remove("off")
            lance_seconvideo[i].classList.add("off")
            lance_thirdvideo[i].classList.add("off")
            lance_seconvideo[0].pause()
            lance_thirdvideo[0].pause()
            lance_seconvideo[0].currentTime = 0
            lance_thirdvideo[0].currentTime = 0
        }
    }
    function choose_lance_seconvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < lance_firstvideo.length; i++) {
            lance_firstvideo[i].classList.add("off")
            lance_seconvideo[i].classList.remove("off")
            lance_thirdvideo[i].classList.add("off")
            lance_firstvideo[0].pause()
            lance_thirdvideo[0].pause()
            lance_firstvideo[0].currentTime = 0
            lance_thirdvideo[0].currentTime = 0
        }
    }
    function choose_lance_thirdvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < lance_firstvideo.length; i++) {
            lance_firstvideo[i].classList.add("off")
            lance_seconvideo[i].classList.add("off")
            lance_thirdvideo[i].classList.remove("off")
            lance_firstvideo[0].pause()
            lance_seconvideo[0].pause()
            lance_firstvideo[0].currentTime = 0
            lance_seconvideo[0].currentTime = 0
        }
    }

    // 演示事件觸發和宣告
    var followvideo = document.querySelectorAll(".followvideo")
    var lance_firstvideo_button = document.querySelector(".lance_fv")
    var lance_firstvideo = document.querySelectorAll(".lance_fvideo")
    var lance_seconvideo_button = document.querySelector(".lance_sv")
    var lance_seconvideo = document.querySelectorAll(".lance_svideo")
    var lance_thirdvideo_button = document.querySelector(".lance_tv")
    var lance_thirdvideo = document.querySelectorAll(".lance_tvideo")
    lance_firstvideo_button.addEventListener("click", choose_lance_firstvideo)
    lance_seconvideo_button.addEventListener("click", choose_lance_seconvideo)
    lance_thirdvideo_button.addEventListener("click", choose_lance_thirdvideo)
}
// 以下為銃槍動態生成
function glance_display() {
    choosebox.classList.add("off")
    all_weapon_box.classList.add("off")
    weaponbox.classList.remove("off")
    weapon_display.classList.remove("off")
    solider.innerHTML = `<img id="soliderimg" src="img/08_a.png" alt=""style="width:200%;top:20%">`
    lefttitle.innerHTML = `<img id="weapon_ic" src="" alt=""> 銃槍`
    var weapon_ic = document.getElementById("weapon_ic")
    weapon_ic.src = "img/gunlance_ic.png"
    leftinttext.innerText = "可使用攻擊距離較長的突刺,也能使用強大炮擊的武器,而且還有良好的防禦力"
    // 下面是生成右邊影片演示的按鈕
    control_box.innerHTML = ""
    video_box.innerHTML = ""
    videoint.innerHTML = ""
    for (var i = 0; i < 3; i++) {
        var button = document.createElement("button")
        var button_glance = ["glance_fv", "glance_sv", "glance_tv"]
        button.classList.add("control", button_glance[i])
        var control_img = document.createElement("img")
        control_img.src = "img/2.png"
        var buttontext = ["全彈發射", "龍擊砲", "角力"]
        var text = document.createTextNode(buttontext[i] || `${i + 1}`)
        button.appendChild(control_img)
        button.appendChild(text)
        control_box.appendChild(button)
    }
    video_box.innerHTML = `<h5 class="followvideo">請點選右邊的特色演示</h5>
    <h5 class="followvideo">特色演示只有武器的部分動作展示而已</h5>
    <h5 class="followvideo">還有很多動作可以到遊戲操作</h5>
    <video src="video/銃槍全彈.mov" class="playvideo glance_fvideo off" loop="true"
        controls></video>
    <video src="video/銃槍龍及.mov" class="playvideo glance_svideo off" loop="true"
        controls></video>
    <video src="video/銃槍角力.mov" class="playvideo glance_tvideo off" loop="true"
        controls></video>`
    videoint.innerHTML = `<div class="glance_fvideo off">全彈發射,威力強大且靈活的動作,一口氣把所有彈藥射出造成大量傷害,可以派生其他動作</div>
    <div class="glance_svideo off">銃槍中的一個威力巨大的攻擊,可以派生在許多動作後面來縮短續力時間</div>
    <div class="glance_tvideo off">角力,可以抵擋魔物攻勢,並且跟魔物比拚力量後接者反擊,影片中的派生為全彈發射</div>`

    function choose_glance_firstvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < glance_firstvideo.length; i++) {
            glance_firstvideo[i].classList.remove("off")
            glance_seconvideo[i].classList.add("off")
            glance_thirdvideo[i].classList.add("off")
            glance_seconvideo[0].pause()
            glance_thirdvideo[0].pause()
            glance_seconvideo[0].currentTime = 0
            glance_thirdvideo[0].currentTime = 0
        }
    }
    function choose_glance_seconvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < glance_firstvideo.length; i++) {
            glance_firstvideo[i].classList.add("off")
            glance_seconvideo[i].classList.remove("off")
            glance_thirdvideo[i].classList.add("off")
            glance_firstvideo[0].pause()
            glance_thirdvideo[0].pause()
            glance_firstvideo[0].currentTime = 0
            glance_thirdvideo[0].currentTime = 0
        }
    }
    function choose_glance_thirdvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < glance_firstvideo.length; i++) {
            glance_firstvideo[i].classList.add("off")
            glance_seconvideo[i].classList.add("off")
            glance_thirdvideo[i].classList.remove("off")
            glance_firstvideo[0].pause()
            glance_seconvideo[0].pause()
            glance_firstvideo[0].currentTime = 0
            glance_seconvideo[0].currentTime = 0
        }
    }

    // 演示事件觸發和宣告
    var followvideo = document.querySelectorAll(".followvideo")
    var glance_firstvideo_button = document.querySelector(".glance_fv")
    var glance_firstvideo = document.querySelectorAll(".glance_fvideo")
    var glance_seconvideo_button = document.querySelector(".glance_sv")
    var glance_seconvideo = document.querySelectorAll(".glance_svideo")
    var glance_thirdvideo_button = document.querySelector(".glance_tv")
    var glance_thirdvideo = document.querySelectorAll(".glance_tvideo")
    glance_firstvideo_button.addEventListener("click", choose_glance_firstvideo)
    glance_seconvideo_button.addEventListener("click", choose_glance_seconvideo)
    glance_thirdvideo_button.addEventListener("click", choose_glance_thirdvideo)
}
// 以下為斬擊斧動態生成
function switchaxe_display() {
    choosebox.classList.add("off")
    all_weapon_box.classList.add("off")
    weaponbox.classList.remove("off")
    weapon_display.classList.remove("off")
    solider.innerHTML = `<img id="soliderimg" src="img/09_a.png" alt="" style="width:200%;top:-5%">`
    lefttitle.innerHTML = `<img id="weapon_ic" src="" alt=""> 斬擊斧`
    var weapon_ic = document.getElementById("weapon_ic")
    weapon_ic.src = "img/switch-axe_ic.png"
    leftinttext.innerText = "可於兩種模式之間變形切換的武器,斧模式攻擊距離佔優,劍模式能快速攻擊"
    // 下面是生成右邊影片演示的按鈕
    control_box.innerHTML = ""
    video_box.innerHTML = ""
    videoint.innerHTML = ""
    for (var i = 0; i < 3; i++) {
        var button = document.createElement("button")
        var button_switchaxe = ["switchaxe_fv", "switchaxe_sv", "switchaxe_tv"]
        button.classList.add("control", button_switchaxe[i])
        var control_img = document.createElement("img")
        control_img.src = "img/2.png"
        var buttontext = ["連消帶打", "完全解放", "零距離解放"]
        var text = document.createTextNode(buttontext[i] || `${i + 1}`)
        button.appendChild(control_img)
        button.appendChild(text)
        control_box.appendChild(button)
    }
    video_box.innerHTML = `<h5 class="followvideo">請點選右邊的特色演示</h5>
    <h5 class="followvideo">特色演示只有武器的部分動作展示而已</h5>
    <h5 class="followvideo">還有很多動作可以到遊戲操作</h5>
    <video src="video/斬擊斧 連消代打.mov" class="playvideo switchaxe_fvideo off" loop="true"
        controls></video>
    <video src="video/斬擊斧 完全解放.mov" class="playvideo switchaxe_svideo off" loop="true"
        controls></video>
    <video src="video/斬擊斧 零解.mov" class="playvideo switchaxe_tvideo off" loop="true"
        controls></video>`
    videoint.innerHTML = `<div class="switchaxe_fvideo off">連消帶打,可以打斷魔物攻擊,同時派生強力打擊</div>
    <div class="switchaxe_svideo off">完全解放斬,斬擊斧的最高威力動作,可以打出華麗又痛的招式</div>
    <div class="switchaxe_tvideo off">零距離解放斬,一種屬性解放攻擊,可以直接跳到魔物身上進行零距離攻擊</div>`

    function choose_switchaxe_firstvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < switchaxe_firstvideo.length; i++) {
            switchaxe_firstvideo[i].classList.remove("off")
            switchaxe_seconvideo[i].classList.add("off")
            switchaxe_thirdvideo[i].classList.add("off")
            switchaxe_seconvideo[0].pause()
            switchaxe_thirdvideo[0].pause()
            switchaxe_seconvideo[0].currentTime = 0
            switchaxe_thirdvideo[0].currentTime = 0
        }
    }
    function choose_switchaxe_seconvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < switchaxe_firstvideo.length; i++) {
            switchaxe_firstvideo[i].classList.add("off")
            switchaxe_seconvideo[i].classList.remove("off")
            switchaxe_thirdvideo[i].classList.add("off")
            switchaxe_firstvideo[0].pause()
            switchaxe_thirdvideo[0].pause()
            switchaxe_firstvideo[0].currentTime = 0
            switchaxe_thirdvideo[0].currentTime = 0
        }
    }
    function choose_switchaxe_thirdvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < switchaxe_firstvideo.length; i++) {
            switchaxe_firstvideo[i].classList.add("off")
            switchaxe_seconvideo[i].classList.add("off")
            switchaxe_thirdvideo[i].classList.remove("off")
            switchaxe_firstvideo[0].pause()
            switchaxe_seconvideo[0].pause()
            switchaxe_firstvideo[0].currentTime = 0
            switchaxe_seconvideo[0].currentTime = 0
        }
    }

    // 演示事件觸發和宣告
    var followvideo = document.querySelectorAll(".followvideo")
    var switchaxe_firstvideo_button = document.querySelector(".switchaxe_fv")
    var switchaxe_firstvideo = document.querySelectorAll(".switchaxe_fvideo")
    var switchaxe_seconvideo_button = document.querySelector(".switchaxe_sv")
    var switchaxe_seconvideo = document.querySelectorAll(".switchaxe_svideo")
    var switchaxe_thirdvideo_button = document.querySelector(".switchaxe_tv")
    var switchaxe_thirdvideo = document.querySelectorAll(".switchaxe_tvideo")
    switchaxe_firstvideo_button.addEventListener("click", choose_switchaxe_firstvideo)
    switchaxe_seconvideo_button.addEventListener("click", choose_switchaxe_seconvideo)
    switchaxe_thirdvideo_button.addEventListener("click", choose_switchaxe_thirdvideo)
}
// 以下為充能斧動態生成
function cb_display() {
    choosebox.classList.add("off")
    all_weapon_box.classList.add("off")
    weaponbox.classList.remove("off")
    weapon_display.classList.remove("off")
    solider.innerHTML = `<img id="soliderimg" src="img/10_a.png" alt="" style="width:200%;top:10%;left:-60%">`
    lefttitle.innerHTML = `<img id="weapon_ic" src="" alt=""> 充能斧`
    var weapon_ic = document.getElementById("weapon_ic")
    weapon_ic.src = "img/charge-blade_ic.png"
    leftinttext.innerText = "可利用合體,在兩種模式切換的武器,動作敏捷的劍模式,以及高威力的斧模式"
    // 下面是生成右邊影片演示的按鈕
    control_box.innerHTML = ""
    video_box.innerHTML = ""
    videoint.innerHTML = ""
    for (var i = 0; i < 3; i++) {
        var button = document.createElement("button")
        var button_cb = ["cb_fv", "cb_sv", "cb_tv"]
        button.classList.add("control", button_cb[i])
        var control_img = document.createElement("img")
        control_img.src = "img/2.png"
        var buttontext = ["斧模式高解", "超高屬性解放", "角力"]
        var text = document.createTextNode(buttontext[i] || `${i + 1}`)
        button.appendChild(control_img)
        button.appendChild(text)
        control_box.appendChild(button)
    }
    video_box.innerHTML = `<h5 class="followvideo">請點選右邊的特色演示</h5>
    <h5 class="followvideo">特色演示只有武器的部分動作展示而已</h5>
    <h5 class="followvideo">還有很多動作可以到遊戲操作</h5>
    <video src="video/充能斧 高解.mov" class="playvideo cb_fvideo off" loop="true"
        controls></video>
    <video src="video/充能斧 超解.mov" class="playvideo cb_svideo off" loop="true"
        controls></video>
    <video src="video/充能斧 角力.mov" class="playvideo cb_tvideo off" loop="true"
        controls></video>`
    videoint.innerHTML = `<div class="cb_fvideo off">為高解狀態下的斧模式,充能斧最高傷害的狀態,可以打出巨大威力的動作</div>
    <div class="cb_svideo off">超高屬性解放斬,可以一次性使用完所有填裝的瓶子,以此打出大量傷害</div>
    <div class="cb_tvideo off">角力,可以抵擋魔物攻勢,並且跟魔物比拚力量後接者反擊</div>`

    function choose_cb_firstvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < cb_firstvideo.length; i++) {
            cb_firstvideo[i].classList.remove("off")
            cb_seconvideo[i].classList.add("off")
            cb_thirdvideo[i].classList.add("off")
            cb_seconvideo[0].pause()
            cb_thirdvideo[0].pause()
            cb_seconvideo[0].currentTime = 0
            cb_thirdvideo[0].currentTime = 0
        }
    }
    function choose_cb_seconvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < cb_firstvideo.length; i++) {
            cb_firstvideo[i].classList.add("off")
            cb_seconvideo[i].classList.remove("off")
            cb_thirdvideo[i].classList.add("off")
            cb_firstvideo[0].pause()
            cb_thirdvideo[0].pause()
            cb_firstvideo[0].currentTime = 0
            cb_thirdvideo[0].currentTime = 0
        }
    }
    function choose_cb_thirdvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < cb_firstvideo.length; i++) {
            cb_firstvideo[i].classList.add("off")
            cb_seconvideo[i].classList.add("off")
            cb_thirdvideo[i].classList.remove("off")
            cb_firstvideo[0].pause()
            cb_seconvideo[0].pause()
            cb_firstvideo[0].currentTime = 0
            cb_seconvideo[0].currentTime = 0
        }
    }

    // 演示事件觸發和宣告
    var followvideo = document.querySelectorAll(".followvideo")
    var cb_firstvideo_button = document.querySelector(".cb_fv")
    var cb_firstvideo = document.querySelectorAll(".cb_fvideo")
    var cb_seconvideo_button = document.querySelector(".cb_sv")
    var cb_seconvideo = document.querySelectorAll(".cb_svideo")
    var cb_thirdvideo_button = document.querySelector(".cb_tv")
    var cb_thirdvideo = document.querySelectorAll(".cb_tvideo")
    cb_firstvideo_button.addEventListener("click", choose_cb_firstvideo)
    cb_seconvideo_button.addEventListener("click", choose_cb_seconvideo)
    cb_thirdvideo_button.addEventListener("click", choose_cb_thirdvideo)
}
// 以下為操蟲棍動態生成
function bugstick_display() {
    choosebox.classList.add("off")
    all_weapon_box.classList.add("off")
    weaponbox.classList.remove("off")
    weapon_display.classList.remove("off")
    solider.innerHTML = `<img id="soliderimg" src="img/11_a.png" alt="" style="width:195%;top:5%;left:-40%">`
    lefttitle.innerHTML = `<img id="weapon_ic" src="" alt=""> 操蟲棍`
    var weapon_ic = document.getElementById("weapon_ic")
    weapon_ic.src = "img/insect-glaive_ic.png"
    leftinttext.innerText = "可操縱獵蟲採集精華,再強化自身的武器,也能跳躍到空中發動攻擊"
    // 下面是生成右邊影片演示的按鈕
    control_box.innerHTML = ""
    video_box.innerHTML = ""
    videoint.innerHTML = ""
    for (var i = 0; i < 3; i++) {
        var button = document.createElement("button")
        var button_bugstick = ["bugstick_fv", "bugstick_sv", "bugstick_tv"]
        button.classList.add("control", button_bugstick[i])
        var control_img = document.createElement("img")
        control_img.src = "img/2.png"
        var buttontext = ["連消帶打", "飛天螺旋斬", "空中舞踏"]
        var text = document.createTextNode(buttontext[i] || `${i + 1}`)
        button.appendChild(control_img)
        button.appendChild(text)
        control_box.appendChild(button)
    }
    video_box.innerHTML = `<h5 class="followvideo">請點選右邊的特色演示</h5>
    <h5 class="followvideo">特色演示只有武器的部分動作展示而已</h5>
    <h5 class="followvideo">還有很多動作可以到遊戲操作</h5>
    <video src="video/操蟲棍 連消代打.mov" class="playvideo bugstick_fvideo off" loop="true"
        controls></video>
    <video src="video/操蟲棍 飛天螺旋.mov" class="playvideo bugstick_svideo off" loop="true"
        controls></video>
    <video src="video/操蟲棍 空中舞踏.mov" class="playvideo bugstick_tvideo off" loop="true"
        controls></video>`
    videoint.innerHTML = `<div class="bugstick_fvideo off">連消帶打,可以打斷魔物攻擊,同時派生強力打擊</div>
    <div class="bugstick_svideo off">飛天螺旋斬,操蟲棍中一個能造成大量傷害的動作,需要在點亮三個燈後發動</div>
    <div class="bugstick_tvideo off">操蟲棍有別於其他武器,是可以跳躍到空中進行攻擊和位移的,有多種派生</div>`

    function choose_bugstick_firstvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < bugstick_firstvideo.length; i++) {
            bugstick_firstvideo[i].classList.remove("off")
            bugstick_seconvideo[i].classList.add("off")
            bugstick_thirdvideo[i].classList.add("off")
            bugstick_seconvideo[0].pause()
            bugstick_thirdvideo[0].pause()
            bugstick_seconvideo[0].currentTime = 0
            bugstick_thirdvideo[0].currentTime = 0
        }
    }
    function choose_bugstick_seconvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < bugstick_firstvideo.length; i++) {
            bugstick_firstvideo[i].classList.add("off")
            bugstick_seconvideo[i].classList.remove("off")
            bugstick_thirdvideo[i].classList.add("off")
            bugstick_firstvideo[0].pause()
            bugstick_thirdvideo[0].pause()
            bugstick_firstvideo[0].currentTime = 0
            bugstick_thirdvideo[0].currentTime = 0
        }
    }
    function choose_bugstick_thirdvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < bugstick_firstvideo.length; i++) {
            bugstick_firstvideo[i].classList.add("off")
            bugstick_seconvideo[i].classList.add("off")
            bugstick_thirdvideo[i].classList.remove("off")
            bugstick_firstvideo[0].pause()
            bugstick_seconvideo[0].pause()
            bugstick_firstvideo[0].currentTime = 0
            bugstick_seconvideo[0].currentTime = 0
        }
    }

    // 演示事件觸發和宣告
    var followvideo = document.querySelectorAll(".followvideo")
    var bugstick_firstvideo_button = document.querySelector(".bugstick_fv")
    var bugstick_firstvideo = document.querySelectorAll(".bugstick_fvideo")
    var bugstick_seconvideo_button = document.querySelector(".bugstick_sv")
    var bugstick_seconvideo = document.querySelectorAll(".bugstick_svideo")
    var bugstick_thirdvideo_button = document.querySelector(".bugstick_tv")
    var bugstick_thirdvideo = document.querySelectorAll(".bugstick_tvideo")
    bugstick_firstvideo_button.addEventListener("click", choose_bugstick_firstvideo)
    bugstick_seconvideo_button.addEventListener("click", choose_bugstick_seconvideo)
    bugstick_thirdvideo_button.addEventListener("click", choose_bugstick_thirdvideo)
}
// 以下為輕弩動態生成
function lbowgun_display() {
    choosebox.classList.add("off")
    all_weapon_box.classList.add("off")
    weaponbox.classList.remove("off")
    weapon_display.classList.remove("off")
    solider.innerHTML = `<img id="soliderimg" src="img/12_a.png" alt="">`
    lefttitle.innerHTML = `<img id="weapon_ic" src="" alt=""> 輕弩`
    var weapon_ic = document.getElementById("weapon_ic")
    weapon_ic.src = "img/light-bowgun_ic.png"
    leftinttext.innerText = "可從中距離射擊的武器,機動力高,擅長快速射擊和迴避"
    // 下面是生成右邊影片演示的按鈕
    control_box.innerHTML = ""
    video_box.innerHTML = ""
    videoint.innerHTML = ""
    for (var i = 0; i < 3; i++) {
        var button = document.createElement("button")
        var button_lbowgun = ["lbowgun_fv", "lbowgun_sv", "lbowgun_tv"]
        button.classList.add("control", button_lbowgun[i])
        var control_img = document.createElement("img")
        control_img.src = "img/2.png"
        var buttontext = ["墊步速射", "起爆龍彈", "黏著龍彈"]
        var text = document.createTextNode(buttontext[i] || `${i + 1}`)
        button.appendChild(control_img)
        button.appendChild(text)
        control_box.appendChild(button)
    }
    video_box.innerHTML = `<h5 class="followvideo">請點選右邊的特色演示</h5>
    <h5 class="followvideo">特色演示只有武器的部分動作展示而已</h5>
    <h5 class="followvideo">還有很多動作可以到遊戲操作</h5>
    <video src="video/輕弩 速射.mov" class="playvideo lbowgun_fvideo off" loop="true"
        controls></video>
    <video src="video/輕弩 起爆.mov" class="playvideo lbowgun_svideo off" loop="true"
        controls></video>
    <video src="video/輕弩 黏卓.mov" class="playvideo lbowgun_tvideo off" loop="true"
        controls></video>`
    videoint.innerHTML = `<div class="lbowgun_fvideo off">此動作為輕弩能夠打出大量傷害的關鍵,有高機動力的同時打出大量彈藥</div>
    <div class="lbowgun_svideo off">起爆龍彈,一種特殊彈藥,可以放置在地板,魔物靠近便會觸發</div>
    <div class="lbowgun_tvideo off">黏著龍彈,一種特殊彈藥,可以黏到魔物身上,會在一定時間後打出大量傷害</div>`

    function choose_lbowgun_firstvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < lbowgun_firstvideo.length; i++) {
            lbowgun_firstvideo[i].classList.remove("off")
            lbowgun_seconvideo[i].classList.add("off")
            lbowgun_thirdvideo[i].classList.add("off")
            lbowgun_seconvideo[0].pause()
            lbowgun_thirdvideo[0].pause()
            lbowgun_seconvideo[0].currentTime = 0
            lbowgun_thirdvideo[0].currentTime = 0
        }
    }
    function choose_lbowgun_seconvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < lbowgun_firstvideo.length; i++) {
            lbowgun_firstvideo[i].classList.add("off")
            lbowgun_seconvideo[i].classList.remove("off")
            lbowgun_thirdvideo[i].classList.add("off")
            lbowgun_firstvideo[0].pause()
            lbowgun_thirdvideo[0].pause()
            lbowgun_firstvideo[0].currentTime = 0
            lbowgun_thirdvideo[0].currentTime = 0
        }
    }
    function choose_lbowgun_thirdvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < lbowgun_firstvideo.length; i++) {
            lbowgun_firstvideo[i].classList.add("off")
            lbowgun_seconvideo[i].classList.add("off")
            lbowgun_thirdvideo[i].classList.remove("off")
            lbowgun_firstvideo[0].pause()
            lbowgun_seconvideo[0].pause()
            lbowgun_firstvideo[0].currentTime = 0
            lbowgun_seconvideo[0].currentTime = 0
        }
    }

    // 演示事件觸發和宣告
    var followvideo = document.querySelectorAll(".followvideo")
    var lbowgun_firstvideo_button = document.querySelector(".lbowgun_fv")
    var lbowgun_firstvideo = document.querySelectorAll(".lbowgun_fvideo")
    var lbowgun_seconvideo_button = document.querySelector(".lbowgun_sv")
    var lbowgun_seconvideo = document.querySelectorAll(".lbowgun_svideo")
    var lbowgun_thirdvideo_button = document.querySelector(".lbowgun_tv")
    var lbowgun_thirdvideo = document.querySelectorAll(".lbowgun_tvideo")
    lbowgun_firstvideo_button.addEventListener("click", choose_lbowgun_firstvideo)
    lbowgun_seconvideo_button.addEventListener("click", choose_lbowgun_seconvideo)
    lbowgun_thirdvideo_button.addEventListener("click", choose_lbowgun_thirdvideo)
}
// 以下為重弩動態生成
function hbowgun_display() {
    choosebox.classList.add("off")
    all_weapon_box.classList.add("off")
    weaponbox.classList.remove("off")
    weapon_display.classList.remove("off")
    solider.innerHTML = `<img id="soliderimg" src="img/13_a.png" alt="" style="width:195%;top:35%;left:-20%;transform:rotate(10deg)">`
    lefttitle.innerHTML = `<img id="weapon_ic" src="" alt=""> 重弩`
    var weapon_ic = document.getElementById("weapon_ic")
    weapon_ic.src = "img/heavy-bowgun_ic.png"
    leftinttext.innerText = "可從遠距離發射彈藥,機動力較低,但可以防禦,且大多時候會自動防禦"
    // 下面是生成右邊影片演示的按鈕
    control_box.innerHTML = ""
    video_box.innerHTML = ""
    videoint.innerHTML = ""
    for (var i = 0; i < 3; i++) {
        var button = document.createElement("button")
        var button_hbowgun = ["hbowgun_fv", "hbowgun_sv", "hbowgun_tv"]
        button.classList.add("control", button_hbowgun[i])
        var control_img = document.createElement("img")
        control_img.src = "img/2.png"
        var buttontext = ["角力", "熱龍機關龍彈", "騎乘作戰"]
        var text = document.createTextNode(buttontext[i] || `${i + 1}`)
        button.appendChild(control_img)
        button.appendChild(text)
        control_box.appendChild(button)
    }
    video_box.innerHTML = `<h5 class="followvideo">請點選右邊的特色演示</h5>
    <h5 class="followvideo">特色演示只有武器的部分動作展示而已</h5>
    <h5 class="followvideo">還有很多動作可以到遊戲操作</h5>
    <video src="video/重弩 角力.mp4" class="playvideo hbowgun_fvideo off" loop="true"
        controls></video>
    <video src="video/重弩 熱龍機關.mov" class="playvideo hbowgun_svideo off" loop="true"
        controls></video>
    <video src="video/重弩 鳥上.mp4" class="playvideo hbowgun_tvideo off" loop="true"
        controls></video>`
    videoint.innerHTML = `<div class="hbowgun_fvideo off">角力,可以抵擋魔物攻勢,並且跟魔物比拚力量後接者反擊</div>
    <div class="hbowgun_svideo off">熱龍機關龍彈,重弩的一種特殊模式,可以瘋狂的傾瀉彈藥到魔物身上</div>
    <div class="hbowgun_tvideo off">騎乘作戰並非重弩的專利,但在眾多武器中重弩是相對適合這樣做的武器</div>`

    function choose_hbowgun_firstvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < hbowgun_firstvideo.length; i++) {
            hbowgun_firstvideo[i].classList.remove("off")
            hbowgun_seconvideo[i].classList.add("off")
            hbowgun_thirdvideo[i].classList.add("off")
            hbowgun_seconvideo[0].pause()
            hbowgun_thirdvideo[0].pause()
            hbowgun_seconvideo[0].currentTime = 0
            hbowgun_thirdvideo[0].currentTime = 0
        }
    }
    function choose_hbowgun_seconvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < hbowgun_firstvideo.length; i++) {
            hbowgun_firstvideo[i].classList.add("off")
            hbowgun_seconvideo[i].classList.remove("off")
            hbowgun_thirdvideo[i].classList.add("off")
            hbowgun_firstvideo[0].pause()
            hbowgun_thirdvideo[0].pause()
            hbowgun_firstvideo[0].currentTime = 0
            hbowgun_thirdvideo[0].currentTime = 0
        }
    }
    function choose_hbowgun_thirdvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < hbowgun_firstvideo.length; i++) {
            hbowgun_firstvideo[i].classList.add("off")
            hbowgun_seconvideo[i].classList.add("off")
            hbowgun_thirdvideo[i].classList.remove("off")
            hbowgun_firstvideo[0].pause()
            hbowgun_seconvideo[0].pause()
            hbowgun_firstvideo[0].currentTime = 0
            hbowgun_seconvideo[0].currentTime = 0
        }
    }

    // 演示事件觸發和宣告
    var followvideo = document.querySelectorAll(".followvideo")
    var hbowgun_firstvideo_button = document.querySelector(".hbowgun_fv")
    var hbowgun_firstvideo = document.querySelectorAll(".hbowgun_fvideo")
    var hbowgun_seconvideo_button = document.querySelector(".hbowgun_sv")
    var hbowgun_seconvideo = document.querySelectorAll(".hbowgun_svideo")
    var hbowgun_thirdvideo_button = document.querySelector(".hbowgun_tv")
    var hbowgun_thirdvideo = document.querySelectorAll(".hbowgun_tvideo")
    hbowgun_firstvideo_button.addEventListener("click", choose_hbowgun_firstvideo)
    hbowgun_seconvideo_button.addEventListener("click", choose_hbowgun_seconvideo)
    hbowgun_thirdvideo_button.addEventListener("click", choose_hbowgun_thirdvideo)
}
// 以下為弓動態生成
function bow_display() {
    choosebox.classList.add("off")
    all_weapon_box.classList.add("off")
    weaponbox.classList.remove("off")
    weapon_display.classList.remove("off")
    solider.innerHTML = `<img id="soliderimg" src="img/14_b.png" alt="" style="width:150%;top:-22%;left:-11%">`
    lefttitle.innerHTML = `<img id="weapon_ic" src="" alt=""> 弓`
    var weapon_ic = document.getElementById("weapon_ic")
    weapon_ic.src = "img/bow_ic.png"
    leftinttext.innerText = "可利用箭矢使出各種攻擊,並具備高機動力,可以蓄力提升箭矢傷害,利用墊步閃避並反擊"
    // 下面是生成右邊影片演示的按鈕
    control_box.innerHTML = ""
    video_box.innerHTML = ""
    videoint.innerHTML = ""
    for (var i = 0; i < 3; i++) {
        var button = document.createElement("button")
        var button_bow = ["bow_fv", "bow_sv", "bow_tv"]
        button.classList.add("control", button_bow[i])
        var control_img = document.createElement("img")
        control_img.src = "img/2.png"
        var buttontext = ["蓄力墊步", "誘導箭", "龍之箭"]
        var text = document.createTextNode(buttontext[i] || `${i + 1}`)
        button.appendChild(control_img)
        button.appendChild(text)
        control_box.appendChild(button)
    }
    video_box.innerHTML = `<h5 class="followvideo">請點選右邊的特色演示</h5>
    <h5 class="followvideo">特色演示只有武器的部分動作展示而已</h5>
    <h5 class="followvideo">還有很多動作可以到遊戲操作</h5>
    <video src="video/弓 蓄力墊步.mp4" class="playvideo bow_fvideo off" loop="true"
        controls></video>
    <video src="video/弓 誘導.mp4" class="playvideo bow_svideo off" loop="true"
        controls></video>
    <video src="video/弓 龍之見.mp4" class="playvideo bow_tvideo off" loop="true"
        controls></video>`
    videoint.innerHTML = `<div class="bow_fvideo off">蓄力墊步,為弓的特殊動作,可以邊閃躲的同時進行蓄力</div>
    <div class="bow_svideo off">誘導箭,射出一根誘導箭,此後一段時間的箭矢會自動飛向誘導箭的位置</div>
    <div class="bow_tvideo off">龍之箭,原地蓄力並且射出一根威力強大的箭矢</div>`

    function choose_bow_firstvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < bow_firstvideo.length; i++) {
            bow_firstvideo[i].classList.remove("off")
            bow_seconvideo[i].classList.add("off")
            bow_thirdvideo[i].classList.add("off")
            bow_seconvideo[0].pause()
            bow_thirdvideo[0].pause()
            bow_seconvideo[0].currentTime = 0
            bow_thirdvideo[0].currentTime = 0
        }
    }
    function choose_bow_seconvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < bow_firstvideo.length; i++) {
            bow_firstvideo[i].classList.add("off")
            bow_seconvideo[i].classList.remove("off")
            bow_thirdvideo[i].classList.add("off")
            bow_firstvideo[0].pause()
            bow_thirdvideo[0].pause()
            bow_firstvideo[0].currentTime = 0
            bow_thirdvideo[0].currentTime = 0
        }
    }
    function choose_bow_thirdvideo() {
        for(var i = 0;i < 3;i++){
            followvideo[i].classList.add("off")
        }
        for (var i = 0; i < bow_firstvideo.length; i++) {
            bow_firstvideo[i].classList.add("off")
            bow_seconvideo[i].classList.add("off")
            bow_thirdvideo[i].classList.remove("off")
            bow_firstvideo[0].pause()
            bow_seconvideo[0].pause()
            bow_firstvideo[0].currentTime = 0
            bow_seconvideo[0].currentTime = 0
        }
    }

    // 演示事件觸發和宣告
    var followvideo = document.querySelectorAll(".followvideo")
    var bow_firstvideo_button = document.querySelector(".bow_fv")
    var bow_firstvideo = document.querySelectorAll(".bow_fvideo")
    var bow_seconvideo_button = document.querySelector(".bow_sv")
    var bow_seconvideo = document.querySelectorAll(".bow_svideo")
    var bow_thirdvideo_button = document.querySelector(".bow_tv")
    var bow_thirdvideo = document.querySelectorAll(".bow_tvideo")
    bow_firstvideo_button.addEventListener("click", choose_bow_firstvideo)
    bow_seconvideo_button.addEventListener("click", choose_bow_seconvideo)
    bow_thirdvideo_button.addEventListener("click", choose_bow_thirdvideo)
}
// 武器總攬的選擇事件觸發
weapon_choose_bow_button.addEventListener("click", bow_display)
weapon_choose_hbowgun_button.addEventListener("click", hbowgun_display)
weapon_choose_lbowgun_button.addEventListener("click", lbowgun_display)
weapon_choose_bugstick_button.addEventListener("click", bugstick_display)
weapon_choose_chargeblade_button.addEventListener("click", cb_display)
weapon_choose_switchaxe_button.addEventListener("click", switchaxe_display)
weapon_choose_glance_button.addEventListener("click", glance_display)
weapon_choose_lance_button.addEventListener("click", lance_display)
weapon_choose_hh_button.addEventListener("click", hh_display)
weapon_choose_hammer_button.addEventListener("click", hammer_display)
weapon_choose_swshield_button.addEventListener("click", sw_shield_display)
weapon_choose_lsw_button.addEventListener("click", lsw_display)
weapon_choose_db_button.addEventListener("click", db_display)
weapon_choose_gsw_button.addEventListener("click", gsw_display)
// 對話最後選擇武器的事件觸發
choose_bow_button.addEventListener("click", bow_display)
choose_hbowgun_button.addEventListener("click", hbowgun_display)
choose_lbowgun_button.addEventListener("click", lbowgun_display)
choose_bugstick_button.addEventListener("click", bugstick_display)
choose_chargeblade_button.addEventListener("click", cb_display)
choose_switchaxe_button.addEventListener("click", switchaxe_display)
choose_glance_button.addEventListener("click", glance_display)
choose_lance_button.addEventListener("click", lance_display)
choose_hh_button.addEventListener("click", hh_display)
choose_hammer_button.addEventListener("click", hammer_display)
choose_swshield_button.addEventListener("click", sw_shield_display)
choose_gsw_button.addEventListener("click", gsw_display)
choose_lsw_button.addEventListener("click", lsw_display)
choose_db_button.addEventListener("click", db_display)
// 武器演示和最後選擇外的事件觸發
weapon_box_close_button.addEventListener("click", menu)
into_weapon_button.addEventListener("click", into_weapon)
into_talk_button.addEventListener("click", intotalk)
heavebutton.addEventListener("click", chooseheave)
dexbutton.addEventListener("click", choosedex)
defbutton.addEventListener("click", choosedef)
rangebutton.addEventListener("click", chooserange)
startbutton.addEventListener("click", start)
closebutton.addEventListener("click", menu)








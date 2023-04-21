const $$$ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


window.onload=function(){
    $('.slide-music-main').slick({
    autoplay:true,
    autoplaySpeed:1500,
    arrows:true,
    prevArrow:'<a class="prev">&#10094;</a>',
    nextArrow:'<a class="next">&#10095;</a>',
    centerMode:true,
    slidesToShow: 2,
    slidesToScroll: 0,
    dots: true
    });
};
// change slidebar
const optionElements = Array.from(document.querySelectorAll('.menu-item'));
const contentElments = Array.from(document.querySelectorAll('.content-item'));

optionElements.forEach((option, index) => {   
    const contentElment = contentElments[index];
    option.onclick = function () {
        console.log('swap');
        clickTop();
        
        $$$('.menu-item.active').classList.remove("active");
        $$$('.content-item.active').classList.remove("active");

        this.classList.add("active");
        contentElment.classList.add("active");
    };
});

function clickTop() {
    document.documentElement.scrollTop = 0;
}


// change list music
const musicOptions = Array.from(document.querySelectorAll('.user-list-item'));
const musicContent = Array.from(document.querySelectorAll('.play-list-user'));

musicOptions.forEach((option, index) => {   
    const MusicContent = musicContent[index];
    option.onclick = function () {
        
        $$$('.user-list-item.active').classList.remove("active");
        $$$('.play-list-user.active').classList.remove("active");

        this.classList.add("active");
        MusicContent.classList.add("active");
    };
});


const loginOptions = Array.from(document.querySelectorAll('.login-option-item'));
const optionContent = Array.from(document.querySelectorAll('.option-change'));

loginOptions.forEach((option, index) => {   
    const OptionContent = optionContent[index];
    option.onclick = function () {
        
        $$$('.login-option-item.active').classList.remove("active");
        $$$('.option-change.active').classList.remove("active");

        this.classList.add("active");
        OptionContent.classList.add("active");
    };
});

const app = {
    musics: [
        {
            name: 'vjvhjavb',
            singer: 'hahahha',
            path: 'http://vnso-zn-23-tf-mp3-s1-zmp3.zmdcdn.me/b6667382d3c63a9863d7/4272251374005157188?authen=exp=1660034631~acl=/b6667382d3c63a9863d7/*~hmac=8a4eaf89fa0aa9c2d8b19e3335969ffc',
            image: 'data:image/webp;base64,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L2pwZWciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDczNWJhMzEtN2EzZC01MjQxLThiYjUtYTg1YzNhZjU4OWYwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3MzViYTMxLTdhM2QtNTI0MS04YmI1LWE4NWMzYWY1ODlmMCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjA3MzViYTMxLTdhM2QtNTI0MS04YmI1LWE4NWMzYWY1ODlmMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDczNWJhMzEtN2EzZC01MjQxLThiYjUtYTg1YzNhZjU4OWYwIiBzdEV2dDp3aGVuPSIyMDE3LTA0LTE5VDA5OjMzOjI3KzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cykiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz4='
        },
        {
            name: 'vjvhjavb',
            singer: 'hahahha',
            path: 'http://vnso-zn-23-tf-mp3-s1-zmp3.zmdcdn.me/b6667382d3c63a9863d7/4272251374005157188?authen=exp=1660034631~acl=/b6667382d3c63a9863d7/*~hmac=8a4eaf89fa0aa9c2d8b19e3335969ffc',
            image: ''
        },
        {
            name: 'vjvhjavb',
            singer: 'hahahha',
            path: 'http://vnso-zn-23-tf-mp3-s1-zmp3.zmdcdn.me/b6667382d3c63a9863d7/4272251374005157188?authen=exp=1660034631~acl=/b6667382d3c63a9863d7/*~hmac=8a4eaf89fa0aa9c2d8b19e3335969ffc',
            image: '	https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/e/9/5/a/e95ab5f59472dcc54cd061765bd3832c.jpg'
        },
        {
            name: 'vjvhjavb',
            singer: 'hahahha',
            path: 'http://vnso-zn-23-tf-mp3-s1-zmp3.zmdcdn.me/b6667382d3c63a9863d7/4272251374005157188?authen=exp=1660034631~acl=/b6667382d3c63a9863d7/*~hmac=8a4eaf89fa0aa9c2d8b19e3335969ffc',
            image: './asset/img/music-list/1.png'
        },
        {
            name: 'vjvhjavb',
            singer: 'hahahha',
            path: 'http://vnso-zn-23-tf-mp3-s1-zmp3.zmdcdn.me/b6667382d3c63a9863d7/4272251374005157188?authen=exp=1660034631~acl=/b6667382d3c63a9863d7/*~hmac=8a4eaf89fa0aa9c2d8b19e3335969ffc',
            image: './asset/img/music-list/1.png'
        },
        {
            name: 'vjvhjavb',
            singer: 'hahahha',
            path: 'http://vnso-zn-23-tf-mp3-s1-zmp3.zmdcdn.me/b6667382d3c63a9863d7/4272251374005157188?authen=exp=1660034631~acl=/b6667382d3c63a9863d7/*~hmac=8a4eaf89fa0aa9c2d8b19e3335969ffc',
            image: './asset/img/music-list/1.png'
        },
        {
            name: 'vjvhjavb',
            singer: 'hahahha',
            path: 'http://vnso-zn-23-tf-mp3-s1-zmp3.zmdcdn.me/b6667382d3c63a9863d7/4272251374005157188?authen=exp=1660034631~acl=/b6667382d3c63a9863d7/*~hmac=8a4eaf89fa0aa9c2d8b19e3335969ffc',
            image: './asset/img/music-list/1.png'
        },

        {
            name: 'vjvhjavb',
            singer: 'hahahha',
            path: 'http://vnso-zn-23-tf-mp3-s1-zmp3.zmdcdn.me/b6667382d3c63a9863d7/4272251374005157188?authen=exp=1660034631~acl=/b6667382d3c63a9863d7/*~hmac=8a4eaf89fa0aa9c2d8b19e3335969ffc',
            image: './asset/img/music-list/1.png'
        },
        {
            name: 'vjvhjavb',
            singer: 'hahahha',
            path: 'http://vnso-zn-23-tf-mp3-s1-zmp3.zmdcdn.me/b6667382d3c63a9863d7/4272251374005157188?authen=exp=1660034631~acl=/b6667382d3c63a9863d7/*~hmac=8a4eaf89fa0aa9c2d8b19e3335969ffc',
            image: './asset/img/music-list/1.png'
        },
    ],

    render: function() {
        const htmls = this.musics.map(music => {
            return `
            <div class="thumb">
                <div class="play-music-items">
                    <div class="play-music-img">
                        <img src="${music.image}" alt="">
                    </div>
                    <div class="play-music-desc">
                        <h3 class="title">${music.name}</h3>
                        <p class="author">${music.singer}</p>
                    </div>
                </div>
                <div class="play-music-name">
                    <p class="music-name">${music.name}</p>
                </div>
                <div class="options-music">
                    <p class="option-icon material-symbols-outlined">
                        more_horiz
                    </p>
                </div>
            </div>
            `
        })
        $$$('.play-music-lists').innerHTML = htmls.join('');
    },
    start: function() {
        this.render();
    }

}

app.start()

function showLoginForm() {
    const Loginbtn = $$$('.btn-info');
    const loginForm = $$$('.login-modal');
    Loginbtn.onclick = function() {
        $$$('.login-modal.block').classList.remove("block");
    }
}
showLoginForm();

function closeLoginForm() {
    const closeBtn = $$$('.close-icon');
    const loginForm = $$$('.login-modal');
    closeBtn.onclick = function() {
        loginForm.classList.add("block");
    }
}
closeLoginForm();
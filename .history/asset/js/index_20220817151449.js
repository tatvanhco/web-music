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
    const loginForm = $$$('.login-modal');
    loginForm.onclick = function() {
        
    }
}
showLoginForm();
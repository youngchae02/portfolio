$(function() {
    gsap.registerPlugin(ScrollTrigger);

    const path = document.querySelector('.path_d');
    const star = document.getElementById('star_l');
    const pathLength = path.getTotalLength();

    // 초기화
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;


    // 애니메이션
    gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
            trigger: "#line",
            start: "top center",
            end: "+=3074",
            scrub: 1,
            /*     markers: true, */
            onUpdate: self => {
                const progress = self.progress; // 0 ~ 1
                const point = path.getPointAtLength(pathLength * progress);

                // 위치 이동
                gsap.set(star, {
                    x: point.x - 5, // 보정값 (이미지 중심)
                    y: point.y - 5, // 보정값 (이미지 중심)
                    ease: "none"
                });
            }
        }
    });
    /* 반딧불 커서*/
    var petElement = document.getElementById('pet');
    var mouseX = 0;
    var mouseY = 0;
    var petX = 0;
    var petY = 0;

    function updatePosition() {
        var dx = mouseX - petX;
        var dy = mouseY - petY;
        var speed = 10;

        if (Math.abs(dx) > speed || Math.abs(dy) > speed) {
            var angle = Math.atan2(dy, dx);
            var velocityX = Math.cos(angle) * speed;
            var velocityY = Math.sin(angle) * speed;

            petX += velocityX;
            petY += velocityY;

            petElement.style.left = petX + 'px';
            petElement.style.top = petY + 'px';
        }

        requestAnimationFrame(updatePosition);
    }

    // For tracking mouse movement
    function trackMouse(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    }
    document.addEventListener('mousemove', trackMouse);


    petX = window.innerWidth / 2;
    petY = window.innerHeight / 2;
    petElement.style.left = petX + 'px';
    petElement.style.top = petY + 'px';

    updatePosition();


    $('ul.nav-tabs li').click(function() {
        $('ul.nav-tabs li').removeClass('active')
        $(this).addClass('active');
        let i = $(this).index();
        $('.contents article').removeClass('active').eq(i).addClass('active')

    });

    $('#txtani').simplyScroll({
        speed: 4,
        direction: 'forwards',
        pauseOnHover: true,
        pauseOnTouch: true,
    });

    const tabs = document.querySelectorAll('.nav-tabs .tab');
    const contents = document.querySelectorAll('.tab-content');
    const homeMain = document.querySelector('.home_main');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // 탭 활성화 처리
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            contents[index].classList.add('active');

            // 배경 처리
            if (tab.classList.contains('home')) {
                homeMain.classList.add('home_main');
            } else {
                homeMain.classList.remove('home_main');
            }
        });
    });


    let lineHeight = 0;
    let drawTriggered = false;

    window.addEventListener('scroll', () => {
        const star = document.querySelector('.star');
    });

    /* txt */



    /* projects */

    $(".left_box .onclick li").click(function() {
        // 왼쪽 탭에서 on 클래스 이동
        $(".left_box .onclick li").removeClass("on");
        $(this).addClass("on");

        // 클릭한 탭의 클래스 이름 (product or package)
        let className = $(this).attr("class").split(" ")[0];

        // 오른쪽 박스들 on 제거하고, 선택된 것만 on 부여
        $(".right_box .box").removeClass("on");
        $(".right_box .box." + className).addClass("on");
    });

    let swiper = new Swiper(".web_cards", {
        effect: "coverflow",
        grabCursor: true,
        loop: true,
        speed: 600,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 120,
            depth: 400,
            modifier: 1,
            slideShadows: false,
        },
    });
        let swipers = new Swiper(".main_cards", {
        effect: "coverflow",
        grabCursor: true,
        loop: true,
        speed: 600,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 120,
            depth: 400,
            modifier: 1,
            slideShadows: false,
        },
         });
});
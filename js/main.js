$(function () {
    /*   gsap.registerPlugin(ScrollTrigger);
  
      const path = document.querySelector('.path_d');
      const pathLength = path.getTotalLength();
  
      path.style.strokeDasharray = pathLength;
      path.style.strokeDashoffset = pathLength;
  
      gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
              trigger: "#line",
              start: "top center",     // 선이 화면 중간에 올 때 시작
              end: "+=5000",           // 스크롤 길이 늘려서 느리게 그려지게
              scrub: 1,
              markers: true,          // 확인용
          }
      }); */

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
            end: "+=5000",
            scrub: 1,
            /*     markers: true, */
            onUpdate: self => {
                const progress = self.progress; // 0 ~ 1
                const point = path.getPointAtLength(pathLength * progress);

                // 위치 이동
                gsap.set(star, {
                    x: point.x - 5, // 보정값 (이미지 중심)
                    y: point.y - 5,  // 보정값 (이미지 중심)
                    ease: "none"
                });
            }
        }
    });
    /*  */
    /*     const cursor = document.querySelector('.custom_cursor');
    
        document.addEventListener('mousemove', (e) => {
            // locoScroll 사용 여부에 따라 스크롤 위치 계산
            const scrollY =
                typeof locoScroll !== 'undefined' && locoScroll.scroll
                    ? locoScroll.scroll.instance.scroll.y
                    : window.scrollY;
    
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY + scrollY}px`;
        }); */
    /*  */


    $('ul.nav-tabs li').click(function () {
        $('ul.nav-tabs li').removeClass('active')
        $(this).addClass('active');
        let i = $(this).index();
        $('.contents article').removeClass('active').eq(i).addClass('active')

        /*         $('.nav-container .bg').css('left', i * (270));
                if ($('.home.active').is(':visible')) {
                    $('.tab-content').removeClass('active');
                    $('.c_home').addClass('active');
                }
                if ($('.projects.active').is(':visible')) {
                    $('.tab-content').removeClass('active');
                    $('.c_projects').addClass('active');
                }
                if ($('.aboutme.active').is(':visible')) {
                    $('.tab-content').removeClass('active');
                    $('.c_aboutme').addClass('active')
                } */
    });

    $('#txtani').simplyScroll({
        // orientation: "horizontal",
        // auto: true,
        speed: 4,
        direction: 'forwards',
        pauseOnHover: true,
        pauseOnTouch: true,
        // frameRate: 24, //기본값이 24인데 10으로 줄임
    });
    /*  */
    const canvas = document.getElementById('embersCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const embers = [];
    const emberCount = 200;

    // 별 설정
    const emberSettings = {
        maxSize: 4,
        minSize: 1,
        maxSpeed: 5,
        minSpeed: 0.2,
    };

    // 창 크기 변경 시 캔버스 사이즈 조정
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // 별 모양 (다이아몬드 형태) 그리기
    function drawDiamond(ctx, x, y, size, opacity) {
        ctx.beginPath();
        ctx.moveTo(x, y - size);         // Top
        ctx.lineTo(x + size, y);         // Right
        ctx.lineTo(x, y + size);         // Bottom
        ctx.lineTo(x - size, y);         // Left
        ctx.closePath();

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`; // 반짝이는 흰색
        ctx.fill();
    }

    // 별 클래스 정의
    class Ember {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + Math.random() * 100;
            this.size = emberSettings.minSize + Math.random() * (emberSettings.maxSize - emberSettings.minSize);
            this.speed = emberSettings.minSpeed + Math.random() * (emberSettings.maxSpeed - emberSettings.minSpeed);
            this.opacity = 1;
            this.fadeRate = Math.random() * 0.01 + 0.002;

            this.twinkleTime = Math.random() * 100;
            this.twinkleSpeed = Math.random() * 2 + 0.5;
        }

        update() {
            this.y -= this.speed;
            this.opacity -= this.fadeRate;

            this.twinkleTime += this.twinkleSpeed * 0.05;
            this.currentOpacity = this.opacity * Math.abs(Math.sin(this.twinkleTime));

            if (this.opacity <= 0) {
                this.reset();
            }
        }

        draw() {
            drawDiamond(ctx, this.x, this.y, this.size, this.currentOpacity.toFixed(2));
        }
    }

    // 별 생성
    for (let i = 0; i < emberCount; i++) {
        embers.push(new Ember());
    }

    // 애니메이션 루프
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        embers.forEach(ember => {
            ember.update();
            ember.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();




    let lineHeight = 0;
    let drawTriggered = false;

    window.addEventListener('scroll', () => {
        // 선 길이 증가 (스크롤 위치 기준)
        // const scrollY = window.scrollY;
        //lineHeight = scrollY;

        // 캔버스에 선 그리기
        // drawLine();

        // 별 이미지가 화면에 닿았는지 체크
        const star = document.querySelector('.star');
        // const rect = star.getBoundingClientRect();

        /*         if (rect.top < window.innerHeight && !drawTriggered) {
                    drawTriggered = true;
                    animate(); 
                } */
    });

    /* txt */



    /* projects */

    $(".left_box .onclick li").click(function () {
        // 왼쪽 탭에서 on 클래스 이동
        $(".left_box .onclick li").removeClass("on");
        $(this).addClass("on");

        // 클릭한 탭의 클래스 이름 (product or package)
        let className = $(this).attr("class").split(" ")[0];

        // 오른쪽 박스들 on 제거하고, 선택된 것만 on 부여
        $(".right_box .box").removeClass("on");
        $(".right_box .box." + className).addClass("on");
    });

    var swiper = new Swiper(".web_cards", {
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
        // on: {
        //     setTranslate: function () {
        //         this.slides.forEach((slide) => {
        //             slide.style.opacity = "0.3"; // 기본 opacity
        //         });
        //         // 활성화된 슬라이드는 opacity 1
        //         const activeSlide = this.slides[this.activeIndex];
        //         activeSlide.style.opacity = "1";
        //     },
        //     // click(event) {
        //     //     swiper.slideTo(this.clickedIndex);
        //     // },
        // },
    });
});
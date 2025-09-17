// 메인 슬라이드 페이드 인/아웃
const slide = document.getElementById('slide');

// 로딩 완료시 슬라이드 진행
document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll('#slide .slide_imgs');
  
  let current = 0; // 현재 슬라이드 페이지
  const duration = 3000; // 이미지 전환 시간 간격
  
  // index 값을 받았을 때, 현재 인덱스 번호라면 보이게...(CSS의 active 클래스 적용)
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if(i === index) {
        // slide.style.opacity = 1;
        // slide.style.zIndex = 1;
        slide.classList.add('active');
      } else {
        // slide.style.opacity = 0;
        // slide.style.zIndex = 0;
        slide.classList.remove('active');
      }
    });
  }
  
  // 페이드 효과
  function fadeSlide() {
    slides[current].animate([
      // 키 프레임
      {opacity: 1}, 
      {opacity: 0} // 투명도 -> fade In.Out
    ], {
      // 옵션
      duration: 2000, // 지속 시간
      easing: "ease", // 진행 효과
      iterations: 1, // 반복 주기(횟수) [Infinity : 무한]
      fill: "both"
    });
  
    // 다음 슬라이드 인덱스 계산
    current = (current + 1) % slides.length;
  
    // 다음 슬라이드 페이드 인
    slides[current].animate([
      // 키 프레임
      {opacity: 0}, 
      {opacity: 1}
    ], {
      // 옵션
      duration: 2000, // 지속 시간
      easing: "ease", // 진행 효과
      iterations: 1, // 반복 주기(횟수) [Infinity : 무한]
      fill: "both"
    });
  }
  
  showSlide(current); // 함수 실행, 첫 슬라이드 보이기
  
  // 일정 간격으로 슬라이드 전환
  setInterval(fadeSlide, duration);
});

// GPT 도움. (vanilla javascript로 작성하는 fadeIn/Out 방법 보강 목적)
const topbtn = document.querySelector('.topbtn');

// 스크롤 이벤트
window.addEventListener('scroll', () => {
  if(window.scrollY > 100) {
    topbtn.style.display = 'block';
  } else {
    topbtn.style.display = 'none';
  }
});

// 클릭 이벤트
topbtn.addEventListener('click', (e) => {
  e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 부드럽게 스크롤
  });
});
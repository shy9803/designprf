// 태블릿 이하 사이즈일 때의 토글 메뉴 기능
const navi = document.getElementById('gnb');
const tog_btn = document.querySelector('.mnu_toggle_btn');
const tog_icon = document.querySelector('.mnu_toggle_btn > i');

// 메뉴 토글 버튼 클릭시
tog_btn.addEventListener('click', () => {
  navi.classList.toggle('act');

  // 아이콘 토글
  if(navi.classList.contains('act')) {
    tog_icon.classList.remove('fa-bars');
    tog_icon.classList.add('fa-times');
  } else {
    tog_icon.classList.remove('fa-times');
    tog_icon.classList.add('fa-bars');
  }
});

// 1Depth(메뉴) 클릭시 해당 하위 2Depth(서브메뉴) 등장 
document.addEventListener('DOMContentLoaded', () => {
  const menu_item = document.querySelectorAll('.mmnu > a');

  menu_item.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault(); // 새로고침 방지
      const parent = e.currentTarget.parentElement; // 현재 부모요소

      parent.classList.toggle('active'); // 현재 서브메뉴 토글기능 클래스 적용

      // 아이콘 변경
      const sub_tog = e.currentTarget.querySelector('.sub_tog i');
      if(sub_tog) {
        sub_tog.classList.toggle('fa-angle-down');
        sub_tog.classList.toggle('fa-angle-up');
      }

      // 다른 서브 메뉴 닫음, 아이콘 원상복구
      document.querySelectorAll('.mmnu').forEach(otheritem => {
        if(otheritem !== parent) {
          otheritem.classList.remove('active');

          const othericon = otheritem.querySelector('.sub_tog i');
          if(othericon) {
            othericon.classList.remove('fa-angle-up');
            othericon.classList.add('fa-angle-down');
          }
        }
      });
    });
  })
});

// 서브메뉴 관련: GPT 도움
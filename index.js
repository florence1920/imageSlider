
// 버튼 선언
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
// 그림 들어가는 곳 선언
let pic = document.querySelector('.pic');
// 넣을 그림
let photoInfo = [
  './image/팰.jpg','./image/팰1.jpg','./image/팰2.jpg','./image/팰3.jpg'
]
// 클릭 했을 때 증가할 수
let nowNum = 0;
// 그림 수
let maxNum = photoInfo.length - 1;

// prev,next 클릭했을 때
function slideClick(direction){
  if(direction === 'prev'){
    nowNum = nowNum - 1;
    showPic(nowNum);
  }else if(direction === 'next'){
    nowNum = nowNum + 1;
    showPic(nowNum);
  }
  checkNum();
}

// 번호에 맞는 그림 나오기
function showPic(num){
  pic.style.backgroundImage = `url(${photoInfo[num]})`;  
}

// 번호에 따라 prev,next 번호 노출
function checkNum(){
  if(nowNum == 0){
    prevBtn.style.display = 'none'
  }else if( 0 < nowNum && nowNum < maxNum){
    prevBtn.style.display = 'block'
    nextBtn.style.display = 'block'
  }else if(nowNum == maxNum){
    nextBtn.style.display = 'none'
  }
  
}

checkNum();
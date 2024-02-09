// 1. 처음에 이미지 정보 배열로 가지고 있어야 함
// 2. 클릭할 때 마다 해당 이미지가 나와야 함 처음이 0번 next를 누르면 +1 (예외처리 버튼이 안나오게)
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let pic = document.querySelector('.pic');
let photoInfo = [
  './image/팰.jpg','./image/팰1.jpg','./image/팰2.jpg','./image/팰3.jpg'
]


let nowNum = 0;
let maxNum = photoInfo.length - 1;
console.log(`maxNum = ${maxNum}`)

function slideClick(direction){
  if(direction === 'prev'){
    nowNum = nowNum - 1;
    showPic(nowNum);
  }else if(direction === 'next'){
    nowNum = nowNum + 1;
    showPic(nowNum);
  }
  checkNum();
  console.log(`nowNum = ${nowNum}`)
}

function showPic(num){
  pic.style.backgroundImage = `url(${photoInfo[num]})`;  
}

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
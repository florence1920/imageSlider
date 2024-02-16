
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const pic = document.querySelector('.pic');

const photoInfo = new Array(4).fill(null).map((_, i) => `./image/팰${i}`);

let nowNum = 0;
//그림 최대 수
let maxNum = photoInfo.length - 1;

function slideClick(direction){
	const directionToNumber = direction === 'prev' ? -1 : 1;

	 nowNum = nowNum + directionToNumber ;
   showPic(nowNum);
	checkNum();
}

function showPic(num){
  pic.style.backgroundImage = `url(${photoInfo[num]})`;  
}

// 번호에 따라 prev,next 번호 노출
function checkNum(){
  if(nowNum === 0){
    prevBtn.style.display = 'none'
  }else if( 0 < nowNum && nowNum < maxNum){
    prevBtn.style.display = 'block'
    nextBtn.style.display = 'block'
  }else if(nowNum === maxNum){
    nextBtn.style.display = 'none'
  }
  
}

checkNum();
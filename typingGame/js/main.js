// 사용 변수
const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const button = document.querySelector('.button');

const GAME_TIME = 9;
let score = 0;
let time = GAME_TIME;
let isPlaying = false;
let timeInterval;
let checkInterval;
let words = [];

// 게임 실행
const run = () => {
    if(!isPlaying){
        isPlaying = true;
        wordInput.focus();
        scoreDisplay.innerText = 0;
        time = GAME_TIME;
        timeDisplay.innerText = time;
        timeInterval = setInterval(countDown, 1000);
        checkInterval = setInterval(checkStatus, 50);
        buttonChange('게임중');
    }
}

// 게임 상태를 체크하는 것으로 추가 기능을 넣을 수 있으므로 따로 체크
const checkStatus = () => {
    if(!isPlaying && time === 0){
        buttonChange("게임시작");
        clearInterval(checkInterval);
    }
}

// 단어 일치 체크
const checkWordMatch = () => {
    if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
        wordInput.value = "";
        // 게임 실행 중일 때 점수 관련 실행
        if(isPlaying){
            score++;
            scoreDisplay.innerText = score;
            time = GAME_TIME;
            const randomIndex = Math.floor(Math.random() * words.length);
            wordDisplay.innerText = words[randomIndex];
        }
    }
}

// 남은 시간을 Control하는 함수
const countDown = () => {
    time > 0 ? time-- : isPlaying = false;
    timeDisplay.innerText = time;
    if(!isPlaying){
        clearInterval(timeInterval);
    }
}

// 버튼 상태를 Control하는 함수
const buttonChange = (text) => {
    button.innerText = text;
    text === '게임시작' ? button.classList.remove('loading')
        : button.classList.add('loading');
}

// 홈페이지 loading 시 한 번만 실행하자~
// 단어 불러오기
const getWords = async () => {
    try{
        const url = 'https://random-word-api.herokuapp.com/word?number=100';
        const response = await axios.get(url);
        response.data.forEach(word => {
            if(word.length < 10){
                words.push(word);
            }
        });
        buttonChange('게임시작');
    }
    catch (error){
        console.error(error);
    }
}
const init = () => {
    // 게임에 사용할 단어를 api에서 불러온다
    getWords();
    // 버튼 loading으로 일단 초기화
    buttonChange('게임 로딩중...');
    // input의 이벤트 처리 (단어 확인)
    wordInput.addEventListener('input', checkWordMatch);
    // button의 이벤트 처리 (게임 실행)
    button.addEventListener('click', run);
}
init();
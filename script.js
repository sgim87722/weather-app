// WeatherAPI 설정
const API_KEY = '22ab4ff9d5834d5094d55847252110'; // WeatherAPI.com에서 발급받은 API 키를 여기에 입력하세요
const BASE_URL = 'https://api.weatherapi.com/v1';

// 한글 도시명을 영어로 변환하는 매핑 객체
const cityMapping = {
    '서울': 'Seoul',
    '부산': 'Busan',
    '대구': 'Daegu',
    '인천': 'Incheon',
    '광주': 'Gwangju',
    '대전': 'Daejeon',
    '울산': 'Ulsan',
    '세종': 'Sejong',
    '수원': 'Suwon',
    '성남': 'Seongnam',
    '고양': 'Goyang',
    '용인': 'Yongin',
    '부천': 'Bucheon',
    '안산': 'Ansan',
    '안양': 'Anyang',
    '평택': 'Pyeongtaek',
    '시흥': 'Siheung',
    '김포': 'Gimpo',
    '의정부': 'Uijeongbu',
    '광명': 'Gwangmyeong',
    '파주': 'Paju',
    '이천': 'Icheon',
    '오산': 'Osan',
    '하남': 'Hanam',
    '양평': 'Yangpyeong',
    '여주': 'Yeoju',
    '화성': 'Hwaseong',
    '가평': 'Gapyeong',
    '연천': 'Yeoncheon',
    '포천': 'Pocheon',
    '양주': 'Yangju',
    '동두천': 'Dongducheon',
    '과천': 'Gwacheon',
    '구리': 'Guri',
    '남양주': 'Namyangju',
    '의왕': 'Uiwang',
    '군포': 'Gunpo',
    '안성': 'Anseong',
    '평택시': 'Pyeongtaek',
    '제주': 'Jeju',
    '제주도': 'Jeju',
    '제주시': 'Jeju',
    '서귀포': 'Seogwipo',
    '춘천': 'Chuncheon',
    '원주': 'Wonju',
    '강릉': 'Gangneung',
    '동해': 'Donghae',
    '태백': 'Taebaek',
    '속초': 'Sokcho',
    '삼척': 'Samcheok',
    '홍천': 'Hongcheon',
    '횡성': 'Hoengseong',
    '영월': 'Yeongwol',
    '평창': 'Pyeongchang',
    '정선': 'Jeongseon',
    '철원': 'Cheorwon',
    '화천': 'Hwacheon',
    '양구': 'Yanggu',
    '인제': 'Inje',
    '고성': 'Goseong',
    '양양': 'Yangyang',
    '청주': 'Cheongju',
    '충주': 'Chungju',
    '제천': 'Jecheon',
    '보은': 'Boeun',
    '옥천': 'Okcheon',
    '영동': 'Yeongdong',
    '증평': 'Jeungpyeong',
    '진천': 'Jincheon',
    '괴산': 'Goesan',
    '음성': 'Eumseong',
    '단양': 'Danyang',
    '천안': 'Cheonan',
    '공주': 'Gongju',
    '보령': 'Boryeong',
    '아산': 'Asan',
    '서산': 'Seosan',
    '논산': 'Nonsan',
    '계룡': 'Gyeryong',
    '당진': 'Dangjin',
    '금산': 'Geumsan',
    '부여': 'Buyeo',
    '서천': 'Seocheon',
    '청양': 'Cheongyang',
    '홍성': 'Hongseong',
    '예산': 'Yesan',
    '태안': 'Taean',
    '전주': 'Jeonju',
    '군산': 'Gunsan',
    '익산': 'Iksan',
    '정읍': 'Jeongeup',
    '남원': 'Namwon',
    '김제': 'Gimje',
    '완주': 'Wanju',
    '진안': 'Jinan',
    '무주': 'Muju',
    '장수': 'Jangsu',
    '임실': 'Imsil',
    '순창': 'Sunchang',
    '고창': 'Gochang',
    '부안': 'Buan',
    '목포': 'Mokpo',
    '여수': 'Yeosu',
    '순천': 'Suncheon',
    '나주': 'Naju',
    '광양': 'Gwangyang',
    '담양': 'Damyang',
    '곡성': 'Gokseong',
    '구례': 'Gurye',
    '고흥': 'Goheung',
    '보성': 'Boseong',
    '화순': 'Hwasun',
    '장흥': 'Jangheung',
    '강진': 'Gangjin',
    '해남': 'Haenam',
    '영암': 'Yeongam',
    '무안': 'Muan',
    '함평': 'Hampyeong',
    '영광': 'Yeonggwang',
    '장성': 'Jangseong',
    '완도': 'Wando',
    '진도': 'Jindo',
    '신안': 'Sinan',
    '포항': 'Pohang',
    '경주': 'Gyeongju',
    '김천': 'Gimcheon',
    '안동': 'Andong',
    '구미': 'Gumi',
    '영주': 'Yeongju',
    '영천': 'Yeongcheon',
    '상주': 'Sangju',
    '문경': 'Mungyeong',
    '경산': 'Gyeongsan',
    '군위': 'Gunwi',
    '의성': 'Uiseong',
    '청송': 'Cheongsong',
    '영양': 'Yeongyang',
    '영덕': 'Yeongdeok',
    '청도': 'Cheongdo',
    '고령': 'Goryeong',
    '성주': 'Seongju',
    '칠곡': 'Chilgok',
    '예천': 'Yecheon',
    '봉화': 'Bonghwa',
    '울진': 'Uljin',
    '울릉': 'Ulleung',
    '창원': 'Changwon',
    '진주': 'Jinju',
    '통영': 'Tongyeong',
    '사천': 'Sacheon',
    '김해': 'Gimhae',
    '밀양': 'Miryang',
    '거제': 'Geoje',
    '양산': 'Yangsan',
    '의령': 'Uiryeong',
    '함안': 'Haman',
    '창녕': 'Changnyeong',
    '고성': 'Goseong',
    '남해': 'Namhae',
    '하동': 'Hadong',
    '산청': 'Sancheong',
    '함양': 'Hamyang',
    '거창': 'Geochang',
    '합천': 'Hapcheon'
};

// DOM 요소들
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const loading = document.getElementById('loading');
const weatherInfo = document.getElementById('weatherInfo');
const error = document.getElementById('error');

// 날씨 정보 표시 함수
function displayWeather(data) {
    const current = data.current;
    const location = data.location;
    
    // 현재 날씨 정보 표시
    document.getElementById('cityName').textContent = location.name;
    document.getElementById('country').textContent = location.country;
    document.getElementById('temp').textContent = Math.round(current.temp_c);
    document.getElementById('weatherDesc').textContent = current.condition.text;
    document.getElementById('feelsLike').textContent = Math.round(current.feelslike_c) + '°C';
    document.getElementById('humidity').textContent = current.humidity + '%';
    document.getElementById('windSpeed').textContent = current.wind_kph + ' km/h';
    document.getElementById('pressure').textContent = current.pressure_mb + ' mb';
    document.getElementById('visibility').textContent = current.vis_km + ' km';
    document.getElementById('uvIndex').textContent = current.uv;
    
    // 날씨 아이콘 설정
    const weatherIcon = document.getElementById('weatherIcon');
    weatherIcon.src = current.condition.icon;
    weatherIcon.alt = current.condition.text;
    
    // 3일 예보 표시
    displayForecast(data.forecast);
    
    // UI 표시
    loading.style.display = 'none';
    error.style.display = 'none';
    weatherInfo.style.display = 'block';
}

// 예보 정보 표시 함수
function displayForecast(forecast) {
    const forecastItems = document.getElementById('forecastItems');
    forecastItems.innerHTML = '';
    
    forecast.forecastday.forEach((day, index) => {
        if (index === 0) return; // 오늘은 제외하고 내일부터 표시
        
        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';
        
        const date = new Date(day.date);
        const dayName = date.toLocaleDateString('ko-KR', { weekday: 'long' });
        
        forecastItem.innerHTML = `
            <div class="date">${dayName}</div>
            <img src="${day.day.condition.icon}" alt="${day.day.condition.text}" style="width: 50px; height: 50px;">
            <div class="temp">${Math.round(day.day.avgtemp_c)}°C</div>
            <div class="desc">${day.day.condition.text}</div>
            <div style="margin-top: 10px; font-size: 0.9rem; color: #636e72;">
                최고 ${Math.round(day.day.maxtemp_c)}°C / 최저 ${Math.round(day.day.mintemp_c)}°C
            </div>
        `;
        
        forecastItems.appendChild(forecastItem);
    });
}

// 에러 표시 함수
function displayError() {
    loading.style.display = 'none';
    weatherInfo.style.display = 'none';
    error.style.display = 'block';
}

// 로딩 표시 함수
function showLoading() {
    loading.style.display = 'block';
    weatherInfo.style.display = 'none';
    error.style.display = 'none';
}

// 날씨 데이터 가져오기 함수
async function fetchWeatherData(city) {
    try {
        showLoading();
        
        // API 키가 설정되지 않은 경우
        if (API_KEY === 'YOUR_API_KEY_HERE') {
            throw new Error('API 키가 설정되지 않았습니다. WeatherAPI.com에서 API 키를 발급받아 script.js 파일의 API_KEY 변수에 입력해주세요.');
        }
        
        const response = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=4&lang=ko`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error.message);
        }
        
        displayWeather(data);
        
    } catch (err) {
        console.error('날씨 데이터를 가져오는 중 오류 발생:', err);
        displayError();
        
        // API 키 관련 에러인 경우 특별한 메시지 표시
        if (err.message.includes('API 키')) {
            error.innerHTML = `
                <p>❌ ${err.message}</p>
                <p>WeatherAPI.com에서 무료 API 키를 발급받아 사용하세요.</p>
            `;
        }
    }
}

// 한글 도시명을 영어로 변환하는 함수
function convertKoreanCityToEnglish(cityName) {
    // 입력된 도시명에서 공백 제거
    const trimmedCity = cityName.trim();
    
    // 한글 도시명 매핑에서 찾기
    if (cityMapping[trimmedCity]) {
        return cityMapping[trimmedCity];
    }
    
    // 부분 매칭 시도 (예: "서울시" -> "서울")
    for (const [koreanName, englishName] of Object.entries(cityMapping)) {
        if (trimmedCity.includes(koreanName) || koreanName.includes(trimmedCity)) {
            return englishName;
        }
    }
    
    // 매핑되지 않은 경우 원래 입력값 반환 (영어 도시명일 가능성)
    return trimmedCity;
}

// 검색 함수
function searchWeather() {
    const city = cityInput.value.trim();
    
    if (!city) {
        alert('도시명을 입력해주세요.');
        return;
    }
    
    // 한글 도시명을 영어로 변환
    const englishCityName = convertKoreanCityToEnglish(city);
    
    // 변환된 도시명으로 날씨 검색
    fetchWeatherData(englishCityName);
}

// 이벤트 리스너 등록
searchBtn.addEventListener('click', searchWeather);

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchWeather();
    }
});

// 페이지 로드 시 기본 도시로 서울 날씨 표시
window.addEventListener('load', () => {
    fetchWeatherData('Seoul');
    cityInput.value = '서울'; // 입력창에 한글 도시명 표시
});

// 도시 자동완성 기능 (선택사항)
async function getCitySuggestions(query) {
    if (query.length < 2) return [];
    
    try {
        const response = await fetch(`${BASE_URL}/search.json?key=${API_KEY}&q=${query}`);
        const data = await response.json();
        
        return data.map(item => ({
            name: item.name,
            country: item.country,
            region: item.region
        }));
    } catch (error) {
        console.error('도시 검색 중 오류 발생:', error);
        return [];
    }
}

// 도시 입력 시 자동완성 표시 (고급 기능)
let timeoutId;
cityInput.addEventListener('input', (e) => {
    clearTimeout(timeoutId);
    const query = e.target.value.trim();
    
    if (query.length >= 2) {
        timeoutId = setTimeout(async () => {
            const suggestions = await getCitySuggestions(query);
            // 여기에 자동완성 UI를 구현할 수 있습니다
            console.log('도시 제안:', suggestions);
        }, 300);
    }
});

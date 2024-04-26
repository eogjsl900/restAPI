// REST Countries API의 URL
const apiUrl = 'https://restcountries.com/v3.1/name/korea?fields=name,capital,currencies';

// Fetch API를 사용하여 API 호출
fetch(apiUrl)
  .then(response => {
    // 응답을 JSON으로 파싱
    return response.json();
  })
  .then(data => {
    // 각 korea의 국가명, 수도, 화폐 정보만 추출하여 화면에 출력
    //console.log(data)
    data.forEach(country => {
 
      //country.currencies 의 값이 { KRW: { name: 'South Korean won', symbol: '₩' } }
      //                           { KPW: { name: 'North Korean won', symbol: '₩' } }
      // KRW, KPW 두개로 나뉘기때문에 변수에 따로 넣어줌
      const krw = country.currencies.KRW ? country.currencies.KRW.name: "Unknown"
      const kpw = country.currencies.KPW ? country.currencies.KPW.name: "Unknown"

      const currencies = krw=="Unknown" ? kpw : kpw=="Unknown"? krw : "Unknown"

      console.log(`Country: ${country.name.common}, capital: ${country.capital} , currencies:`,currencies);
    });
        
  })
  .catch(error => {
    // 오류 처리
    console.error('Error:', error);
  });

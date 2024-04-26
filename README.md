# restAPI 실습해보기

restAPI를 실습해 볼 수 있는 공개 API사이트 이용

URL: https://restcountries.com

설명: 전 세계 국가들에 대한 정보를 제공합니다. 국가별 기본 정보, 인구, 지역, 국기 등을 포함한 데이터를 얻을 수 있습니다.

.

``` html
https://restcountries.com/v3.1/all
```


## Name

**Search** by country name. If you want to get an exact match, use the next endpoint. It can be the common or official value
``` html
https://restcountries.com/v3.1/name/{name}
```

``` html
https://restcountries.com/v3.1/name/eesti
```

``` html
https://restcountries.com/v3.1/name/deutschland
```



.


자바스크립트로 만든 restApiJS.js 을 보면

restAPI응답을 JSON 으로 파싱하여 korea의 국가명, 수도, 화폐 정보만 추출하여 화면에 출력


    Country: South Korea, capital: Seoul , currencies: South Korean won

    Country: North Korea, capital: Pyongyang , currencies: North Korean won



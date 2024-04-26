import requests

# 모든 국가 정보를 가져오는 GET 요청
response = requests.get('https://restcountries.com/v3.1/all')
countries = response.json()  # 응답을 JSON 형태로 변환

# 첫 5개 국가의 이름과 수도 출력
for country in countries[:5]:
    name = country['name']['common']  # 국가 이름
    capital = country.get('capital', ['No capital'])[0]  # 수도, 없는 경우 처리
    print(f"Country: {name}, Capital: {capital}")

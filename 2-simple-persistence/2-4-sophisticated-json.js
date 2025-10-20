const userProfile = {
  firstName: "Jeonghun",
  lastName: "Kim",
  lastUpdated: new Date(2025, 10, 13)
};

// JSON.stringify >> JSON.parse를 거치면 lastUpdated는 Date 객체가 아닌 문자열로 복원될 것이다
// 이를 살리고 싶다면 JSON.stringify와 JSON.parse에 replacer, reviver 함수를 인자로 전달해주자

function replacer(key, value) {
  // replacer가 stringify에 의해 처음 호출될 때 value에는 객체가 전달된다
  if (key === '') {
    // value를 전개하여 lastUpdated만 커스터마이즈하여 저장하자
    return {
      ...value,
      lastUpdated: value.lastUpdated.getTime()
    };
  }

  // replacer가 다시 호출되면 그 때는 key, value pair로 호출된다
  // 현재 새 변환이 필요하지 않으므로 그대로 반환하자
  return value;
}

function reviver(key, value) {
  if (key === 'lastUpdated' && value) {
    return new Date(value);
  }
}
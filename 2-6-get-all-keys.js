// 스토리지에는 모든 키를 가져오는 함수가 따로 없다
// 다만 length 프로퍼티가 있으므로 다음과 같은 조회작업이 가능하다

function getAllKeys() {
  const keys = [];
  for (let i=0; i < localStorage.length; i++) {
    keys.push(localStorage.key(i));
  }
  return keys;
}

function getAll(keys) {
  const results = {};

  for (let i=0; i<localStorage.length; i++) {
    const key = localStorage.key(i);
    if (keys.includes(key)) {
      results[key] = localStorage.getItem(key);
    }
  }

  return results;
}
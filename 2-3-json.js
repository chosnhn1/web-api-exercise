function saveProfile(userProfile) {
  localStorage.setItem('userProfile', JSON.stringify(userProfile));
}

/**
 * deserialization
 * @returns 저장된 userProfile or 빈 객체
 */
function loadProfile() {
  return JSON.parse(localStorage.getItem('userProfile')) || {};
}

// 다음과 같은 식으로는 사용할 수 없다
const userProfile1 = {
  firstname: "Ave",
  lastname: "David"
};
// 즉 다음과 같이 하면 "[object Object]"가 출력된다
localStorage.setItem('userProfile', userProfile1);
console.log(localStorage.getItem('userProfile'));


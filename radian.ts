// 각도를 라디안으로 변환
function toRadians(degrees: number) {
  return degrees * (Math.PI / 180);
}

// 삼각함수 계산
function calculateTrigonometry(angleDegrees: number) {
  const angleRadians: number = toRadians(angleDegrees);
  const sineValue: number = Math.sin(angleRadians);
  const cosineValue: number = Math.cos(angleRadians);
  const tangentValue: number = Math.tan(angleRadians);
  console.log(`sin(${angleDegrees}°) = ${sineValue}`);
  console.log(`cos(${angleDegrees}°) = ${cosineValue}`);
  console.log(`tan(${angleDegrees}°) = ${tangentValue}`);
}

// 예시 각도로 호출
const exampleAngle: number = 45;
calculateTrigonometry(exampleAngle);

// 사인 합성 공식 계산
function calculateCompositeSine(angle1: number, angle2: number) {
  const angle1Radians: number = toRadians(angle1);
  const angle2Radians: number = toRadians(angle2);
  const compositeSineValue: number =
    Math.sin(angle1Radians) * Math.cos(angle2Radians) +
    Math.cos(angle1Radians) * Math.sin(angle2Radians);
  console.log(`sin(${angle1}° + ${angle2}°) = ${compositeSineValue}`);
}

// 예시 각도로 호출
calculateCompositeSine(30, 60);

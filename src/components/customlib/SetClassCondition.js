export default function SetClassCondition(
  className,
  stateValue,
  addedClassName,
  addedClassPos
) {
  return `${className} ${cond(stateValue, addedClassName, addedClassPos)}`;
}

function cond(stateValue, addedClassName, addedClassPos = 1) {
  return addedClassPos
    ? stateValue
      ? addedClassName
      : ''
    : stateValue
    ? ''
    : addedClassName;
}

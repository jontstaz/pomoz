export default ({ strokeWidth, percentage, mainClass, innerText }) => {
  const radius = (50 - strokeWidth / 2);

  const pathDescription = `
      M 50,50 m 0,-${radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
      a ${radius},${radius} 0 1 1 0,-${2 * radius}
    `;

  const diameter = Math.PI * 2 * radius;

  return (
    <svg
      class={mainClass}
      viewBox="0 0 100 100"
    >
      <path
        d={pathDescription}
        stroke-width={strokeWidth}
        fillOpacity={0}
      />

      <path
        d={pathDescription}
        stroke-width={strokeWidth}
        fill-opacity={0}
        style={{
          "stroke-dasharray": `${diameter}px ${diameter}px`,
          "stroke-dashoffset": `${((100 - percentage) / 100 * diameter)}px`,
        }}
      />

      <text
        x={50}
        y={50}
      >
        {innerText}
      </text>
    </svg>
  );
};

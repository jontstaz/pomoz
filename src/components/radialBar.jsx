function RadialBar({ strokeWidth, percentage, mainClass, innerText }) {
  const radius = (50 - strokeWidth / 2);

  const pathDescription = `
      M 50,50 m 0,-${radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
      a ${radius},${radius} 0 1 1 0,-${2 * radius}
    `;

  const diameter = Math.PI * 2 * radius;
  const progressStyle = {
    strokeDasharray: `${diameter}px ${diameter}px`,
    strokeDashoffset: `${((100 - percentage) / 100 * diameter)}px`,
  };

  return (
    <svg
      className={mainClass}
      viewBox="0 0 100 100"
    >
      <path
        d={pathDescription}
        strokeWidth={strokeWidth}
        fillOpacity={0}
      />

      <path
        d={pathDescription}
        strokeWidth={strokeWidth}
        fillOpacity={0}
        style={progressStyle}
      />

      <text
        x={50}
        y={50}
        style={{
          dominantBaseline: "central",
          textAnchor: "middle",
        }}
      >
        {innerText}
      </text>
    </svg>
  );
}

export default RadialBar;

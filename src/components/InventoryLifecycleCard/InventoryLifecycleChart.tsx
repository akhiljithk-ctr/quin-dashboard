const PAST_MONTHS = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
const FORECAST_MONTHS = ['Sep', 'Oct', 'Nov', 'Dec']
const MONTHS = [...PAST_MONTHS, ...FORECAST_MONTHS]

const PAST_VALUES = [520, 400, 210, 380, 500, 554]
const FORECAST_VALUES = [554, 480, 510, 570]

const WIDTH = 460
const HEIGHT = 150
const MAX_VALUE = 1000
const GRID_VALUES = [0, 500, 1000]

function xAt(index: number) {
  return (index / (MONTHS.length - 1)) * WIDTH
}

function yAt(value: number) {
  return HEIGHT - (value / MAX_VALUE) * HEIGHT
}

/** Monotone cubic interpolation (matches Recharts' "monotone" curve type) — smooth without overshoot. */
function monotonePath(points: { x: number; y: number }[]): string {
  const n = points.length
  if (n === 0) return ''
  if (n === 1) return `M ${points[0].x},${points[0].y}`

  const dx: number[] = []
  const slope: number[] = []
  for (let i = 0; i < n - 1; i++) {
    dx[i] = points[i + 1].x - points[i].x
    slope[i] = (points[i + 1].y - points[i].y) / dx[i]
  }

  const tangent: number[] = new Array(n).fill(0)
  tangent[0] = slope[0]
  tangent[n - 1] = slope[n - 2]
  for (let i = 1; i < n - 1; i++) {
    if (slope[i - 1] * slope[i] <= 0) {
      tangent[i] = 0
    } else {
      tangent[i] = (slope[i - 1] + slope[i]) / 2
    }
  }

  let d = `M ${points[0].x},${points[0].y}`
  for (let i = 0; i < n - 1; i++) {
    const p0 = points[i]
    const p1 = points[i + 1]
    const cp1x = p0.x + dx[i] / 3
    const cp1y = p0.y + (tangent[i] * dx[i]) / 3
    const cp2x = p1.x - dx[i] / 3
    const cp2y = p1.y - (tangent[i + 1] * dx[i]) / 3
    d += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p1.x},${p1.y}`
  }
  return d
}

function InventoryLifecycleChart() {
  const peakIndex = PAST_VALUES.length - 1

  const pastPoints = PAST_VALUES.map((v, i) => ({ x: xAt(i), y: yAt(v) }))
  const forecastPoints = FORECAST_VALUES.map((v, i) => ({ x: xAt(peakIndex + i), y: yAt(v) }))

  const linePathPast = monotonePath(pastPoints)
  const linePathForecast = monotonePath(forecastPoints)
  const areaPath = `${linePathPast} L ${pastPoints[pastPoints.length - 1].x},${HEIGHT} L ${pastPoints[0].x},${HEIGHT} Z`

  const peakX = xAt(peakIndex)
  const peakY = yAt(PAST_VALUES[peakIndex])
  const calloutLabel = String(PAST_VALUES[peakIndex])
  const calloutWidth = Math.max(36, calloutLabel.length * 9 + 16)

  return (
    <div className="inventory-lifecycle-chart">
      <div className="inventory-lifecycle-chart__y-axis">
        {GRID_VALUES.slice()
          .reverse()
          .map((v) => (
            <span key={v} className="inventory-lifecycle-chart__axis-label">
              {v === 0 ? '00' : v}
            </span>
          ))}
      </div>

      <div className="inventory-lifecycle-chart__plot">
        <svg
          className="inventory-lifecycle-chart__svg"
          viewBox={`0 0 ${WIDTH} ${HEIGHT + 24}`}
          preserveAspectRatio="none"
          role="img"
          aria-label="Decommissioned inventory trend with forecast"
        >
          <path className="inventory-lifecycle-chart__area" d={areaPath} />
          <path className="inventory-lifecycle-chart__line inventory-lifecycle-chart__line--past" d={linePathPast} />
          <path className="inventory-lifecycle-chart__line inventory-lifecycle-chart__line--forecast" d={linePathForecast} />

          {pastPoints.slice(0, -1).map((p, i) => (
            <circle key={`past-${i}`} className="inventory-lifecycle-chart__dot inventory-lifecycle-chart__dot--past" cx={p.x} cy={p.y} r={5} />
          ))}
          {forecastPoints.slice(1).map((p, i) => (
            <circle key={`forecast-${i}`} className="inventory-lifecycle-chart__dot inventory-lifecycle-chart__dot--forecast" cx={p.x} cy={p.y} r={5} />
          ))}
          <circle className="inventory-lifecycle-chart__dot inventory-lifecycle-chart__dot--past" cx={peakX} cy={peakY} r={5} />

          <g className="inventory-lifecycle-chart__callout" transform={`translate(${peakX}, ${peakY - 15})`}>
            <rect x={-calloutWidth / 2} y={-10} width={calloutWidth} height={20} rx={5} />
            <text x={0} y={1} textAnchor="middle" dominantBaseline="middle">
              {calloutLabel}
            </text>
          </g>
        </svg>

        <div className="inventory-lifecycle-chart__x-axis">
          {MONTHS.map((m) => (
            <span key={m} className="inventory-lifecycle-chart__month-label">
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InventoryLifecycleChart

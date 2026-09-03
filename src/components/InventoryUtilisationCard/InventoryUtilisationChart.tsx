const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']

interface DataPoint {
  quinTag: number
  quinTagPod: number
  unassigned: number
}

const DATA: DataPoint[] = [
  { quinTag: 4100, quinTagPod: 3200, unassigned: 1700 },
  { quinTag: 3900, quinTagPod: 3800, unassigned: 1300 },
  { quinTag: 4500, quinTagPod: 4100, unassigned: 3100 },
  { quinTag: 2400, quinTagPod: 3700, unassigned: 4500 },
  { quinTag: 3800, quinTagPod: 3700, unassigned: 1100 },
  { quinTag: 4800, quinTagPod: 3700, unassigned: 2000 },
  { quinTag: 4800, quinTagPod: 3700, unassigned: 2000 },
  { quinTag: 3100, quinTagPod: 2200, unassigned: 1100 },
  { quinTag: 4800, quinTagPod: 4600, unassigned: 3600 },
  { quinTag: 4000, quinTagPod: 0, unassigned: 0 },
]

const WIDTH = 460
const HEIGHT = 170
const MAX_VALUE = 5000
const GRID_VALUES = [0, 2500, 5000]

function yAt(value: number) {
  return HEIGHT - (value / MAX_VALUE) * HEIGHT
}

function InventoryUtilisationChart() {
  const numGroups = MONTHS.length
  const groupWidth = WIDTH / numGroups

  const barWidth = 7.5
  const barGap = 2
  const totalGroupBarsWidth = 3 * barWidth + 2 * barGap

  return (
    <div className="inventory-utilisation-chart">
      <div className="inventory-utilisation-chart__y-axis">
        {GRID_VALUES.slice()
          .reverse()
          .map((v) => (
            <span key={v} className="inventory-utilisation-chart__axis-label">
              {v === 0 ? '00' : v}
            </span>
          ))}
      </div>

      <div className="inventory-utilisation-chart__plot">
        <svg
          className="inventory-utilisation-chart__svg"
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          preserveAspectRatio="none"
          role="img"
          aria-label="Inventory utilisation by month"
        >
          {DATA.map((d, i) => {
            const centerX = (i + 0.5) * groupWidth
            const startX = centerX - totalGroupBarsWidth / 2
            const bars: [number, string][] = [
              [d.quinTag, 'inventory-utilisation-chart__bar--tag'],
              [d.quinTagPod, 'inventory-utilisation-chart__bar--pod'],
              [d.unassigned, 'inventory-utilisation-chart__bar--unassigned'],
            ]
            return (
              <g key={MONTHS[i]}>
                {bars.map(([value, className], j) => {
                  if (value <= 0) return null
                  const x = startX + j * barWidth
                  const y = yAt(value)
                  const height = HEIGHT - y
                  return (
                    <rect
                      key={className}
                      className={`inventory-utilisation-chart__bar ${className}`}
                      x={x}
                      y={y}
                      width={barWidth}
                      height={height}
                      rx={barWidth / 2}
                    />
                  )
                })}
              </g>
            )
          })}
        </svg>

        <div className="inventory-utilisation-chart__x-axis">
          {MONTHS.map((m) => (
            <span key={m} className="inventory-utilisation-chart__month-label">
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InventoryUtilisationChart


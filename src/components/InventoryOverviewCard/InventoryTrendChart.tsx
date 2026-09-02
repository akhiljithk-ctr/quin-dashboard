const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

interface DataPoint {
  decommissioned: number
  outOfService: number
  inService: number
}

const DATA: DataPoint[] = [
  { decommissioned: 1300, outOfService: 300, inService: 1600 },
  { decommissioned: 4300, outOfService: 500, inService: 1900 },
  { decommissioned: 4300, outOfService: 500, inService: 1900 },
  { decommissioned: 100, outOfService: 50, inService: 50 },
  { decommissioned: 1500, outOfService: 300, inService: 200 },
  { decommissioned: 5500, outOfService: 700, inService: 1800 },
  { decommissioned: 0, outOfService: 0, inService: 0 },
  { decommissioned: 900, outOfService: 100, inService: 3000 },
  { decommissioned: 100, outOfService: 50, inService: 50 },
  { decommissioned: 4600, outOfService: 800, inService: 2300 },
  { decommissioned: 100, outOfService: 50, inService: 1450 },
  { decommissioned: 500, outOfService: 300, inService: 1600 },
]

const WIDTH = 620
const HEIGHT = 180
const MAX_VALUE = 8000
const GRID_VALUES = [0, 4000, 8000]

function xAt(index: number) {
  return (index / (MONTHS.length - 1)) * WIDTH
}

function yAt(value: number) {
  return HEIGHT - (value / MAX_VALUE) * HEIGHT
}

function buildAreaPath(topValues: number[], bottomValues: number[]) {
  const topPoints = topValues.map((v, i) => `${xAt(i)},${yAt(v)}`)
  const bottomPoints = bottomValues.map((v, i) => `${xAt(i)},${yAt(v)}`).reverse()
  return `M ${topPoints.join(' L ')} L ${bottomPoints.join(' L ')} Z`
}

function buildLinePath(values: number[]) {
  return values.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xAt(i)},${yAt(v)}`).join(' ')
}

function InventoryTrendChart() {
  const zero = DATA.map(() => 0)
  const decommissionedTop = DATA.map((d) => d.decommissioned)
  const outOfServiceTop = DATA.map((d) => d.decommissioned + d.outOfService)
  const inServiceTop = DATA.map((d) => d.decommissioned + d.outOfService + d.inService)

  return (
    <div className="inventory-trend-chart">
      <div className="inventory-trend-chart__y-axis">
        {GRID_VALUES.slice()
          .reverse()
          .map((v) => (
            <span key={v} className="inventory-trend-chart__axis-label">
              {v === 0 ? '00' : v}
            </span>
          ))}
      </div>

      <div className="inventory-trend-chart__plot">
        <svg
          className="inventory-trend-chart__svg"
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          preserveAspectRatio="none"
          role="img"
          aria-label="Inventory status trend by month"
        >
          {GRID_VALUES.map((v) => (
            <line key={v} className="inventory-trend-chart__gridline" x1={0} x2={WIDTH} y1={yAt(v)} y2={yAt(v)} />
          ))}

          {MONTHS.map((m, i) => (
            <line key={m} className="inventory-trend-chart__month-tick" x1={xAt(i)} x2={xAt(i)} y1={0} y2={HEIGHT} />
          ))}

          <path className="inventory-trend-chart__area inventory-trend-chart__area--service" d={buildAreaPath(inServiceTop, outOfServiceTop)} />
          <path className="inventory-trend-chart__area inventory-trend-chart__area--out" d={buildAreaPath(outOfServiceTop, decommissionedTop)} />
          <path className="inventory-trend-chart__area inventory-trend-chart__area--decommissioned" d={buildAreaPath(decommissionedTop, zero)} />

          <path className="inventory-trend-chart__line inventory-trend-chart__line--service" d={buildLinePath(inServiceTop)} />
          <path className="inventory-trend-chart__line inventory-trend-chart__line--out" d={buildLinePath(outOfServiceTop)} />
          <path className="inventory-trend-chart__line inventory-trend-chart__line--decommissioned" d={buildLinePath(decommissionedTop)} />
        </svg>

        <div className="inventory-trend-chart__x-axis">
          {MONTHS.map((m) => (
            <span key={m} className="inventory-trend-chart__month-label">
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InventoryTrendChart

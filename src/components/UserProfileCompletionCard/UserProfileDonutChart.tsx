interface Segment {
  key: string
  percent: number
  color: string
  labelColor: string
  innerRadius?: number
}

const SEGMENTS: Segment[] = [
  { key: 'responder', percent: 9, color: '#ff2a8d', labelColor: '#ffffff', innerRadius: 20 },
  { key: 'not-added', percent: 10, color: '#00bcd4', labelColor: '#ffffff' },
  { key: 'only', percent: 81, color: '#8fe5f5', labelColor: '#14202b' },
]

const SIZE = 200
const CENTER = SIZE / 2
const OUTER_RADIUS = 70
const INNER_RADIUS = 44
const PAD_DEG = 1.5
const CORNER_RADIUS = 4

function toRad(deg: number) {
  return (deg * Math.PI) / 180
}

function pointOnCircle(radius: number, angleDeg: number) {
  const rad = toRad(angleDeg)
  return {
    x: CENTER + radius * Math.sin(rad),
    y: CENTER - radius * Math.cos(rad),
  }
}

/** Angle (deg) subtended at `radius` by an arc-length equal to the corner radius. */
function insetDeg(radius: number) {
  return (CORNER_RADIUS / radius) * (180 / Math.PI)
}

/**
 * Annular wedge with all four corners rounded by CORNER_RADIUS.
 * Supports custom outerRadius and innerRadius per slice.
 */
function buildRoundedDonutSlice(
  startDeg: number,
  endDeg: number,
  outerRadius: number = OUTER_RADIUS,
  innerRadius: number = INNER_RADIUS
) {
  const span = endDeg - startDeg
  const oInset = Math.min(insetDeg(outerRadius), span / 2.2)
  const iInset = Math.min(insetDeg(innerRadius), span / 2.2)

  const oStart = pointOnCircle(outerRadius, startDeg + oInset)
  const oEnd = pointOnCircle(outerRadius, endDeg - oInset)
  const iEnd = pointOnCircle(innerRadius, endDeg - iInset)
  const iStart = pointOnCircle(innerRadius, startDeg + iInset)

  const endOuterStub = pointOnCircle(outerRadius - CORNER_RADIUS, endDeg)
  const endInnerStub = pointOnCircle(innerRadius + CORNER_RADIUS, endDeg)
  const startInnerStub = pointOnCircle(innerRadius + CORNER_RADIUS, startDeg)
  const startOuterStub = pointOnCircle(outerRadius - CORNER_RADIUS, startDeg)

  const largeArcOuter = endDeg - oInset - (startDeg + oInset) > 180 ? 1 : 0
  const largeArcInner = endDeg - iInset - (startDeg + iInset) > 180 ? 1 : 0

  return [
    `M ${oStart.x},${oStart.y}`,
    `A ${outerRadius},${outerRadius} 0 ${largeArcOuter} 1 ${oEnd.x},${oEnd.y}`,
    `A ${CORNER_RADIUS},${CORNER_RADIUS} 0 0 1 ${endOuterStub.x},${endOuterStub.y}`,
    `L ${endInnerStub.x},${endInnerStub.y}`,
    `A ${CORNER_RADIUS},${CORNER_RADIUS} 0 0 1 ${iEnd.x},${iEnd.y}`,
    `A ${innerRadius},${innerRadius} 0 ${largeArcInner} 0 ${iStart.x},${iStart.y}`,
    `A ${CORNER_RADIUS},${CORNER_RADIUS} 0 0 1 ${startInnerStub.x},${startInnerStub.y}`,
    `L ${startOuterStub.x},${startOuterStub.y}`,
    `A ${CORNER_RADIUS},${CORNER_RADIUS} 0 0 1 ${oStart.x},${oStart.y}`,
    'Z',
  ].join(' ')
}

function UserProfileDonutChart() {
  const segmentStarts = SEGMENTS.reduce<number[]>((starts, _seg, i) => {
    const prevStart = i === 0 ? 0 : starts[i - 1]
    const prevSpan = i === 0 ? 0 : (SEGMENTS[i - 1].percent / 100) * 360
    starts.push(prevStart + prevSpan)
    return starts
  }, [])

  const slices = SEGMENTS.map((seg, i) => {
    const spanDeg = (seg.percent / 100) * 360
    const cumulativeDeg = segmentStarts[i]
    const startDeg = cumulativeDeg + PAD_DEG / 2
    const endDeg = cumulativeDeg + spanDeg - PAD_DEG / 2

    const innerRadius = seg.innerRadius ?? INNER_RADIUS
    const outerRadius = OUTER_RADIUS
    const midRadius = (outerRadius + innerRadius) / 2

    const midDeg = (startDeg + endDeg) / 2
    const labelPoint = pointOnCircle(midRadius, midDeg)

    return {
      ...seg,
      path: buildRoundedDonutSlice(startDeg, endDeg, outerRadius, innerRadius),
      labelPoint,
    }
  })

  return (
    <svg className="user-profile-donut" viewBox={`0 0 ${SIZE} ${SIZE}`} role="img" aria-label="User profile completion breakdown">
      {slices.map((slice) => (
        <path key={slice.key} className="user-profile-donut__slice" d={slice.path} fill={slice.color} />
      ))}
      {slices.map((slice) => (
        <text
          key={`${slice.key}-label`}
          className="user-profile-donut__label"
          x={slice.labelPoint.x}
          y={slice.labelPoint.y}
          fill={slice.labelColor}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {slice.percent}%
        </text>
      ))}
    </svg>
  )
}

export default UserProfileDonutChart


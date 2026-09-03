interface Segment {
  key: string
  percent: number
  color: string
  labelColor: string
}

const SEGMENTS: Segment[] = [
  { key: 'responder', percent: 9, color: '#ec4899', labelColor: '#ffffff' },
  { key: 'not-added', percent: 10, color: '#00c8dc', labelColor: '#ffffff' },
  { key: 'only', percent: 81, color: '#8fdfe0', labelColor: '#14202b' },
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
 * Each corner is a 90° fillet (tangent-to-arc meets radial line at a right angle),
 * connected to its neighbouring arc/fillet by a short radial stub.
 */
function buildRoundedDonutSlice(startDeg: number, endDeg: number) {
  const span = endDeg - startDeg
  const oInset = Math.min(insetDeg(OUTER_RADIUS), span / 2.2)
  const iInset = Math.min(insetDeg(INNER_RADIUS), span / 2.2)

  const oStart = pointOnCircle(OUTER_RADIUS, startDeg + oInset)
  const oEnd = pointOnCircle(OUTER_RADIUS, endDeg - oInset)
  const iEnd = pointOnCircle(INNER_RADIUS, endDeg - iInset)
  const iStart = pointOnCircle(INNER_RADIUS, startDeg + iInset)

  const endOuterStub = pointOnCircle(OUTER_RADIUS - CORNER_RADIUS, endDeg)
  const endInnerStub = pointOnCircle(INNER_RADIUS + CORNER_RADIUS, endDeg)
  const startInnerStub = pointOnCircle(INNER_RADIUS + CORNER_RADIUS, startDeg)
  const startOuterStub = pointOnCircle(OUTER_RADIUS - CORNER_RADIUS, startDeg)

  const largeArcOuter = endDeg - oInset - (startDeg + oInset) > 180 ? 1 : 0
  const largeArcInner = endDeg - iInset - (startDeg + iInset) > 180 ? 1 : 0

  return [
    `M ${oStart.x},${oStart.y}`,
    `A ${OUTER_RADIUS},${OUTER_RADIUS} 0 ${largeArcOuter} 1 ${oEnd.x},${oEnd.y}`,
    `A ${CORNER_RADIUS},${CORNER_RADIUS} 0 0 1 ${endOuterStub.x},${endOuterStub.y}`,
    `L ${endInnerStub.x},${endInnerStub.y}`,
    `A ${CORNER_RADIUS},${CORNER_RADIUS} 0 0 1 ${iEnd.x},${iEnd.y}`,
    `A ${INNER_RADIUS},${INNER_RADIUS} 0 ${largeArcInner} 0 ${iStart.x},${iStart.y}`,
    `A ${CORNER_RADIUS},${CORNER_RADIUS} 0 0 1 ${startInnerStub.x},${startInnerStub.y}`,
    `L ${startOuterStub.x},${startOuterStub.y}`,
    `A ${CORNER_RADIUS},${CORNER_RADIUS} 0 0 1 ${oStart.x},${oStart.y}`,
    'Z',
  ].join(' ')
}

function UserProfileDonutChart() {
  let cumulativeDeg = 0
  const midRadius = (OUTER_RADIUS + INNER_RADIUS) / 2

  const slices = SEGMENTS.map((seg) => {
    const spanDeg = (seg.percent / 100) * 360
    const startDeg = cumulativeDeg + PAD_DEG / 2
    const endDeg = cumulativeDeg + spanDeg - PAD_DEG / 2
    cumulativeDeg += spanDeg

    const midDeg = (startDeg + endDeg) / 2
    const labelPoint = pointOnCircle(midRadius, midDeg)

    return {
      ...seg,
      path: buildRoundedDonutSlice(startDeg, endDeg),
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

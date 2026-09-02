const INFO_PATH =
  'M7.33317 9.99999V7.33332M7.33317 4.66666H7.33984M13.9998 7.33332C13.9998 11.0152 11.0151 14 7.33317 14C3.65127 14 0.666504 11.0152 0.666504 7.33332C0.666504 3.65142 3.65127 0.666656 7.33317 0.666656C11.0151 0.666656 13.9998 3.65142 13.9998 7.33332Z'

function InfoIcon() {
  return (
    <svg className="info-icon" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round">
      <path d={INFO_PATH} />
    </svg>
  )
}

export default InfoIcon

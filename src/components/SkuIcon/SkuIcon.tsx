import './SkuIcon.scss'

interface SkuIconProps {
  size?: number
}

function SkuIcon({ size = 22 }: SkuIconProps) {
  return (
    <span className="sku-icon" style={{ width: size, height: size }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15.5c0-4.7 3.6-8.5 8-8.5s8 3.8 8 8.5" />
        <path d="M3 15.5h18" />
        <path d="M9.5 7.3V5.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1.8" />
        <path d="M4 15.5v1.8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.8" />
      </svg>
    </span>
  )
}

export default SkuIcon

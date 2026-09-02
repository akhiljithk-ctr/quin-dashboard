import './TopBar.scss'

const HOME_PATH =
  'M10.625 16.4579V9.79123C10.625 9.57022 10.5372 9.35826 10.3809 9.20198C10.2246 9.0457 10.0127 8.9579 9.79167 8.9579H6.45833C6.23732 8.9579 6.02536 9.0457 5.86908 9.20198C5.7128 9.35826 5.625 9.57022 5.625 9.79123V16.4579M0.625 7.29123C0.624942 7.04879 0.677778 6.80925 0.779823 6.58933C0.881868 6.36941 1.03066 6.1744 1.21583 6.0179L7.04917 1.01873C7.34999 0.76449 7.73113 0.625 8.125 0.625C8.51887 0.625 8.90001 0.76449 9.20083 1.01873L15.0342 6.0179C15.2193 6.1744 15.3681 6.36941 15.4702 6.58933C15.5722 6.80925 15.6251 7.04879 15.625 7.29123V14.7912C15.625 15.2333 15.4494 15.6572 15.1368 15.9697C14.8243 16.2823 14.4004 16.4579 13.9583 16.4579H2.29167C1.84964 16.4579 1.42572 16.2823 1.11316 15.9697C0.800595 15.6572 0.625 15.2333 0.625 14.7912V7.29123Z'

const BELL_PATH =
  'M14.0832 11.1667C14.7498 12.4167 15.4165 12.9167 15.4165 12.9167H0.416504C0.416504 12.9167 2.9165 11.25 2.9165 5.41666C2.9165 2.66666 5.1665 0.416664 7.9165 0.416664C8.49984 0.416664 8.99984 0.499997 9.49984 0.666664M6.49984 16.25C6.63932 16.5037 6.84438 16.7153 7.09358 16.8627C7.34278 17.01 7.62699 17.0878 7.9165 17.0878C8.20602 17.0878 8.49023 17.01 8.73943 16.8627C8.98863 16.7153 9.19368 16.5037 9.33317 16.25M15.4165 5.41666C15.4165 6.79738 14.2972 7.91666 12.9165 7.91666C11.5358 7.91666 10.4165 6.79738 10.4165 5.41666C10.4165 4.03595 11.5358 2.91666 12.9165 2.91666C14.2972 2.91666 15.4165 4.03595 15.4165 5.41666Z'

const CHEVRON_PATH = 'M0.375 0.375L4.875 4.875L9.375 0.375'

function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar__workspace-pill">
        <svg className="topbar__workspace-icon" viewBox="0 0 17 18" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
          <path d={HOME_PATH} />
        </svg>
        <span>APEX</span>
      </div>

      <div className="topbar__right">
        <button className="icon-btn topbar__notification" aria-label="Notifications">
          <svg viewBox="0 0 16 18" fill="none" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round">
            <path d={BELL_PATH} />
          </svg>
          <span className="topbar__notification-dot" />
        </button>
        <button className="topbar__date-range">
          <span>30 Days</span>
          <svg className="topbar__chevron" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round">
            <path d={CHEVRON_PATH} />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default TopBar

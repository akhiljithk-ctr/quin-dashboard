import InfoIcon from '../InfoIcon/InfoIcon'
import './UserProfileCompletionCard.scss'

const LEGEND = [
  { label: 'Med ID+ Responder', value: '9%', variant: 'pink' },
  { label: 'Med ID Only', value: '81%', variant: 'teal' },
  { label: 'Med ID Not Added', value: '10%', variant: 'navy' },
]

function UserProfileCompletionCard() {
  return (
    <section className="user-profile-card">
      <div className="user-profile-card__header">
        <h2 className="user-profile-card__title">
          User Profile Completion
          <InfoIcon />
        </h2>
      </div>

      <div className="user-profile-card__body">
        <div className="user-profile-card__chart-placeholder">
          <span className="user-profile-card__chart-value">81%</span>
        </div>

        <div className="user-profile-card__legend">
          {LEGEND.map((item) => (
            <div className="user-profile-card__legend-item" key={item.label}>
              <span className={`user-profile-card__dot user-profile-card__dot--${item.variant}`} />
              <span className="user-profile-card__legend-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UserProfileCompletionCard

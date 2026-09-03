import InfoIcon from '../InfoIcon/InfoIcon'
import UserProfileDonutChart from './UserProfileDonutChart'
import './UserProfileDonutChart.scss'
import './UserProfileCompletionCard.scss'

const LEGEND = [
  { label: 'Med ID+ Responder', variant: 'pink' },
  { label: 'Med ID Only', variant: 'teal-light' },
  { label: 'Med ID Not Added', variant: 'teal' },
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
        <div className="user-profile-card__chart">
          <UserProfileDonutChart />
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

import logo from '../../assets/logo.png'
import './WorkspaceCard.scss'

function WorkspaceCard() {
  return (
    <section className="workspace-card">
      <div className="workspace-card__label">Workspace</div>

      <div className="workspace-card__heading">
        <span className="workspace-card__name">APEX</span>
        <span className="workspace-card__sub">
          APEX CONSTRUCTIONS
          <br />
          PVT LTD
        </span>
      </div>

      <img className="workspace-card__logo" src={logo} alt="APEX" />
    </section>
  )
}

export default WorkspaceCard

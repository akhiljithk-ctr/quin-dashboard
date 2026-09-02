import Sidebar from './components/Sidebar/Sidebar'
import TopBar from './components/TopBar/TopBar'
import WorkspaceCard from './components/WorkspaceCard/WorkspaceCard'
import WorkspaceOverviewCard from './components/WorkspaceOverviewCard/WorkspaceOverviewCard'
import InventoryOverviewCard from './components/InventoryOverviewCard/InventoryOverviewCard'
import InventoryUtilisationCard from './components/InventoryUtilisationCard/InventoryUtilisationCard'
import InventoryComplianceCard from './components/InventoryComplianceCard/InventoryComplianceCard'
import InventoryStatusCard from './components/InventoryStatusCard/InventoryStatusCard'
import UserProfileCompletionCard from './components/UserProfileCompletionCard/UserProfileCompletionCard'
import InventoryFailuresCard from './components/InventoryFailuresCard/InventoryFailuresCard'
import InventoryLifecycleCard from './components/InventoryLifecycleCard/InventoryLifecycleCard'
import LifecycleTabsCard from './components/LifecycleTabsCard/LifecycleTabsCard'
import './App.scss'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="app__main">
        <TopBar />
        <div className="app__content">
          <div className="app__row app__row--1">
            <WorkspaceCard />
            <WorkspaceOverviewCard />
            <InventoryOverviewCard />
          </div>

          <div className="app__row app__row--2">
            <InventoryUtilisationCard />
            <InventoryComplianceCard />
            <InventoryStatusCard />
            <UserProfileCompletionCard />
          </div>

          <div className="app__row app__row--3">
            <InventoryFailuresCard />
            <InventoryLifecycleCard />
            <LifecycleTabsCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

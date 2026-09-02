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

          <div className="app_section_2">
            
          <div className='app_section_2_pos_1'>
            <div className='pos_1_sec_1'>
               <InventoryUtilisationCard />
               <InventoryFailuresCard />
            </div>
            <div className='pos_1_sec_2'>
            <InventoryComplianceCard />
            </div>
          </div>

          <div className='app_section_2_pos_2'>
            <div className='pos_2_sec_1'>
              <InventoryStatusCard />
              <UserProfileCompletionCard />
            </div>
            <div className='pos_2_sec_2'>
              <InventoryLifecycleCard />
            </div>
          </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

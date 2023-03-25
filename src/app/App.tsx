import { useState } from 'react'
import { SidebarMenu } from '../features/sidebarMenu'
import { FilesContainer } from '../widget/Filescontainer'

function App() {
  const [widthSidebar, setWidthSidebar] = useState(260);

  return (
    <div className="wrapper">
      <SidebarMenu />

      <div className="sidebar2" style={{ width: widthSidebar }}>
				<FilesContainer />
			</div>

    </div>
  )
}

export default App

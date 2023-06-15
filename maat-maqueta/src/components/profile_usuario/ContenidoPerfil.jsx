import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ContenidoPerfil = () => {
  return (
    <>
    <div className="flex flex-col xl:flex-row xl:space-x-16">
        {/* Main content */}
        <Tabs>
            <TabList>
              <Tab>Publicaciones</Tab>
              <Tab>Eventos</Tab>
            </TabList>
            <TabPanel>
              <h2>Listado de Publicaciones</h2>
            </TabPanel>
            <TabPanel>
              <h2>Listado de Eventos</h2>
            </TabPanel>
          </Tabs>
      </div>
    </>
  )
}

export default ContenidoPerfil
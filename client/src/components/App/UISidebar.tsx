import * as React from 'react'
import { Sidebar } from '../Core/Layout/Sidebar/Sidebar'

interface Props {}

export class UISidebar extends React.Component<Props> {
    public render() {
        return (
            <Sidebar title={`Risk World Generator`}>
                Here should go some settings
            </Sidebar>
        )
    }
}

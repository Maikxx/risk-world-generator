import * as React from 'react'
import { Sidebar } from '../Core/Layout/Sidebar/Sidebar'

interface Props {}

export class ActionSidebar extends React.Component<Props> {
    public render() {
        return (
            <Sidebar title={`Risk World Generator`}>
                Sidebar
            </Sidebar>
        )
    }
}

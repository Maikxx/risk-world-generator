import * as React from 'react'
import { View } from '../../components/Core/Layout/View/View'
import { RouteComponentProps } from 'react-router-dom'
import { ActionSidebar } from '../../components/App/ActionSidebar'

interface Props extends RouteComponentProps {}

export class AppView extends React.Component<Props> {
    public render() {
        return (
            <View>
                <ActionSidebar />
            </View>
        )
    }
}

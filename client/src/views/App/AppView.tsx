import * as React from 'react'
import { View } from '../../components/Core/Layout/View/View'
import { RouteComponentProps } from 'react-router-dom'
import { UISidebar } from '../../components/App/UISidebar'
import { RiskBoard } from '../../components/App/RiskBoard'
import { Row } from '../../components/Core/Layout/Row/Row'

interface Props extends RouteComponentProps {}

export class AppView extends React.Component<Props> {
    public render() {
        return (
            <View>
                <Row alignDefault={true}>
                    <UISidebar />
                    <RiskBoard />
                </Row>
            </View>
        )
    }
}

import * as React from 'react'
import { routes } from '../routes'
import { View } from '../components/Core/Layout/View/View'
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom'
import { AppView } from './App/AppView'
import { BEM } from '../services/BEMService'

interface Props extends RouteComponentProps {}

export class RootView extends React.Component<Props> {
    private bem = new BEM('RootView')

    public render() {
        return (
            <View className={this.bem.getClassName()}>
                <Switch>
                    <Route
                        path={routes.app.index}
                        component={AppView}
                    />
                    <Redirect
                        from={routes.index}
                        exact={true}
                        to={routes.app.index}
                    />
                </Switch>
            </View>
        )
    }
}

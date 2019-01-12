import './View.scss'
import * as React from 'react'
import { BEM, ClassValue } from '../../../../services/BEMService'

interface Props {
    className?: ClassValue
}

export class View extends React.Component<Props> {
    private bem = new BEM('View')

    public render() {
        const { className, children } = this.props

        return (
            <div className={this.bem.getClassName(className)}>
                {children}
            </div>
        )
    }
}

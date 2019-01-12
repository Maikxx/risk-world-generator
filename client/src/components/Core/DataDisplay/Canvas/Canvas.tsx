import './Canvas.scss'
import * as React from 'react'
import { BEM } from '../../../../services/BEMService'

interface Props {
    className?: string
}

export class Canvas extends React.Component<Props> {
    private bem = new BEM('Canvas')

    public render() {
        const { className } = this.props

        return (
            <canvas className={this.bem.getClassName(className)}>
                Canvas is not supported in your current browser, please install a more up-to-date browser and come back.
            </canvas>
        )
    }
}

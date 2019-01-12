import './Sidebar.scss'
import * as React from 'react'
import { BEM } from '../../../../services/BEMService'
import { Heading } from '../../Text/Heading/Heading'

interface Props {
    className?: string
    title?: string
}

export class Sidebar extends React.Component<Props> {
    private bem = new BEM('Sidebar')

    public render() {
        const { children, className, title } = this.props

        return (
            <section className={this.bem.getClassName(className)}>
                {title && (
                    <Heading level={1} className={this.bem.getElement('title')}>
                        {title}
                    </Heading>
                )}
                <div className={this.bem.getElement('content')}>
                    {children}
                </div>
            </section>
        )
    }
}

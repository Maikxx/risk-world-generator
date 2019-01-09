interface Config {
    /**
     * The project prefix used to construct classNames in Javascript
     * Not in CSS!
     */
    projectPrefix: string
}

export const config = <Config> {
    projectPrefix: 'rwg',
}

export const prefixWithAppPrefix = (key: string) => `${config.projectPrefix}-${key}`

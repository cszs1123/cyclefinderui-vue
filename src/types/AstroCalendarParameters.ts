import { planets } from "@/constants"

export default class AstroCalendarParameters {
    readonly validYears = [2022, 2021]

    year: number
    readonly planets: [name: string, id: string, isSelected: boolean][]

    constructor() {
        this.year = this.validYears[0]
        this.planets = planets.map(p => [p[0], p[1], false])
    }

    generateUrlParams(): string {
        const planets = this.planets.filter(p => p[2]).map(p => p[1])
        return `year=${this.year}${planets.length > 0 ? '&planets=' + planets : ''}`
    }

    isValid(){
        return this.planets.some(p => p[2])
    }
}
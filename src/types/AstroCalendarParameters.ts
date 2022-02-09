import { planets } from "@/constants"

export default class AstroCalendarParameters {
    readonly validYears = [2022, 2021]

    year: number
    readonly planets: [name: string, id: string, isSelected: boolean][]
    readonly extremes: [name: string, id: string, isSelected: boolean][]
    readonly aspects: [name: string, id: string, isSelected: boolean][]

    constructor() {
        this.year = this.validYears[0]
        this.planets = planets.map(p => [p[0], p[1], false])
        this.extremes = [
            ["Declination", "dec", false],
            ["Latitude", "lat", false],
            ["Speed", "spe", false],
        ]

        this.aspects = [
            ["Conjunction", "cj", false],
            ["Trine", "tri", false],
            ["Sextile", "sex", false],
            ["Square", "sq", false],
            ["Opposition", "op", false],
        ]
    }

    generateUrlParams(): string {
        const planets = this.planets.filter(p => p[2]).map(p => p[1])
        const extremes = this.extremes.filter(e => e[2]).map(e => e[1])
        const aspects = this.aspects.filter(a => a[2]).map(a => a[1])
        return `year=${this.year}${planets.length > 0 ? '&planets=' + planets : ''}
        ${extremes.length > 0 ? '&extremes=' + extremes : ''}${aspects.length > 0 ? '&aspects=' + aspects : ''}`.replace(/\s/g,'')
    }

    isValid(){
        return this.planets.some(p => p[2]) && (this.extremes.some(e => e[2]) || this.aspects.some(a => a[2]))
    }
}
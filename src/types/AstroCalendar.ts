import AstroEvent from "./AstroEvent"

export default class AstroCalendar {
    readonly id: string
    readonly eventsByDate: Map<number, AstroEvent[]>

    constructor(id: string, astroEvents: AstroEvent[]){
        this.id = id
        this.eventsByDate = new Map<number, AstroEvent[]>()

        for (const e of astroEvents){
            if (!this.eventsByDate.has(e.time)){
              this.eventsByDate.set(e.time, [e])
            }
            else{
              this.eventsByDate.get(e.time)?.push(e)
            }
          }
    }
}
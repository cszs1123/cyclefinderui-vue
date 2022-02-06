import AstroCalendar from "@/types/AstroCalendar"
import { reactive } from "vue"

const AstroCalendarStore = {
  debug: true,

  state: reactive({
    calendars: [] as AstroCalendar[]
  }),

  addNewCalendar(cal: AstroCalendar) {
    if (!this.hasCalendar(cal.id)){
      this.state.calendars.push(cal)

      if (this.debug) {
        console.log('new astroCalendar added for year ', cal.id)
      }
    }
  },

  hasCalendar(id: string): boolean {
    return this.state.calendars.some(c => c.id == id)
  },

  getCalendar(id: string): AstroCalendar {
    console.log('retrieved calendar for ', id)
    return  (this.state.calendars.find(c => c.id == id)) as AstroCalendar
  }
}

export default AstroCalendarStore
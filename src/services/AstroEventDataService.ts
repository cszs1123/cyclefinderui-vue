import http from "@/http-common"
import AstroCalendarParameters from "@/types/AstroCalendarParameters"

class AstroEventDataService {
    getAstroEvents(params: AstroCalendarParameters): Promise<any> {
        return http.get(`/astroEvent/GetAstroEvents?${params.generateUrlParams()}`)
    }
}

export default new AstroEventDataService()
import http from "@/http-common"

class AstroEventDataService {
    getAll(): Promise<any> {
        return http.get("/astroEvent/GetAspectsForPeriod?from=1640995261&to=1643673661")
    }
}

export default new AstroEventDataService()
import { getDateFromUnixTimestamp } from "@/utils"
import ListItem from "./ListItem"

export default class AstroEvent implements ListItem {
    id: number
    time: number
    description: string

    constructor(time: number, description: string){
        this.id = time
        this.time = time
        this.description = description
    }
}


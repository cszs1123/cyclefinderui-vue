<template>
  <div>
    <h4>Astro Calendars</h4>
    <div class="leftAligned">
      <astro-calendar-selector @parameters-selected="onParametersSelected" />
      <astro-calendar-view class="centered" :id="selectedId" />
    </div>
  </div>
</template>

<script lang="ts">
import AstroEvent from "@/types/AstroEvent"
import { defineComponent } from "vue"
import AstroCalendarSelector from "./AstroCalendarSelector.vue"
import AstroCalendarView from "./AstroCalendarView.vue"
import AstroEventDataService from "@/services/AstroEventDataService"
import ResponseData from "@/types/ResponseData"
import AstroCalendarStore from "@/stores/AstroCalendarStore"
import AstroCalendar from "@/types/AstroCalendar"
import AstroCalendarParameters from "@/types/AstroCalendarParameters"

export default defineComponent({
  name: "astro-calendar-list",
  components: { AstroCalendarSelector, AstroCalendarView },
  data() {
    return {
      selectedId: "",
    }
  },
  methods: {
    onParametersSelected(params: AstroCalendarParameters) {
      console.log(params.generateUrlParams())
      if (!AstroCalendarStore.hasCalendar(params.generateUrlParams())) {
        this.retrieveAstroEvents(params)
      }
      this.selectedId = params.generateUrlParams()
    },
    retrieveAstroEvents(params: AstroCalendarParameters) {
      AstroEventDataService.getAstroEvents(params)
        .then((response: ResponseData) => {
          var data = response.data.map(
            (d: { time: number; description: any }) => {
              return new AstroEvent(d.time, d.description)
            }
          )
          AstroCalendarStore.addNewCalendar(new AstroCalendar(params.generateUrlParams(), data))
          console.log(response.data)
        })
        .catch((e: Error) => {
          console.log(e)
        })
    },
  }
})

</script>

<style>
.leftAligned {
    display: flex;
    align-items: left;
    justify-content: left;
}
.centered {
    margin-left: 100px;
}
</style>
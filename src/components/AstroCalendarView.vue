<template>
  <div>
    <h4>Astro Events {{ id }}</h4>
    <ul class="list-group">
      <li
        class="list-group-item"
        :class="{ active: index == currentIndex }"
        v-for="(entry, index) in eventsBydate.entries()"
        :key="index"
        @click="setActiveDate(entry, index)"
      >{{ entry[0] }} - {{ entry[1]}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import AstroCalendarStore from "@/stores/AstroCalendarStore"
import { getDateFromUnixTimestamp } from "@/utils"

export default defineComponent({
  name: 'astro-calendar-view',
  props: ['id'],
  computed: {
    eventsBydate(): Map<string, string> {
      var map = new Map<string, string>()

      if (AstroCalendarStore.hasCalendar(this.id)) {
        AstroCalendarStore.getCalendar(this.id).eventsByDate.forEach((val, key) => {
          var aspects = ""
          val.forEach(v => aspects += v.description + " | ")
          map.set(getDateFromUnixTimestamp(key).toDateString(), aspects)
        })
      }
      return map
    }
  },
  data() {
    return {
      currentAstroEvent: {} as [string, string],
      currentIndex: -1,
    }
  },
  methods: {
    setActiveDate(date: [string, string], index = -1) {
      this.currentAstroEvent = date
      this.currentIndex = index
    },
  }
})
</script>
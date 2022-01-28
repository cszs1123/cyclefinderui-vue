<template>
    <div class="col-md-6">
      <h4>Tutorials List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(astroEvent, index) in astroEvents"
          :key="index"
          @click="setActiveTutorial(astroEvent, index)"
        >
          {{ astroEvent.time }} - {{ astroEvent.description }}
        </li>
      </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import AstroEventDataService from "@/services/AstroEventDataService" 
import ResponseData from "@/types/ResponseData"
import AstroEvent from "@/types/AstroEvent"

export default defineComponent({
    name: "astroEvent-list",
    data() {
        return {
            astroEvents: [] as AstroEvent[],
            currentAstroEvent: {} as AstroEvent,
            currentIndex: -1,
            title: ""
        }
    },
    methods: {
        retrieveAstroEvents(){
            AstroEventDataService.getAll()
                .then((response: ResponseData) => {
                    this.astroEvents = response.data
                    console.log(response.data)
                })
                .catch((e: Error) => {
                    console.log(e)
                })
        },

        refreshList() {
            this.retrieveAstroEvents();
            this.currentAstroEvent = {} as AstroEvent;
            this.currentIndex = -1;
        },

        setActiveTutorial(astroEvent: AstroEvent, index = -1) {
            this.currentAstroEvent = astroEvent;
            this.currentIndex = index;
        },
    },
    mounted() {
    this.retrieveAstroEvents();
  },
})

</script>
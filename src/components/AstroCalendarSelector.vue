<template>
  <div>
    <form v-if="show">
      <div class="mb-3">
        <label for="year" class="form-label">Select year:</label>
        <select
          v-model="parameters.year"
          class="form-select"
          aria-label="Select year"
          @change="onParametersChanged"
        >
          <option v-for="year in parameters.validYears" :key="year">{{ year }}</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="planets" class="form-label">Select planets:</label>
        <div v-for="planet in parameters.planets" :key="planet[1]">
          <input type="checkbox" :id="planet[1]" v-model="planet[2]" @change="onParametersChanged" />
          <label :for="planet[1]">{{ planet[0] }}</label>
        </div>
      </div>
      <div class="mb-3">
        <label for="extremes" class="form-label">Select extremes:</label>
        <div v-for="ext in parameters.extremes" :key="ext[1]">
          <input type="checkbox" :id="ext[1]" v-model="ext[2]" @change="onParametersChanged" />
          <label :for="ext[1]">{{ ext[0] }}</label>
        </div>
      </div>
      <div class="mb-3">
        <label for="aspects" class="form-label">Select aspects:</label>
        <div v-for="asp in parameters.aspects" :key="asp[1]">
          <input type="checkbox" :id="asp[1]" v-model="asp[2]" @change="onParametersChanged" />
          <label :for="asp[1]">{{ asp[0] }}</label>
        </div>
      </div>
    </form>
    <button
      type="button"
      class="btn btn-primary"
      :disabled="isSubmitDisabled"
      @click="onSubmit"
    >Submit</button>
  </div>
</template>

<script lang="ts">
import AstroCalendarParameters from "@/types/AstroCalendarParameters"
import { defineComponent } from "vue"

export default defineComponent({
  name: "astro-calendar-selector",
  props: ['years'],
  computed: {
    isSubmitDisabled(): boolean {
      if (this.parameters.isValid()) {
        return !this.paramsChanged
      }
      else return true
    }
  },
  data() {
    return {
      parameters: new AstroCalendarParameters(),
      show: true,
      paramsChanged: false
    }
  },
  methods: {
    onParametersChanged() {
      this.paramsChanged = true
    },
    onSubmit() {
      this.paramsChanged = false
      this.$emit('parametersSelected', this.parameters)
    }
  }
})
</script>
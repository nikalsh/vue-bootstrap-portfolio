<template>
  <div
    id="outer"
    @click="changeProgressValue"
  >

    <b-progress
      id="tooltipButton-1"
      :max="value(nextValue).max"
      animated
      :variant="value(nextValue).variant"
    >
        <b-progress-bar
          :value="value(nextValue).current"
          :label="value(nextValue).remaining.toString(10) + ' ' + value(nextValue).label + ' till praktik'"
        ></b-progress-bar>
    </b-progress>

    <!-- <b-tooltip
      :show.sync="show"
      target="tooltipButton-1"
      placement="top"
    >
      Hello <strong>World!</strong>
    </b-tooltip> -->
  </div>

</template>

<script>
export default {
  name: 'liacounter',
  data () {
    return {
      counter: 50,
      start: new Date('08/27/2018'),
      end: new Date('09/09/2019'),
      now: new Date(),
      interval: '',
      nextValue: 0,
      show: true

    }
  },
  mounted () {
    window.setInterval(() => {
      this.now = new Date()
    }, 1000)
  },
  created () {

  },

  methods: {

    value: function (val) {
      let startDiff = this.now - this.start
      startDiff = startDiff - (this.now.getTimezoneOffset() - this.start.getTimezoneOffset())

      let totalDiff = this.end - this.start
      totalDiff = totalDiff - (this.end.getTimezoneOffset() - this.start.getTimezoneOffset())

      let currentDays = Math.floor((startDiff) / 1000 / 60 / 60 / 24)
      let currentHours = Math.floor((startDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      let currentMinutes = Math.floor((startDiff % (1000 * 60 * 60)) / (1000 * 60))
      let currentSeconds = Math.floor((startDiff % (1000 * 60)) / 1000)

      // let currentDays = Math.floor((startDiff) / 1000 / 60 / 60 / 24)
      // let currentHours = Math.floor((startDiff) / 1000 / 60 / 60)
      // let currentMinutes = Math.floor((startDiff) / 1000 / 60)
      // let currentSeconds = Math.floor((startDiff) / 1000)

      let totDays = Math.ceil((totalDiff) / 1000 / 60 / 60 / 24)
      let totHours = Math.ceil((totalDiff) / 1000 / 60 / 60)
      let totMinutes = Math.ceil((totalDiff) / 1000 / 60)
      let totSeconds = Math.ceil((totalDiff) / 1000)

      switch (val) {
        case 3:
          return {
            current: currentSeconds,
            remaining: 60 - currentSeconds,
            totRemaining: totSeconds - currentSeconds,
            max: 60,
            label: 'sekunder',
            variant: 'info'
          }
        case 2:
          return {
            current: currentMinutes,
            remaining: 60 - currentMinutes,
            totRemaining: totMinutes - currentMinutes,
            max: 60,
            label: 'minuter',
            variant: 'success'
          }
        case 1:
          return {
            current: currentHours,
            remaining: 24 - currentHours,
            totRemaining: totHours - currentHours,
            max: 24,
            label: 'timmar',
            variant: 'warning'
          }
        case 0:
          return {
            current: currentDays,
            remaining: totDays - currentDays,
            totRemaining: totDays - currentDays,
            max: totDays,
            label: 'dagar',
            variant: 'danger'
          }

      }
    },

    numbers: function () {
      let now = new Date()

      let startDiff = now - this.start

      startDiff = startDiff - (now.getTimezoneOffset() - this.start.getTimezoneOffset())

      let startDays = Math.floor((startDiff) / 1000 / 60 / 60 / 24)
      let startHours = Math.floor((startDiff) / 1000 / 60 / 60)
      let startMinutes = Math.floor((startDiff) / 1000 / 60)
      let startSeconds = Math.floor((startDiff) / 1000)

      let Eend = new Date('09/09/2019')
      let diff = this.end - this.start
      diff = diff - (this.end.getTimezoneOffset() - now.getTimezoneOffset())

      let days = Math.ceil((diff) / 1000 / 60 / 60 / 24)
      let hours = Math.ceil((diff) / 1000 / 60 / 60)
      let minutes = Math.ceil((diff) / 1000 / 60)
      let seconds = Math.ceil((diff) / 1000)

      let totalDiff = this.end - this.start
      totalDiff = totalDiff - (this.end.getTimezoneOffset() - this.start.getTimezoneOffset())

      let totDays = Math.ceil((totalDiff) / 1000 / 60 / 60 / 24)
      let totHours = Math.ceil((totalDiff) / 1000 / 60 / 60)
      let totMinutes = Math.ceil((totalDiff) / 1000 / 60)
      let totSeconds = Math.ceil((totalDiff) / 1000)

      let dayMarkPercentage = 1 - (days / totDays)
      let hourMarkPercentage = 1 - (hours / totHours)
      let minuteMarkPercentage = 1 - (minutes / totMinutes)
      let secondMarkPercentage = 1 - (seconds / totSeconds)
    },
    changeProgressValue: function () {
      this.nextValue = ++this.nextValue % 4
    }
  },
  computed: {

    seconds: function () {
      // return [currentSeconds, totSeconds - currentSeconds]

      // return currentSeconds
    },
    minutes () {

    },
    hours () {

    },
    days () {

    },
    secondsRemaining: function () {

    },
    maxSeconds () {
      let totalDiff = this.end - this.start
      totalDiff = totalDiff - (this.end.getTimezoneOffset() - this.start.getTimezoneOffset())
      let totalSeconds = Math.ceil((totalDiff) / 1000)
      return totalSeconds
    }
  },
  beforeDestroy () {
    window.clearInterval()
  }
}
</script>
<style>
#outer {
  background: transparent;
  background-color: rgba(0, 0, 0, 0);
}

#inner {
  /* cursor: pointer; */
}
</style>

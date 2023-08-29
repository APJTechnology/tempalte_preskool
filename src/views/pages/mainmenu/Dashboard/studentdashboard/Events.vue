<template>
  <div class="calendar-info calendar-info1">
    <div class="up-come-header">
      <h2>Upcoming Events</h2>
      <span
        ><a href="javascript:;"><i class="feather-plus"></i></a
      ></span>
    </div>
    <div class="upcome-event-date">
      <h3>10 Jan</h3>
      <span><i class="fas fa-ellipsis-h"></i></span>
    </div>
    <div class="calendar-details" v-for="item in eventstop" :key="item.id">
      <p>{{ item.time }}</p>
      <div class="calendar-box normal-bg">
        <div class="calandar-event-name">
          <h4>{{ item.subject }}</h4>
          <h5>{{ item.content }}</h5>
        </div>
        <span>{{ item.timing }}</span>
      </div>
    </div>

    <div class="upcome-event-date">
      <h3>10 Jan</h3>
      <span><i class="fas fa-ellipsis-h"></i></span>
    </div>
    <div class="calendar-details" v-for="item in eventsbottom" :key="item.id">
      <p>{{ item.time }}</p>
      <div class="calendar-box normal-bg">
        <div class="calandar-event-name">
          <h4>{{ item.subject }}</h4>
          <h5>{{ item.content }}</h5>
        </div>
        <span>{{ item.timing }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import eventstop from '../../../../../assets/json/eventstop.json';
import eventsbottom from '../../../../../assets/json/eventsbottom.json';

export default {
  data() {
    return {
      eventstop: eventstop,
      eventsbottom: eventsbottom,
    };
  },
};
</script>

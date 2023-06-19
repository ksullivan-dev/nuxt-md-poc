<script setup>
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css';

  const props = defineProps({ modelValue: Object, isModal: Boolean });
  const emits = defineEmits(['update:modelValue']);

  const dayjs = useDayjs();
  const dateString = computed(() => {
    return dayjs(props.modelValue).format('ddd, MMM D');
  });

  const modalProps = computed(() => {
    return {
      teleport: props.isModal ? '#datepicker-container' : false,
      teleportCenter: props.isModal,
      sixWeeks: props.isModal ? 'center' : false,
    };
  });
</script>

<template>
  <VueDatePicker
    :model-value="modelValue"
    :transitions="false"
    :month-change-on-scroll="false"
    auto-apply
    :min-date="new Date()"
    prevent-min-max-navigation
    no-today
    :enable-time-picker="false"
    :teleport="modalProps.teleport"
    :teleport-center="modalProps.teleportCenter"
    :six-weeks="modalProps.sixWeeks"
    @update:model-value="emits('update:modelValue', $event)"
  >
    <template #trigger>
      <div class="start-date-container input--with-icon--both">
        {{ dateString }}
      </div>
    </template>
  </VueDatePicker>
</template>

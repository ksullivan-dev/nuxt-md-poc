<script setup>
  // TODO: use auth to handle action from View Openings button
  const auth = useAuth();
  const partySizes = getPartySizes();

  const restaurant = ref(null);
  const size = ref(4);
  const selectedDate = ref(new Date());

  watch([size, restaurant, selectedDate], (value) => {
    console.log(value);
  });
</script>

<template>
  <ModalBase>
    <div class="modal--search">
      <div class="search-container">
        <div class="card">
          <div class="search__text-container">
            <h2 class="search__title">
              <span class="primary-text">Get Alerts!</span>
            </h2>
            <p class="search__text">
              Enter your alert details and
              <strong>we'll let you know the moment a table opens up!</strong>
            </p>
          </div>
          <div class="watch-details flex-parent__wrap">
            <div
              id="searchbar-alert"
              class="searchbar watch-detail watch-detail--restaurant"
            >
              <RestaurantSearch v-model="restaurant" />
            </div>
            <div class="watch-detail watch__select input__wrapper--select">
              <i class="icon icon-group left-icon"></i>
              <select
                id="size__select"
                class="input--select input--with-icon--both"
                data-type="size"
                v-model="size"
              >
                <option
                  v-for="size in partySizes"
                  :key="size.id"
                  :value="size.value"
                >
                  {{ size.label }}
                </option>
              </select>
            </div>
            <div class="watch-detail input__wrapper--select">
              <i class="icon icon-date left-icon"></i>
              <DatePicker v-model="selectedDate" is-modal />
            </div>
          </div>
          <button class="btn btn--search setAlert">View Openings</button>
        </div>
      </div>
    </div>
  </ModalBase>
</template>

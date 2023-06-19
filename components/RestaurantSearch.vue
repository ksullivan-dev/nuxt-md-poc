<script setup>
  const props = defineProps({ modelValue: Object });
  const emits = defineEmits(['update:modelValue']);
  const { data: restaurants } = await useRestaurants();
  const searchString = ref('');
  const restaurant = ref(props.modelValue);
  const restaurantSelect = ref(null);

  const showResults = computed(() => {
    return searchString.value.length > 2 && !restaurant.value;
  });

  const results = computed(() => {
    if (!showResults.value) {
      return [];
    }

    // perform search and return max 7 restaurants
    return restaurants.value
      .filter((_restaurant) => {
        return _restaurant.name
          .toLowerCase()
          .includes(searchString.value.toLowerCase());
      })
      .slice(0, 7);
  });

  const browse = computed(() => {
    let prefix = !results.value.length
      ? 'Not sure where to dine?'
      : 'No matches.';

    return `${prefix} Browse Disney Restaurants`;
  });

  const handleRestaurant = (result) => {
    restaurant.value = result;
    searchString.value = result.name;
  };

  const clearRestaurant = () => {
    restaurant.value = null;
    searchString.value = '';
    restaurantSelect.value.focus();
  };

  watch(restaurant, (value) => emits('update:modelValue', value));
</script>

<template>
  <div class="input__wrapper--with-icon--both flex-child__fill">
    <i class="icon icon-search left-icon"></i>
    <label for="restaurantSelect" class="screenreader">
      Search a Restaurant
    </label>
    <input
      type="text"
      ref="restaurantSelect"
      id="restaurantSelect"
      name="restaurantSelect"
      class="input--text input--with-icon--left"
      placeholder="Search a restaurant..."
      autocomplete="off"
      aria-label="Search for a restaurant"
      v-model="searchString"
      :readonly="!!restaurant"
    />
    <i
      v-if="!!restaurant"
      class="icon icon--clear right-icon"
      @click="clearRestaurant"
    ></i>
  </div>
  <ul id="searchResult" class="search__results">
    <li
      v-for="result in results"
      :key="result.id"
      class="result"
      @click="handleRestaurant(result)"
    >
      {{ result.name }}
    </li>
    <li v-if="showResults" class="result result--empty">
      {{ browse }}
    </li>
  </ul>
</template>

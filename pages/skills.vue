<template>
  <div class="page-container">
    <h1 class="page-title">--- SKILLS ---</h1>

    <div class="main-container">
      <Carousel :itemsToShow="1.9" :wrapAround="true" :transition="500">
        <!-- <Slide v-for="slide in 10" :key="slide"> -->
        <Slide v-for="item in items" :key="item.id" class="skill-slide">
          <!-- <div class="carousel__item">{{ slide }}</div> -->
          <!-- <div v-for="item in items" :key="item.id" class="skill-list-body"> -->
          <div class="image-container">
            <img :src="item.image" class="skill-icon" />
          </div>
          <div class="text-container">
            <h3>{{ item.title }}</h3>
            <p class="skill-year">{{ item.description }}</p>
            <p class="skill-year">{{ item.description2 }}</p>
          </div>
          <!-- </div> -->
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
      <p class="skill-date">最終更新日 : 2023/05/02</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg",
          title: "HTML",
          description: "経験年数 : 2年",
          description2: "実務年数 : 1年",
        },
        {
          id: 2,
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg",
          title: "CSS",
          description: "経験年数 : 2年",
          description2: "実務年数 : 1年",
        },
        {
          id: 3,
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
          title: "Javascript",
          description: "経験年数 : 2年",
          description2: "実務年数 : 1年",
        },
        {
          id: 4,
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          title: "python",
          description: "経験年数 : 1年",
        },
        {
          id: 5,
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
          title: "Java",
          description: "経験年数 : 1年",
        },
        {
          id: 6,
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg",
          title: "php",
          description: "経験年数 : 1年",
        },
        {
          id: 7,
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          title: "Node.js",
          description: "経験年数 : 1年",
        },
        {
          id: 8,
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
          title: "vue.js",
          description: "経験年数 : 2年",
          description2: "実務年数 : 1年",
        },
        {
          id: 9,
          image: "https://cdn.svgporn.com/logos/nuxt-icon.svg",
          title: "Nuxt.js",
          description: "経験年数 : 1年",
        },
        {
          id: 10,
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg",
          title: "jquery",
          description: "経験年数 : 1年",
        },
      ],
    };
  },
});
</script>

<style>
* {
  font-family: "Bruno Ace", sans-serif;
}
.page-title {
  text-align: center;
  font-size: 25px;
  margin-top: 50px;
  margin-bottom: 50px;
}
/* スマホ */
@media (max-width: 767px) {
  .page-title {
    font-size: 25px;
  }
  .main-container {
    margin-top: 50px;
  }
  .skill-date {
    text-align: center;
    font-size: 13px;
    margin-top: 30px;
  }

  .carousel__item {
    height: 300px;
    width: 200px;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel__slide {
    padding: 5px;
    height: 100px;
  }

  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 0px solid white;
  }

  .carousel__viewport {
    perspective: 2000px;
  }

  .carousel__track {
    transform-style: preserve-3d;
  }

  .carousel__slide--sliding {
    transition: 0.5s;
  }

  .carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.7);
  }

  .carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.7);
  }

  .carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.7);
  }

  .carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
  }

  .carousel__prev,
  .carousel__next {
    top: auto;
    bottom: -70%;
  }
  .carousel__prev {
    left: 15px;
  }
  .carousel__prev {
    right: 15px;
  }

  .carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.3);
  }

  .carousel__pagination {
    text-align: center;
  }
  .carousel__pagination-button::after {
    background: #00ff00;
  }
  .carousel__pagination-button--active::after {
    background: white;
  }

  .skill-icon {
    width: 60px;
    height: 60px;
    margin-right: 1rem;
    background-color: transparent;
  }

  .text-container {
    font-size: 15px;
    font-family: "Bruno Ace", sans-serif;
    text-align: left;
  }

  .skill-year {
    font-size: 10px;
  }
}

.main-container {
  margin-top: 50px;
}
.skill-date {
  text-align: center;
  font-size: 13px;
  margin-top: 30px;
}

.carousel__item {
  height: 300px;
  width: 200px;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 5px;
  height: 100px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 0px solid white;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.7);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.7);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.7);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__prev,
.carousel__next {
  top: auto;
  bottom: -70%;
}
.carousel__prev {
  left: 15px;
}
.carousel__prev {
  right: 15px;
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.3);
}

.carousel__pagination {
  text-align: center;
}
.carousel__pagination-button::after {
  background: #00ff00;
}
.carousel__pagination-button--active::after {
  background: white;
}

.skill-icon {
  width: 60px;
  height: 60px;
  margin-right: 1rem;
  background-color: transparent;
}

.text-container {
  font-size: 15px;
  font-family: "Bruno Ace", sans-serif;
  text-align: left;
}

.skill-year {
  font-size: 10px;
}
</style>

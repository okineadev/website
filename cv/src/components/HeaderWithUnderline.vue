<template>
  <div class="h-[67px] relative shrink-0 w-[278px] mb-6">
    <div class="absolute bottom-0 left-0 right-[0.36%] top-full">
      <div class="absolute bottom-0 left-0 right-0 top-[-1px]">
        <svg
          class="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 277 1"
        >
          <title>Underline</title>
          <line
            stroke="var(--stroke-0, #705D09)"
            style="
              stroke: color(display-p3 0.4392 0.3647 0.0353);
              stroke-opacity: 1;
            "
            x2="277"
            y1="0.5"
            y2="0.5"
          />
        </svg>
      </div>
    </div>
    <div
      class="absolute bottom-[1.49%] font-['Poppins',_sans-serif] font-medium leading-[0] left-0 not-italic right-0 text-[#282621] text-[36px] text-left top-0"
    >
      <h2 class="block leading-[normal]"><slot></slot></h2>
    </div>
  </div>
</template>

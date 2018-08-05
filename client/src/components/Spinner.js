import React from 'react';

const Spinner = () => (
  <div class="preloader-wrapper small active">
    <div class="spinner-layer spinner-green-only">
      <div class="circle-clipper left">
        <div class="circle" />
      </div>
      <div class="gap-patch">
        <div class="circle" />
      </div>
      <div class="circle-clipper right">
        <div class="circle" />
      </div>
    </div>
  </div>
);

export default Spinner;

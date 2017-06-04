import React, { PropTypes } from 'react';

function ArrowImage({ direction }) {
  if (direction === 'right') {
    return (
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.36449 19.36474">
        <title>Right Arrow</title>
        <path d="M20.37805,1.311a1.19551,1.19551,0,0,0-.67241,2.11061l5.9209,5.0804H2.55931q-.056-.00263-.11207,0a1.1967,1.1967,0,0,0,.11207,2.39077H25.60787l-5.90222,5.06172a1.19834,1.19834,0,1,0,1.56895,1.81176l8.36771-7.17232a1.19551,1.19551,0,0,0,0-1.81176L21.27459,1.60983A1.1955,1.1955,0,0,0,20.37805,1.311Z" fill="#fff" />
        <path d="M20.47486,0a2.51555,2.51555,0,0,1,1.66936.63542L30.4923,7.79006a2.54724,2.54724,0,0,1,.2671.26625,2.50242,2.50242,0,0,1-.2654,3.52841l-8.36934,7.17336a2.50479,2.50479,0,0,1-3.2745-3.79125l3.22686-2.7671H2.55934a2.43883,2.43883,0,0,1-1.74166-.65158,2.50292,2.50292,0,0,1,1.569-4.351c.07783-.0034.15481-.0034.2318,0l19.47941-.0017-3.243-2.78241a2.50188,2.50188,0,0,1,1.418-4.40456C20.34.00255,20.40766,0,20.47486,0Zm.06805,2.41834-.003-.00255Zm-.11739.18544-.00128-.0017-.00383.00085ZM2.50915,9.58829h0Zm17.91,7.19037.00085-.00085Z" fill="#fff" />
      </svg>
    );
  }
  return (
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.36449 19.36474">
      <title>Left Arrow</title>
      <path d="M10.98644,18.05376a1.19551,1.19551,0,0,0,.67241-2.11061l-5.9209-5.0804H28.80518q.056.00263.11207,0A1.1967,1.1967,0,1,0,28.80518,8.472H5.75662l5.90222-5.06172A1.19834,1.19834,0,0,0,10.0899,1.59851L1.72219,8.77083a1.19551,1.19551,0,0,0,0,1.81176l8.36771,7.17232A1.1955,1.1955,0,0,0,10.98644,18.05376Z" fill="#fff" />
      <path d="M10.88963,19.36474a2.51555,2.51555,0,0,1-1.66936-.63542L.87219,11.57468a2.54724,2.54724,0,0,1-.2671-.26625A2.50242,2.50242,0,0,1,.87049,7.78L9.23983.60667a2.50479,2.50479,0,0,1,3.2745,3.79125L9.28747,7.165H28.80515a2.43883,2.43883,0,0,1,1.74166.65158,2.50292,2.50292,0,0,1-1.569,4.351c-.07783.0034-.15481.0034-.2318,0l-19.47941.0017,3.243,2.78241a2.50188,2.50188,0,0,1-1.418,4.40456C11.02445,19.36219,10.95682,19.36474,10.88963,19.36474Zm-.06805-2.41834.003.00255ZM10.939,16.761l.00128.0017.00383-.00085ZM28.85534,9.77645h0Zm-17.91-7.19037-.00085.00085Z" fill="#fff" />
    </svg>
  );
}

ArrowImage.propTypes = {
  direction: PropTypes.string.isRequired,
};

export default ArrowImage;
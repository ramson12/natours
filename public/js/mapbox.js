/* eslint-disable */

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZmFyaWExMiIsImEiOiJjazU1bjA1NXIwMjQ0M2xxZm8zNWZlejltIn0.7qVczRvp3B-MIyuV4-gxXg';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/faria12/ck55n54yf04cf1comzs3r79m3',
    scrollZoom: false
    //   center: [-118.113491, 34.111745],
    //   zoom: 4,
    //   interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // create marker

    const el = document.createElement('div');
    el.className = 'marker';

    // add a marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(
        `<p>
        Day ${loc.dat}: ${loc.description}
      </p>`
      )
      .addTo(map);

    //extends map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};

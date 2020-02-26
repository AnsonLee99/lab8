function initMap() {
	// add your code here
	L.mapquest.key = 'VLBElLpQPABfr7Lt0AOGnGsTSnL46fHr';

	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 13,
		zoomControl: false
	});

	// Adding a marker to the map
	L.marker([32.88, -117.236]).addTo(map);
}
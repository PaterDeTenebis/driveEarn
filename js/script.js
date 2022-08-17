function setRange() {
  var fuelMin = $('#rangeFuel').attr('min');
  var fuelMax = $('#rangeFuel').attr('max');
  $('#fuelMin').html(fuelMin);
  $('#fuelMax').html(fuelMax);

  var distanceMin = $('#rangeDistance').attr('min');
  var distanceMax = $('#rangeDistance').attr('max');
  $('#distanceMin').html(distanceMin + '&nbspkm');
  $('#distanceMax').html(distanceMax + '&nbspkm');
}

$(document).ready(setRange);

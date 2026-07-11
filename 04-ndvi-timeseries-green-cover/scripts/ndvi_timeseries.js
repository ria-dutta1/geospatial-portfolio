/**
 * NDVI Time Series — Bengaluru Green Cover (2018–2024)
 * Author: Ria Dutta
 *
 * STATUS: placeholder — replace with actual working script.
 */

// ---- 1. AOI ----
var aoi = /* ee.Geometry or ee.FeatureCollection — reuse from project 01 */ null;

var years = ee.List.sequence(2018, 2024);

// ---- 2. Build annual NDVI composites ----
var ndviCollection = ee.ImageCollection.fromImages(
  years.map(function (year) {
    year = ee.Number(year);
    var start = ee.Date.fromYMD(year, 1, 1);
    var end = ee.Date.fromYMD(year, 12, 31);

    var composite = ee.ImageCollection('COPERNICUS/S2_SR')
      .filterBounds(aoi)
      .filterDate(start, end)
      .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
      // TODO: cloud mask
      .median()
      .clip(aoi);

    var ndvi = composite.normalizedDifference(['B8', 'B4']).rename('NDVI');
    return ndvi.set('year', year);
  })
);

// ---- 3. Trend extraction ----
// TODO: e.g. linear fit across years per pixel, or Mann-Kendall trend test

// ---- 4. Chart / export ----
// TODO: ui.Chart.image.series() for a quick chart, plus Export.image.toDrive() for maps

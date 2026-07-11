/**
 * Bengaluru LULC Classification & Change Detection (2018 vs 2021)
 * Author: Ria Dutta
 *
 * Pipeline: AOI -> cloud masking -> median compositing -> band stacking
 *           -> supervised classification (RF / SVM / Minimum Distance)
 *           -> accuracy assessment -> change detection
 *
 * STATUS: placeholder — replace with actual working script.
 */

// ---- 1. AOI ----
// TODO: define Bengaluru AOI (draw in GEE or import a boundary asset)
var aoi = /* ee.Geometry or ee.FeatureCollection */ null;

// ---- 2. Load Sentinel-2 SR collections for 2018 and 2021 ----
function getComposite(year) {
  var start = ee.Date.fromYMD(year, 1, 1);
  var end = ee.Date.fromYMD(year, 12, 31);

  var collection = ee.ImageCollection('COPERNICUS/S2_SR')
    .filterBounds(aoi)
    .filterDate(start, end)
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20));

  // TODO: apply cloud mask (QA60 or s2cloudless) here
  var masked = collection.map(maskClouds);

  return masked.median().clip(aoi);
}

function maskClouds(image) {
  // TODO: implement QA60-based or s2cloudless masking
  return image;
}

var composite2018 = getComposite(2018);
var composite2021 = getComposite(2021);

// ---- 3. Band stacking ----
// TODO: select relevant bands (e.g. B2, B3, B4, B8, B11, B12) and any indices (NDVI, NDBI)

// ---- 4. Training samples ----
// TODO: import or digitize training samples with a 'class' property

// ---- 5. Classification ----
// TODO: train and apply Random Forest, SVM, and Minimum Distance classifiers
//       for both years, using ee.Classifier.smileRandomForest(),
//       ee.Classifier.libsvm(), ee.Classifier.minimumDistance()

// ---- 6. Accuracy assessment ----
// TODO: compute confusion matrix and Kappa coefficient via classifier.confusionMatrix()

// ---- 7. Change detection ----
// TODO: compare classified2018 vs classified2021 (e.g. classified2021.remap or a crosstab)

// ---- 8. Exports ----
// TODO: Export.image.toDrive() for classified maps and change map

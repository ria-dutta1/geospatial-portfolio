# Spatial Autocorrelation (Moran's I)

## Objective
Assess whether temperature values across the study area are spatially clustered, dispersed, or randomly distributed, using Global Moran's I.

## Data
- Feature class: `sample_temperature_UTM` (point data, temperature attribute)
- Field analyzed: `TEMPERATUR`

## Method (ArcGIS Pro)
Ran the **Spatial Autocorrelation (Global Moran's I)** tool with:
- Conceptualization: Fixed Distance
- Distance method: Euclidean
- Distance threshold: 1,100 m
- Row standardization: enabled

## Results
| Metric | Value |
|---|---|
| Moran's Index | –0.350746 |
| Expected Index | –0.250000 |
| Variance | 0.135138 |
| z-score | –0.274057 |
| p-value | 0.784041 |

**Interpretation: not statistically significant.** With z = –0.27 and p = 0.78, the observed pattern does not differ meaningfully from what would be expected under complete spatial randomness — ArcGIS's own report confirms this directly. In other words, at a 1,100 m distance threshold, temperature values in this dataset show no detectable spatial clustering or dispersion.

This is a legitimate negative result, not a failed analysis — it says something real about the data (no spatial autocorrelation at this scale/threshold), and reporting it honestly rather than as a "confirmed clustering" is the statistically correct thing to do. A natural next step, if revisited, would be testing a different distance threshold or conceptualization (e.g. k-nearest neighbors) to see whether significance emerges at another spatial scale.

## Repo contents
- `project/` — ArcGIS Pro project (`.aprx`), toolbox (`.atbx`)
- `outputs/` — Moran's I result report (HTML)

## Reproduce it
Open `project/spatial_autocorrelation_morans.aprx` in ArcGIS Pro. The Spatial Autocorrelation (Global Moran's I) tool result and parameters are documented in `outputs/MoransI_Result_27384_27136_.html`.

## Limitations
- Result is threshold-dependent — a different fixed-distance value or a k-nearest-neighbors conceptualization could yield a different outcome
- Single-variable analysis (temperature only); no multivariate or local (LISA) autocorrelation tested


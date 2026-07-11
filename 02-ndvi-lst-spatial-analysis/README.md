# NDVI–LST Spatial Analysis

## Objective
Examine the relationship between vegetation cover (NDVI) and land surface temperature (LST) to assess urban heat island effects, using a grid-sampling regression approach in QGIS.

## Data
- NDVI and LST rasters (SAGA GIS format), sampled at grid-centroid points
- Study area: northern West Bengal, near the Teesta river (Jalpaiguri/Cooch Behar region) — identified from the project's UTM zone 45N coordinates (~89.18°E, 26.4°N)
- Coordinate system: WGS 84 / UTM zone 45N (EPSG:32645)

## Method (QGIS)
1. Built a fishnet grid (154 cells, ~3 km × 3 km each) over the study area
2. Generated centroid points for each grid cell
3. Sampled NDVI and LST raster values at each centroid (91 of 154 points had valid data — remaining cells fell outside raster coverage)
4. Ran linear regression between NDVI (independent variable) and LST (dependent variable) using the DataPlotly plugin

## Results
| Metric | Value |
|---|---|
| Sample points (valid) | 91 |
| Correlation coefficient (r) | **–0.584** |
| R² | **0.341** |
| Regression equation | LST = –9.30 × NDVI + 32.06 |
| p-value | **< 0.001** |

**Interpretation:** A moderate, statistically significant inverse relationship between vegetation cover and surface temperature — as NDVI increases, LST decreases. This is consistent with vegetated areas cooling local surface temperature relative to bare/built-up surfaces (urban heat island effect), though NDVI alone explains only ~34% of LST variance (R² = 0.341), indicating other factors (land use, elevation, proximity to water) also play a substantial role.

## Repo contents
- `project/` — QGIS project file (`Regression_analysis_GIS.qgz`), grid GeoPackage, regression points shapefile
- `outputs/` — NDVI grid map, regression scatter plot (PNG)

## Reproduce it
Open `project/Regression_analysis_GIS.qgz` in QGIS 3.x. Layers (`grid_op`, `centroid_op`, `regression_points`) and the DataPlotly scatter plot configuration are preserved in the project file.

## Limitations
- R² of 0.34 means NDVI is a partial explanator of LST, not the sole driver — no control for elevation, land cover class, or time-of-day effects
- Grid resolution (~3 km cells) is coarse; finer sampling would better resolve local hotspots
- Single-date snapshot — no seasonal variation captured


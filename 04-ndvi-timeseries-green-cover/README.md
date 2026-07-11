# NDVI Time Series — Bengaluru Green Cover (2018–2024)

## Objective
Track vegetation/green cover change across Bengaluru over time using an NDVI time series, extending the single-date NDVI–LST analysis into a multi-year trend.

## Data
- Sentinel-2 (or Landsat, for longer historical depth) NDVI, annual or seasonal composites, 2018–2024
- AOI: Bengaluru urban + peri-urban extent (same as the LULC change detection project)

## Method
1. Built annual (or seasonal) median NDVI composites for each year, 2018–2024
2. Cloud-masked inputs before compositing
3. Extracted NDVI trend per pixel / per ward or grid cell
4. [Optional] Statistical trend test (e.g. Mann-Kendall) if applied

## Results
- [Summary: which areas show the steepest NDVI decline; overall city-wide trend]
- Trend chart: see `outputs/`

## Repo contents
- `scripts/` — Google Earth Engine JavaScript for time-series composite generation and trend extraction
- `outputs/` — NDVI trend charts, animated/comparison maps

## Reproduce it
Open `scripts/ndvi_timeseries.js` in the GEE Code Editor, adjust the AOI/date range, and run.

## Limitations
[e.g. sensor changes over the period, seasonal NDVI variation, cloud gaps in certain years]

# Earthquake Exposure Analysis — Distance to Nearest Major Hub

**Status: planned / in progress — not yet run.** This README documents the intended workflow ahead of execution, so the methodology is clear before results exist.

## Objective
Quantify global earthquake exposure risk relative to major population hubs (cities), using nearest-hub distance and magnitude-scaled buffer/intersection analysis in ArcGIS Pro ModelBuilder.

## Planned data
- **Earthquakes:** USGS Earthquake Catalog (magnitude, depth, location), filtered to M ≥ [threshold, e.g. 5.0]
- **Major hubs:** Natural Earth populated places (or GeoNames), filtered by population threshold

## Planned workflow
1. **Prep inputs** — filter hubs by population threshold; filter earthquakes by minimum magnitude
2. **Distance to nearest hub** — `Near` tool: each earthquake gets `NEAR_DIST` (km) and `NEAR_FID` (nearest hub)
3. **Magnitude-scaled buffer** — buffer radius calculated per-feature from magnitude (illustrative scaling, not a seismological ground-motion model — this will be stated clearly in the final results, not presented as engineering-grade)
4. **Spatial join / intersect** — join hubs against quake buffer zones to count how many impact zones each hub falls inside, by magnitude class
5. **Summary statistics** — rank hubs by exposure count and severity

## Planned outputs
- Table: hub name, nearest-quake distance, exposure count by magnitude band
- Map: hubs sized/colored by exposure count

## Repo contents (once complete)
- `scripts/` — ModelBuilder export and/or equivalent arcpy script
- `data/` — filtered input datasets or links to source
- `outputs/` — result tables and map

## Limitations (anticipated)
- Buffer radius is an illustrative magnitude-to-distance scaling, not a true ground-motion/intensity attenuation model
- "Major hub" defined by a population cutoff — a simplification of real economic/infrastructure importance

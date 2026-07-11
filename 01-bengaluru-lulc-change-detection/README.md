# Bengaluru LULC Change Detection (2018 vs 2021)

## Objective
Classify land use / land cover in Bengaluru for 2018 and 2021 using Sentinel-2 imagery, and quantify change between the two years — reproducing and extending the classification pipeline from my KSRSAC internship (Mysuru District LULC study) on an independently sourced area.

## Data
- Sentinel-2 Level-2A surface reflectance imagery, [DATE RANGE], Bengaluru AOI
- Source: [e.g. Copernicus Open Access Hub / Google Earth Engine COPERNICUS/S2_SR collection]
- Training samples: [describe how you generated these — manual digitization, existing land cover reference, etc.]

## Method
1. AOI definition for Bengaluru urban + peri-urban extent
2. Cloud masking using [QA60 band / s2cloudless]
3. Median compositing for 2018 and 2021
4. Band stacking ([list bands used])
5. Supervised classification: Random Forest, SVM, Minimum Distance
6. Accuracy assessment: confusion matrix, Kappa coefficient
7. Change detection: post-classification comparison between 2018 and 2021 classified maps

## Results
| Classifier | Overall Accuracy | Kappa |
|---|---|---|
| Random Forest | [XX]% | [X.XX] |
| SVM | [XX]% | [X.XX] |
| Minimum Distance | [XX]% | [X.XX] |

**Change summary:** [e.g. built-up area increased by XX% between 2018–2021, primarily converting from ... ]

*(Fill in once the classification is run — see `outputs/` for maps and confusion matrices.)*

## Repo contents
- `scripts/` — Google Earth Engine JavaScript (classification + change detection)
- `outputs/` — classified maps (PNG), confusion matrices, change map
- `data/` — training sample references (not raw imagery — see `.gitignore`)

## Reproduce it
1. Open `scripts/classification.js` in the [GEE Code Editor](https://code.earthengine.google.com/)
2. Update the AOI and date ranges if needed
3. Run — outputs export to Google Drive

## Limitations
[Be honest here — e.g. training sample size, resolution constraints, any known misclassification patterns]

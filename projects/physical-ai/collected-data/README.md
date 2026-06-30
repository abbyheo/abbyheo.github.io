# Directly Collected Physical AI LeRobot Data

This folder contains a small public sample of directly collected Physical AI data used as checkable source material for Abby Heo's Physical AI data review portfolio reconstruction.

## Episodes

- `EP_017` — Pick and Place, `SCN_PICK_SINGLE_CUBE_CENTER`, SO-101 pick/place with one centered small cube
- `EP_018` — Pick and Place, `SCN_PICK_IRREGULAR_OBJECT_CENTER`, SO-101 pick/place with one centered irregular object

Each episode keeps the basic LeRobot layout:

```text
EP_017 or EP_018/
├── data/chunk-000/file-000.parquet
├── meta/info.json
├── meta/stats.json
├── meta/tasks.parquet
├── meta/episodes/chunk-000/file-000.parquet
├── videos/observation.images.wrist/chunk-000/file-000.mp4
├── videos/observation.images.top/chunk-000/file-000.mp4
├── videos/observation.images.belly/chunk-000/file-000.mp4
└── episode_context.json
```

## Viewer page

`index.html` is a static GitHub Pages viewer with:

- one-button synchronized playback for the wrist/top/belly camera views;
- a lightweight state/action signal chart generated from the LeRobot parquet files;
- links to raw parquet, metadata, video, manifest, and context files.

The official Hugging Face LeRobot Dataset Visualizer is a Next/Docker app for Hugging Face-hosted datasets. This folder keeps the portfolio surface static while adopting the same inspection idea: synchronized videos plus time-aligned state/action signals.

## Public-copy note

`episode_context.json` is generated from the live Google Sheet and organized by source tab. Local machine paths and device-port strings are omitted. Foundry `media_reference` payloads are redacted in the public JSON. `.DS_Store` files are omitted. The LeRobot data files, metadata files, and MP4 videos are preserved.

See `manifest.json` for file sizes and SHA-256 hashes. See `sensor_preview.json` for the static state/action chart data.

# Directly Collected Physical AI LeRobot Data

This folder contains a small public sample of directly collected Physical AI data used as checkable source material for Abby Heo's Physical AI data review portfolio reconstruction.

## Episodes

- `EP_017` / source episode `EP_V5_001_LF` — Pick and Place, scenario_301, one small cube
- `EP_018` / source episode `EP_V5_003_LF` — Pick and Place, scenario_303, one flat rectangle

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

## Public-copy note

Local machine paths and device-port strings were redacted from `episode_context.json` before publication. `.DS_Store` files were omitted. The LeRobot data files, metadata files, and MP4 videos are preserved.

See `manifest.json` for file sizes and SHA-256 hashes.

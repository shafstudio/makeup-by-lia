# Assets Directory

This folder contains media assets used throughout the website.

## Required Files

### Videos (`/assets/videos/`)
- **hero-video.mp4** - Background video for the hero section
  - Recommended specs:
    - Resolution: 1920x1080 (Full HD) or higher
    - Format: MP4 (H.264 codec)
    - Duration: 10-30 seconds (will loop)
    - Size: Optimize to < 5MB for faster loading
  - Content: Bridal makeup, beauty, or wedding-related footage

### Images (`/assets/images/`)
- **hero-poster.jpg** - Fallback image and video poster
  - Resolution: 1920x1080 or higher
  - Format: JPG or WebP
  - Should complement the video content
  - Used when video fails to load or on slower connections

## How to Add Your Files

1. Download or prepare your video file
2. Rename it to `hero-video.mp4`
3. Place it in `/public/assets/videos/`
4. Extract a frame from the video or choose a related image
5. Save it as `hero-poster.jpg` in `/public/assets/images/`

## Video Optimization Tips

For best performance, compress your video:
- Use HandBrake or similar tools
- Target bitrate: 2-4 Mbps for web
- Remove audio track (video is muted anyway)
- Use web-optimized preset

## Current Setup

The hero section will:
1. Attempt to load and play `hero-video.mp4`
2. Display `hero-poster.jpg` as a placeholder while loading
3. Fall back to `hero-poster.jpg` if video fails

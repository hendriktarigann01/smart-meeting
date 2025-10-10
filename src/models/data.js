const roomData = {
  rooms: {
    "small-room": {
      title: "Small Meeting Room",
      capacity: "2-5 People",
      dimensions: "3m x 3m",
      layouts: {
        rectangular: "/room/small/room-rectangular.png",
        round: "/room/small/room-round.png",
        tapered: "/room/small/room-tapered.png",
      },
      gridSize: {
        cols: 24,
        rows: 12,
      },
    },
    "medium-room": {
      title: "Medium Meeting Room",
      capacity: "6-8 People",
      dimensions: "5m x 4m",
      layouts: {
        rectangular: "/room/medium/room-rectangular.png",
        round: "/room/medium/room-round.png",
        tapered: "/room/medium/room-tapered.png",
      },
      gridSize: {
        cols: 24,
        rows: 12,
      },
    },
    "large-room": {
      title: "Large Meeting Room",
      capacity: "10-12 People",
      dimensions: "6m x 5m",
      layouts: {
        rectangular: "/room/large/room-rectangular.png",
        round: "/room/large/room-round.png",
        tapered: "/room/large/room-tapered.png",
      },
      gridSize: {
        cols: 24,
        rows: 12,
      },
    },
    auditorium: {
      title: "Auditorium",
      capacity: "14-20 People",
      dimensions: "8m x 6m",
      baseImage: "/room/auditorium/auditorium.png",
      gridSize: {
        cols: 24,
        rows: 12,
      },
    },
  },
  components: {
    screens: {
      "interactive-whiteboard": {
        sizes: ["65inch", "75inch", "86inch", "98inch"],
        mounts: ["wall-mount", "floor-stand", "wheel-stand"],
        states: {
          home: "/screens/interactive-whiteboard/home.png",
          "in-call": "/screens/interactive-whiteboard/in-call.png",
          share: "/screens/interactive-whiteboard/share.png",
        },
        rooms: {
          "small-room": {
            "65inch": { width: 144, height: 81, x: null, y: null },
            "75inch": { width: 166, height: 93, x: null, y: null },
            "86inch": { width: 190, height: 107, x: null, y: null },
            "98inch": { width: 217, height: 122, x: null, y: null },
          },
          "medium-room": {
            "65inch": { width: 144, height: 81, x: null, y: null },
            "75inch": { width: 166, height: 93, x: null, y: null },
            "86inch": { width: 190, height: 107, x: null, y: null },
            "98inch": { width: 217, height: 122, x: null, y: null },
          },
          "large-room": {
            "65inch": { width: 144, height: 81, x: null, y: null },
            "75inch": { width: 166, height: 93, x: null, y: null },
            "86inch": { width: 190, height: 107, x: null, y: null },
            "98inch": { width: 217, height: 122, x: null, y: null },
          },
          auditorium: {
            "65inch": { width: 144, height: 81, x: null, y: null },
            "75inch": { width: 166, height: 93, x: null, y: null },
            "86inch": { width: 190, height: 107, x: null, y: null },
            "98inch": { width: 217, height: 122, x: null, y: null },
          },
        },
      },
      "video-wall": {
        sizes: ["46inch", "55inch"],
        states: {
          home: "/screens/video-wall/home.png",
          "in-call": "/screens/video-wall/in-call.png",
          share: "/screens/video-wall/share.png",
        },
        rooms: {
          "small-room": {
            "46inch": { width: 102, height: 57, x: null, y: null },
            "55inch": { width: 122, height: 68, x: null, y: null },
          },
          "medium-room": {
            "46inch": { width: 102, height: 57, x: null, y: null },
            "55inch": { width: 122, height: 68, x: null, y: null },
          },
          "large-room": {
            "46inch": { width: 102, height: 57, x: null, y: null },
            "55inch": { width: 122, height: 68, x: null, y: null },
          },
          auditorium: {
            "46inch": { width: 102, height: 57, x: null, y: null },
            "55inch": { width: 122, height: 68, x: null, y: null },
          },
        },
      },
      "led-indoor": {
        sizes: ["p1.25", "p1.53", "p1.86", "p2.5", "p3.0", "p4.0"],
        states: {
          home: "/screens/led-indoor/home.png",
          "in-call": "/screens/led-indoor/in-call.png",
          share: "/screens/led-indoor/share.png",
        },
        rooms: {
          "small-room": {
            "p1.25": { width: 200, height: 112, x: null, y: null },
            "p1.53": { width: 200, height: 112, x: null, y: null },
            "p1.86": { width: 200, height: 112, x: null, y: null },
            "p2.5": { width: 200, height: 112, x: null, y: null },
            "p3.0": { width: 200, height: 112, x: null, y: null },
            "p4.0": { width: 200, height: 112, x: null, y: null },
          },
          "medium-room": {
            "p1.25": { width: 200, height: 112, x: null, y: null },
            "p1.53": { width: 200, height: 112, x: null, y: null },
            "p1.86": { width: 200, height: 112, x: null, y: null },
            "p2.5": { width: 200, height: 112, x: null, y: null },
            "p3.0": { width: 200, height: 112, x: null, y: null },
            "p4.0": { width: 200, height: 112, x: null, y: null },
          },
          "large-room": {
            "p1.25": { width: 200, height: 112, x: null, y: null },
            "p1.53": { width: 200, height: 112, x: null, y: null },
            "p1.86": { width: 200, height: 112, x: null, y: null },
            "p2.5": { width: 200, height: 112, x: null, y: null },
            "p3.0": { width: 200, height: 112, x: null, y: null },
            "p4.0": { width: 200, height: 112, x: null, y: null },
          },
          auditorium: {
            "p1.25": { width: 200, height: 112, x: null, y: null },
            "p1.53": { width: 200, height: 112, x: null, y: null },
            "p1.86": { width: 200, height: 112, x: null, y: null },
            "p2.5": { width: 200, height: 112, x: null, y: null },
            "p3.0": { width: 200, height: 112, x: null, y: null },
            "p4.0": { width: 200, height: 112, x: null, y: null },
          },
        },
      },
    },
    cameras: {
      "small-room": {
        "h3-p3m": {
          image: "/room/small/camera-h3-p3m.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
        "no-camera": null,
      },
      "medium-room": {
        "h3-p3m": {
          image: "/room/medium/camera-h3-p3m.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
        "no-camera": null,
      },
      "large-room": {
        "h3-p3m": {
          image: "/room/large/camera-h3-p3m.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
        "no-camera": null,
      },
      auditorium: {
        "h3-p3m": {
          image: "/room/auditorium/camera-h3-p3m.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
        "no-camera": null,
      },
    },
    quickshares: {
      "small-room": {
        "qs-l2": {
          image: "/room/small/quickshare-l2.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
        "qs-l3": {
          image: "/room/small/quickshare-l3.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
        "qs-68d": {
          image: "/room/small/quickshare-68d.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
        "qs-68e": {
          image: "/room/small/quickshare-68e.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
      },
      "medium-room": {
        "qs-l2": {
          image: "/room/medium/quickshare-l2.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
        "qs-l3": {
          image: "/room/medium/quickshare-l3.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
        "qs-68d": {
          image: "/room/medium/quickshare-68d.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
        "qs-68e": {
          image: "/room/medium/quickshare-68e.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
      },
      "large-room": {
        "qs-l2": {
          image: "/room/large/quickshare-l2.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
        "qs-l3": {
          image: "/room/large/quickshare-l3.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
        "qs-68d": {
          image: "/room/large/quickshare-68d.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
        "qs-68e": {
          image: "/room/large/quickshare-68e.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
      },
      auditorium: {
        "qs-l2": {
          image: "/room/auditorium/quickshare-l2.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
        "qs-l3": {
          image: "/room/auditorium/quickshare-l3.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
        "qs-68d": {
          image: "/room/auditorium/quickshare-68d.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
        "qs-68e": {
          image: "/room/auditorium/quickshare-68e.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
      },
    },
    speakers: {
      "small-room": {
        "audio-conference-system": {
          image: "/room/small/speaker-audio-conference.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
        "ceiling-speaker": {
          image: "/room/small/speaker-ceiling.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
      },
      "medium-room": {
        "audio-conference-system": {
          image: "/room/medium/speaker-audio-conference.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
        "ceiling-speaker": {
          image: "/room/medium/speaker-ceiling.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
      },
      "large-room": {
        "audio-conference-system": {
          image: "/room/large/speaker-audio-conference.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
        "ceiling-speaker": {
          image: "/room/large/speaker-ceiling.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
      },
      auditorium: {
        "ceiling-speaker": {
          image: "/room/auditorium/speaker-ceiling.png",
          position: { x: null, y: null },
          width: null,
          height: null,
        },
      },
    },
  },
};

export default roomData;

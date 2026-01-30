export const roomData = {
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
        roomshaped: "/room/large/room-u-shaped.png",
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
        states: {
          home: "/screen/interactive-whiteboard/home.png",
          incall: "/screen/interactive-whiteboard/in-call.png",
          share: "/screen/interactive-whiteboard/share.png",
        },
        standImages: {
          "wall-mount": null,
          "floor-stand": "/screen/interactive-whiteboard/floor-stand.png",
          "wheel-stand": "/screen/interactive-whiteboard/wheel-stand.png",
        },
        mounts: {
          "wall-mount": {
            rooms: {
              "small-room": {
                "65inch": {
                  desktop: {
                    screen: { width: 10, height: 25, x: 14.4, y: 4.3 },
                    stand: null,
                  },
                  mobile: {
                    screen: { width: 9, height: 23, x: 14.1, y: 4.55 },
                    stand: null,
                  },
                },
                "75inch": {
                  desktop: {
                    screen: { width: 11.6, height: 30, x: 14.4, y: 4.3 },
                    stand: null,
                  },
                  mobile: {
                    screen: { width: 9.6, height: 28, x: 14.1, y: 4.55 },
                    stand: null,
                  },
                },
                "86inch": {
                  desktop: {
                    screen: { width: 13.3, height: 35, x: 14.4, y: 4.3 },
                    stand: null,
                  },
                  mobile: {
                    screen: { width: 11.3, height: 33, x: 14.1, y: 4.55 },
                    stand: null,
                  },
                },
                "98inch": {
                  desktop: {
                    screen: { width: 15, height: 40, x: 14.4, y: 4.3 },
                    stand: null,
                  },
                  mobile: {
                    screen: { width: 13, height: 38, x: 14.1, y: 4.55 },
                    stand: null,
                  },
                },
              },

              "medium-room": {
                "65inch": {
                  desktop: {
                    screen: { width: 10, height: 17.2, x: 15.2, y: 3.9 },
                    stand: null,
                  },
                  mobile: {
                    screen: { width: 8, height: 15.2, x: 14.9, y: 4.3 },
                    stand: null,
                  },
                },
                "75inch": {
                  desktop: {
                    screen: { width: 11.6, height: 20.6, x: 15.2, y: 3.9 },
                    stand: null,
                  },
                  mobile: {
                    screen: { width: 9.6, height: 18.6, x: 14.9, y: 4.3 },
                    stand: null,
                  },
                },
                "86inch": {
                  desktop: {
                    screen: { width: 13.3, height: 24, x: 15.2, y: 3.9 },
                    stand: null,
                  },
                  mobile: {
                    screen: { width: 11.3, height: 22, x: 14.9, y: 4.3 },
                    stand: null,
                  },
                },
                "98inch": {
                  desktop: {
                    screen: { width: 15, height: 27.5, x: 15.2, y: 3.9 },
                    stand: null,
                  },
                  mobile: {
                    screen: { width: 13, height: 25.5, x: 14.9, y: 4.3 },
                    stand: null,
                  },
                },
              },

              "large-room": {
                "65inch": {
                  desktop: {
                    screen: { width: 10, height: 16.3, x: 15.5, y: 3.9 },
                    stand: null,
                  },
                  mobile: {
                    screen: { width: 8, height: 14.3, x: 15, y: 4.2 },
                    stand: null,
                  },
                },
                "75inch": {
                  desktop: {
                    screen: { width: 11.6, height: 19.5, x: 15.5, y: 3.9 },
                    stand: null,
                  },
                  mobile: {
                    screen: { width: 9.6, height: 17.5, x: 15, y: 4.2 },
                    stand: null,
                  },
                },
                "86inch": {
                  desktop: {
                    screen: { width: 13.3, height: 22.8, x: 15.5, y: 3.9 },
                    stand: null,
                  },
                  mobile: {
                    screen: { width: 11.3, height: 20, x: 15, y: 4.2 },
                    stand: null,
                  },
                },
                "98inch": {
                  desktop: {
                    screen: { width: 15, height: 26, x: 15.5, y: 3.9 },
                    stand: null,
                  },
                  mobile: {
                    screen: { width: 13, height: 24, x: 15, y: 4.2 },
                    stand: null,
                  },
                },
              },

              auditorium: {
                "65inch": {
                  desktop: {
                    screen: { width: 10, height: 13.6, x: 16, y: 3.8 },
                    stand: null,
                  },
                  mobile: {
                    screen: { width: 8, height: 11.6, x: 15.4, y: 4.1 },
                    stand: null,
                  },
                },
                "75inch": {
                  desktop: {
                    screen: { width: 11.6, height: 15.4, x: 16, y: 3.8 },
                    stand: null,
                  },
                  mobile: {
                    screen: { width: 9.6, height: 13.4, x: 15.4, y: 4.1 },
                    stand: null,
                  },
                },
                "86inch": {
                  desktop: {
                    screen: { width: 13.3, height: 17.2, x: 16, y: 3.8 },
                    stand: null,
                  },
                  mobile: {
                    screen: { width: 11.3, height: 15.2, x: 15.4, y: 4.1 },
                    stand: null,
                  },
                },
                "98inch": {
                  desktop: {
                    screen: { width: 15, height: 19, x: 16, y: 3.8 },
                    stand: null,
                  },
                  mobile: {
                    screen: { width: 13, height: 17, x: 15.4, y: 4.1 },
                    stand: null,
                  },
                },
              },
            },
          },
          "floor-stand": {
            rooms: {
              "small-room": {
                "65inch": {
                  desktop: {
                    screen: { width: 10, height: 25, x: 14.4, y: 4.3 },
                    stand: { width: 28, height: 27, x: 14.4, y: 5.7 },
                  },
                  mobile: {
                    screen: { width: 9, height: 23, x: 14.1, y: 4.55 },
                    stand: { width: 20, height: 20, x: 14.1, y: 5.8 },
                  },
                },
                "75inch": {
                  desktop: {
                    screen: { width: 11.6, height: 30, x: 14.4, y: 4.3 },
                    stand: { width: 28, height: 27, x: 14.4, y: 5.7 },
                  },
                  mobile: {
                    screen: { width: 9.6, height: 28, x: 14.1, y: 4.55 },
                    stand: { width: 20, height: 20, x: 14.1, y: 5.8 },
                  },
                },
                "86inch": {
                  desktop: {
                    screen: { width: 13.3, height: 35, x: 14.4, y: 4.3 },
                    stand: { width: 28, height: 27, x: 14.4, y: 5.7 },
                  },
                  mobile: {
                    screen: { width: 11.3, height: 33, x: 14.1, y: 4.55 },
                    stand: { width: 20, height: 20, x: 14.1, y: 5.8 },
                  },
                },
                "98inch": {
                  desktop: {
                    screen: { width: 15, height: 40, x: 14.4, y: 4.3 },
                    stand: { width: 28, height: 27, x: 14.4, y: 5.7 },
                  },
                  mobile: {
                    screen: { width: 13, height: 38, x: 14.1, y: 4.55 },
                    stand: { width: 20, height: 20, x: 14.1, y: 5.8 },
                  },
                },
              },
              "medium-room": {
                "65inch": {
                  desktop: {
                    screen: { width: 10, height: 17.2, x: 15.2, y: 3.9 },
                    stand: { width: 15, height: 20, x: 15.2, y: 4.95 },
                  },
                  mobile: {
                    screen: { width: 8, height: 15.2, x: 14.9, y: 4.3 },
                    stand: { width: 15, height: 15, x: 14.9, y: 5.3 },
                  },
                },
                "75inch": {
                  desktop: {
                    screen: { width: 11.6, height: 20.6, x: 15.2, y: 3.9 },
                    stand: { width: 15, height: 20, x: 15.2, y: 4.95 },
                  },
                  mobile: {
                    screen: { width: 9.6, height: 18.6, x: 14.9, y: 4.3 },
                    stand: { width: 15, height: 15, x: 14.9, y: 5.3 },
                  },
                },
                "86inch": {
                  desktop: {
                    screen: { width: 13.3, height: 24, x: 15.2, y: 3.9 },
                    stand: { width: 15, height: 20, x: 15.2, y: 4.95 },
                  },
                  mobile: {
                    screen: { width: 11.3, height: 22, x: 14.9, y: 4.3 },
                    stand: { width: 15, height: 15, x: 14.9, y: 5.3 },
                  },
                },
                "98inch": {
                  desktop: {
                    screen: { width: 15, height: 27.5, x: 15.2, y: 3.9 },
                    stand: { width: 15, height: 20, x: 15.2, y: 4.95 },
                  },
                  mobile: {
                    screen: { width: 13, height: 25.5, x: 14.9, y: 4.3 },
                    stand: { width: 15, height: 15, x: 14.9, y: 5.3 },
                  },
                },
              },
              "large-room": {
                "65inch": {
                  desktop: {
                    screen: { width: 10, height: 16.3, x: 15.5, y: 3.9 },
                    stand: { width: 13, height: 16, x: 15.5, y: 4.83 },
                  },
                  mobile: {
                    screen: { width: 8, height: 14.3, x: 15, y: 4.2 },
                    stand: { width: 11, height: 13, x: 15, y: 5.07 },
                  },
                },
                "75inch": {
                  desktop: {
                    screen: { width: 11.6, height: 19.5, x: 15.5, y: 3.9 },
                    stand: { width: 13, height: 16, x: 15.5, y: 4.83 },
                  },
                  mobile: {
                    screen: { width: 9.6, height: 17.5, x: 15, y: 4.2 },
                    stand: { width: 11, height: 13, x: 15, y: 5.07 },
                  },
                },
                "86inch": {
                  desktop: {
                    screen: { width: 13.3, height: 22.8, x: 15.5, y: 3.9 },
                    stand: { width: 13, height: 16, x: 15.5, y: 4.83 },
                  },
                  mobile: {
                    screen: { width: 11.3, height: 20, x: 15, y: 4.2 },
                    stand: { width: 11, height: 13, x: 15, y: 5.07 },
                  },
                },
                "98inch": {
                  desktop: {
                    screen: { width: 15, height: 26, x: 15.5, y: 3.9 },
                    stand: { width: 13, height: 16, x: 15.5, y: 4.83 },
                  },
                  mobile: {
                    screen: { width: 13, height: 24, x: 15, y: 4.2 },
                    stand: { width: 11, height: 13, x: 15, y: 5.07 },
                  },
                },
              },
              auditorium: {
                "65inch": {
                  desktop: {
                    screen: { width: 10, height: 13.6, x: 16, y: 3.8 },
                    stand: { width: 10, height: 13, x: 16, y: 4.5 },
                  },
                  mobile: {
                    screen: { width: 8, height: 11.6, x: 15.4, y: 4.1 },
                    stand: { width: 9, height: 11, x: 15.4, y: 4.75 },
                  },
                },
                "75inch": {
                  desktop: {
                    screen: { width: 11.6, height: 15.4, x: 16, y: 3.8 },
                    stand: { width: 10, height: 13, x: 16, y: 4.5 },
                  },
                  mobile: {
                    screen: { width: 9.6, height: 13.4, x: 15.4, y: 4.1 },
                    stand: { width: 9, height: 11, x: 15.4, y: 4.75 },
                  },
                },
                "86inch": {
                  desktop: {
                    screen: { width: 13.3, height: 17.2, x: 16, y: 3.8 },
                    stand: { width: 10, height: 13, x: 16, y: 4.5 },
                  },
                  mobile: {
                    screen: { width: 11.3, height: 15.2, x: 15.4, y: 4.1 },
                    stand: { width: 9, height: 11, x: 15.4, y: 4.75 },
                  },
                },
                "98inch": {
                  desktop: {
                    screen: { width: 15, height: 19, x: 16, y: 3.8 },
                    stand: { width: 10, height: 13, x: 16, y: 4.5 },
                  },
                  mobile: {
                    screen: { width: 13, height: 17, x: 15.4, y: 4.1 },
                    stand: { width: 9, height: 11, x: 15.4, y: 4.75 },
                  },
                },
              },
            },
          },
          "wheel-stand": {
            rooms: {
              "small-room": {
                "65inch": {
                  desktop: {
                    screen: { width: 10, height: 25, x: 14.4, y: 4.3 },
                    stand: { width: 28, height: 27, x: 14.4, y: 5.7 },
                  },
                  mobile: {
                    screen: { width: 9, height: 23, x: 14.1, y: 4.55 },
                    stand: { width: 20, height: 20, x: 14.1, y: 5.8 },
                  },
                },
                "75inch": {
                  desktop: {
                    screen: { width: 11.6, height: 30, x: 14.4, y: 4.3 },
                    stand: { width: 28, height: 27, x: 14.4, y: 5.7 },
                  },
                  mobile: {
                    screen: { width: 9.6, height: 28, x: 14.1, y: 4.55 },
                    stand: { width: 20, height: 20, x: 14.1, y: 5.8 },
                  },
                },
                "86inch": {
                  desktop: {
                    screen: { width: 13.3, height: 35, x: 14.4, y: 4.3 },
                    stand: { width: 28, height: 27, x: 14.4, y: 5.7 },
                  },
                  mobile: {
                    screen: { width: 11.3, height: 33, x: 14.1, y: 4.55 },
                    stand: { width: 20, height: 20, x: 14.1, y: 5.8 },
                  },
                },
                "98inch": {
                  desktop: {
                    screen: { width: 15, height: 40, x: 14.4, y: 4.3 },
                    stand: { width: 28, height: 27, x: 14.4, y: 5.7 },
                  },
                  mobile: {
                    screen: { width: 13, height: 38, x: 14.1, y: 4.55 },
                    stand: { width: 20, height: 20, x: 14.1, y: 5.8 },
                  },
                },
              },
              "medium-room": {
                "65inch": {
                  desktop: {
                    screen: { width: 10, height: 17.2, x: 15.2, y: 3.9 },
                    stand: { width: 15, height: 20, x: 15.2, y: 4.95 },
                  },
                  mobile: {
                    screen: { width: 8, height: 15.2, x: 14.9, y: 4.3 },
                    stand: { width: 15, height: 15, x: 14.9, y: 5.3 },
                  },
                },
                "75inch": {
                  desktop: {
                    screen: { width: 11.6, height: 20.6, x: 15.2, y: 3.9 },
                    stand: { width: 15, height: 20, x: 15.2, y: 4.95 },
                  },
                  mobile: {
                    screen: { width: 9.6, height: 18.6, x: 14.9, y: 4.3 },
                    stand: { width: 15, height: 15, x: 14.9, y: 5.3 },
                  },
                },
                "86inch": {
                  desktop: {
                    screen: { width: 13.3, height: 24, x: 15.2, y: 3.9 },
                    stand: { width: 15, height: 20, x: 15.2, y: 4.95 },
                  },
                  mobile: {
                    screen: { width: 11.3, height: 22, x: 14.9, y: 4.3 },
                    stand: { width: 15, height: 15, x: 14.9, y: 5.3 },
                  },
                },
                "98inch": {
                  desktop: {
                    screen: { width: 15, height: 27.5, x: 15.2, y: 3.9 },
                    stand: { width: 15, height: 20, x: 15.2, y: 4.95 },
                  },
                  mobile: {
                    screen: { width: 13, height: 25.5, x: 14.9, y: 4.3 },
                    stand: { width: 15, height: 15, x: 14.9, y: 5.3 },
                  },
                },
              },
              "large-room": {
                "65inch": {
                  desktop: {
                    screen: { width: 10, height: 16.3, x: 15.5, y: 3.9 },
                    stand: { width: 13, height: 16, x: 15.5, y: 4.83 },
                  },
                  mobile: {
                    screen: { width: 8, height: 14.3, x: 15, y: 4.2 },
                    stand: { width: 11, height: 13, x: 15, y: 5.07 },
                  },
                },
                "75inch": {
                  desktop: {
                    screen: { width: 11.6, height: 19.5, x: 15.5, y: 3.9 },
                    stand: { width: 13, height: 16, x: 15.5, y: 4.83 },
                  },
                  mobile: {
                    screen: { width: 9.6, height: 17.5, x: 15, y: 4.2 },
                    stand: { width: 11, height: 13, x: 15, y: 5.07 },
                  },
                },
                "86inch": {
                  desktop: {
                    screen: { width: 13.3, height: 22.8, x: 15.5, y: 3.9 },
                    stand: { width: 13, height: 16, x: 15.5, y: 4.83 },
                  },
                  mobile: {
                    screen: { width: 11.3, height: 20, x: 15, y: 4.2 },
                    stand: { width: 11, height: 13, x: 15, y: 5.07 },
                  },
                },
                "98inch": {
                  desktop: {
                    screen: { width: 15, height: 26, x: 15.5, y: 3.9 },
                    stand: { width: 13, height: 16, x: 15.5, y: 4.83 },
                  },
                  mobile: {
                    screen: { width: 13, height: 24, x: 15, y: 4.2 },
                    stand: { width: 11, height: 13, x: 15, y: 5.07 },
                  },
                },
              },
              auditorium: {
                "65inch": {
                  desktop: {
                    screen: { width: 10, height: 13.6, x: 16, y: 3.8 },
                    stand: { width: 10, height: 13, x: 16, y: 4.5 },
                  },
                  mobile: {
                    screen: { width: 8, height: 11.6, x: 15.4, y: 4.1 },
                    stand: { width: 9, height: 11, x: 15.4, y: 4.75 },
                  },
                },
                "75inch": {
                  desktop: {
                    screen: { width: 11.6, height: 15.4, x: 16, y: 3.8 },
                    stand: { width: 10, height: 13, x: 16, y: 4.5 },
                  },
                  mobile: {
                    screen: { width: 9.6, height: 13.4, x: 15.4, y: 4.1 },
                    stand: { width: 9, height: 11, x: 15.4, y: 4.75 },
                  },
                },
                "86inch": {
                  desktop: {
                    screen: { width: 13.3, height: 17.2, x: 16, y: 3.8 },
                    stand: { width: 10, height: 13, x: 16, y: 4.5 },
                  },
                  mobile: {
                    screen: { width: 11.3, height: 15.2, x: 15.4, y: 4.1 },
                    stand: { width: 9, height: 11, x: 15.4, y: 4.75 },
                  },
                },
                "98inch": {
                  desktop: {
                    screen: { width: 15, height: 19, x: 16, y: 3.8 },
                    stand: { width: 10, height: 13, x: 16, y: 4.5 },
                  },
                  mobile: {
                    screen: { width: 13, height: 17, x: 15.4, y: 4.1 },
                    stand: { width: 9, height: 11, x: 15.4, y: 4.75 },
                  },
                },
              },
            },
          },
        },
      },
      "video-wall": {
        sizes: ["46inch", "55inch"],
        states: {
          home: "/screen/video-wall/home.png",
          incall: "/screen/video-wall/incall.png",
          share: "/screen/video-wall/share.png",
        },
        rooms: {
          "small-room": {
            "46inch": {
              desktop: { width: 15.7, height: 36.2, x: 14.6, y: 4.5 },
              mobile: { width: 13.7, height: 34.2, x: 14.3, y: 4.75 },
            },
            "55inch": {
              desktop: { width: 17.1, height: 39.8, x: 14.6, y: 4.5 },
              mobile: { width: 15.1, height: 37.8, x: 14.3, y: 4.75 },
            },
          },
          "medium-room": {
            "46inch": {
              desktop: { width: 14.3, height: 27.2, x: 15.3, y: 4 },
              mobile: { width: 12.3, height: 25.2, x: 14.9, y: 4.35 },
            },
            "55inch": {
              desktop: { width: 15.7, height: 30.8, x: 15.3, y: 4 },
              mobile: { width: 13.7, height: 28.8, x: 14.9, y: 4.35 },
            },
          },
          "large-room": {
            "46inch": {
              desktop: { width: 11.4, height: 23.5, x: 15.5, y: 3.9 },
              mobile: { width: 9.4, height: 21.5, x: 15, y: 4.25 },
            },
            "55inch": {
              desktop: { width: 11.4, height: 27.2, x: 15.5, y: 3.9 },
              mobile: { width: 9.4, height: 25.2, x: 15, y: 4.25 },
            },
          },
          auditorium: {
            "46inch": {
              desktop: { width: 11, height: 21, x: 15.9, y: 3.7 },
              mobile: { width: 9, height: 19, x: 15.4, y: 4.05 },
            },
            "55inch": {
              desktop: { width: 12, height: 24, x: 15.9, y: 3.7 },
              mobile: { width: 10, height: 22, x: 15.4, y: 4.05 },
            },
          },
        },
      },
      "led-indoor": {
        sizes: ["p1.25", "p1.53", "p1.86", "p2.5", "p3.0", "p4.0"],
        states: {
          home: "/screen/led-indoor/home.png",
          incall: "/screen/led-indoor/incall.png",
          share: "/screen/led-indoor/share.png",
        },
        rooms: {
          "small-room": {
            "p1.25": {
              desktop: { width: 21.4, height: 39.8, x: 14.6, y: 4.5 },
              mobile: { width: 19.4, height: 37.8, x: 14.3, y: 4.75 },
            },
            "p1.53": {
              desktop: { width: 21.4, height: 39.8, x: 14.6, y: 4.5 },
              mobile: { width: 19.4, height: 37.8, x: 14.3, y: 4.75 },
            },
            "p1.86": {
              desktop: { width: 21.4, height: 39.8, x: 14.6, y: 4.5 },
              mobile: { width: 19.4, height: 37.8, x: 14.3, y: 4.75 },
            },
            "p2.5": {
              desktop: { width: 21.4, height: 39.8, x: 14.6, y: 4.5 },
              mobile: { width: 19.4, height: 37.8, x: 14.3, y: 4.75 },
            },
            "p3.0": {
              desktop: { width: 21.4, height: 39.8, x: 14.6, y: 4.5 },
              mobile: { width: 19.4, height: 37.8, x: 14.3, y: 4.75 },
            },
            "p4.0": {
              desktop: { width: 21.4, height: 39.8, x: 14.6, y: 4.5 },
              mobile: { width: 19.4, height: 37.8, x: 14.3, y: 4.75 },
            },
          },
          "medium-room": {
            "p1.25": {
              desktop: { width: 15, height: 35, x: 15.4, y: 4.03 },
              mobile: { width: 13, height: 33, x: 14.9, y: 4.38 },
            },
            "p1.53": {
              desktop: { width: 15, height: 35, x: 15.4, y: 4.03 },
              mobile: { width: 13, height: 33, x: 14.9, y: 4.38 },
            },
            "p1.86": {
              desktop: { width: 15, height: 35, x: 15.4, y: 4.03 },
              mobile: { width: 13, height: 33, x: 14.9, y: 4.38 },
            },
            "p2.5": {
              desktop: { width: 15, height: 35, x: 15.4, y: 4.03 },
              mobile: { width: 13, height: 33, x: 14.9, y: 4.38 },
            },
            "p3.0": {
              desktop: { width: 15, height: 35, x: 15.4, y: 4.03 },
              mobile: { width: 13, height: 33, x: 14.9, y: 4.38 },
            },
            "p4.0": {
              desktop: { width: 15, height: 35, x: 15.4, y: 4.03 },
              mobile: { width: 13, height: 33, x: 14.9, y: 4.38 },
            },
          },
          "large-room": {
            "p1.25": {
              desktop: { width: 14.3, height: 28, x: 15.5, y: 3.95 },
              mobile: { width: 12.3, height: 26, x: 15, y: 4.3 },
            },
            "p1.53": {
              desktop: { width: 14.3, height: 28, x: 15.5, y: 3.95 },
              mobile: { width: 12.3, height: 26, x: 15, y: 4.3 },
            },
            "p1.86": {
              desktop: { width: 14.3, height: 28, x: 15.5, y: 3.95 },
              mobile: { width: 12.3, height: 26, x: 15, y: 4.3 },
            },
            "p2.5": {
              desktop: { width: 14.3, height: 28, x: 15.5, y: 3.95 },
              mobile: { width: 12.3, height: 26, x: 15, y: 4.3 },
            },
            "p3.0": {
              desktop: { width: 14.3, height: 28, x: 15.5, y: 3.95 },
              mobile: { width: 12.3, height: 26, x: 15, y: 4.3 },
            },
            "p4.0": {
              desktop: { width: 14.3, height: 28, x: 15.5, y: 3.95 },
              mobile: { width: 12.3, height: 26, x: 15, y: 4.3 },
            },
          },
          auditorium: {
            "p1.25": {
              desktop: { width: 14, height: 25, x: 16, y: 3.8 },
              mobile: { width: 12, height: 23, x: 15.4, y: 4.15 },
            },
            "p1.53": {
              desktop: { width: 14, height: 25, x: 16, y: 3.8 },
              mobile: { width: 12, height: 23, x: 15.4, y: 4.15 },
            },
            "p1.86": {
              desktop: { width: 14, height: 25, x: 16, y: 3.8 },
              mobile: { width: 12, height: 23, x: 15.4, y: 4.15 },
            },
            "p2.5": {
              desktop: { width: 14, height: 25, x: 16, y: 3.8 },
              mobile: { width: 12, height: 23, x: 15.4, y: 4.15 },
            },
            "p3.0": {
              desktop: { width: 14, height: 25, x: 16, y: 3.8 },
              mobile: { width: 12, height: 23, x: 15.4, y: 4.15 },
            },
            "p4.0": {
              desktop: { width: 14, height: 25, x: 16, y: 3.8 },
              mobile: { width: 12, height: 23, x: 15.4, y: 4.15 },
            },
          },
        },
      },
    },
    cameras: {
      "small-room": {
        "h3-p3m": {
          image: "/camera/overlay-cam.png",
          mounts: {
            "wall-mount": {
              "65inch": {
                desktop: {
                  position: { x: 14.45, y: 3.45 },
                  width: 4,
                  height: 4,
                },
                mobile: {
                  position: { x: 14.2, y: 3.8 },
                  width: 3.5,
                  height: 3.5,
                },
              },
              "75inch": {
                desktop: {
                  position: { x: 14.45, y: 3.3 },
                  width: 4,
                  height: 4,
                },
                mobile: {
                  position: { x: 14.2, y: 3.8 },
                  width: 3.5,
                  height: 3.5,
                },
              },
              "86inch": {
                desktop: {
                  position: { x: 14.45, y: 3.2 },
                  width: 4,
                  height: 4,
                },
                mobile: {
                  position: { x: 14.2, y: 3.65 },
                  width: 3.5,
                  height: 3.5,
                },
              },
              "98inch": {
                desktop: {
                  position: { x: 14.45, y: 3.05 },
                  width: 4,
                  height: 4,
                },
                mobile: {
                  position: { x: 14.2, y: 3.5 },
                  width: 3.5,
                  height: 3.5,
                },
              },
            },
            "floor-stand": {
              "65inch": {
                desktop: {
                  position: { x: 14.45, y: 3.5 },
                  width: 4,
                  height: 4,
                },
                mobile: {
                  position: { x: 14.2, y: 3.8 },
                  width: 3.5,
                  height: 3.5,
                },
              },
              "75inch": {
                desktop: {
                  position: { x: 14.45, y: 3.3 },
                  width: 4,
                  height: 4,
                },
                mobile: {
                  position: { x: 14.2, y: 3.8 },
                  width: 3.5,
                  height: 3.5,
                },
              },
              "86inch": {
                desktop: {
                  position: { x: 14.45, y: 3.2 },
                  width: 4,
                  height: 4,
                },
                mobile: {
                  position: { x: 14.2, y: 3.65 },
                  width: 3.5,
                  height: 3.5,
                },
              },
              "98inch": {
                desktop: {
                  position: { x: 14.45, y: 3.05 },
                  width: 4,
                  height: 4,
                },
                mobile: {
                  position: { x: 14.2, y: 3.5 },
                  width: 3.5,
                  height: 3.5,
                },
              },
            },
            "wheel-stand": {
              "65inch": {
                desktop: {
                  position: { x: 14.45, y: 3.5 },
                  width: 4,
                  height: 4,
                },
                mobile: {
                  position: { x: 14.2, y: 3.8 },
                  width: 3.5,
                  height: 3.5,
                },
              },
              "75inch": {
                desktop: {
                  position: { x: 14.45, y: 3.3 },
                  width: 4,
                  height: 4,
                },
                mobile: {
                  position: { x: 14.2, y: 3.8 },
                  width: 3.5,
                  height: 3.5,
                },
              },
              "86inch": {
                desktop: {
                  position: { x: 14.45, y: 3.2 },
                  width: 4,
                  height: 4,
                },
                mobile: {
                  position: { x: 14.2, y: 3.65 },
                  width: 3.5,
                  height: 3.5,
                },
              },
              "98inch": {
                desktop: {
                  position: { x: 14.45, y: 3.05 },
                  width: 4,
                  height: 4,
                },
                mobile: {
                  position: { x: 14.2, y: 3.5 },
                  width: 3.5,
                  height: 3.5,
                },
              },
            },
          },
          // Video wall & LED
          screens: {
            "46inch": {
              desktop: { position: { x: 14.6, y: 3.25 }, width: 4, height: 4 },
              mobile: {
                position: { x: 14.3, y: 3.6 },
                width: 3.5,
                height: 3.5,
              },
            },
            "55inch": {
              desktop: { position: { x: 14.6, y: 3.15 }, width: 4, height: 4 },
              mobile: {
                position: { x: 14.3, y: 3.5 },
                width: 3.5,
                height: 3.5,
              },
            },
            "p1.25": {
              desktop: { position: { x: 14.6, y: 3.25 }, width: 4, height: 4 },
              mobile: {
                position: { x: 14.3, y: 3.6 },
                width: 3.5,
                height: 3.5,
              },
            },
            "p1.53": {
              desktop: { position: { x: 14.6, y: 3.25 }, width: 4, height: 4 },
              mobile: {
                position: { x: 14.3, y: 3.6 },
                width: 3.5,
                height: 3.5,
              },
            },
            "p1.86": {
              desktop: { position: { x: 14.6, y: 3.25 }, width: 4, height: 4 },
              mobile: {
                position: { x: 14.3, y: 3.6 },
                width: 3.5,
                height: 3.5,
              },
            },
            "p2.5": {
              desktop: { position: { x: 14.6, y: 3.25 }, width: 4, height: 4 },
              mobile: {
                position: { x: 14.3, y: 3.6 },
                width: 3.5,
                height: 3.5,
              },
            },
            "p3.0": {
              desktop: { position: { x: 14.6, y: 3.25 }, width: 4, height: 4 },
              mobile: {
                position: { x: 14.3, y: 3.6 },
                width: 3.5,
                height: 3.5,
              },
            },
            "p4.0": {
              desktop: { position: { x: 14.6, y: 3.25 }, width: 4, height: 4 },
              mobile: {
                position: { x: 14.3, y: 3.6 },
                width: 3.5,
                height: 3.5,
              },
            },
          },
        },
        "no-camera": null,
      },
      "medium-room": {
        "h3-p3m": {
          image: "/camera/overlay-cam.png",
          mounts: {
            "wall-mount": {
              "65inch": {
                desktop: {
                  position: { x: 15.3, y: 3.35 },
                  width: 2.5,
                  height: 2.5,
                },
                mobile: { position: { x: 15, y: 3.85 }, width: 2, height: 2 },
              },
              "75inch": {
                desktop: {
                  position: { x: 15.3, y: 3.25 },
                  width: 2.5,
                  height: 2.5,
                },
                mobile: { position: { x: 15, y: 3.7 }, width: 2, height: 2 },
              },
              "86inch": {
                desktop: {
                  position: { x: 15.3, y: 3.13 },
                  width: 2.5,
                  height: 2.5,
                },
                mobile: { position: { x: 15, y: 3.6 }, width: 2, height: 2 },
              },
              "98inch": {
                desktop: {
                  position: { x: 15.3, y: 3.02 },
                  width: 2.5,
                  height: 2.5,
                },
                mobile: { position: { x: 15, y: 3.5 }, width: 2, height: 2 },
              },
            },
            "floor-stand": {
              "65inch": {
                desktop: {
                  position: { x: 15.3, y: 3.35 },
                  width: 2.5,
                  height: 2.5,
                },
                mobile: { position: { x: 15, y: 3.85 }, width: 2, height: 2 },
              },
              "75inch": {
                desktop: {
                  position: { x: 15.3, y: 3.25 },
                  width: 2.5,
                  height: 2.5,
                },
                mobile: { position: { x: 15, y: 3.7 }, width: 2, height: 2 },
              },
              "86inch": {
                desktop: {
                  position: { x: 15.3, y: 3.13 },
                  width: 2.5,
                  height: 2.5,
                },
                mobile: { position: { x: 15, y: 3.6 }, width: 2, height: 2 },
              },
              "98inch": {
                desktop: {
                  position: { x: 15.3, y: 3.02 },
                  width: 2.5,
                  height: 2.5,
                },
                mobile: { position: { x: 15, y: 3.5 }, width: 2, height: 2 },
              },
            },
            "wheel-stand": {
              "65inch": {
                desktop: {
                  position: { x: 15.3, y: 3.35 },
                  width: 2.5,
                  height: 2.5,
                },
                mobile: { position: { x: 15, y: 3.85 }, width: 2, height: 2 },
              },
              "75inch": {
                desktop: {
                  position: { x: 15.3, y: 3.25 },
                  width: 2.5,
                  height: 2.5,
                },
                mobile: { position: { x: 15, y: 3.7 }, width: 2, height: 2 },
              },
              "86inch": {
                desktop: {
                  position: { x: 15.3, y: 3.13 },
                  width: 2.5,
                  height: 2.5,
                },
                mobile: { position: { x: 15, y: 3.6 }, width: 2, height: 2 },
              },
              "98inch": {
                desktop: {
                  position: { x: 15.3, y: 3.02 },
                  width: 2.5,
                  height: 2.5,
                },
                mobile: { position: { x: 15, y: 3.5 }, width: 2, height: 2 },
              },
            },
          },
          screens: {
            "46inch": {
              desktop: {
                position: { x: 15.3, y: 3.1 },
                width: 2.5,
                height: 2.5,
              },
              mobile: { position: { x: 14.9, y: 3.5 }, width: 2, height: 2 },
            },
            "55inch": {
              desktop: { position: { x: 15.3, y: 2.98 }, width: 2.5, height: 2.5 },
              mobile: { position: { x: 14.9, y: 3.4  }, width: 2, height: 2 },
            },
            "p1.25": {
              desktop: { position: { x: 15.4, y: 3 }, width: 2.5, height: 2.5 },
              mobile: { position: { x: 15, y: 3.53 }, width: 2, height: 2 },
            },
            "p1.53": {
              desktop: { position: { x: 15.4, y: 3 }, width: 2.5, height: 2.5 },
              mobile: { position: { x: 15, y: 3.53 }, width: 2, height: 2 },
            },
            "p1.86": {
              desktop: { position: { x: 15.4, y: 3 }, width: 2.5, height: 2.5 },
              mobile: { position: { x: 15, y: 3.53 }, width: 2, height: 2 },
            },
            "p2.5": {
              desktop: { position: { x: 15.4, y: 3 }, width: 2.5, height: 2.5 },
              mobile: { position: { x: 15, y: 3.53 }, width: 2, height: 2 },
            },
            "p3.0": {
              desktop: { position: { x: 15.4, y: 3 }, width: 2.5, height: 2.5 },
              mobile: { position: { x: 15, y: 3.53 }, width: 2, height: 2 },
            },
            "p4.0": {
              desktop: { position: { x: 15.4, y: 3 }, width: 2.5, height: 2.5 },
              mobile: { position: { x: 15, y: 3.53 }, width: 2, height: 2 },
            },
          },
        },
        "no-camera": null,
      },
      "large-room": {
        "h3-p3m": {
          image: "/camera/overlay-cam.png",
          mounts: {
            "wall-mount": {
              "65inch": {
                desktop: {
                  position: { x: 15.6, y: 3.4 },
                  width: 2,
                  height: 2,
                },
                mobile: {
                  position: { x: 15.15, y: 3.78 },
                  width: 1.6,
                  height: 1.6,
                },
              },
              "75inch": {
                desktop: {
                  position: { x: 15.6, y: 3.28 },
                  width: 2,
                  height: 2,
                },
                mobile: {
                  position: { x: 15.15, y: 3.68 },
                  width: 1.6,
                  height: 1.6,
                },
              },
              "86inch": {
                desktop: {
                  position: { x: 15.6, y: 3.15 },
                  width: 2,
                  height: 2,
                },
                mobile: {
                  position: { x: 15.15, y: 3.6 },
                  width: 1.6,
                  height: 1.6,
                },
              },
              "98inch": {
                desktop: {
                  position: { x: 15.6, y: 3.03 },
                  width: 2,
                  height: 2,
                },
                mobile: {
                  position: { x: 15.15, y: 3.45 },
                  width: 1.6,
                  height: 1.6,
                },
              },
            },
            "floor-stand": {
              "65inch": {
                desktop: {
                  position: { x: 15.6, y: 3.4 },
                  width: 2,
                  height: 2,
                },
                mobile: {
                  position: { x: 15.15, y: 3.78 },
                  width: 1.6,
                  height: 1.6,
                },
              },
              "75inch": {
                desktop: {
                  position: { x: 15.6, y: 3.28 },
                  width: 2,
                  height: 2,
                },
                mobile: {
                  position: { x: 15.15, y: 3.68 },
                  width: 1.6,
                  height: 1.6,
                },
              },
              "86inch": {
                desktop: {
                  position: { x: 15.6, y: 3.15 },
                  width: 2,
                  height: 2,
                },
                mobile: {
                  position: { x: 15.15, y: 3.6 },
                  width: 1.6,
                  height: 1.6,
                },
              },
              "98inch": {
                desktop: {
                  position: { x: 15.6, y: 3.03 },
                  width: 2,
                  height: 2,
                },
                mobile: {
                  position: { x: 15.15, y: 3.45 },
                  width: 1.6,
                  height: 1.6,
                },
              },
            },
            "wheel-stand": {
              "65inch": {
                desktop: {
                  position: { x: 15.6, y: 3.4 },
                  width: 2,
                  height: 2,
                },
                mobile: {
                  position: { x: 15.15, y: 3.78 },
                  width: 1.6,
                  height: 1.6,
                },
              },
              "75inch": {
                desktop: {
                  position: { x: 15.6, y: 3.28 },
                  width: 2,
                  height: 2,
                },
                mobile: {
                  position: { x: 15.15, y: 3.68 },
                  width: 1.6,
                  height: 1.6,
                },
              },
              "86inch": {
                desktop: {
                  position: { x: 15.6, y: 3.15 },
                  width: 2,
                  height: 2,
                },
                mobile: {
                  position: { x: 15.15, y: 3.6 },
                  width: 1.6,
                  height: 1.6,
                },
              },
              "98inch": {
                desktop: {
                  position: { x: 15.6, y: 3.03 },
                  width: 2,
                  height: 2,
                },
                mobile: {
                  position: { x: 15.15, y: 3.45 },
                  width: 1.6,
                  height: 1.6,
                },
              },
            },
          },
          screens: {
            "46inch": {
              desktop: { position: { x: 15.5, y: 3.10 }, width: 2, height: 2 },
              mobile: { position: { x: 15, y: 3.52 }, width: 1.6, height: 1.6 },
            },
            "55inch": {
              desktop: { position: { x: 15.5, y: 3.0 }, width: 2, height: 2 },
              mobile: { position: { x: 15, y: 3.48 }, width: 1.6, height: 1.6 },
            },
            "p1.25": {
              desktop: { position: { x: 15.5, y: 3.09 }, width: 2, height: 2 },
              mobile: { position: { x: 15, y: 3.5 }, width: 1.6, height: 1.6 },
            },
            "p1.53": {
              desktop: { position: { x: 15.5, y: 3.09 }, width: 2, height: 2 },
              mobile: { position: { x: 15, y: 3.5 }, width: 1.6, height: 1.6 },
            },
            "p1.86": {
              desktop: { position: { x: 15.5, y: 3.09 }, width: 2, height: 2 },
              mobile: { position: { x: 15, y: 3.5 }, width: 1.6, height: 1.6 },
            },
            "p2.5": {
              desktop: { position: { x: 15.5, y: 3.09 }, width: 2, height: 2 },
              mobile: { position: { x: 15, y: 3.5 }, width: 1.6, height: 1.6 },
            },
            "p3.0": {
              desktop: { position: { x: 15.5, y: 3.09 }, width: 2, height: 2 },
              mobile: { position: { x: 15, y: 3.5 }, width: 1.6, height: 1.6 },
            },
            "p4.0": {
              desktop: { position: { x: 15.5, y: 3.09 }, width: 2, height: 2 },
              mobile: { position: { x: 15, y: 3.5 }, width: 1.6, height: 1.6 },
            },
          },
        },
        "no-camera": null,
      },
      auditorium: {
        "h3-p3m": {
          image: "/camera/overlay-cam.png",
          mounts: {
            "wall-mount": {
              "65inch": {
                desktop: {
                  position: { x: 16.1, y: 3.36 },
                  width: 1.5,
                  height: 1.5,
                },
                mobile: {
                  position: { x: 15.45, y: 3.72 },
                  width: 1.2,
                  height: 1.2,
                },
              },
              "75inch": {
                desktop: {
                  position: { x: 16.1, y: 3.3 },
                  width: 1.5,
                  height: 1.5,
                },
                mobile: {
                  position: { x: 15.45, y: 3.67 },
                  width: 1.2,
                  height: 1.2,
                },
              },
              "86inch": {
                desktop: {
                  position: { x: 16.1, y: 3.25 },
                  width: 1.5,
                  height: 1.5,
                },
                mobile: {
                  position: { x: 15.45, y: 3.64 },
                  width: 1.2,
                  height: 1.2,
                },
              },
              "98inch": {
                desktop: {
                  position: { x: 16.1, y: 3.2 },
                  width: 1.5,
                  height: 1.5,
                },
                mobile: {
                  position: { x: 15.45, y: 3.55 },
                  width: 1.2,
                  height: 1.2,
                },
              },
            },
            "floor-stand": {
              "65inch": {
                desktop: {
                  position: { x: 16.1, y: 3.36 },
                  width: 1.5,
                  height: 1.5,
                },
                mobile: {
                  position: { x: 15.45, y: 3.72 },
                  width: 1.2,
                  height: 1.2,
                },
              },
              "75inch": {
                desktop: {
                  position: { x: 16.1, y: 3.3 },
                  width: 1.5,
                  height: 1.5,
                },
                mobile: {
                  position: { x: 15.45, y: 3.67 },
                  width: 1.2,
                  height: 1.2,
                },
              },
              "86inch": {
                desktop: {
                  position: { x: 16.1, y: 3.25 },
                  width: 1.5,
                  height: 1.5,
                },
                mobile: {
                  position: { x: 15.45, y: 3.64 },
                  width: 1.2,
                  height: 1.2,
                },
              },
              "98inch": {
                desktop: {
                  position: { x: 16.1, y: 3.2 },
                  width: 1.5,
                  height: 1.5,
                },
                mobile: {
                  position: { x: 15.45, y: 3.55 },
                  width: 1.2,
                  height: 1.2,
                },
              },
            },
            "wheel-stand": {
              "65inch": {
                desktop: {
                  position: { x: 16.1, y: 3.36 },
                  width: 1.5,
                  height: 1.5,
                },
                mobile: {
                  position: { x: 15.45, y: 3.72 },
                  width: 1.2,
                  height: 1.2,
                },
              },
              "75inch": {
                desktop: {
                  position: { x: 16.1, y: 3.3 },
                  width: 1.5,
                  height: 1.5,
                },
                mobile: {
                  position: { x: 15.45, y: 3.67 },
                  width: 1.2,
                  height: 1.2,
                },
              },
              "86inch": {
                desktop: {
                  position: { x: 16.1, y: 3.25 },
                  width: 1.5,
                  height: 1.5,
                },
                mobile: {
                  position: { x: 15.45, y: 3.64 },
                  width: 1.2,
                  height: 1.2,
                },
              },
              "98inch": {
                desktop: {
                  position: { x: 16.1, y: 3.2 },
                  width: 1.5,
                  height: 1.5,
                },
                mobile: {
                  position: { x: 15.45, y: 3.55 },
                  width: 1.2,
                  height: 1.2,
                },
              },
            },
          },
          screens: {
            "46inch": {
              desktop: { position: { x: 15.9, y: 3 }, width: 1.5, height: 1.5 },
              mobile: {
                position: { x: 15.45, y: 3.44 },
                width: 1.2,
                height: 1.2,
              },
            },
            "55inch": {
              desktop: {
                position: { x: 15.9, y: 2.9 },
                width: 1.5,
                height: 1.5,
              },
              mobile: {
                position: { x: 15.45, y: 3.34 },
                width: 1.2,
                height: 1.2,
              },
            },
            "p1.25": {
              desktop: {
                position: { x: 16, y: 3.035 },
                width: 1.5,
                height: 1.5,
              },
              mobile: {
                position: { x: 15.45, y: 3.45 },
                width: 1.2,
                height: 1.2,
              },
            },
            "p1.53": {
              desktop: {
                position: { x: 16, y: 3.035 },
                width: 1.5,
                height: 1.5,
              },
              mobile: {
                position: { x: 15.45, y: 3.45 },
                width: 1.2,
                height: 1.2,
              },
            },
            "p1.86": {
              desktop: {
                position: { x: 16, y: 3.035 },
                width: 1.5,
                height: 1.5,
              },
              mobile: {
                position: { x: 15.45, y: 3.45 },
                width: 1.2,
                height: 1.2,
              },
            },
            "p2.5": {
              desktop: {
                position: { x: 16, y: 3.035 },
                width: 1.5,
                height: 1.5,
              },
              mobile: {
                position: { x: 15.45, y: 3.45 },
                width: 1.2,
                height: 1.2,
              },
            },
            "p3.0": {
              desktop: {
                position: { x: 16, y: 3.035 },
                width: 1.5,
                height: 1.5,
              },
              mobile: {
                position: { x: 15.45, y: 3.45 },
                width: 1.2,
                height: 1.2,
              },
            },
            "p4.0": {
              desktop: {
                position: { x: 16, y: 3.035 },
                width: 1.5,
                height: 1.5,
              },
              mobile: {
                position: { x: 15.45, y: 3.45 },
                width: 1.2,
                height: 1.2,
              },
            },
          },
        },
        "no-camera": null,
      },
    },
    quickshares: {
      "small-room": {
        "qs-l2": {
          image: "/quickshare/qs-default.png",
          desktop: { position: { x: 11.7, y: 7.4 }, width: 8, height: 8 },
          mobile: { position: { x: 11.9, y: 7.3 }, width: 6.5, height: 6.5 },
        },
        "qs-l3": {
          image: "/quickshare/qs-default.png",
          desktop: { position: { x: 11.7, y: 7.4 }, width: 8, height: 8 },
          mobile: { position: { x: 11.9, y: 7.3 }, width: 6.5, height: 6.5 },
        },
        "qs-68d": {
          image: "/quickshare/qs-default.png",
          desktop: { position: { x: 11.7, y: 7.4 }, width: 8, height: 8 },
          mobile: { position: { x: 11.9, y: 7.3 }, width: 6.5, height: 6.5 },
        },
        "qs-68e": {
          image: "/quickshare/qs-default.png",
          desktop: { position: { x: 11.7, y: 7.4 }, width: 8, height: 8 },
          mobile: { position: { x: 11.9, y: 7.3 }, width: 6.5, height: 6.5 },
        },
      },
      "medium-room": {
        "qs-l2": {
          image: "/quickshare/qs-default.png",
          desktop: { position: { x: 12.3, y: 6.8 }, width: 6.5, height: 6.5 },
          mobile: { position: { x: 12.1, y: 6.7 }, width: 5.5, height: 5.5 },
        },
        "qs-l3": {
          image: "/quickshare/qs-default.png",
          desktop: { position: { x: 12.3, y: 6.8 }, width: 6.5, height: 6.5 },
          mobile: { position: { x: 12.1, y: 6.7 }, width: 5.5, height: 5.5 },
        },
        "qs-68d": {
          image: "/quickshare/qs-default.png",
          desktop: { position: { x: 12.3, y: 6.8 }, width: 6.5, height: 6.5 },
          mobile: { position: { x: 12.1, y: 6.7 }, width: 5.5, height: 5.5 },
        },
        "qs-68e": {
          image: "/quickshare/qs-default.png",
          desktop: { position: { x: 12.3, y: 6.8 }, width: 6.5, height: 6.5 },
          mobile: { position: { x: 12.1, y: 6.7 }, width: 5.5, height: 5.5 },
        },
      },
      "large-room": {
        "qs-l2": {
          image: "/quickshare/qs-default.png",
          desktop: { position: { x: 13, y: 6.8 }, width: 5.5, height: 5.5 },
          mobile: { position: { x: 12.8, y: 6.75 }, width: 4.5, height: 4.5 },
        },
        "qs-l3": {
          image: "/quickshare/qs-default.png",
          desktop: { position: { x: 13, y: 6.8 }, width: 5.5, height: 5.5 },
          mobile: { position: { x: 12.8, y: 6.75 }, width: 4.5, height: 4.5 },
        },
        "qs-68d": {
          image: "/quickshare/qs-default.png",
          desktop: { position: { x: 13, y: 6.8 }, width: 5.5, height: 5.5 },
          mobile: { position: { x: 12.8, y: 6.75 }, width: 4.5, height: 4.5 },
        },
        "qs-68e": {
          image: "/quickshare/qs-default.png",
          desktop: { position: { x: 13, y: 6.8 }, width: 5.5, height: 5.5 },
          mobile: { position: { x: 12.8, y: 6.75 }, width: 4.5, height: 4.5 },
        },
      },
      auditorium: {
        "qs-l2": {
          image: "/quickshare/qs-default.png",
          desktop: { position: { x: 15.3, y: 5.2 }, width: 2.7, height: 2.7 },
          mobile: { position: { x: 14.85, y: 5.33 }, width: 2.2, height: 2.2 },
        },
        "qs-l3": {
          image: "/quickshare/qs-default.png",
          desktop: { position: { x: 15.3, y: 5.2 }, width: 2.7, height: 2.7 },
          mobile: { position: { x: 14.85, y: 5.33 }, width: 2.2, height: 2.2 },
        },
        "qs-68d": {
          image: "/quickshare/qs-default.png",
          desktop: { position: { x: 15.3, y: 5.2 }, width: 2.7, height: 2.7 },
          mobile: { position: { x: 14.85, y: 5.33 }, width: 2.2, height: 2.2 },
        },
        "qs-68e": {
          image: "/quickshare/qs-default.png",
          desktop: { position: { x: 15.3, y: 5.2 }, width: 2.7, height: 2.7 },
          mobile: { position: { x: 14.85, y: 5.33 }, width: 2.2, height: 2.2 },
        },
      },
    },
    speakers: {
      "small-room": {
        "audio-conference-system": {
          image: "/speaker/acs-default.png",
          desktop: { position: { x: 11.8, y: 7 }, width: 1.2, height: 1.2 },
          mobile: { position: { x: 12, y: 6.9 }, width: 1, height: 1 },
        },
        "ceiling-speaker": {
          image: "/speaker/cs-small.png",
          desktop: { position: { x: 12, y: 4.18 }, width: 53.2, height: 53.2 },
          mobile: { position: { x: 12, y: 4.5 }, width: 45, height: 45 },
        },
      },
      "medium-room": {
        "audio-conference-system": {
          image: "/speaker/acs-default.png",
          desktop: { position: { x: 12.6, y: 6.2 }, width: 1, height: 1 },
          mobile: { position: { x: 12.4, y: 6.35 }, width: 0.85, height: 0.85 },
        },
        "ceiling-speaker": {
          image: "/speaker/cs-medium.png",
          desktop: { position: { x: 12, y: 4.65 }, width: 60.5, height: 60.5 },
          mobile: { position: { x: 12, y: 4.8 }, width: 52, height: 52 },
        },
      },
      "large-room": {
        "audio-conference-system": {
          image: "/speaker/acs-default.png",
          positions: {
            roomshaped: {
              desktop: { x: 11, y: 8 },
              mobile: { x: 11.1, y: 7.7 },
            },
            rectangular: {
              desktop: { x: 12.5, y: 6.4 },
              mobile: { x: 12.3, y: 6.55 },
            },
            tapered: {
              desktop: { x: 12.5, y: 6.4 },
              mobile: { x: 12.3, y: 6.55 },
            },
          },
          desktop: { width: 0.8, height: 0.8 },
          mobile: { width: 0.65, height: 0.65 },
        },
        "ceiling-speaker": {
          image: "/speaker/cs-large.png",
          desktop: { position: { x: 12, y: 4.8 }, width: 64, height: 64 },
          mobile: { position: { x: 12, y: 4.95 }, width: 55, height: 55 },
        },
      },
      auditorium: {
        "ceiling-speaker": {
          image: "/speaker/cs-auditorium.png",
          desktop: { position: { x: 12, y: 5.03 }, width: 67.3, height: 67.3 },
          mobile: { position: { x: 12, y: 5.18 }, width: 58, height: 58 },
        },
      },
    },
  },
};

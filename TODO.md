# TODO: Fix TypeScript Errors

## ConfigurationPage.tsx

- [x] Fix roomData access: change `roomData[roomSize]` to `roomData.rooms[roomSize]`
- [x] Fix room image path: use `room.baseImage || `/room/homepage/${roomSize}.png``
- [x] Add missing dependencies to useEffect: `navigate` and `setRoomConfig`

## gridHelpers.ts

- [x] Fix CENTER object: change `X` and `Y` to `x` and `y`

## Verification

- [x] Run app to verify fixes
- [x] Check screen overlay appears
- [x] Ensure no TypeScript errors

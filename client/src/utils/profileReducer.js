export default function profileReducer(state, action) {
  switch (action.type) {
    case "EMPTY":
      return [];
    case "SAVE":
      return [];
    default:
      throw new Error("Unhandled Action " + action.type);
  }
}

// whatever we return from the reducer becomes the new state

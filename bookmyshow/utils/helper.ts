import { v4 as uuid } from "uuid";

function generateUUID() {
  return uuid();
}

export { generateUUID };

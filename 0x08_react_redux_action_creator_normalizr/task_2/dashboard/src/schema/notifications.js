import { normalize, schema } from "normalizr";
import * as notificationsData from "../../notifications.json";

// Define entities
const user = new schema.Entity("users");

const message = new schema.Entity("messages", {}, { idAttribute: "guid" });

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

// Normalize the notifications data
const notificationsArray = notificationsData.default || notificationsData;
export const normalizedData = normalize(notificationsArray, [notification]);

export function getAllNotificationsByUser(userId) {
  const { notifications, messages } = normalizedData.entities;
  const contextList = [];

  for (const id in notifications) {
    if (notifications[id].author === userId) {
      contextList.push(messages[notifications[id].context]);
    }
  }

  return contextList;
}

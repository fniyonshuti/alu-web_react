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
  const notifications = notificationsData.default || notificationsData;

  return notifications
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}

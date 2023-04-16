export function getImageId(image: Record<string, any>) {
  return `${image.user_id}-${image.id}`;
}

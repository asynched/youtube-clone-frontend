/**
 * @param {string} thumbnail
 */
export const getThumbnailURL = thumbnail => {
  return `${import.meta.env.VITE_APP_BACKEND_URL}/static/${thumbnail}`
}

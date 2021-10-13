/**
 * @typedef VideoType
 *
 * @property { string } _id
 * @property { string } thumbnail
 * @property { string } title
 * @property { string } channel
 * @property { string } createdAt
 * @property { number } views
 */

/**
 * @template T Initiator return type
 * @template S Dependencies array type
 *
 * @typedef UseMountedFetchHandlerType
 *
 * @property {() => Promise<T>} initiator
 * @property {(data: T) => void} handler
 * @property {Array<S>} dependencies
 */
